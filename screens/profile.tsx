import { Pressable, Text, Touchable, View, StyleSheet, ScrollView } from "react-native";
import PieChartComponent from "../components/PieChart";
import ProfileHeader from "../components/ProfileHeader";
import { Stack, Button, Switch, Divider } from "@react-native-material/core";
import Colors from "../constants/colors";
import { useContext, useState } from "react";
import { AuthContext } from "../states/context/CredentialsContext";
import { AntDesign } from '@expo/vector-icons';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ProfileDetailInstance from "../components/ProfileLink";


const Profile=({navigation,route}:any)=>{
    const {logout}=useContext(AuthContext);
    const [hideMore,setHideMore]=useState(true);

    const button=()=>{
        //navigation.navigate('Recent expenses');
        console.log('logout');//tigger a message to the user that they are logging out
        logout();

    }

    const Details=()=>{
        return(
            <View>
                <ProfileDetailInstance ButtonTitle="Change password"/>
                <ProfileDetailInstance ButtonTitle="Delete account"/>
                <ProfileDetailInstance ButtonTitle="Terms and conditions"/>
                <ProfileDetailInstance ButtonTitle="Privacy policy"/>
                <ProfileDetailInstance ButtonTitle="About"/>
                <ProfileDetailInstance ButtonTitle="Contact us"/>
                <ProfileDetailInstance ButtonTitle="Help"/>
            </View>
                   
        )}

    return (
        <View style={styles.overallContainer}>
            
                <View style={styles.bioZone}>
                    <ProfileHeader/>
                </View>
                <ScrollView>
                <View style={{minWidth:'100%'}}>
                    <PieChartComponent/>
                </View>
                <Stack style={{...styles.optionsContainer}}>
                    <Button
                        title={hideMore?"Less Options":"More Options"}
                        trailing={
                            <AntDesign 
                                name={hideMore? "downcircle":"rightcircle" }
                                size={24} 
                                color="black" />}
                        //loadingIndicator="⏰"
                        loadingIndicatorPosition="trailing"
                        onPress={()=>{setHideMore(!hideMore)}}
                    />
                    {hideMore&&<Details/>}
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
        //marginTop:0
        
    },
    button:{
        maxWidth:'30%',
        alignSelf:'center',
        marginTop:'5%',
        borderColor:'red',
    },
    optionsContainer:{
        flex:1,
        shadowColor: "#000",
        borderRadius: 10,
        backgroundColor:'white',
        marginHorizontal:'2%',
        shadowBorderRadius:10,
        shadowOpacity: 0.50,
    },
    optionsButton:{

    }
})