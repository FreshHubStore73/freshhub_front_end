import { create } from 'zustand';
import shallow from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type DishInCart = {
    dishId: string;
    dTitle: string;
    dPic: string;
    dPrice: number;
    dQuantity: number;
};

type UseShoppingCart = {
    dishes: DishInCart[];
    totalAmount: number;
    totalDishes: number;
    addDish: (dish: DishInCart) => void;
    removeDish: (dish: DishInCart) => void;
    changeQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
};

export type User = {
    userId: string;
    userName: string;
    userLastName: string;
    phone: string;
};

export type Purchase = {
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

export const useShoppingCart = create<UseShoppingCart>()(
    devtools(
        persist(
            (set, get) => ({
                dishes: [],
                totalAmount: 0,
                totalDishes: 0,
                addDish: (dish) =>
                    set((state) => {
                        const dishInCartId = state.dishes.find(
                            (el) => el.dishId == dish.dishId,
                        )?.dishId;
                        if (dishInCartId) {
                            return {
                                dishes: [
                                    ...state.dishes.map((item) => {
                                        return item.dishId === dishInCartId
                                            ? {
                                                  ...item,
                                                  dQuantity: item.dQuantity + dish.dQuantity,
                                              }
                                            : item;
                                    }),
                                ],
                                totalAmount: state.totalAmount + dish.dQuantity * dish.dPrice,
                                totalDishes: state.totalDishes + dish.dQuantity,
                            };
                        } else {
                            return {
                                dishes: [...state.dishes, dish],
                                totalAmount: state.totalAmount + dish.dQuantity * dish.dPrice,
                                totalDishes: state.totalDishes + dish.dQuantity,
                            };
                        }
                    }),
                changeQuantity: (id, quantity) =>
                    set((state) => {
                        const dishInCart = state.dishes.find((el) => el.dishId == id)!;
                        return {
                            dishes: [
                                ...state.dishes.map((item) => {
                                    return item.dishId === dishInCart.dishId
                                        ? { ...item, dQuantity: quantity }
                                        : item;
                                }),
                            ],
                            totalAmount:
                                state.totalAmount -
                                (dishInCart.dQuantity - quantity) * dishInCart.dPrice,
                            totalDishes: state.totalDishes - dishInCart.dQuantity + quantity,
                        };
                    }),
                removeDish: (dish) =>
                    set((state) => {
                        return {
                            dishes: [...state.dishes.filter((item) => item.dishId !== dish.dishId)],
                            totalAmount: state.totalAmount - dish.dQuantity * dish.dPrice,
                            totalDishes: state.totalDishes - dish.dQuantity,
                        };
                    }),
                clearCart: () => set((state) => ({ dishes: [] })),
            }),
            { name: 'cart' },
        ),
    ),
);

export const useUserProfile = create<UseUserProfile>()(
    devtools((set, get) => ({
        profile: {
            userId: '12',
            userName: 'Lisa',
            userLastName: 'Milton',
            phone: '+12858643512',
        },
        history: [],
        setUser: (user) =>
            set(() => ({
                profile: {
                    userId: user.profile.userId,
                    userName: user.profile.userName,
                    userLastName: user.profile.userLastName,
                    phone: user.profile.phone,
                },
                history: user.history,
            })),
        clearAuth: () =>
            set((state) => ({
                profile: {
                    userId: '',
                    userName: '',
                    userLastName: '',
                    phone: '',
                },
                history: [],
            })),
        changeProfile: () => {},
    })),
);
