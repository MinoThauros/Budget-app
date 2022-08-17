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
            state.expenses.push(action.payload.element)
        },
        deleteSpending:(state,action)=>{
            state.expenses.splice(action.payload.element)
        },

    }
});

export default expensesSlice.reducer;
export const AddSpending=expensesSlice.actions.addSpending;
export const DeleteSpending=expensesSlice.actions.deleteSpending;

