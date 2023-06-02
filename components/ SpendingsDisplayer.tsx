import { Button, Text, View, StyleSheet, Pressable } from "react-native";
import { spending } from '../models/spending';
import { useState } from "react";
import SpendingDetailsReactQ from "../ReactQ_screens/SpendingDetailsReactQ";


const SpendingsDisplayer=({spending}:{spending:spending}):JSX.Element=>{
    const {title,price,date}=spending;
    const [details,setDetails]=useState(false);
    const SingleSpendingDisplayer=({spendingInfo}:any):JSX.Element=>{
        const {title, price, date}=spendingInfo;
        return (
            <Pressable 
            style={({pressed})=>(pressed ? styles.pressed:null)}
            onLongPress={()=>setDetails(!details)}>
            <View style={styles.overallContainer}>
                <View style={styles.DetailsContainer} >
                    <View style={styles.DetailsColumn}>
                        <Text style={styles.DetailsName}>{title}</Text>
                        <Text style={styles.DetailsDate}>{date}</Text>
                    </View>
                    <View style={styles.PriceContainer}>
                        <Text style={{fontWeight:'bold'}}>
                            {price}
                        </Text>
                    </View>
                </View>
            </View>
             </Pressable>
        )
    }
    
    return (
        <>
            {!details && <SingleSpendingDisplayer spendingInfo={{title,price,date}} />}
            {details && <SpendingDetailsReactQ spending={spending} optional={()=>setDetails(!details)}/>} 
        </>


            
        
    )};

const styles=StyleSheet.create({
    overallContainer:{
        backgroundColor:"#521e87",
        borderRadius:6,
        padding:10,
        marginHorizontal:15,
        marginVertical:5,
        height:60,
        justifyContent:'center'
    },
    DetailsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    DetailsColumn:{
        //paddingEnd:220

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
    },})


export default SpendingsDisplayer