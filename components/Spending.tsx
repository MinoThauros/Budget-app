import { View,Text, StyleSheet,Button } from "react-native"
import { spending } from '../models/spending';
import { Stack, IconButton, HStack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const Spending=({spending,Delete,Edit,optional}:{spending:spending,Delete:()=>void,Edit:()=>void,optional?:()=>void})=>{
    const {title,date,price,category}=spending;
    return(
        <View style={styles.overallContainer}>
            <HStack m={4} spacing={6} style={styles.titleBox}>
                <Text style={styles.titleLetters}>{title}</Text>
                <View style={styles.CircleContainer}>
                    <IconButton icon={<Icon name="delete" size={20} color="black"/>} onPress={Delete}/>
                </View>
                
            </HStack>
            <View style={styles.DetailsBox}>
                <View style={styles.DetailsBoxLeft}>
                    <Text style={styles.price}>${price}</Text>
                    <Text  style={styles.category}>Category</Text>
                </View>
                <View style={styles.DetailsBoxRight}>
                    <View style={styles.dateBox}>
                        <Text style={styles.date}>THU</Text>
                    </View>
                    <View style={styles.CircleContainer2}>
                        <IconButton icon={<Icon name="pen" size={20} color="black"/>} onPress={Edit}/>
                    </View>
                </View>
            </View>
            <Button title="Hide" onPress={optional}/>
        </View>
    )
};

const styles=StyleSheet.create({
    overallContainer:{
        backgroundColor:"purple",
        borderRadius:6,
        margin:5,
        marginHorizontal:15,
        marginVertical:5,
        justifyContent:'center',
        overflow:'hidden',
        paddingBottom:5,
        
    },
    titleBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:'1%',
        marginHorizontal:'5%'
    },
    titleLetters:{
        fontWeight:'bold',
        fontSize:22,
        margin:5,
        color:'white'
    },
    DetailsBox:{
        //backgroundColor:'yellow',
        padding:'1%',
        marginHorizontal:'5%',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
        alignItems:'center',
    },
    price:{
        //fontStyle:'italic',
        fontSize:30,
        alignSelf:'center',
        justifyContent:'center',
        //backgroundColor:'green',
    },
    category:{

    },
    dateBox:{
        backgroundColor:'white',
        borderRadius:5,
        paddingHorizontal:5,
        marginHorizontal:2,
    },
    DetailsTextRight:{
        fontWeight:'bold',
        fontSize:20,
    },
    DetailsBoxRight:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //padding:'1%',
        //marginHorizontal:'5%'
    },
    date:{
        padding:'1%',
        //marginHorizontal:'5%'
    },

    DetailsBoxLeft:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    ButtonBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:'1%',
        marginHorizontal:'5%'
        
    },
    CircleContainer:{
        backgroundColor:'red',
        borderRadius:30,
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.26,
    },
    CircleContainer2:{
        backgroundColor:'red',
        borderRadius:55,
        height:55,
        width:55,
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.26,
        marginLeft:4
    }

})

export default Spending;

