import { View, Text,Button, StyleSheet} from 'react-native'
import { spending } from '../models/spending';
import { useQueryClient } from '@tanstack/react-query';

const SpendingDetailsReactQ = ({navigation,route}:any) => {

    const queryClient = useQueryClient();
    

    return(
        <View>
            <Text>Spending detail using React Query</Text>
        </View>
    )
};


export default SpendingDetailsReactQ