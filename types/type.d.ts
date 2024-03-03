type CategoryItem = {
    id: string;
    name: string;
    priority: string;
    product: any[];
};
interface IRequestSearchParams {
    [key: string]: string;
}
type DishItem = {
    id: string;
    photoUrl: string;
    productName: string;
    categoryId: string;
    price: number;
    description: string;
    weight: string;
    categoryName: string;
};

type DishInCart = DishItem & { quantity: number };

type UseShoppingCart = {
    dishes: DishInCart[];
    totalAmount: number;
    totalDishes: number;
    addDish: (dish: DishInCart) => void;
    removeDish: (dish: DishInCart) => void;
    changeQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
};

type User = {
    userId: string;
    userName: string;
    userLastName: string;
    phone: string;
};

type Purchase = {
    productTitle: string;
    productQuantity: number;
    productPrice: number;
    date: string;
};

type UseUserProfile = {
    profile: User;
    history: Purchase[];
    setUser: (user: { profile: User; history: Purchase[] }) => void;
    clearAuth: () => void;
    changeProfile: () => void;
};
