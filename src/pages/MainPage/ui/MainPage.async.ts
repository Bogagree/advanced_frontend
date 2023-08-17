import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // имитация долгой загрузки
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
