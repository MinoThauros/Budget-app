import { View, Text, Modal, StyleSheet } from 'react-native'
import {useContext} from 'react'
import { spending } from '../models/spending'
import SpendingCard from '../components/SpendingCard'
import { OverlayContext } from '../states/context/InputOverlayContext'
import { useStoreExpense } from '../Hooks/ReactQ'
import { useQueryClient,QueryClient } from '@tanstack/react-query'
import { SnackBarContext } from '../states/context/SnackBarContext'

const SpendingInputReactQ = () => {
    //import react mutator;
    //pass it to the component
    //get modal context
    const {visible,toogleOverlay}=useContext(OverlayContext);
    const {setSnackBar}=useContext(SnackBarContext)

    //useQueryClient  returns the same instance of queryClient
    const queryClient = useQueryClient()

    const {mutate}=useStoreExpense({onSuccess:toogleOverlay,queryClient,onError:({response}:{response:any})=>{
        console.log(response.data.error)
        toogleOverlay()
        setSnackBar({message:response.data.error})
    }})

    const submitAction=({data}:{data:spending})=>{
        mutate(data)
    }
    const cancelSubmit=()=>{
        toogleOverlay()
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