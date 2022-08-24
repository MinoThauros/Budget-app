import {View } from "react-native";
import { useSelector} from "react-redux";
import DisplaySpendings from "../components/SpendingsList";
import { useState,useLayoutEffect } from 'react';
import { useContext } from "react";
import { OverlayContext } from '../states/context/InputOverlayContext';

const AllExpenses=({navigation,route}:any)=>{
    //initializing the store from within the component
    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);
    const [currenSpendings,setCurrenSpendings]=useState(spendings);
    const Overlay=useContext(OverlayContext);
    const visible:boolean=Overlay.visible;//binding the state to local variables

    useLayoutEffect(()=>{
        setCurrenSpendings(spendings);
    },[visible,navigation,route,spendings]);

    return (
        <View style={{flex:1}}>
            <DisplaySpendings spendings={currenSpendings}/>
        </View>
    )
}

export default AllExpenses;