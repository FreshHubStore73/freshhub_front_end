'use server';

import connect from './db';
import User from '@/utils/models/User';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { Error as MongooseError } from 'mongoose';
const { ValidationError } = MongooseError;
// import { serialize } from 'cookie';
import { cookies } from 'next/headers';

const url = process.env.SERV_URL;
const MAX_AGE = 60 * 60 * 24 * 5 - 600;

interface IUser {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
}

interface Credentials {
    phoneNumber: string;
    password: string;
}

export async function register(
    prevState: {
        message: string;
    },
    formData: FormData,
) {
    const { password, phoneNumber, firstName, lastName } = Object.fromEntries(
        formData,
    ) as unknown as IUser;

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
        return { message: 'User has been created' };
    } catch (e: any) {
        if (e instanceof ValidationError) {
            // Обработка ошибки валидации Mongoose
            const errors = Object.values(e.errors).map((error) => error.message);
            return { message: `Validation Error: ${errors.join(', ')}` };
        } else if (e.code === 11000) {
            // Обработка ошибки дублирования ключа MongoDB (например, уникальный индекс)
            return { message: 'This phone number has been registered yet' };
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

export async function login(
    prevState: {
        message?: string;
        success?: boolean;
    },
    formData: FormData,
) {
    const { password, phoneNumber }: Credentials = Object.fromEntries(
        formData,
    ) as unknown as Credentials;
    if (!password || !phoneNumber) return { message: 'Missing phone or password' };
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
    //         return { message: "The user with this phone isn't registered" };
    //     }
    // } catch (error) {
    //     return { message: 'Something went wrong' };
    // }

    //Getting user

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
            token: 'string',
            phoneNumber,
        };

        cookies().set(
            'user_session',
            // {
            //     token: data.token,
            //     name: 'Homer Simpson',
            //     phoneNumber: data.phoneNumber
            // },
            data.token,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: MAX_AGE,
                path: '/',
            },
        );
        // return { success: true };

        return {
            message: 'Ok. Now you will be redirected to Home page',
            userName: '',
            phoneNumber: '',
        };
    } catch (error) {
        if (error instanceof Error) return { message: error.message };
        return { message: '' };
    } finally {
        redirect('/');
    }
}
