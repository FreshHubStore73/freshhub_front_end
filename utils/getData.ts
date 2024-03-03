const url = process.env.SERV_URL;

export async function getCategories() {
    const res: any = await fetch(`${url}/api/Category/GetAll`);
    if (!res.ok) throw new Error("Couldn't fetch categories");
    const data: CategoryItem[] = await res.json();
    const categoriesRaw = data.map((item) => ({ ...item, name: item.name.toLowerCase() }));
    const categories = data.map((item) => item.name);
    const pages = [...categories, 'search', 'order page'];
    return { categories, categoriesRaw, pages };
}

export async function getDishes(category: string, requestSearchParams: IRequestSearchParams = {}) {
    const { categoriesRaw } = await getCategories();

    const categoryItem = categoriesRaw.filter((cat) => cat.name === category);
    const categoryId = categoryItem.length && categoryItem[0].id;

    const searchParams = new URLSearchParams([...Object.entries(requestSearchParams)]);
    const sortType = searchParams?.get('sort');
    const searchQuery = searchParams?.get('search');

    let res;
    if (searchParams.get('search')) {
        res = await fetch(`${url}/api/Product/GetAll`);
    } else if (categoryId) {
        res = await fetch(`${url}/api/Product/GetAllByCategory/${categoryId}`);

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
    return [];
}

export async function getDish(dishId: string) {
    const res = await fetch(`${url}/api/Product/GetProductById/${dishId}`);
    if (!res.ok) throw new Error('Failed to fetch dish');
    return res.json();
}
