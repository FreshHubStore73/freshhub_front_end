import { NextResponse } from 'next/server';

import Dish from '@/utils/models/Dish';
import connect from '@/utils/db';

export const GET = async (req: Request) => {
    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();

    try {
        await connect();
        const dish = await Dish.findById(id).exec();
        return NextResponse.json(dish);
    } catch (error) {
        return new NextResponse('Error in response of DB', {
            status: 500,
        });
    }
};
