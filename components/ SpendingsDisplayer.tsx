import { Button, Text, View, StyleSheet, Pressable } from "react-native";
import { spending } from "../models/spending";


const SpendingsDisplayer=({title,price,date,onPress}:any):JSX.Element=>{
    /**
     * Simple wrapper to diplay a spending; simply references back an onPress prop
     */
    const SingleSpendingDisplayer=({spendingInfo}:any):JSX.Element=>{
        const {title, price, date}=spendingInfo;
        return (
            <View style={styles.overallContainer}>
            <View style={styles.DetailsContainer} >
                <View style={styles.DetailsColumn}>
                    <Text style={styles.DetailsName}>{title}</Text>
                    <Text style={styles.DetailsDate}>{date}</Text>
                </View>
                <View style={styles.PriceContainer}>
                    <Text>
                        {price}
                    </Text>
                </View>
            </View>
        </View>
        )
    }
    
    return (

        <Pressable 
            style={({pressed})=>(pressed ? styles.pressed:null)}
            onPress={onPress}>
            <SingleSpendingDisplayer spendingInfo={{title,price,date}} />
        </Pressable>
        
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
    },})


export default SpendingsDisplayer