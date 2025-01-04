import { NextResponse } from 'next/server';

import connect from '@/utils/db';
import User from '@/utils/models/User';
import { UserDB } from '@/types/auth';
import { auth } from '@/actions/auth';

export const PUT = async (req: Request) => {
    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();

    const session = await auth();

    if ((session?.user.userId !== id && session?.user.role !== 'superadmin') || !session?.user)
        return new NextResponse('Unauthenticated user', {
            status: 401,
        });

    const newUser = await req.json();

    try {
        await connect();
        const res = (await User.findOneAndUpdate(
            { userId: id },
            {
                name: newUser.name,
                lastName: newUser.lastName,
                phoneNumber: newUser.phoneNumber,
            },
            { new: true },
        ).exec()) as UserDB | null;
        return NextResponse.json(res);
    } catch (error) {
        return new NextResponse((error as Error).message, {
            status: 500,
        });
    }
};
