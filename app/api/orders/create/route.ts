import { NextResponse } from 'next/server';

import connect from '@/utils/db';
import Order from '@/utils/models/Order';
import { auth } from '@/actions/auth';

export const POST = async (req: Request) => {
    const newOrderData = (await req.json()) as OrderItem;
    const session = await auth();

    if (session?.user.userId !== newOrderData.userId || !session?.user)
        return new NextResponse('Unauthenticated user', {
            status: 401,
        });

    try {
        await connect();

        const newOrder = new Order(newOrderData);
        const res = await newOrder.save();

        return NextResponse.json(res, {
            status: 201,
        });
    } catch (error) {
        console.log((error as Error).message);
        return new NextResponse('Error when creating order in DB', {
            status: 500,
        });
    }
};
