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

export interface IUserCredentials {
    phoneNumber: string;
    password: string;
}

export interface IUserSignUp extends IUserCredentials {
    firstName: string;
    lastName: string;
}

export interface IUserInfo {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    // history: any[];
    // userRole: 'admin' | 'user';
}
export interface IUserResponse {
    user: IUserInfo | null;
    error: string | null;
}
export interface ISignInFormState {
    message: string;
    user: IUserInfo | null;
}

export async function register(
    prevState:
        | {
              message: string;
          }
        | undefined,
    formData: FormData,
) {
    const { password, phoneNumber, firstName, lastName } = Object.fromEntries(
        formData,
    ) as unknown as IUserSignUp;

    //Fields validation on NextJS server
    // if (!firstName || !lastName) return { message: 'First name or Last name is required' };
    // if (!password || !phoneNumber) return { message: 'Missing phone or password' };
    // if (password.length < 8) return { message: 'Password must contain at least 8 characters' };
    // if (password.length > 15)
    //     return { message: "Password shouldn't contain more than 15 characters" };
    // const phone = phoneNumber.replace(/[^+0-9]/g, '');
    // if (phone.length < 12) return { message: 'The number must contain 11 digits' };

    //Logic for MongoDB
    // await connect();
    // const hashedPassword = await bcrypt.hash(password, 5);

    // const newUser = new User({
    //     firstName,
    //     lastName,
    //     phoneNumber: phone,
    //     password: hashedPassword,
    // });

    // try {
    //     await newUser.save();
    //     return { message: 'Ok' };
    // } catch (e: any) {
    //     if (e instanceof ValidationError) {
    //         // Обработка ошибки валидации Mongoose
    //         const errors = Object.values(e.errors).map((error) => error.message);
    //         return { message: `Validation Error: ${errors.join(', ')}` };
    //     } else if (e.code === 11000) {
    //         // Обработка ошибки дублирования ключа MongoDB (например, уникальный индекс)
    //         return {
    //             message: {
    //                 phoneNumber: 'This phone number has been registered yet',
    //             },
    //         };
    //     } else {
    //         // Обработка других ошибок
    //         return { message: 'Something went wrong' };
    //     }
    // }

    //Logic for Yurij
    try {
        const res = await fetch(`${url}/api/User/Register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                phoneNumber: phoneNumber.replace(/[^+0-9]/g, ''),
                password,
            }),
        });
        if (!res.ok) {
            {
                const resError = await res.json();
                const error = Array.isArray(resError)
                    ? resError.map((i: any) => i.description).join(', ')
                    : resError.message;
                throw new Error(`Something went wrong: ${error}`);
            }
        }
        // res.status === 200 && redirect('/login');
        return { message: 'Ok' };
    } catch (err) {
        const error = err as Error;
        return { message: `Failed to create user. ${error.message}` };
    }
}

export async function login(prevState: ISignInFormState | undefined, formData: FormData) {
    const { password, phoneNumber } = Object.fromEntries(formData) as unknown as IUserCredentials;
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

    //we get token
    try {
        const resToken = await fetch(`${url}/api/User/Login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: phone,
                password,
            }),
        });
        if (!resToken.ok) {
            if (resToken.status === 401) {
                throw new Error('Error in credentials! ' + (await resToken.text()));
            } else if (resToken.status === 400) {
                const errorBody = await resToken.json();
                throw new Error('Error in credentials!' + errorBody.message);
            }
        }

        const data: {
            token: string;
            phoneNumber: string;
        } = await resToken.json();

        //add token to session
        cookies().set('user_session', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: MAX_AGE,
            path: '/',
        });

        // we get user
        const resUser = await getUser(data.token);

        if (resUser.error) {
            return {
                message: resUser.error,
                user: null,
            };
        }
        return {
            message: 'Ok',
            user: resUser.user,
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
            error: 'Error when receiving token',
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

    // Tmp logic
    const body = await new Promise<IUserInfo>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    firstName: 'Homer',
                    lastName: 'Simpson',
                    phoneNumber: '+12345678912',
                    // history: [],
                    // userRole: 'user',
                }),
            1000,
        ),
    );

    const user = {
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNumber: body.phoneNumber,
        // history: body.history,
        // userRole: body.userRole,
    };

    return {
        user,
        error: null,
    };
}
