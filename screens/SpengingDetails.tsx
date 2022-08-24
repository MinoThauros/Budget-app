import { View, Button,Text } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { spending } from '../models/spending';
import Spending from "../components/Spending";
import { DeleteSpending } from "../states/redux/expenses";



const SpendingDetailsComponent=({navigation,route}:any)=>{
    //handle deletion of spending; keep the deletion function here
    const dispatch=useDispatch();
    const spendings:spending[]=useSelector((states:any)=>states.ExpenseReducer.expenses);
    const spending:any=spendings.find(
        (singleSpending:spending)=>spendings.indexOf(singleSpending)===route.params.Spendingid);
        //need to attribute a particular id to each spending in case two spendings are the same
        
    const deleteSpending=()=>{
        dispatch(DeleteSpending({element:spending}))
    };

    const Content=()=>{
        var Details:JSX.Element=(
        <View>
            <Spending spending={spending}/>
            <View>
                    <Button title="Delete" onPress={deleteSpending}/>
                    <Button title="Edit" onPress={()=>{}}/>
            </View>
        </View>
            
        )
        if (!spending){
            Details=(
                <View>
                    <Text>Deleted Spending</Text>
                </View>
            )
        }
        return Details
    }
    
    return (
        <Content/>
    )

};



export default SpendingDetailsComponent;