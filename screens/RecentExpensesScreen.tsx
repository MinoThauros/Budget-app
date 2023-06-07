import {FlatList,View, Text} from "react-native";
import { spending } from '../models/spending';
import { useSelector} from "react-redux";
import SpendingsDisplayer from "../components/ SpendingsDisplayer";
import {useLayoutEffect, useState,useEffect } from 'react';
import { useContext } from "react";
import { OverlayContext } from '../states/context/InputOverlayContext';
import LastDaysTotal from "../components/LastDays";
import DisplaySpendings from "../components/SpendingsList";
import { HTTPInterface } from '../API/http';
import { useGetExpenses } from "../Hooks/ReactQ";
import { SnackBarContext } from "../states/context/SnackBarContext";
import Colors from "../constants/colors";

const RecentExpenses=({navigation,route}:any)=>{
    const {setSnackBar}=useContext(SnackBarContext)
    const [temp,setTemp]=useState({} as spending);
    //const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses) as spending[] | undefined;
    //the redux store used to be the source of truth for the expenses, but now we'll use react-query (see above)
    const {isLoading,error,data:spendings}=useGetExpenses({
        onSuccess:({data})=>{
            //bind the query to the redux store
            //dispatch(InitializeSpending({incomingElements:data}))
            //console.log(data)
            setTemp
        },
        onError:({response})=>{
            setSnackBar({message:'Failed to fetch your spendings'})}
    });
    const Overlay=useContext(OverlayContext);
    const visible:boolean=Overlay.visible;
    const [total,setTotal]=useState(0 as number);

    //handling the case where redux store is empty as we were not able to fetch data from firebase
    let tempSpending:spending[]=[];
    if (spendings){
        tempSpending=spendings.slice(0,5);
    }

    const retrieveTotal=()=>{
        let sum:number=0;
        for (var spending of tempSpending){
            sum=Number(sum)+Number(spending.price)
        };
        return sum
    };
    
    useEffect(()=>{
        setTotal(tempSpending.length ? ()=>retrieveTotal(): 0)//if tempSpending is empty, set total to 0
        },[spendings,visible]);


    if (error){
        return <></>
    }

    return (
        <View style={{flex:1,  backgroundColor:Colors.Slate_blue}}>
            <View>
                <LastDaysTotal total={total}/>
            </View>
            <DisplaySpendings spendings={tempSpending}/>
        </View>
        
    )
}

export default RecentExpenses;
