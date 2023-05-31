import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ProfileHeader = () => {
  return (
    <View style={{minWidth:'100%'}}>

        <View style={styles.avatarContainer} >
            <Avatar
            label="Jed Watson"
            icon={props => <Icon name="account" {...props} />}
            image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            size={100}
            style={{ margin: 4 }}
            />
        </View>
        
        <View style={styles.metaContainer} >
            <Text>Jed Watson</Text>
            <Text>Software Engineer</Text>
        </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
    metaContainer:{
        backgroundColor:'red',
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        //marginTop:'5%',
        padding:'2.5%',
    },
    avatarContainer:{
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',    
        marginTop:'5%'
    },
})