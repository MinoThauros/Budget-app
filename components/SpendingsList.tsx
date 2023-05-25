//we'll create here a function who takes in a list of expenses and returns a flatlist of expenses
import { useNavigation } from "@react-navigation/native";
import { FlatList,View } from "react-native";
import SpendingsDisplayer from "./ SpendingsDisplayer";
import { spending } from "../models/spending";
import { HTTPInterface } from "../API/http";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
//import { SetSpending } from "../states/redux/expenses";



const DisplaySpendings=({spendings}:any)=>{
    const navigation:any=useNavigation();
    const goToDetails=(spending:spending)=>{
        navigation.navigate('Details',{
            Spending:spending})};
            //we'll use this function to navigate to the details screen
            

    const SpendingDisplayerWrapper=(singleSpending:any):JSX.Element=>{
        const item:spending={...singleSpending};

        return (
        <SpendingsDisplayer 
            price={item.price} 
            title={item.title} 
            date={item.date} 
            click={()=>goToDetails(singleSpending)} />)
    };
    return (
        <View style={{flex:1}}>
            <FlatList 
                data={spendings} 
                keyExtractor={(element:spending)=>((spendings.indexOf(element)).toString())} 
                renderItem={(singleSpending:any)=>SpendingDisplayerWrapper(singleSpending.item)}
                />
        </View>
        
    )

};
export default DisplaySpendings;