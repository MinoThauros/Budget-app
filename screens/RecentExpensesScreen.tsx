import {FlatList,View } from "react-native";
import { spending } from '../models/spending';
import { useSelector} from "react-redux";
import SpendingsDisplayer from "../components/ SpendingsDisplayer";
import {useLayoutEffect, useState } from 'react';
import { useContext } from "react";
import { OverlayContext } from '../states/context/InputOverlayContext';
import LastDaysTotal from "../components/LastDays";
import DisplaySpendings from "../components/SpendingsList";

const RecentExpenses=({navigation,route}:any)=>{
    //initializing the store from within the component
    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);
    const Overlay=useContext(OverlayContext);
    const visible:boolean=Overlay.visible;//binding the state to local variables
    
    const [total,setTotal]=useState(0 as number);
    const [currentList,setNextList]=useState(spendings);//the variable we pass to the list displayer
    const retrieveTotal=()=>{
        let sum:number=0;//get the latest value of the state
        for (var spending of spendings.slice(0,5)){//of returns the element; for...in the index
            sum=Number(sum)+Number(spending.price)
        };
        return sum
    };
    useLayoutEffect(()=>{
        setNextList(spendings.slice(0,5))
        setTotal(()=>retrieveTotal())
        },[navigation,visible]);

    return (
        <View style={{flex:1}}>
            <View>
                <LastDaysTotal total={total}/>
            </View>
            <DisplaySpendings spendings={currentList}/>
        </View>
        
    )
}

export default RecentExpenses;
