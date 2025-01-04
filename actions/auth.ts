'use server';
import { getServerSession, User } from 'next-auth';
import { cookies } from 'next/headers';
import { revalidatePath, revalidateTag } from 'next/cache';

const url = process.env.SERV_URL;

import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import { BaseUserByGoogle, UserDB } from '@/types/auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function auth(
    ...args:
        | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
        | [NextApiRequest, NextApiResponse]
        | []
) {
    return getServerSession(...args, authOptions);
}

export async function register(prevState: { message: string } | undefined, formData: FormData) {
    const { password, phoneNumber, name, lastName } = Object.fromEntries(
        formData,
    ) as unknown as UserSignUp;

    //Fields validation on NextJS server
    // if (!firstName || !lastName) return { message: 'First name or Last name is required' };
    // if (!password || !phoneNumber) return { message: 'Missing phone or password' };
    // if (password.length < 8) return { message: 'Password must contain at least 8 characters' };
    // if (password.length > 15)
    //     return { message: "Password shouldn't contain more than 15 characters" };
    // const phone = phoneNumber.replace(/[^+0-9]/g, '');
    // if (phone.length < 12) return { message: 'The number must contain 11 digits' };

    try {
        const res = await fetch(`${url}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                lastName,
                phoneNumber: phoneNumber.replace(/[^+0-9]/g, ''),
                password,
            }),
        });

        if (!res.ok) {
            {
                const error = await res.text();
                console.error('Error register user:', error);

                const message =
                    error.includes('E11000') && error.includes('phoneNumber')
                        ? 'User already exists! Try another phone number'
                        : 'An unexpected error occurred. Please try again later';
                throw new Error(message);
            }
        }
        return { message: 'Ok' };
    } catch (err) {
        return { message: `Failed to create user. ${(err as Error).message}` };
    }
}

export async function getUser(id: string): Promise<ActionsResponse<UserDB>> {
    const cookieHeader = cookies().toString();

    try {
        const res = await fetch(`${url}/api/users/getUserById/${id}`, {
            headers: {
                Cookie: cookieHeader,
            },
            next: {
                tags: ['user'],
            },
        });
        if (+res.status >= 400) {
            const resError = await res.text();
            console.error('Failed to get user: ', resError);
            return { success: false, error: 'Failed to get user' };
        }
        const user: UserDB = await res.json();
        return { success: true, data: user };
    } catch (err) {
        console.error('Failed to get user. ', (err as Error).message);
        return { success: false, error: 'An unexpected error occurred. Please try again later' };
    }
}

export async function registerUserByGoogle(
    userData: BaseUserByGoogle,
): Promise<ActionsResponse<User>> {
    try {
        const res = await fetch(`${url}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (+res.status >= 400) {
            const resError = await res.text();
            console.error('Error registering user by Google:', resError);
            return { success: false, error: 'Error registering user by Google' };
        }
        const user: User = await res.json();
        return { success: true, data: user };
    } catch (err) {
        console.error('Error registering user by Google:', (err as Error).message);
        return { success: false, error: 'An unexpected error occurred. Please try again later' };
    }
}

export async function updateUserInfo(
    prevState: {
        message: string;
        data: {
            name: string;
            lastName: string;
            phoneNumber: string;
        } | null;
    },
    formData: FormData,
) {
    const updatedUser = {
        name: formData.get('name') as string,
        lastName: formData.get('lastName') as string,
        phoneNumber: (formData.get('phoneNumber') as string).replace(/[^+0-9]/g, ''),
    };
    const session = await auth();

    if (!session?.user)
        return {
            message: 'Unauthenticated user',
            data: null,
        };

    const cookieHeader = cookies().toString();

    const res = await fetch(`${url}/api/users/update/${session.user.userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookieHeader,
        },
        body: JSON.stringify(updatedUser),
    });

    if (res.status >= 400) {
        const str = await res.text();
        console.log(str);
        const message =
            str.includes('E11000') && str.includes('phoneNumber')
                ? 'User already exists! Try another phone number'
                : 'Failed to change user data. Error in response of DB';
        return { message, data: null };
    }

    revalidateTag('user');
    revalidatePath('/profile');
    const user = await res.json();
    return {
        message: 'Ok',
        data: {
            name: user.name,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
        },
    };
}
