import { createStore, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const initialCartState: ShoppingCart = {
    dishes: null,
    totalAmount: 0,
    totalDishes: 0,
};

export interface CartSlice {
    dishes: DishInCart[] | null;
    totalAmount: number;
    totalDishes: number;
    addDish: (dish: DishInCart) => void;
    removeDish: (dish: DishInCart) => void;
    changeQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}

export const createCartSlice: StateCreator<
    CartSlice,
    [['zustand/devtools', never], ['zustand/persist', unknown]],
    [],
    CartSlice
> = (set, get) => ({
    ...initialCartState,
    addDish: (dish) =>
        set((state) => {
            if (state.dishes) {
                const dishInCartId = state.dishes.find((el) => el._id == dish._id)?._id || '';
                if (dishInCartId) {
                    return {
                        dishes: [
                            ...state.dishes?.map((item) => {
                                return item._id === dishInCartId
                                    ? {
                                          ...item,
                                          quantity: item.quantity + dish.quantity,
                                      }
                                    : item;
                            }),
                        ],
                        totalAmount:
                            Math.round((state.totalAmount + dish.quantity * dish.price) * 100) /
                            100,
                        totalDishes: state.totalDishes + dish.quantity,
                    };
                } else {
                    return {
                        dishes: [...state.dishes, dish],
                        totalAmount:
                            Math.round((state.totalAmount + dish.quantity * dish.price) * 100) /
                            100,
                        totalDishes: state.totalDishes + dish.quantity,
                    };
                }
            }
            return {
                dishes: [dish],
                totalAmount: Math.round(dish.quantity * dish.price * 100) / 100,
                totalDishes: dish.quantity,
            };
        }),
    changeQuantity: (id, quantity) =>
        set((state) => {
            if (state.dishes) {
                const dishInCart = state.dishes.find((el) => el._id == id)!;
                return {
                    dishes: [
                        ...state.dishes.map((item) => {
                            return item._id === dishInCart._id
                                ? { ...item, quantity: quantity }
                                : item;
                        }),
                    ],
                    totalAmount:
                        Math.round(
                            (state.totalAmount -
                                (dishInCart.quantity - quantity) * dishInCart.price) *
                                100,
                        ) / 100,
                    totalDishes: state.totalDishes - dishInCart.quantity + quantity,
                };
            }
            return {
                dishes: null,
                totalAmount: 0,
                totalDishes: 0,
            };
        }),
    removeDish: (dish) =>
        set((state) => {
            if (state.dishes) {
                return {
                    dishes: [...state.dishes.filter((item) => item._id !== dish._id)],
                    totalAmount:
                        Math.round((state.totalAmount - dish.quantity * dish.price) * 100) / 100,
                    totalDishes: state.totalDishes - dish.quantity,
                };
            }
            return {
                dishes: null,
                totalAmount: 0,
                totalDishes: 0,
            };
        }),
    clearCart: () =>
        set((state) => ({
            dishes: [],
            totalAmount: 0,
            totalDishes: 0,
        })),
});

export const createCartStore = () => {
    return createStore<CartSlice>()(
        devtools(
            persist(
                (...args) => ({
                    ...createCartSlice(...args),
                }),
                {
                    name: 'cart-store',
                },
            ),
        ),
    );
};
