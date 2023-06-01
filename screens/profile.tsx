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
            
                <View style={styles.bioZone}>
                    <ProfileHeader/>
                </View>
                <ScrollView>
                <View style={{minWidth:'100%'}}>
                    <PieChartComponent/>
                </View>
                <Stack style={{margin:'5%'}}>
                    <Pressable>
                        <Text>More</Text>
                    </Pressable>


                </Stack>
                
                <Button 
                    title="Log out"  
                    variant="outlined"  
                    onPress={button}
                    style={styles.button}
                    loading={true}
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
        backgroundColor:Colors.Slate_blue,
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