import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Text, Stack, HStack } from "@react-native-material/core";
import Colors from '../constants/colors';

const LogoDisplayer = () => {
  return (
    <Stack style={styles.LogoBox}>
        <View style={styles.imageContainer}>
            <Image 
                source={require('../assets/TimaTechLogo.png')} 
                style={styles.image} 
                //resizeMode="center" 
                resizeMethod='scale'/>
        </View>
      <Text  variant="h2" style={styles.text}>TimaTech.</Text>
    </Stack>
  )
}

export default LogoDisplayer

const styles = StyleSheet.create({
    LogoBox:{
        //flexDirection:'rocw',
        alignItems:'center',
        justifyContent:'center',
        //margin:'5%'
        
    },
    image:{

    },
    text:{
        color:Colors.Grey,
        fontWeight:'bold',

    },
    imageContainer:{
        //backgroundColor:'black',
        //padding:'5%',
        

    }

})