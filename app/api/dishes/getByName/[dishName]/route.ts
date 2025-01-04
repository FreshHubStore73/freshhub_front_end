import Dish from '@/utils/models/Dish';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
    const { pathname } = new URL(req.url);
    const productName = pathname.split('/').pop();

    const safeProductName = productName!.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(safeProductName, 'ig');

    try {
        await connect();
        const dishes = await Dish.find({
            productName: regex,
        });
        return NextResponse.json(dishes);
    } catch (error) {
        return new NextResponse('Error in DB response', {
            status: 500,
        });
    }
};
