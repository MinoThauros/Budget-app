import {FlatList,View } from "react-native";
import { spending } from '../models/spending';
import { useSelector} from "react-redux";
import SpendingsDisplayer from "../components/ SpendingsDisplayer";
import {useLayoutEffect, useState,useEffect } from 'react';
import { useContext } from "react";
import { OverlayContext } from '../states/context/InputOverlayContext';
import LastDaysTotal from "../components/LastDays";
import DisplaySpendings from "../components/SpendingsList";
import { HTTPInterface } from '../functions/http';

const {storeExpense,getExpenses}= new HTTPInterface()
const RecentExpenses=({navigation,route}:any)=>{
    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);
    const Overlay=useContext(OverlayContext);
    const visible:boolean=Overlay.visible;
    const [total,setTotal]=useState(0 as number);
    const tempSpending=spendings.slice(0,5);
    const retrieveTotal=()=>{
        let sum:number=0;
        for (var spending of tempSpending){
            sum=Number(sum)+Number(spending.price)
        };
        return sum
    };
    


    useEffect(()=>{
        setTotal(()=>retrieveTotal())
        },[spendings,visible]);

    return (
        <View style={{flex:1}}>
            <View>
                <LastDaysTotal total={total}/>
            </View>
            <DisplaySpendings spendings={tempSpending}/>
        </View>
        
    )
}

export default RecentExpenses;
