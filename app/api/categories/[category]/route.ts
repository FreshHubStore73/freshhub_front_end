import Dish from '../../../../utils/models/Dish';
import connect from '../../../../utils/db';
import { NextResponse } from 'next/server';
import type { DishItem } from '../../../../components/dishcard/DishCard';

export const GET = async (req: Request) => {
    const { pathname, searchParams } = new URL(req.url);
    const category = pathname.split('/')[3];
    const sortType = searchParams?.get('sort');
    try {
        await connect();
        let dishes: DishItem[] = await Dish.find();
        dishes = dishes.filter((dish) => dish.category === category);
        if (sortType) {
            sortType === 'asc'
                ? dishes.sort((a, b) => a.price - b.price)
                : dishes.sort((a, b) => b.price - a.price);
        }
        return NextResponse.json(dishes);
    } catch (error) {
        return new NextResponse('Error in response of DB', {
            status: 500,
        });
    }
};
