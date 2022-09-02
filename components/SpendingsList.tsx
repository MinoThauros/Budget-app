//we'll create here a function who takes in a list of expenses and returns a flatlist of expenses
import { useNavigation } from "@react-navigation/native";
import { FlatList,View } from "react-native";
import SpendingsDisplayer from "./ SpendingsDisplayer";
import { spending } from "../models/spending";
import LastDaysTotal from "./LastDays";
import { HTTPInterface } from "../functions/http";
import { useEffect, useState } from "react";



const DisplaySpendings=({spendings}:any)=>{
    const navigation:any=useNavigation();
    async function getSpendings(){
        const {getExpenses}=new HTTPInterface()
        const expenses=await getExpenses()
        return expenses
    }
    const [importedValues,setImportedValues]=useState([]as spending[])
    useEffect(()=>{
        getSpendings().then((spendings)=>{
            setImportedValues(spendings)
        })},[]);

    const allSpendings:spending[]=spendings.concat(importedValues)

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
                data={allSpendings} 
                keyExtractor={(element:spending)=>((allSpendings.indexOf(element)).toString())} 
                renderItem={(singleSpending:any)=>SpendingInterface(singleSpending,allSpendings.indexOf(singleSpending.item))}
                />
        </View>
        
    )

};
export default DisplaySpendings;