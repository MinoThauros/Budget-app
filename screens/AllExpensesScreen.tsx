import {View, Text} from "react-native";
import { useSelector} from "react-redux";
import DisplaySpendings from "../components/SpendingsList";
import { useState,useLayoutEffect,useEffect } from 'react';
import { useContext } from "react";
import { HTTPInterface } from '../API/http';
import { OverlayContext } from '../states/context/InputOverlayContext';
import { spending } from "../models/spending";
import { InitializeSpending } from "../states/redux/expenses";
import { useDispatch } from "react-redux";
import LoadingOvelay from "../components/LoadingOverlay";

const {storeExpense,getExpenses}= new HTTPInterface()

const AllExpenses=({navigation,route}:any)=>{
    const [DoneLoading,setDoneLoading]=useState(false) //no longer needed as we use react-query to sync query and states
    const dispatch=useDispatch()
    
    useEffect(()=>{

        const APIspendings=async ()=>{
            return await getExpenses()
        };
        APIspendings()
            .then(
                (spendings)=>{
                    setDoneLoading(true)
                    dispatch(InitializeSpending({incomingElements:spendings}))})
            .catch((error)=>console.log(error))
    },[])
     

    


    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses) as spending[];

    const ContentManager=()=>{

        if(!DoneLoading)
         {return <LoadingOvelay/>}
        
        return <View style={{flex:1}}><DisplaySpendings spendings={spendings}/></View>

    }
    

    

    return <ContentManager/>
}

export default AllExpenses;