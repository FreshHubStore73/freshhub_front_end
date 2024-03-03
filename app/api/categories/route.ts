import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
    try {
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
