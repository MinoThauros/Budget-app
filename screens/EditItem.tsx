import { View, Text } from 'react-native'
import React from 'react'
import {useContext} from 'react'
import { spending } from '../models/spending'
import SpendingCard from '../components/SpendingCard'

const EditItem = () => {
    //import react mutator; will receive the item.id and newItem from navigation


    const editItem=({data,id}:{data:spending,id?:string})=>{

        
    }

    const cancelSubmit=()=>{

    }
    return (
        <View>
            <SpendingCard confirm={editItem} optionalButton={cancelSubmit}/>
        </View>
        
    )
}

export default EditItem