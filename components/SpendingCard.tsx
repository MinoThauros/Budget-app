import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import { spending } from "../models/spending";


const SpendingCard=({onPress}:any):JSX.Element=>{




    return (
        <View style={styles.overallContainer}>
            <View>
                <View>
                    <Text style={styles.titles}>Amount: </Text>
                    <TextInput style={styles.textInputA}></TextInput>
                </View>
                <View>
                    <Text style={styles.titles}>Category: </Text>
                    <TextInput style={styles.textInputA}></TextInput>
                </View>
                <View>
                    <Text style={styles.titles}>Date: </Text>
                    <TextInput style={styles.textInputA}></TextInput>
                </View>
                <View>
                    <Button title='go back' onPress={onPress}/>
                </View>
            </View>
        </View>)
     
};

const styles=StyleSheet.create({
    overallContainer:{
        backgroundColor:"#521e87",
        borderRadius:18,
        padding:10,
        margin:20,
        height:'50%',
        width:'75%',
        justifyContent:'center'
    },

    textInputA:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
        borderRadius:8
    },
    titles:{
        fontWeight:'bold',
        color:'white'

    },

    
})


export default SpendingCard