import { configureStore } from "@reduxjs/toolkit";
import addReducer from './features/addSlice';

export const store = configureStore({
    reducer: {
        addReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch