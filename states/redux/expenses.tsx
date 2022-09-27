import {createSlice} from '@reduxjs/toolkit';
import { spending } from '../../models/spending';
//a slice is made out of a name, an initial state and reducers

const expensesSlice=createSlice({

    name:'spendings',

    initialState:{
        expenses:[] as spending[]
    },

    reducers:{
        initializeSpendings:(state,action)=>{
            state.expenses=action.payload.incomingElements
        },
        addSpending:(state,action)=>{
            state.expenses.unshift(action.payload.element)
        },//stack-like behavior
        deleteSpending:(state,action)=>{
            state.expenses=state.expenses.filter(obj=>obj.id!=action.payload.element.id)
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
export const EditSpending=expensesSlice.actions.editSpending;
export const InitializeSpending=expensesSlice.actions.initializeSpendings;


