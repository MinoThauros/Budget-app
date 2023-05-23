//create anoter spendings component where we use react query
import { View, Text } from 'react-native'
import React from 'react'
import { useGetExpenses } from '../Hooks/ReactQ'
import { InitializeSpending } from '../states/redux/expenses';
import { useDispatch, useSelector } from "react-redux";
import DisplaySpendings from '../components/SpendingsList';
import LoadingOvelay from '../components/LoadingOverlay';

const AllExpensesReactQuery = () => {
    const dispatch=useDispatch();
    const {isLoading,error}=useGetExpenses({
        onSuccess:({data})=>{
            dispatch(InitializeSpending({incomingElements:data}))
        }
    });

    const {expenses}=useSelector((state:any)=>state.ExpenseReducer);

    //after loading is done, it's ether error or expenses
    const ErrorHandler=()=>{
        if(error){
            return <Text>{{...error} as any}</Text>
        }
        return <DisplaySpendings spendings={expenses}/>

    }

  return (
    <View style={{flex:1}}>
        {isLoading ?  <LoadingOvelay/> : <ErrorHandler/>}
    </View>
  )
}

export default AllExpensesReactQuery