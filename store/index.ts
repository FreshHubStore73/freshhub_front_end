import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useShoppingCart = create<UseShoppingCart>()(
    devtools(
        persist(
            (set, get) => ({
                dishes: [],
                totalAmount: 0,
                totalDishes: 0,
                addDish: (dish) =>
                    set((state) => {
                        const dishInCartId = state.dishes.find((el) => el.id == dish.id)?.id;
                        if (dishInCartId) {
                            return {
                                dishes: [
                                    ...state.dishes.map((item) => {
                                        return item.id === dishInCartId
                                            ? {
                                                  ...item,
                                                  quantity: item.quantity + dish.quantity,
                                              }
                                            : item;
                                    }),
                                ],
                                totalAmount:
                                    Math.round(
                                        (state.totalAmount + dish.quantity * dish.price) * 100,
                                    ) / 100,
                                totalDishes: state.totalDishes + dish.quantity,
                            };
                        } else {
                            return {
                                dishes: [...state.dishes, dish],
                                totalAmount:
                                    Math.round(
                                        (state.totalAmount + dish.quantity * dish.price) * 100,
                                    ) / 100,
                                totalDishes: state.totalDishes + dish.quantity,
                            };
                        }
                    }),
                changeQuantity: (id, quantity) =>
                    set((state) => {
                        const dishInCart = state.dishes.find((el) => el.id == id)!;
                        return {
                            dishes: [
                                ...state.dishes.map((item) => {
                                    return item.id === dishInCart.id
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
                    }),
                removeDish: (dish) =>
                    set((state) => {
                        return {
                            dishes: [...state.dishes.filter((item) => item.id !== dish.id)],
                            totalAmount:
                                Math.round((state.totalAmount - dish.quantity * dish.price) * 100) /
                                100,
                            totalDishes: state.totalDishes - dish.quantity,
                        };
                    }),
                clearCart: () =>
                    set((state) => ({
                        dishes: [],
                        totalAmount: 0,
                        totalDishes: 0,
                    })),
            }),
            { name: 'cart' },
        ),
    ),
);

// export const useUserProfile = create<UseUserProfile>()(
//     devtools((set, get) => ({
//         profile: {
//             userId: '12',
//             userName: 'Lisa',
//             userLastName: 'Milton',
//             phone: '+12858643512',
//         },
//         history: [],
//         setUser: (user) =>
//             set(() => ({
//                 profile: {
//                     userId: user.profile.userId,
//                     userName: user.profile.userName,
//                     userLastName: user.profile.userLastName,
//                     phone: user.profile.phone,
//                 },
//                 history: user.history,
//             })),
//         clearAuth: () =>
//             set((state) => ({
//                 profile: {
//                     userId: '',
//                     userName: '',
//                     userLastName: '',
//                     phone: '',
//                 },
//                 history: [],
//             })),
//         changeProfile: () => {},
//     })),
// );
