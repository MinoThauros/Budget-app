//create anoter spendings component where we use react query
import { View, Text } from 'react-native'
import React from 'react'
import { useGetExpenses } from '../Hooks/ReactQ'
import { InitializeSpending } from '../states/redux/expenses';
import { useDispatch, useSelector } from "react-redux";
import DisplaySpendings from '../components/SpendingsList';
import LoadingOvelay from '../components/LoadingOverlay';
//*dispatch action to initialize the store*

//*we are still mixing react query and redux*
//*we'll fix this now: react query will be the only source of truth*
//--->actually, since queries are invalidated after mutations, we don't need to dispatch anything
//--->it'll refetch data and update the redux store automatically everytime
//--->because we are binding them to queries at AllExpensesReactQuery.tsx

//*we'd need however to use react query on post actions*
//--->we don't because we are using redux as the source of truth and react query to simply query the data
//--->and to simply retrigger all queries after mutations (we are not currently using react query mutations)
//--->we have custom functions to post using axios AND update the redux store;
//--->This forces the DB and redux to be in sync

//*We'll implement a new version of the SpendingInput component that uses react query mutations for post actions*
//--->those components will not be dispatching anything from the redux store anymore
//--->they'll simply use react query mutations to post/delete/update data
//--->the redux store will be updated automatically by react query 


//*We'll also implement a new version of the SpendingDetails component that uses react query mutations for delete actions*
//*And finally an EditItem component that uses react query mutations for update actions*
const AllExpensesReactQuery = () => {
    const dispatch=useDispatch();
    const {isLoading,error,data}=useGetExpenses({
        onSuccess:({data})=>{
            //bind the query to the redux store
            dispatch(InitializeSpending({incomingElements:data}))
        }
    });

    const {expenses}=useSelector((state:any)=>state.ExpenseReducer);

    //after loading is done, it's ether error or expenses
    const ErrorHandler=()=>{
        if(error){
            return <Text>{{...error} as any}</Text>
        }
        return <DisplaySpendings spendings={data}/>

    }

  return (
    <View style={{flex:1}}>
        {isLoading ?  <LoadingOvelay/> : <ErrorHandler/>}
    </View>
  )
}

export default AllExpensesReactQuery