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
    // userRole: 'admin' | 'user';
    orders: IOrdersHistory[];
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
    productId: string;
    quantity: number;
    price: number;
}
interface IOrder {
    deliveryTime: string | null;
    recipient: string;
    phoneNumber: string;
    comment: string;
    numberPerson: number;
    call?: boolean;
    payment?: string;
    cashSum: number;
    paymentStatus: boolean;
    streetHouse: string;
    flat: string;
    floor: string;
    items: IOrderedDish[] | [];
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

interface IOrdersHistoryTitle {
    orderNumber: string;
    ordered: string; //'17.03.2021, 5:37:00'
    orderStatus: 'In progress' | 'Done' | 'Rejected';
    totalAmount: number;
}
interface IOrderedDishes {
    dishId: string;
    dishName: string;
    dishPrice: number;
    dishQuantity: number;
    dishImage: string;
    categoryName: string;
}
interface IOrdersHistoryBody {
    deliveryAddress: string;
    recipientName: string;
    recipientPhoneNumber: string;
    orderedDishes: IOrderedDishes[];
    totalAmount: number;
    payment: 'cash' | 'card';
}
interface IOrdersHistory extends IOrdersHistoryTitle, IOrdersHistoryBody {
    orderId: string;
}
