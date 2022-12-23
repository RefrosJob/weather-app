import { configureStore } from '@reduxjs/toolkit';
import tempFormat from './stores/tempFormatStore';
import speedFormat from './stores/speedFormatStore';
import city from './stores/cityStore';
import theme from './stores/themeStore';

const store = configureStore({
    reducer: {
        tempFormat,
        speedFormat,
        city,
        theme,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
