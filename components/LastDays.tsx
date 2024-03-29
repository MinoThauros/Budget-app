import { spending } from '../models/spending';
import { View,Text } from "react-native"
import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';


const LastDaysTotal=({total}:{total:number}):JSX.Element=>{
    const LastDaysDisplay=():JSX.Element=>{

        return (
            <View style={styles.recapBox}>
                <Text  style={styles.textColor}>Last 7 days</Text>
                <Text style={{...styles.totalColor, fontStyle:'italic',fontWeight:'bold', fontSize:18}}> ${total}</Text>
            </View>
        
        )
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
        backgroundColor:Colors.Skobeloff,
        borderRadius:5,
        padding:10,//marge dans l'element
        marginHorizontal:8,
        marginTop:10,
        height:40,
        justifyContent:'center',
        overflow:'hidden'
    },
    textColor:{
        color:'white',
        textAlign:'center'
    },
    recapBox:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    totalColor:{
        color:Colors.Tangerine,
        textAlign:'center'
    }


})

export default  LastDaysTotal