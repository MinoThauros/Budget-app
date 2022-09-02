//we'll create here a function who takes in a list of expenses and returns a flatlist of expenses
import { useNavigation } from "@react-navigation/native";
import { FlatList,View } from "react-native";
import SpendingsDisplayer from "./ SpendingsDisplayer";
import { spending } from "../models/spending";
import { HTTPInterface } from "../functions/http";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { SetSpending } from "../states/redux/expenses";



const DisplaySpendings=({spendings}:any)=>{
    const dispatch=useDispatch()
    const navigation:any=useNavigation();
    async function getSpendings(){
        const {getExpenses}=new HTTPInterface()
        const expenses=await getExpenses()
        return expenses
    }

    useEffect(()=>{
        getSpendings().then((spendings)=>{
            dispatch(SetSpending({IncomingElements:spendings.reverse()}))
        })},[]);

    //on first render, fetch all the spendings in the database

    const goToDetails=(id:number)=>{
        navigation.navigate('Details',{
            Spendingid:id})};//adjust this so that we send the object instead of ID
            //API call doesn't work cause we don't pass an ID which is the index of the spending within redux

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