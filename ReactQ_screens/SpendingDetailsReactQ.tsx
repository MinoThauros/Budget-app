import { View, Text,Button, StyleSheet} from 'react-native'
import { spending } from '../models/spending';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteExpense } from '../Hooks/ReactQ';
import Spending from '../components/Spending';

const SpendingDetailsReactQ = ({navigation,route}:any) => {
    const {spending}=route.params

    const onSuccess=({data}:{data:spending[]})=>{
        console.log(data)
        navigation.goBack()

    }
    const queryClient = useQueryClient();

    const {mutate,error,isSuccess}=useDeleteExpense({onSuccess,queryClient});


    const deleteSpending= ()=>{
        return mutate(spending.id)
    }
    

    
    const Content=()=>{
        var Details:JSX.Element=(
        <View>
            <Spending spending={spending} Delete={deleteSpending} Edit={()=>{}}/>
        </View>
            
        )
        if (isSuccess){
            Details=(
                <View style={{flex:1}}>
                    <Text>Deleted Spending</Text>
                </View>
            )
        }
        if (error){
            Details=(
                <View style={{flex:1}}>
                    <Text>Something wrong happened; try again later</Text>
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