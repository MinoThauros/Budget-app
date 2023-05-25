import { View, Text,Button, StyleSheet} from 'react-native'
import { spending } from '../models/spending';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteExpense,useUpdateExpense} from '../Hooks/ReactQ';
import Spending from '../components/Spending';
import { useNavigation } from '@react-navigation/native';

const SpendingDetailsReactQ = ({navigation,route}:any) => {
        //useQueryClient  returns the same instance of queryClient
        const queryClient = useQueryClient()
        const spending=route.params.Spending;
    
        const deleteHandler=({data}:any)=>{
            console.log(data)
            navigation.goBack()
    
        }
    
        const {mutate:deleteItem,error:deleteError,isSuccess:deleteSuccess}=useDeleteExpense({onSuccess:deleteHandler,queryClient});
    
        
            
        const deleteSpending=async ()=>{
            /**
            dispatch(DeleteSpending({element:spending}))
            deleteExpense(spending.id)
             */
            console.log('deleting item#',spending.id)
            return deleteItem(spending.id)
        };
    
        const editSpending=(newSpending:spending)=>{
            //dispatch(EditSpending({element:spending,newElement:newSpending}))
        }
    
        const Content=()=>{
            var Details:JSX.Element=(
            <View>
                <Spending spending={spending} Delete={deleteSpending} Edit={()=>{}}/>
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
                <Content/>
            </View>
            
        )
    
    };


export default SpendingDetailsReactQ