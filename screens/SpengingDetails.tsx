import { View, Button } from "react-native";
import { useSelector } from "react-redux";
import { spending } from '../models/spending';
import Spending from "../components/Spending";



const SpendingDetailsComponent=({navigation,route}:any)=>{
    //handle deletion of spending; keep the deletion function here

    const spendings:spending[]=useSelector((states:any)=>states.ExpenseReducer.expenses);
    const spending:any=spendings.find(
        (singleSpending:spending)=>spendings.indexOf(singleSpending)===route.params.Spendingid);
        //need to attribute a particular id to each spending in case two spendings are the same
        
    const deleteSpending=()=>{


    };
    
    return (
    <View>
       <Spending spending={spending}/>
       <View>
            <Button title="Delete" onPress={()=>{}}/>
            <Button title="Edit" onPress={()=>{}}/>
       </View>

    </View>
    )

};



export default SpendingDetailsComponent;