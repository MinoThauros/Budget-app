import {FlatList,View } from "react-native";
import { spending } from '../models/spending';
import { useSelector} from "react-redux";
import SpendingsDisplayer from "../components/ SpendingsDisplayer";

const AllExpenses=({navigation,route}:any)=>{
    //initializing the store from within the component
    const spendings=useSelector((states:any)=>states.ExpenseReducer.expenses);
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