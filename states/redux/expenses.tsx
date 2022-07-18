import {createSlice} from '@reduxjs/toolkit';
import { spending } from '../../models/spending';
//a slice is made out of a name, an initial state and reducers

const expensesSlice=createSlice({

    name:'spendings',

    initialState:{
        expenses:[] as spending[]
    },

    reducers:{
        addSpending:(state,action)=>{
            state.expenses.push(action.payload.id)
        },
        deleteSpending:(state,action)=>{
            state.expenses.splice(action.payload.id)
        },
        retrieveLatest:(state,action)=>{
            state.expenses.slice(5)
        }
    }
});

export default expensesSlice.reducer;
export const addSpending=expensesSlice.actions.addSpending;
export const deleteSpending=expensesSlice.actions.deleteSpending;
export const retrieveLatest=expensesSlice.actions.retrieveLatest;

