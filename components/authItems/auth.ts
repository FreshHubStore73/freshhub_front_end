'use server';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

import { Error as MongooseError } from 'mongoose';
const { ValidationError } = MongooseError;

import connect from '../../utils/db';
import User from '@/utils/models/User';

const url = process.env.SERV_URL;
const MAX_AGE = 60 * 60 * 24 * 5 - 600;

export interface Credentials {
    phoneNumber: string;
    password: string;
}

export interface IUserRegister extends Credentials {
    firstName: string;
    lastName: string;
}

export interface IUserAuthorized {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    history: any[];
    userRole: 'admin' | 'user';
}
export interface IUserResponse {
    user: IUserAuthorized | null;
    error: string | null;
}
export interface IFormState {
    message: string | { phoneNumber: string };
    user: IUserAuthorized | null;
}

export async function register(
    prevState: {
        message:
            | string
            | {
                  phoneNumber: string;
              };
    },
    formData: FormData,
) {
    const { password, phoneNumber, firstName, lastName } = Object.fromEntries(
        formData,
    ) as unknown as IUserRegister;

    //Fields validation
    if (!firstName || !lastName) return { message: 'First name or Last name is required' };
    if (!password || !phoneNumber) return { message: 'Missing phone or password' };
    if (password.length < 8) return { message: 'Minimum password length - 8 characters' };
    const phone = phoneNumber.replace(/[^+0-9]/g, '');
    if (phone.length < 12) return { message: 'Minimum phone length: +1 and 10 digits' };

    //Logic for MongoDB
    await connect();
    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
        firstName,
        lastName,
        phoneNumber: phone,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return { message: 'Ok' };
    } catch (e: any) {
        if (e instanceof ValidationError) {
            // Обработка ошибки валидации Mongoose
            const errors = Object.values(e.errors).map((error) => error.message);
            return { message: `Validation Error: ${errors.join(', ')}` };
        } else if (e.code === 11000) {
            // Обработка ошибки дублирования ключа MongoDB (например, уникальный индекс)
            return {
                message: {
                    phoneNumber: 'This phone number has been registered yet',
                },
            };
        } else {
            // Обработка других ошибок
            return { message: 'Something went wrong' };
        }
    }

    //Logic for Yurij
    // try {

    //     const res = await fetch(`${url}/api/User/Register`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             firstName: otherCredentials.firstName,
    //             lastName: otherCredentials.lastName,
    //             phoneNumber: otherCredentials.phoneNumber,
    //             password,
    //         }),
    //     });
    //     if (!res.ok) throw new Error(`Something went wrong. Reason: ${res.statusText}`);
    //     res.status === 200 && redirect('/login');
    //     return { message: '' };
    // } catch (err) {
    //     console.log(err);
    //     const error = err as Error;
    //     return { message: `Failed to create user. ${error.message}` };
    // }
}

export async function login(prevState: IFormState | undefined, formData: FormData) {
    const { password, phoneNumber } = Object.fromEntries(formData) as unknown as Credentials;
    if (!password || !phoneNumber) return { message: 'Missing phone or password', user: null };
    const phone = phoneNumber.replace(/[^+0-9]/g, '');

    //Logic for MongoDB.
    // Credentials check
    // await connect();
    // try {
    //     const user = await User.findOne({ phoneNumber: phone });
    //     if (user) {
    //         const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password!);
    //         if (isPasswordCorrect) {
    //             // redirect('/pizza');
    //             return { message: 'Ok. Now you will be redirected to Home page' };
    //         } else {
    //             return { message: 'Password is wrong' };
    //         }
    //     } else {
    //         return { message: "The user with this phone isn't registered", user: null };
    //     }
    // } catch (error) {
    //     return { message: 'Something went wrong' };
    // }

    //Logic for Yurij.
    //Credentials check
    try {
        // const res = await fetch(`${url}/api/User/Login`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         phoneNumber: phone,
        //         password,
        //     }),
        // });
        // if (!res.ok) throw new Error('Error in DB');

        //Getting user

        // const data: {
        //     token: string;
        //     phoneNumber: string;
        // } = await res.json();

        //Fake data until Yurij code is in development

        const data = {
            token: `string_token_for_${phoneNumber}`,
            phoneNumber,
        };

        cookies().set('user_session', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: MAX_AGE,
            path: '/',
        });
        const res = await getUser(data.token);

        return {
            message: 'Ok. Now you will be redirected',
            user: res.user!,
        };
    } catch (error) {
        if (error instanceof Error) return { message: error.message, user: null };
    }
}

export async function logout() {
    // Destroy the session
    cookies().set('user_session', '', { expires: new Date(0) });
    redirect('/', 'replace' as RedirectType);
}

export async function getUser(t?: string) {
    var token = t || cookies().get('user_session')?.value;

    if (!token) {
        return {
            user: null,
            error: 'Unauthorized',
        };
    }

    //Logic for Yurij
    // const res = await fetch(`${url}/api/User/GetInfoAboutUser`, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // });
    // if (!res.ok) {
    //     return {
    //         user: null,
    //         error: `Failed to fetch user: ${res.statusText}`,
    //     };
    // }
    // const body = await res.json();

    //Tmp logic

    const body = await new Promise<IUserAuthorized>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    firstName: 'Homer',
                    lastName: 'Simpson',
                    phoneNumber: '+12345678912',
                    history: [],
                    userRole: 'user',
                }),
            1000,
        ),
    );

    const user = {
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNumber: body.phoneNumber,
        history: body.history,
        userRole: body.userRole,
    };

    return {
        user,
        error: null,
    };
}
