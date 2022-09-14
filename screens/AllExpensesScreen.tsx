import {View } from "react-native";
import { useSelector} from "react-redux";
import DisplaySpendings from "../components/SpendingsList";
import { useState,useLayoutEffect,useEffect } from 'react';
import { useContext } from "react";
import { HTTPInterface } from '../functions/http';
import { OverlayContext } from '../states/context/InputOverlayContext';
import { spending } from "../models/spending";

const {storeExpense,getExpenses}= new HTTPInterface()

const AllExpenses=({navigation,route}:any)=>{
    const [APIspending,setAPIspending]=useState([] as spending[])
    //initializing the store from within the component
    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);
    
    useEffect(()=>{
        const APIspendings=async ()=>{
            return await getExpenses()
        };
        APIspendings().then(
            (spendings)=>setAPIspending(spendings)
        )
    },[])

    const AllSpendings:spending[]=[...spendings,...APIspending]
    
    return (
        <View style={{flex:1}}>
            <DisplaySpendings spendings={AllSpendings}/>
        </View>
    )
}

export default AllExpenses;