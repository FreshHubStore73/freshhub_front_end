'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

const url = process.env.SERV_URL;
export async function orderAction(
    prevState: {
        message: string;
    },
    formData: FormData,
) {
    let order: IOrder = {
        deliveryTime: '',
        recipient: formData.get('recipient') as string,
        phoneNumber: (formData.get('phoneNumber') as string).replace(/\s+/g, ''),
        comment: formData.get('comment') as string,
        numberPerson: formData.get('numberPerson') as unknown as number,
        call: (formData.get('call') as string) === 'on' ? true : false,
        payment: formData.get('payment') as string,
        cashSum: formData.get('cashSum') as unknown as number,
        paymentStatus: false,
        streetHouse: formData.get('streetHouse') as string,
        flat: formData.get('flat') as string,
        floor: formData.get('floor') as string,
        items: [],
    };

    // const [day, month, year] = (formData.get('delivery_date') as string).split('.').map(Number);
    // const [hours, minutes] = (formData.get('delivery_time') as string).split(':').map(Number);

    // order.deliveryTime = new Date(year, month - 1, day, hours, minutes).toISOString();

    const [day, month, year] =
        (formData.get('delivery_date') as string)?.split('.').map(Number) || '';
    const [hours, minutes] =
        (formData.get('delivery_time') as string)?.split(':').map(Number) || '';

    order.deliveryTime = [day, month, year, hours, minutes].some((v) => !v)
        ? null
        : new Date(year, month - 1, day, hours, minutes).toISOString();

    const orderedDishes: IOrderedDish[] = [];

    for (const [name, value] of formData.entries()) {
        if (name.startsWith('name_')) {
            const index = parseInt(name.split('_')[1]);
            const dish: IOrderedDish = {
                productId: value.toString(),
                quantity: formData.get(`quantity_${index}`) as unknown as number,
                price: formData.get(`price_${index}`) as unknown as number,
            };
            orderedDishes.push(dish);
        }
    }

    order.items = orderedDishes;
    const orderedDishesJson = JSON.stringify(order);

    const token = cookies().get('user_session')?.value;

    if (!token) {
        return {
            message: 'Error when receiving token',
        };
    }

    // try {
    const res = await fetch(`${url}/api/Order/CreateWithOutCart`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: orderedDishesJson,
        next: {
            tags: ['orders'],
        },
    });

    if (!res.ok) {
        const str = await res.json();
        return {
            message: `Error! Failed to place order: ${JSON.stringify(str)}`,
        };
    }

    return {
        message: 'Ok',
    };
}

export async function updateUserInfo(prevState: { errorMessage: string }, formData: FormData) {
    const updatedUser = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        phoneNumber: (formData.get('phoneNumber') as string).replace(/\s+/, ''),
    };
    console.log(updatedUser);
    //revalidateTag('user');
    //tmp logic
    return {
        errorMessage:
            Math.floor(Math.random() * 2) + 1 === 1 ? 'Random error message from server' : 'Ok',
    };
}
