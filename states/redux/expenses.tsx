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
            state.expenses.unshift(action.payload.element)
        },//stack-like behavior
        deleteSpending:(state,action)=>{
            state.expenses=state.expenses.filter(obj=>obj!==action.payload.element)//expects an object
        },
        editSpending:(state,action)=>{
            const index=state.expenses.indexOf(action.payload.element);
            state.expenses[index]=action.payload.newElement;
        }//takes two props: element and newElement

    }
});

export default expensesSlice.reducer;
export const AddSpending=expensesSlice.actions.addSpending;
export const DeleteSpending=expensesSlice.actions.deleteSpending;


