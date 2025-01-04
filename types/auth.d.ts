import NextAuth, { User, JWT } from 'next-auth';
import { ObjectId } from 'mongoose';

declare module 'next-auth' {
    interface User extends Omit<UserDB, 'password'> {}

    interface Session {
        user: User;
    }
}

interface SignInFormState {
    message: string;
    user: User | null;
}

interface BaseUserDB {
    role: 'admin' | 'user' | 'superadmin';
    userId: string;
}

interface BaseUserByGoogle {
    id: string;
    name: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
}

interface BaseUserByCredentials {
    name: string;
    lastName: string | null;
    phoneNumber: string | null;
    password: string | null;
}

interface UserDB extends BaseUserDB, BaseUserByGoogle, BaseUserByCredentials {}
