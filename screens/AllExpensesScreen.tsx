import {View } from "react-native";
import { useSelector} from "react-redux";
import DisplaySpendings from "../components/SpendingsList";
import { useState,useLayoutEffect,useEffect } from 'react';
import { useContext } from "react";
import { OverlayContext } from '../states/context/InputOverlayContext';

const AllExpenses=({navigation,route}:any)=>{
    //initializing the store from within the component
    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);
    return (
        <View style={{flex:1}}>
            <DisplaySpendings spendings={spendings}/>
        </View>
    )
}

export default AllExpenses;