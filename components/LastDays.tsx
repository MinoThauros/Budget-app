import { spending } from '../models/spending';
import { View,Text } from "react-native"
import { StyleSheet } from 'react-native';


const LastDaysTotal=({total}:{total:number}):JSX.Element=>{
    //have a total and display it

    


    

    const LastDaysDisplay=():JSX.Element=>{

        return <Text  style={styles.textColor}>sum is {total}</Text>
    }

    const ContentManager=()=>{
        let content=(
            <View>
                <Text style={styles.textColor}>You do not have any spending yet</Text>
            </View>
            )
        if (total!=0){
            content=(
            <View>
                <LastDaysDisplay/>
            </View>);

        };
        return content

    };
    return (
        <View style={styles.overallContainer}>
            <ContentManager/>
        </View>)
}

const styles=StyleSheet.create({
    overallContainer:{
        backgroundColor:"#8f34eb",
        borderRadius:18,
        padding:10,
        marginHorizontal:8,
        marginVertical:5,
        marginTop:10,
        height:40,
        justifyContent:'center'
    },
    textColor:{
        fontWeight:'bold',
        color:'white'
    }


})

export default  LastDaysTotal