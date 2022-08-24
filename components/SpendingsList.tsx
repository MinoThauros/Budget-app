//we'll create here a function who takes in a list of expenses and returns a flatlist of expenses
import { useNavigation } from "@react-navigation/native";
import { FlatList,View } from "react-native";
import SpendingsDisplayer from "./ SpendingsDisplayer";
import { spending } from "../models/spending";
import LastDaysTotal from "./LastDays";



const DisplaySpendings=({spendings}:any)=>{
    const navigation:any=useNavigation();

    const goToDetails=(id:number)=>{
        navigation.navigate('Details',{
            Spendingid:id})};

    const SpendingInterface=(singleSpending:any,id:number):JSX.Element=>{
        const item:spending={...singleSpending.item};//object deconstruction

        return (
        <SpendingsDisplayer 
            price={item.price} 
            title={item.title} 
            date={item.date} 
            click={()=>goToDetails(id)} />)//enables navigation with params
    };

    

    return (
        <View style={{flex:1}}>
            <FlatList 
                data={spendings} 
                keyExtractor={(element:spending)=>((spendings.indexOf(element)).toString())} 
                renderItem={(singleSpending:any)=>SpendingInterface(singleSpending,spendings.indexOf(singleSpending.item))}
                />
        </View>
        
    )

};
export default DisplaySpendings;