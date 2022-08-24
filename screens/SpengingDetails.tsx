import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { spending } from '../models/spending';
const SpendingDetailsComponent=({navigation,route}:any)=>{
    //receives spendingIndex from route.params
    //fetches the specific spending from redux store
    //displays the details of the spending including category

    const spendings:spending[]=useSelector((states:any)=>states.ExpenseReducer.expenses);
    const {title,date,price,category}:any=spendings.find(
        (singleSpending:spending)=>spendings.indexOf(singleSpending)===route.params.Spendingid);
        //need to attribute a particular id to each spending in case two spendings are the same
    
    return (
    <View>
        <Text>selected Spending {price}</Text>
    </View>
    )

};



export default SpendingDetailsComponent;