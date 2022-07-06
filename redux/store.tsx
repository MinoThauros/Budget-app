import {configureStore} from '@reduxjs/toolkit';
import ExpenseReducer from '../redux/expenses';

export const store=configureStore({
    reducer:{
        ExpenseReducer:ExpenseReducer
    }
})