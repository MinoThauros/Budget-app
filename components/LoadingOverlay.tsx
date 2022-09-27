import { View, ActivityIndicator, StyleSheet } from "react-native"

const LoadingOvelay =()=>{
    return <View style={styles.container}>
        <ActivityIndicator size="large" color="white"/>
    </View>
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:"#521e87",
    }
})

export default LoadingOvelay