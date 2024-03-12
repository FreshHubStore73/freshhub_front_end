import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const url = process.env.SERV_URL;

export async function getCategories() {
    const res: any = await fetch(`${url}/api/Category/GetAll`);
    if (!res.ok) throw new Error("Couldn't fetch categories");
    const data: CategoryItem[] = await res.json();
    const categoriesRaw = data.map((item) => ({ ...item, name: item.name.toLowerCase() }));
    const categories = data.map((item) => item.name.toLowerCase());
    const pages = [...categories, 'search', 'order page'];
    return { categories, categoriesRaw, pages };
}

export async function getDishes(category: string, requestSearchParams: IRequestSearchParams = {}) {
    const { categoriesRaw, pages } = await getCategories();
    if (!pages.includes(category)) return [];

    const searchParams = new URLSearchParams([...Object.entries(requestSearchParams)]);
    const sortType = searchParams?.get('sort');
    const searchQuery = searchParams?.get('search');

    let res, link;
    if (searchParams.has('search')) {
        link = `${url}/api/Product/GetAll`;
    } else {
        const categoryId = categoriesRaw.filter((cat) => cat.name === category)[0].id;
        link = `${url}/api/Product/GetAllByCategory/${categoryId}`;
    }

    res = await fetch(link);

    if (!res.ok) throw new Error('Failed to fetch dishes ' + res.statusText);
    let dishes: DishItem[] = await res.json();

    if (searchQuery) {
        dishes = dishes.filter((dish) =>
            dish.productName.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    }
    if (sortType) {
        sortType === 'asc'
            ? dishes.sort((a, b) => a.price - b.price)
            : dishes.sort((a, b) => b.price - a.price);
    }
    return dishes;
}

export async function getDish(dishId: string) {
    const res = await fetch(`${url}/api/Product/GetProductById/${dishId}`);
    if (!res.ok) throw new Error('Failed to fetch dish');
    return res.json();
}

export async function getOrders() {
    const token = cookies().get('user_session')?.value;
    console.log(token);
    if (!token) {
        redirect('/login');
        // throw new Error('Error! User is not authorized');
    }
    // const res = await fetch(`${url}/api/Order/GetAllByUser`, { next: { revalidate: 600, tags: ['orders'] } });
    // if (!res.ok) throw new Error('Failed to fetch orders history');
    // return res.json();

    //tmp logic
    const body = await new Promise<IOrdersHistory[]>((resolve) =>
        setTimeout(
            () =>
                resolve([
                    {
                        orderId: '2',
                        orderNumber: '554',
                        ordered: '17.03.2024, 5:37 AM',
                        orderStatus: 'in progress',
                        deliveryAddress: 'New York, Baker street, house 45, flat 6, floor 2',
                        recipientName: 'Lisa Milton',
                        recipientPhoneNumber: '+15545554794',
                        orderedDishes: [
                            {
                                dishId: '1',
                                dishName: 'Caesar with tiger prawns',
                                dishPrice: 12,
                                dishQuantity: 3,
                                dishImage: '/dishes/chezarztykrev_1200x800-e1620932136329.jpg',
                            },
                            {
                                dishId: '2',
                                dishName: 'Spicy chicken',
                                dishPrice: 25,
                                dishQuantity: 5,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2022/05/05/05/48/burger-7175344_1280.jpg',
                            },
                            {
                                dishId: '3',
                                dishName:
                                    'Delicate mousse of 4 fruits with cream and salted caramel',
                                dishPrice: 18,
                                dishQuantity: 3,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2017/07/30/19/22/dessert-2555365_1280.jpg',
                            },
                            {
                                dishId: '4',
                                dishName: 'Fruit cheesecake',
                                dishPrice: 23,
                                dishQuantity: 1,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2017/10/19/13/25/cheesecake-2867614_1280.jpg',
                            },
                            {
                                dishId: '5',
                                dishName: 'Honey cake',
                                dishPrice: 20,
                                dishQuantity: 1,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2022/05/03/20/01/black-forest-cake-7172587_1280.jpg',
                            },
                        ],
                        totalAmount: 258,
                        payment: 'cash',
                    },
                    {
                        orderId: '2',
                        orderNumber: '338',
                        ordered: '10.03.2024, 12:07 AM',
                        orderStatus: 'done',
                        deliveryAddress: 'New York, Baker street, house 45, flat 6, floor 2',
                        recipientName: 'Lisa Milton',
                        recipientPhoneNumber: '+15545554794',
                        orderedDishes: [
                            {
                                dishId: '1',
                                dishName: 'Caesar with tiger prawns',
                                dishPrice: 12,
                                dishQuantity: 3,
                                dishImage: '/dishes/chezarztykrev_1200x800-e1620932136329.jpg',
                            },
                            {
                                dishId: '2',
                                dishName: 'Spicy chicken',
                                dishPrice: 25,
                                dishQuantity: 5,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2022/05/05/05/48/burger-7175344_1280.jpg',
                            },
                            {
                                dishId: '3',
                                dishName:
                                    'Delicate mousse of 4 fruits with cream and salted caramel',
                                dishPrice: 18,
                                dishQuantity: 3,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2017/07/30/19/22/dessert-2555365_1280.jpg',
                            },
                            {
                                dishId: '4',
                                dishName: 'Fruit cheesecake',
                                dishPrice: 23,
                                dishQuantity: 1,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2017/10/19/13/25/cheesecake-2867614_1280.jpg',
                            },
                            {
                                dishId: '5',
                                dishName: 'Honey cake',
                                dishPrice: 20,
                                dishQuantity: 1,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2022/05/03/20/01/black-forest-cake-7172587_1280.jpg',
                            },
                        ],
                        totalAmount: 412,
                        payment: 'cash',
                    },
                    {
                        orderId: '2',
                        orderNumber: '114',
                        ordered: '17.02.2024, 3:30 PM',
                        orderStatus: 'rejected',
                        deliveryAddress: 'New York, Baker street, house 45, flat 6, floor 2',
                        recipientName: 'Lisa Milton',
                        recipientPhoneNumber: '+15545554794',
                        orderedDishes: [
                            {
                                dishId: '1',
                                dishName: 'Caesar with tiger prawns',
                                dishPrice: 12,
                                dishQuantity: 3,
                                dishImage: '/dishes/chezarztykrev_1200x800-e1620932136329.jpg',
                            },
                            {
                                dishId: '2',
                                dishName: 'Spicy chicken',
                                dishPrice: 25,
                                dishQuantity: 5,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2022/05/05/05/48/burger-7175344_1280.jpg',
                            },
                            {
                                dishId: '3',
                                dishName:
                                    'Delicate mousse of 4 fruits with cream and salted caramel',
                                dishPrice: 18,
                                dishQuantity: 3,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2017/07/30/19/22/dessert-2555365_1280.jpg',
                            },
                            {
                                dishId: '4',
                                dishName: 'Fruit cheesecake',
                                dishPrice: 23,
                                dishQuantity: 1,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2017/10/19/13/25/cheesecake-2867614_1280.jpg',
                            },
                            {
                                dishId: '5',
                                dishName: 'Honey cake',
                                dishPrice: 20,
                                dishQuantity: 1,
                                dishImage:
                                    'https://cdn.pixabay.com/photo/2022/05/03/20/01/black-forest-cake-7172587_1280.jpg',
                            },
                        ],
                        totalAmount: 158,
                        payment: 'card',
                    },
                ]),
            1000,
        ),
    );
    return body;
}
