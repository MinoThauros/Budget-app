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
import LoadingOvelay from "../components/LoadingOverlay";

const {storeExpense,getExpenses}= new HTTPInterface()

const AllExpenses=({navigation,route}:any)=>{
    const [DoneLoading,setDoneLoading]=useState(false)
    const dispatch=useDispatch()
    //initializing the store from within the component
    useEffect(()=>{

        const APIspendings=async ()=>{
            return await getExpenses()
        };
        APIspendings().then(
            (spendings)=>{
                setDoneLoading(true)
                dispatch(InitializeSpending({incomingElements:spendings}))})
                .catch((error)=>console.log(error))//use this to trigger error event and show overlay
    },[])

    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);


    //const AllSpendings:spending[]=spendings
    let content=<View style={{flex:1}}><DisplaySpendings spendings={spendings}/></View>
    if (!DoneLoading){
        content=<LoadingOvelay/>
    }
    
    return content
}

export default AllExpenses;