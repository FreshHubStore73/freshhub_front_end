import Category from '@/utils/models/Category';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
    try {
        await connect();
        const categories: CategoryItem[] = await Category.find({});
        return NextResponse.json(categories);
    } catch (error) {
        return new NextResponse('Error in DB response', {
            status: 500,
        });
    }
};
