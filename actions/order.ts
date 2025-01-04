'use server';

import { cookies } from 'next/headers';
import { auth } from './auth';
import { revalidatePath, revalidateTag } from 'next/cache';

const url = process.env.SERV_URL;

export async function orderAction(
    prevState: {
        message: string;
    },
    formData: FormData,
) {
    const session = await auth();

    if (!session?.user)
        return {
            message: 'Unauthenticated user',
        };
    console.log(Object.fromEntries(formData));
    const [day, month, year] =
        (formData.get('delivery_date') as string)?.split('.').map(Number) || '';
    const [hours, minutes] =
        (formData.get('delivery_time') as string)?.split(':').map(Number) || '';

    const deliveryTime = [day, month, year, hours, minutes].some((v) => !v)
        ? null
        : new Date(year, month - 1, day, hours, minutes).toISOString();

    const orderedDishes = Array.from(formData)
        .filter(([name]) => name.startsWith('dishId_'))
        .reduce<OrderedDish[]>((dishes, _, index) => {
            const dishId = formData.get(`dishId_${index}`) as string;
            const productName = formData.get(`productName_${index}`) as string;
            const quantity = +formData.get(`quantity_${index}`)!;
            const price = +formData.get(`price_${index}`)!;
            const photoUrl = formData.get(`photoUrl_${index}`) as OrderedDish['photoUrl'];

            return [
                ...dishes,
                {
                    dishId,
                    productName,
                    quantity,
                    price,
                    photoUrl,
                },
            ];
        }, []);

    const totalAmount = orderedDishes.reduce((total: number, dish: OrderedDish) => {
        total += dish.price * dish.quantity;
        return total;
    }, 0);

    let order: OrderItem = {
        userId: session.user.userId,
        deliveryTime,
        recipient: formData.get('recipient') as OrderItem['recipient'],
        phoneNumber: (formData.get('phoneNumber') as string).replace(
            /\s+/g,
            '',
        ) as OrderItem['phoneNumber'],
        comment: (formData.get('comment') as OrderItem['comment']) || null,
        numberOfPersons: Number(formData.get('numberOfPersons')),
        call: formData.get('call') === 'on' ? true : false,
        paymentType: formData.get('payment') as OrderItem['paymentType'],
        totalAmount,
        paymentStatus: false,
        orderStatus: 'In progress',
        deliveryAddress:
            formData.get('streetHouse') +
            ', flat: ' +
            formData.get('flat') +
            ', floor: ' +
            formData.get('floor'),
        items: orderedDishes,
    };

    if (order.paymentType === 'cash') {
        order.cashSum = Number(formData.get('cashSum')) || 0;
    }

    const orderedDishesJson = JSON.stringify(order);

    const cookieHeader = cookies().toString();

    try {
        const res = await fetch(`${url}/api/orders/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Cookie: cookieHeader,
            },
            body: orderedDishesJson,
        });

        if (+res.status >= 400) {
            const resError = await res.text();

            console.error('Error while placing your order:', resError);
            return { message: 'Error while placing your order' };
        }
        revalidateTag('orders');
        revalidatePath('/profile?history=true');
        return {
            message: 'Ok',
        };
    } catch (error) {
        return {
            message: `Error! Failed to place order: ${JSON.stringify((error as Error).message)}`,
        };
    }
}

export async function getOrderHistory(userId: string): Promise<ActionsResponse<OrderItemDB[]>> {
    const session = await auth();

    if (!session?.user)
        return {
            success: false,
            error: 'Unauthenticated user',
        };
    const cookieHeader = cookies().toString();

    try {
        const res = await fetch(`${url}/api/orders/getAllByUserId/${userId}?short=true`, {
            headers: {
                Cookie: cookieHeader,
            },
            next: {
                tags: ['orders'],
            },
        });
        if (+res.status >= 400) {
            const resError = await res.text();
            console.error('Failed to get orders history: ', resError);
            return { success: false, error: 'Failed to get orders history' };
        }
        const orders: OrderItemDB[] = await res.json();
        return { success: true, data: orders };
    } catch (err) {
        console.error('Failed to get orders history. ', (err as Error).message);
        return { success: false, error: 'An unexpected error occurred. Please try again later' };
    }
}
