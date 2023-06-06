import { View, Text,Button, StyleSheet, Modal} from 'react-native'
import { spending } from '../models/spending';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteExpense,useUpdateExpense} from '../Hooks/ReactQ';
import Spending from '../components/Spending';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import SpendingCard from '../components/SpendingCard';
import { SnackBarContext } from '../states/context/SnackBarContext';

/**
 * Receives a spending object though navigation
 * @param param0 
 * @returns 
 */
const SpendingDetailsReactQ = ({spending,optional}:{spending:spending,optional?:()=>void}) => {
        //useQueryClient  returns the same instance of queryClient
        const queryClient = useQueryClient()
        //const spending=route.params.Spending;
        const [editWindow,setEditWindow]=useState(false);
        const {setSnackBar}=useContext(SnackBarContext)

        const onError=({response}:{response:any})=>{
            console.log(response.data.error)
            setSnackBar({message:response.data.error})
        }
    
        const deleteHandler=({data}:any)=>{
            console.log(data)
            //navigation.goBack()
    
        }
        const {mutate:deleteItem,error:deleteError,isSuccess:deleteSuccess}=useDeleteExpense({
            onSuccess:deleteHandler,
            queryClient,
            onError
        });

        const {mutate:editItem,error:updateErr,isSuccess:updateSuccess}=useUpdateExpense({
            onSuccess:deleteHandler,
            queryClient,
            onError});

        const deleteSpending=async ()=>{
            /** We no longer need to seaprately modify local cache and remote server
            dispatch(DeleteSpending({element:spending}))
            deleteExpense(spending.id)
             */
            console.log('deleting item#',spending.id)
            deleteItem(spending.id??'')
            //navigation.goBack()
        };
    
        const editSpending=()=>{
            //dispatch(EditSpending({element:spending,newElement:newSpending}))
            setEditWindow(true)
        }

        const confirmEdit=({data,id}:{data: spending,id?: string})=>{
            if(!id){
                console.log('no id')
                return setEditWindow(false)
            }
            console.log('editing item#',{...data})
            editItem({updatedExpense:data,id})
            setEditWindow(false)
            return 
        }

        
    
        const Content=()=>{
            var Details:JSX.Element=(
            <View>
                <Spending spending={spending} Delete={deleteSpending} Edit={editSpending} optional={optional}/>
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