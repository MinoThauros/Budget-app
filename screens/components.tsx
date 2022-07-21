import { Button, Text, View, StyleSheet, Pressable } from "react-native";
import { spending } from "../models/spending";
import PriceDisplayer from "../components/ PriceDisplayer";
import SpendingCard from "../components/SpendingCard";

const Components=({navigation,route}:any)=>{

    const button=()=>{
        navigation.navigate('Recent expenses');
    };


    

    return (
        <View>
            <PriceDisplayer title={'Test'} price={24} category={'food'} date={'today'} onPress={button}/>
        
            <SpendingCard onPress={button}/>
        </View>
    )
}

const styles=StyleSheet.create({
    overallContainer:{
        backgroundColor:"#521e87",
        borderRadius:6,
        padding:10,
        margin:20,
        height:60,
        justifyContent:'center'
    },
    DetailsContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    DetailsColumn:{
        paddingEnd:220

    },
    PriceContainer:{
        borderRadius:5,
        backgroundColor:'white',
        height:40,
        width:65,
        alignItems:'center',
        paddingTop:6,
        justifyContent:'center',
        shadowRadius:4,

    },
    DetailsName:{
        fontWeight:'bold',
        color:'white'

    },

    DetailsDate:{
        color:'white'
    },
    PriceTexy:{

    },
    pressed:{
        opacity:0.5
    },
    //////////////////////////////


    
})

export default Components;