'use client';

import { createContext, ReactNode, useContext, useRef } from "react"
import { createAuthStore, UserSlice } from "./Auth-store"
import { useStore } from "zustand"
import { CartSlice, createCartStore } from "./Cart-store"
import { SessionProvider } from "next-auth/react";

// Auth store

export type AuthStoreApi = ReturnType<typeof createAuthStore>

export const AuthStoreContext = createContext<AuthStoreApi | undefined>(
    undefined,
);

export interface AuthStoreProviderProps {
    children: ReactNode
};

export const AuthStoreProvider = ({
    children,
}: AuthStoreProviderProps) => {
    const storeRef = useRef<AuthStoreApi>()
    if (!storeRef.current) {
        storeRef.current = createAuthStore()
    }

    return (
        <SessionProvider>
            <AuthStoreContext.Provider value={storeRef.current}>
                {children}
            </AuthStoreContext.Provider>
        </SessionProvider>
    )
}

export const useAuthStore = <T,>(
    selector: (store: UserSlice) => T,
): T => {
    const storeContext = useContext(AuthStoreContext)

    if (!storeContext) {
        throw new Error(`useAuthStore must be used within AuthStoreProvider`)
    }

    return useStore(storeContext, selector)
}


// Cart store

export type CartStoreApi = ReturnType<typeof createCartStore>;

export const CartStoreContext = createContext<CartStoreApi | undefined>(
    undefined,
);

export interface CartStoreProviderProps {
    children: ReactNode
};

export const CartStoreProvider = ({
    children,
}: CartStoreProviderProps) => {
    const storeRef = useRef<CartStoreApi>()
    if (!storeRef.current) {
        storeRef.current = createCartStore()
    }

    return (
        <CartStoreContext.Provider value={storeRef.current}>
            {children}
        </CartStoreContext.Provider>
    )
}

export const useCartStore = <T,>(
    selector: (store: CartSlice) => T,
): T => {
    const storeContext = useContext(CartStoreContext)

    if (!storeContext) {
        throw new Error(`useCartStore must be used within CartStoreProvider`)
    }

    return useStore(storeContext, selector)
}