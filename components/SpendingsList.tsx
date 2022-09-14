//we'll create here a function who takes in a list of expenses and returns a flatlist of expenses
import { useNavigation } from "@react-navigation/native";
import { FlatList,View } from "react-native";
import SpendingsDisplayer from "./ SpendingsDisplayer";
import { spending } from "../models/spending";
import { HTTPInterface } from "../functions/http";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
//import { SetSpending } from "../states/redux/expenses";



const DisplaySpendings=({spendings}:any)=>{
    const dispatch=useDispatch()
    const navigation:any=useNavigation();
    async function getSpendings(){
        const {getExpenses}=new HTTPInterface()
        const expenses=await getExpenses()
        return expenses
    }
    

    const goToDetails=(spending:spending)=>{
        navigation.navigate('Details',{
            Spending:spending})};
            

    const SpendingInterface=(singleSpending:any):JSX.Element=>{
        const item:spending={...singleSpending};//object deconstruction

        return (
        <SpendingsDisplayer 
            price={item.price} 
            title={item.title} 
            date={item.date} 
            click={()=>goToDetails(singleSpending)} />)//enables navigation with params
    };
    return (
        <View style={{flex:1}}>
            <FlatList 
                data={spendings} 
                keyExtractor={(element:spending)=>((spendings.indexOf(element)).toString())} 
                renderItem={(singleSpending:any)=>SpendingInterface(singleSpending.item)}
                />
        </View>
        
    )

};
export default DisplaySpendings;