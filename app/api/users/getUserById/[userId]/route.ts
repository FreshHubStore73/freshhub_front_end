import connect from '@/utils/db';
import { NextResponse } from 'next/server';

import User from '@/utils/models/User';
import { auth } from '@/actions/auth';
import { UserDB } from '@/types/auth';

export const GET = async (req: Request) => {
    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();

    const session = await auth();

    if ((session?.user.userId !== id && session?.user.role !== 'superadmin') || !session?.user)
        return new NextResponse('Unauthenticated user', {
            status: 401,
        });

    try {
        await connect();

        const user = (await User.findOne(
            { userId: id },
            '-__v -_id -updatedAt -createdAt',
        ).exec()) as UserDB | null;

        return NextResponse.json(user);
    } catch (error) {
        return new NextResponse('Error in response of DB', {
            status: 500,
        });
    }
};
