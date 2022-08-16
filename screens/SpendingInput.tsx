import { Text, View, StyleSheet, Modal, Button } from 'react-native';
import { useLayoutEffect } from "react";
import SpendingCard from "../components/SpendingCard";
import { useState } from 'react';
import { OverlayContext } from '../states/context/InputOverlayContext';
import { useContext } from "react";

const SpendingInput=()=>{
    //const [overlayVisibility,setOverlayVisiblity]=useState(true as boolean);
    //lets hook the visibility of the modal to the global context
    const Overlay=useContext(OverlayContext);
    const visible:boolean=Overlay.visible;//binding the state to local variables
  
    const pressed=()=>{
      Overlay.toogleOverlay();

  }
  //this context needs to work in tandem with add button
    
    


    return (
        <Modal 
            style={styles.overallView} 
            visible={visible} 
            animationType={'slide'}
            transparent={true}
            >
            <View style={styles.overallView}>
                <SpendingCard onPress={pressed}/>
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