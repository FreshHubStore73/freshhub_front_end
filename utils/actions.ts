'use server';

export async function orderAction(
    prevState: {
        message: string;
    },
    formData: FormData,
) {
    let order: IOrder = {
        recipient: formData.get('recipient') as string,
        phoneNumber: (formData.get('phoneNumber') as string).replace(/\s+/, ''),
        streetHouse: formData.get('streetHouse') as string,
        flat: formData.get('flat') as string,
        floor: formData.get('floor') as string,
        deliveryDate: formData.get('delivery_date') as string,
        deliveryTime: formData.get('delivery_time') as string,
        numberPerson: formData.get('numberPerson') as unknown as number,
        call: formData.get('call') as unknown as boolean,
        payment: formData.get('payment') as string,
        cashSum: formData.get('cashSum') as unknown as number,
        comment: formData.get('comment') as string,
        orderedDishes: [],
    };

    const orderedDishes: IOrderedDish[] = [];
    for (const [name, value] of formData.entries()) {
        if (name.startsWith('name_')) {
            const index = parseInt(name.split('_')[1]);
            const dish: IOrderedDish = {
                id: value.toString(),
                quantity: formData.get(`quantity_${index}`) as unknown as number,
                price: formData.get(`price_${index}`) as unknown as number,
            };
            orderedDishes.push(dish);
        }
    }
    order.orderedDishes = orderedDishes;
    const orderedDishesJson = JSON.stringify(order);
    console.log('prevState.message: ', prevState.message, orderedDishesJson);

    //tmp logic
    return {
        message:
            Math.floor(Math.random() * 2) + 1 === 1 ? 'Random error message from server' : 'Ok',
    };
}

export async function updateUserInfo(prevState: { errorMessage: string }, formData: FormData) {
    const updatedUser = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        phoneNumber: (formData.get('phoneNumber') as string).replace(/\s+/, ''),
    };
    console.log(updatedUser);
    //tmp logic
    return {
        errorMessage:
            Math.floor(Math.random() * 2) + 1 === 1 ? 'Random error message from server' : 'Ok',
    };
}
