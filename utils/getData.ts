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

export async function getDish(dishId: string): Promise<DishItem> {
    const res = await fetch(`${url}/api/Product/GetProductById/${dishId}`);
    if (!res.ok) throw new Error('Failed to fetch dish ' + res.statusText);
    return res.json();
}

export async function getOrders() {
    const token = cookies().get('user_session')?.value;

    if (!token) {
        redirect('/login');
    }

    const res = await fetch(`${url}/api/Order/GetAllByUser`, {
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
