import { create } from 'zustand';
import shallow from 'zustand';
import { devtools } from 'zustand/middleware';

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

export const useShoppingCart = create<UseShoppingCart>()(
    devtools((set, get) => ({
        dishes: [],
        totalAmount: 0,
        totalDishes: 0,
        addDish: (dish) =>
            set((state) => {
                const dishInCartId = state.dishes.find((el) => el.dishId == dish.dishId)?.dishId;
                if (dishInCartId) {
                    return {
                        dishes: [
                            ...state.dishes.map((item) => {
                                return item.dishId === dishInCartId
                                    ? { ...item, dQuantity: item.dQuantity + dish.dQuantity }
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
                        state.totalAmount - (dishInCart.dQuantity - quantity) * dishInCart.dPrice,
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
    })),
);
