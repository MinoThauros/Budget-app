import {configureStore} from '@reduxjs/toolkit';
import ExpenseReducer from './expenses';

export const store=configureStore({
    reducer:{
        ExpenseReducer:ExpenseReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})