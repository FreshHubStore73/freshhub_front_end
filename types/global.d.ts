type ProductCategory = 'burgers' | 'pizza' | 'salads' | 'desserts';

type CategoryItem = {
    _id: Schema.Types.ObjectId;
    name: string;
    path: string;
};

type SortType = 'asc' | 'desc';

type DishItem = {
    _id: Schema.Types.ObjectId;
    photoUrl: string;
    productName: string;
    price: number;
    description: string;
    weight: string;
};

type DishInCart = DishItem & { quantity: number };

type ShoppingCart = {
    dishes: DishInCart[] | null;
    totalAmount: number;
    totalDishes: number;
};

type UserPurchase = {
    productTitle: string;
    productQuantity: number;
    productPrice: number;
    date: string;
};

interface UserCredentials {
    phoneNumber: string;
    password: string;
}

interface UserSignUp extends UserCredentials {
    name: string;
    lastName: string;
}

interface OrderedDish {
    dishId: string;
    productName: string;
    quantity: number;
    price: number;
    photoUrl: string;
}

interface OrderItem {
    userId: string;
    deliveryTime: string | null;
    recipient: string;
    phoneNumber: string;
    comment: string | null;
    numberOfPersons: number;
    call: boolean;
    paymentType: 'cash' | 'card';
    totalAmount: number;
    cashSum?: number;
    paymentStatus: boolean;
    orderStatus: 'In progress' | 'Done' | 'Rejected';
    deliveryAddress: string;
    items: OrderedDish[];
}
interface OrderItemDB extends Omit<OrderItem, 'streetHouse' | 'flat' | 'floor'> {
    orderNumber: number;
    _id: string;
    createdAt: string;
}

// interface OrdersHistoryTitle {
//     orderNumber: string;
//     createdAt: string; //'17.03.2021, 5:37:00'
//     orderStatus: 'In progress' | 'Done' | 'Rejected';
//     totalAmount: number;
// }
// interface OrderedDishes {
//     dishId: string;
//     dishName: string;
//     dishPrice: number;
//     dishQuantity: number;
//     dishImage: string;
//     categoryName: string;
// }
// interface OrdersHistoryBody {
//     deliveryAddress: string;
//     recipientName: string;
//     recipientPhoneNumber: string;
//     orderedDishes: OrderedDishes[];
//     totalAmount: number;
//     payment: 'cash' | 'card';
// }
// interface OrdersHistory extends OrdersHistoryTitle, OrdersHistoryBody {
//     orderId: string;
// }
interface ActionsResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
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
    isEqualLength?: {
        value: number;
        message: string;
        doValidate: (str: string, length: number) => boolean;
    };
};
