'use server';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';

const url = process.env.SERV_URL;
const MAX_AGE = 60 * 60 * 24 * 5 - 600;

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
    // next: {
    //     tags: ['user'];
    // }
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
