import {FlatList,View } from "react-native";
import { spending } from '../models/spending';
import { useSelector} from "react-redux";
import SpendingsDisplayer from "../components/ SpendingsDisplayer";
import { useEffect, useLayoutEffect, useState } from 'react';
import { useContext } from "react";
import { OverlayContext } from '../states/context/InputOverlayContext';

const RecentExpenses=({navigation,route}:any)=>{
    //initializing the store from within the component
    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);
    const Overlay=useContext(OverlayContext);
    const visible:boolean=Overlay.visible;//binding the state to local variables
    

    const [currentList,setNextList]=useState(spendings)
    

    useLayoutEffect(()=>{
        setNextList(spendings.slice(0,5))},[navigation,visible]);

    const MealsDisplayer=(singleSpending:any):JSX.Element=>{
        const item:spending={...singleSpending.item};//object deconstruction



        return <SpendingsDisplayer price={item.price} title={item.title} date={item.date} />
    }

    return (
        <View style={{flex:1}}>
            <FlatList data={currentList} keyExtractor={(element:spending)=>spendings.indexOf(element)} renderItem={MealsDisplayer}/>

        </View>
    )
}

export default RecentExpenses;

//bug: cannot dynamically hook to redux changes in recent expensense