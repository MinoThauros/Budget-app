import {View } from "react-native";
import { useSelector} from "react-redux";
import DisplaySpendings from "../components/SpendingsList";
import { useState,useLayoutEffect,useEffect } from 'react';
import { useContext } from "react";
import { HTTPInterface } from '../functions/http';
import { OverlayContext } from '../states/context/InputOverlayContext';
import { spending } from "../models/spending";
import { InitializeSpending } from "../states/redux/expenses";
import { useDispatch } from "react-redux";

const {storeExpense,getExpenses}= new HTTPInterface()

const AllExpenses=({navigation,route}:any)=>{
    const dispatch=useDispatch()
    //initializing the store from within the component
    useEffect(()=>{

        const APIspendings=async ()=>{
            return await getExpenses()
        };
        APIspendings().then(
            (spendings)=>dispatch(InitializeSpending({incomingElements:spendings}))
        )
    },[])

    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);


    //const AllSpendings:spending[]=spendings
    
    return (
        <View style={{flex:1}}>
            <DisplaySpendings spendings={spendings}/>
        </View>
    )
}

export default AllExpenses;