import { spending } from '../models/spending';
import { View,Text } from "react-native"
import { StyleSheet } from 'react-native';


const LastDaysTotal=({total}:{total:number}):JSX.Element=>{
    //have a total and display it

    


    

    const LastDaysDisplay=():JSX.Element=>{

        return <Text>sum is {total}</Text>
    }

    const ContentManager=()=>{
        let content=<View><Text>You do not have any spending yet</Text></View>
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
        backgroundColor:'purple'
    }


})

export default  LastDaysTotal