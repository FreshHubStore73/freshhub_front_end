import Dish from '@/utils/models/Dish';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';
import Category from '@/utils/models/Category';

export const GET = async (req: Request) => {
    const { pathname } = new URL(req.url);

    const category = pathname.split('/').pop();

    try {
        await connect();
        const categoryData = await Category.find({ path: category }).exec();
        const categoryId = categoryData[0]._id;

        let dishes = await Dish.find({ categoryId }).exec();

        return NextResponse.json(dishes);
    } catch (error) {
        return new NextResponse('Error in DB response', {
            status: 500,
        });
    }
};
