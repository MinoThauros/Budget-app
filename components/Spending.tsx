import { View,Text, StyleSheet,Button } from "react-native"
import { spending } from '../models/spending';
const Spending=({spending,Delete,Edit}:{spending:spending,Delete:()=>void,Edit:()=>void})=>{
    const {title,date,price,category}=spending;
    return(
        <View style={styles.overallContainer}>
            <View style={styles.titleBox}>
                <Text style={styles.titleLetters}>{title}</Text>
            </View>
            <View style={styles.DetailsBox}>
                <View>
                    <Text style={styles.DetailsTextLeft}>{date}</Text>
                    <Text style={styles.DetailsTextLeft}>{price}$</Text>
                </View>
                <View style={styles.DetailsBoxRight}>
                    <Text  style={styles.DetailsTextRight}>{category}</Text>
                </View>
            </View>

            <View style={styles.ButtonBox}>
                    <Button title="Delete" onPress={Delete}/>
                    <Button title="Edit" onPress={Edit}/>
            </View>
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
        overflow:'hidden'
        
    },
    titleBox:{
        backgroundColor:'white',
        borderRadius:5,
        margin:2,
        alignItems:'center'
    },
    titleLetters:{
        fontWeight:'bold',
        fontSize:22,
        margin:5
    },
    DetailsBox:{
        backgroundColor:'yellow',
        margin:10,
        padding:2,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5
    },
    DetailsTextLeft:{
        fontStyle:'italic',
        fontSize:18
    },
    DetailsTextRight:{
        fontWeight:'bold',
        fontSize:20,
    },
    DetailsBoxRight:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'

    },
    ButtonBox:{
        backgroundColor:'orange',
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        paddingHorizontal:20,
        
    }

})

export default Spending;

