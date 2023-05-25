import { View, Text,Button, StyleSheet, Modal} from 'react-native'
import { spending } from '../models/spending';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteExpense,useUpdateExpense} from '../Hooks/ReactQ';
import Spending from '../components/Spending';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SpendingCard from '../components/SpendingCard';

const SpendingDetailsReactQ = ({navigation,route}:any) => {
        //useQueryClient  returns the same instance of queryClient
        const queryClient = useQueryClient()
        const spending=route.params.Spending;
        const [editWindow,setEditWindow]=useState(false);
    
        const deleteHandler=({data}:any)=>{
            console.log(data)
            navigation.goBack()
    
        }
        const {mutate:deleteItem,error:deleteError,isSuccess:deleteSuccess}=useDeleteExpense({onSuccess:deleteHandler,queryClient});

        const {mutate:editItem,error:updateErr,isSuccess:updateSuccess}=useUpdateExpense({onSuccess:deleteHandler,queryClient});

        const deleteSpending=async ()=>{
            /** We no longer need to seaprately modify local cache and remote server
            dispatch(DeleteSpending({element:spending}))
            deleteExpense(spending.id)
             */
            console.log('deleting item#',spending.id)
            return deleteItem(spending.id)
        };
    
        const editSpending=()=>{
            //dispatch(EditSpending({element:spending,newElement:newSpending}))
            setEditWindow(true)
        }

        const confirmEdit=({data,id}:{data: spending,id?: string})=>{
            if(!id){
                console.log('no id')
                return
            }
            editItem({updatedExpense:data,id})
            return setEditWindow(false)
        }

        
    
        const Content=()=>{
            var Details:JSX.Element=(
            <View>
                <Spending spending={spending} Delete={deleteSpending} Edit={editSpending}/>
            </View>
                
            )
            if (!spending){
                Details=(
                    <View style={{flex:1}}>
                        <Text>Deleted Spending</Text>
                    </View>
                )
            }
            return Details
        }
        
        return (
            <View >
                <Modal visible={editWindow} animationType='slide'>
                    <SpendingCard initialValues={spending} confirm={confirmEdit} id={spending.id} optionalButton={()=>setEditWindow(false)}/>
                </Modal>
                <Content/>
            </View>
            
        )
    
    };


export default SpendingDetailsReactQ