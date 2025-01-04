import { User } from 'next-auth';
import { createStore, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const initialUserState: Omit<User, 'id' | 'role' | 'userId'> = {
    name: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    image: '',
};

export interface UserSlice {
    profile: Omit<User, 'id' | 'role' | 'userId'>;
    history: UserPurchase[];
    setUser: (user: Omit<User, 'id' | 'role' | 'userId'>) => void;
    setOrdersHistory: (orders: UserPurchase[]) => void;
    clearUser: () => void;
}

export const createAuthSlice: StateCreator<
    UserSlice,
    [['zustand/devtools', never], ['zustand/persist', unknown]],
    [],
    UserSlice
> = (set, get) => ({
    profile: initialUserState,
    history: [],
    setUser: (user) =>
        set((state) => ({
            profile: {
                name: user.name,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber,
                email: user.email,
                image: user.image,
            },
        })),
    setOrdersHistory: (orders) => set(() => ({ history: orders })),
    clearUser: () =>
        set((state) => ({
            profile: initialUserState,
            history: [],
        })),
});

export const createAuthStore = () => {
    return createStore<UserSlice>()(
        devtools(
            persist(
                (...args) => ({
                    ...createAuthSlice(...args),
                }),
                {
                    name: 'auth-store',
                },
            ),
        ),
    );
};
