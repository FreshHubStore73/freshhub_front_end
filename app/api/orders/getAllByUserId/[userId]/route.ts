import connect from '@/utils/db';
import { NextResponse } from 'next/server';

import Order from '@/utils/models/Order';
import { auth } from '@/actions/auth';

export const GET = async (req: Request) => {
    const { pathname, searchParams } = new URL(req.url);
    const id = pathname.split('/').pop();

    const session = await auth();

    if ((session?.user.userId !== id && session?.user.role !== 'superadmin') || !session?.user)
        return new NextResponse('Unauthenticated user', {
            status: 401,
        });

    try {
        await connect();

        const orders = (await Order.find(
            { userId: id },
            '-__v -_id -updatedAt',
        ).exec()) as OrderItemDB[];

        return NextResponse.json(orders);
    } catch (error) {
        return new NextResponse('Error in response of DB', {
            status: 500,
        });
    }
};
