import { Pressable, Text, Touchable, View, StyleSheet, ScrollView } from "react-native";
import PieChartComponent from "../components/PieChart";
import ProfileHeader from "../components/ProfileHeader";
import { Stack, Button, Switch } from "@react-native-material/core";
import Colors from "../constants/colors";

const Profile=({navigation,route}:any)=>{

    const button=()=>{
        navigation.navigate('Recent expenses');

    }

    return (
        <View style={styles.overallContainer}>
            <ScrollView>
                <View style={styles.bioZone}>
                    <ProfileHeader/>
                </View>
                <View>
                    <PieChartComponent/>
                </View>
                
                <Button 
                    title="Log out"  
                    variant="outlined"  
                    onPress={button}
                    style={styles.button}
                    />

            </ScrollView>
            
        </View>
    )
}

export default Profile;
const styles = StyleSheet.create({
    overallContainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:Colors.Grey,
    },
    bioZone:{
        alignItems:'flex-start',
        justifyContent:'center',
        marginTop:0
        
    },
    button:{
        maxWidth:'30%',
        alignSelf:'center',
        marginTop:'5%',
        borderColor:'red',
    }
})