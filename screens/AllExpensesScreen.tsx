import { Button, Text, View } from "react-native";

const AllExpenses=({navigation,route}:any)=>{

    const button=()=>{
        navigation.navigate('Recent expenses');
        

    }

    return (
        <View>
            <Text>All expenses</Text>
            <Button title="navigate test" onPress={button}/>
        </View>
    )
}

export default AllExpenses;