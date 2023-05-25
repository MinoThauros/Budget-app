import { View, Text,Button, StyleSheet} from 'react-native'
import { spending } from '../models/spending';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteExpense,useUpdateExpense} from '../Hooks/ReactQ';
import Spending from '../components/Spending';
import { useNavigation } from '@react-navigation/native';

const SpendingDetailsReactQ = ({navigation,route}:any) => {
    const {spending}=route.params

    const onSuccess=({data}:{data:spending[]})=>{
        console.log(data)
        navigation.goBack()

    };

    const queryClient = useQueryClient();

    const {mutate:deleteItem,error:deleteError,isSuccess:deleteSuccess}=useDeleteExpense({onSuccess,queryClient});


    const deleteSpending= ()=>{
        return deleteItem(spending.id)
    }
    //will receive the item.id from this component
    const EditSpending= ()=>{
        //navigate to the other component while passing the item.id
        //display that item in the other component
        //update that item in the other component
        //--> that component handles the update
        navigation.navigate('EditItem',{
            spending,
        })


        
    }
    

    
    const Content=()=>{
        var Details:JSX.Element=(
        <View>
            <Spending spending={spending} Delete={deleteSpending} Edit={EditSpending}/>
        </View>
            
        )
        if (deleteSuccess){
            Details=(
                <View style={{flex:1}}>
                    <Text>Deleted Spending</Text>
                </View>
            )
        }
        if (deleteError){
            Details=(
                <View style={{flex:1}}>
                    <Text>Deletion failed</Text>
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
}


export default SpendingDetailsReactQ