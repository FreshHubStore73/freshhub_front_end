import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './features/categories';

export const makeStore = () => {
    return configureStore({
        reducer: {
            categories: categoriesReducer
        }
    });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];