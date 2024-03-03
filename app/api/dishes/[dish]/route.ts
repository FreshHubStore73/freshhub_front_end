import Dish from '../../../../utils/models/Dish';
import connect from '../../../../utils/db';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();
    try {
        await connect();
        const dish: DishItem | null = await Dish.findById(id);
        return NextResponse.json(dish);
        // return new NextResponse(JSON.stringify(dishes), { status: 200 });
    } catch (error) {
        return new NextResponse('Error in response of DB', {
            status: 500,
        });
    }
};
