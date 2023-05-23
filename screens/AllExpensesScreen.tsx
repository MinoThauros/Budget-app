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
import { useGetExpenses } from "../Hooks/ReactQ";

const {storeExpense,getExpenses}= new HTTPInterface()

const AllExpenses=({navigation,route}:any)=>{
    //const [DoneLoading,setDoneLoading]=useState(false)
    const dispatch=useDispatch()
    /**
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
     */

    const onSuccess:({data}:{data:spending[]})=>void=()=>{
        //setDoneLoading(true)
        dispatch(InitializeSpending({incomingElements:data}))
    }
    const {data,isLoading,error}=useGetExpenses({onSuccess})

    const ContentManager=()=>{
        if (isLoading){
            return <LoadingOvelay/>
        }
        if (error){
            return (
            <View><Text>{error}</Text></View>)
        }
        return <View style={{flex:1}}><DisplaySpendings spendings={data}/></View>

    }
    

    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);

    return <ContentManager/>
}

export default AllExpenses;