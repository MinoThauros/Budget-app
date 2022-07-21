import { Text, View, StyleSheet, Modal, Button } from 'react-native';
import { useLayoutEffect } from "react";
import SpendingCard from "../components/SpendingCard";
import { useState } from 'react';

const SpendingInput=({navigation,route}:any)=>{
    const [overlayVisibility,setOverlayVisiblity]=useState(true as boolean);
    
    const button=()=>{
        navigation.navigate('Components');
        console.log('movin')
        setOverlayVisiblity(!overlayVisibility)
    };

    return (
        <Modal style={styles.overallView} visible={overlayVisibility}>
            <View style={styles.overallView}>
                <SpendingCard onPress={button}/>
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