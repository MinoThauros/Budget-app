import { Text, View,StyleSheet, Modal } from "react-native";
import { useLayoutEffect } from "react";

const SpendingInput=({navigation,route}:any)=>{
    return (
        <Modal style={styles.overallView}>
            <View style={styles.overallView}>
            <Text>Spending input</Text>
        </View>
        </Modal>
        
    )
}

export default SpendingInput;

const styles=StyleSheet.create({
    overallView:{
        flex:1,
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    }
})