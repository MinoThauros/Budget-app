import { View,Text, StyleSheet } from "react-native"
import { spending } from '../models/spending';
const Spending=({spending}:{spending:spending})=>{
    const {title,date,price,category}=spending;
    return(
        <View style={styles.overallContainer}>
            <View style={styles.titleBox}>
                <Text>{title}</Text>
            </View>
            <View style={styles.DetailsBox}>
                <View>
                    <Text>{date}</Text>
                    <Text>{price}</Text>
                </View>
                <View>
                    <Text>{category}</Text>
                </View>
            </View>
            
        </View>
    )
};

const styles=StyleSheet.create({
    overallContainer:{
        backgroundColor:"#521e87",
        borderRadius:6,
        marginHorizontal:15,
        marginVertical:5,
        justifyContent:'center'
    },
    titleBox:{
        backgroundColor:'white',
        borderRadius:5,
        width:'100%',
    },
    titleLetters:{
        fontWeight:'bold',
    },
    DetailsBox:{
        backgroundColor:'yellow',
    },
    DetailsTextLeft:{
        fontStyle:'italic',
    },
    DetailsTextRIght:{
        fontWeight:'bold',
        fontSize:20,
    }

})

export default Spending;

