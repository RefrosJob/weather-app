import { configureStore } from '@reduxjs/toolkit';
import format from './stores/formatStore';

const store = configureStore({
    reducer: {
        format,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
