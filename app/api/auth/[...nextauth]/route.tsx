import NextAuth, { NextAuthOptions, User as NextAuthUserType } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import connect from '@/utils/db';
import User from '@/utils/models/User';
import { UserDB } from "@/types/auth";
import { registerUserByGoogle } from "@/actions/auth";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phoneNumber: { label: "Phone number", type: "phone", placeholder: "Phone number" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                if (!credentials?.phoneNumber || !credentials.password) return null;

                try {
                    await connect();
                    const user = (await User.findOne({ phoneNumber: credentials.phoneNumber }).lean()) as UserDB | null;

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password!
                        );

                        if (isPasswordCorrect) {
                            const { password, ...rest } = user;
                            return rest;
                        } else {
                            return null;
                        }
                    } else {
                        return null;
                    }
                } catch (error) {
                    throw new Error("Something went wrong!");
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token, user, account, trigger, session }) {
            if (trigger === "update") {
                if (session?.name) token.name = session.name;
                if (session?.lastName) token.lastName = session.lastName;
                if (session?.phoneNumber) token.phoneNumber = session.phoneNumber;
                return token;
            }
            //логика для регистрации нового юзера, авторизовавшегося через google
            if (account?.provider === "google" && user) {
                let existingUser: NextAuthUserType | null = null;
                try {
                    await connect();
                    existingUser = await User.findOne({ email: user.email });
                    if (!existingUser) {
                        const responseData = await registerUserByGoogle({
                            email: user.email,
                            name: user.name,
                            image: user.image,
                            id: user.id,
                        })
                        if (responseData.error) {
                            throw new Error(responseData.error);
                        }
                        existingUser = responseData.data as NextAuthUserType;
                    }
                    token.userId = existingUser.userId;
                    token.picture = existingUser.image;
                    token.lastName = existingUser.lastName;
                    token.phoneNumber = existingUser.phoneNumber;
                    token.role = existingUser.role;
                } catch (error) {
                    console.error('Error checking user registration, ', error);
                }
            } else if (user) {
                token.userId = user.userId;
                token.picture = user.image;
                token.lastName = user.lastName;
                token.phoneNumber = user.phoneNumber;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token, user }) {
            session.user.userId = token.sub || token.userId as UserDB['id'];
            session.user.lastName = token.lastName as UserDB['lastName'];
            session.user.phoneNumber = token.phoneNumber as UserDB['phoneNumber'];
            session.user.role = token.role as UserDB['role'];
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }