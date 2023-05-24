import { View, Text, Modal, StyleSheet } from 'react-native'
import {useContext} from 'react'
import { spending } from '../models/spending'
import SpendingCard from '../components/SpendingCard'
import { OverlayContext } from '../states/context/InputOverlayContext'

const SpendingInputReactQ = () => {
    //import react mutator;
    //pass it to the component
    //get modal context
    const {visible}=useContext(OverlayContext);

    const submitAction=({data}:{data:spending})=>{

        
    }

    const cancelSubmit=()=>{

    }

    return (
        <Modal
            style={styles.overallView} 
            visible={visible} 
            animationType={'fade'}
            transparent={true}>
            <SpendingCard confirm={submitAction} optionalButton={cancelSubmit}/>
        </Modal>
        
    )
}

export default SpendingInputReactQ

const styles=StyleSheet.create({
    overallView:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent:'center',
        alignItems:'center',
    },
})