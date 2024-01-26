import Category from '../../../utils/models/Category';
import connect from '../../../utils/db';
import { NextResponse } from 'next/server';
import type { CategoryItem } from '../../../components/NavBar/NavBar';

export const GET = async (req: Request) => {
    try {
        // await connect();
        // const categories: CategoryItem[] = await Category.find();
        const url = process.env.SERV_URL;
        const data: any = await fetch(`${url}/api/Category/GetAll`);
        const categories = await data.json();
        return NextResponse.json(categories);
    } catch (error) {
        return new NextResponse('Error in response of DB', {
            status: 500,
        });
    }
};
