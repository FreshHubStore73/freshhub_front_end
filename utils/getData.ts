'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const baseUrl = process.env.SERV_URL;

export async function getCategories() {
    const url = new URL(`${baseUrl}/api/categories/getAll`);
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Couldn't fetch categories");
        const data: CategoryItem[] = await res.json();
        return data;
    } catch (error) {
        console.log('Some error in getCategories: ', error);
    }
}

export async function getPages() {
    try {
        const categories = await getCategories();
        if (!categories) return [];
        const pages = [...categories.map((item) => item.name), 'Search', 'Order page'];
        return pages;
    } catch (error) {
        console.log('Some error in getPages: ', error);
    }
}

export async function getDishes(
    categoryName: string,
    queries?: {
        sort?: SortType;
        search?: string;
    },
) {
    const { sort, search } = queries || {};

    let url = search
        ? new URL(`${baseUrl}/api/dishes/getByName/${search}`)
        : new URL(`${baseUrl}/api/dishes/getByCategoryName/${categoryName}`);
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch dishes');

        const dishData: DishItem[] = await res.json();

        if (sort) {
            dishData.sort((a: DishItem, b: DishItem) => {
                if (sort === 'asc') return a.price - b.price;
                if (sort === 'desc') return b.price - a.price;
                return 0;
            });
        }

        return dishData;
    } catch (error) {
        console.log('Some error in getDishes: ', error);
    }
}

export async function getDishById(dishId: string) {
    try {
        const res = await fetch(`${baseUrl}/api/dishes/getById/${dishId}`);
        if (!res.ok) throw new Error('Failed to fetch dish');
        return res.json();
    } catch (error) {
        console.log('Some error in getDish: ', error);
    }
}

// export async function getDishesByName(dishName: string, sort?: SortType) {
//     const url = new URL(`${baseUrl}/api/dishes/getByName/${dishName}`);
//     if (sort) url.searchParams.set('sort', sort);
//     try {
//         const res = await fetch(url);
//         if (!res.ok) throw new Error('Failed to fetch dish');
//         return res.json();
//     } catch (error) {
//         console.log('Some error in getDish: ', error);
//     }
// }

export async function getOrders() {
    const token = cookies().get('user_session')?.value;

    if (!token) {
        redirect('/login');
    }

    const res = await fetch(`${baseUrl}/api/orders/GetAllByUser`, {
        next: { revalidate: 600, tags: ['orders'] },
    });

    if (!res.ok) {
        const str = await res.text();
        throw new Error('Failed to fetch orders history: ' + str);
    }

    const body = await res.json();
    const history: IOrdersHistory[] = body.map((order: any) => {
        const {
            id,
            createdDate,
            orderStatus,
            deliveryAddress,
            recipient,
            phoneNumber,
            orderDatails,
            payment,
        } = order;
        return {
            orderId: id,
            orderNumber: id,
            ordered: createdDate,
            orderStatus: orderStatus.name,
            deliveryAddress: deliveryAddress,
            recipientName: recipient,
            recipientPhoneNumber: phoneNumber,
            orderedDishes: orderDatails.map((order: any) => ({
                dishId: order.productId,
                dishName: order.product.productName,
                dishPrice: order.price,
                dishQuantity: order.quantity,
                dishImage: order.product.photoUrl,
                categoryName: order.product.category.name,
            })),
            totalAmount: orderDatails.reduce((total: number, dish: any) => {
                total += dish.price * dish.quantity;
                return total;
            }, 0),
            payment: payment,
        };
    });

    return history;
}
