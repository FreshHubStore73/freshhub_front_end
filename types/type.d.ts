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
interface IUserCredentials {
    phoneNumber: string;
    password: string;
}

interface IUserSignUp extends IUserCredentials {
    firstName: string;
    lastName: string;
}

interface IUserInfo {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    // history: any[];
    // userRole: 'admin' | 'user';
}
interface IUserResponse {
    user: IUserInfo | null;
    error: string | null;
}
interface ISignInFormState {
    message: string;
    user: IUserInfo | null;
}
interface IOrderedDish {
    id: string;
    quantity: number;
    price: number;
}
interface IOrder {
    recipient: string;
    phoneNumber: string;
    streetHouse: string;
    flat: string;
    floor: string;
    deliveryDate: string;
    deliveryTime: string;
    numberPerson: number;
    call?: boolean;
    payment?: string;
    cashSum: number;
    comment: string;
    orderedDishes: IOrderedDish[] | [];
}
type ValidateRules = {
    minLength?: {
        value: number;
        message: string;
    };
    maxLength?: {
        value: number;
        message: string;
    };
    required?: string;
    custom?: (value: string) => boolean;
};
