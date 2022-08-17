import { Button, FlatList, Text, View } from "react-native";
import { spending } from '../models/spending';
import { useSelector,useDispatch } from "react-redux";
import { AddSpending, DeleteSpending, RetrieveLatest } from '../states/redux/expenses';
import SpendingsDisplayer from "../components/ SpendingsDisplayer";

const AllExpenses=({navigation,route}:any)=>{
    //initializing the store from within the component
    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);
    const dispatch=useDispatch();

    const button=()=>{
        navigation.navigate('Recent expenses');
    };

    const MealsDisplayer=(singleSpending:any):JSX.Element=>{
        const item:spending={...singleSpending.item};//object deconstruction



        return <SpendingsDisplayer price={item.price} title={item.title} date={item.date} />
    }

    return (
        <View style={{flex:1}}>
            <FlatList data={spendings} keyExtractor={(element:spending)=>spendings.indexOf(element)} renderItem={MealsDisplayer}/>

        </View>
    )
}

export default AllExpenses;