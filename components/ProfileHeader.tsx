import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from '../constants/colors';

const ProfileHeader = () => {
  return (
    <View style={{minWidth:'100%'}}>

        <View style={styles.avatarContainer} >
            <Avatar
            label="Jed Watson"
            icon={props => <Icon name="account" {...props} />}
            image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            size={75}
            style={{ margin: 4 }}
            />
        </View>
        
        <View style={styles.metaContainer} >
            <Text>Jed Watson</Text>
            <Text>Software Engineer, Google</Text>
        </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
    metaContainer:{
        backgroundColor:Colors.Tangerine,
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        //marginTop:'5%',
        padding:'2.5%',
    },
    avatarContainer:{
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',    
        //marginTop:'5%',
        //borderTopRightRadius:20,
       // borderTopLeftRadius:20,
        backgroundColor:Colors.Skobeloff,
    },
})