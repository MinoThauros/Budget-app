import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomTextInput from '../components/CustomTextInput'
import { AuthPagesProps } from './AuthPages'
import { Stack, Button } from "@react-native-material/core";

const LoginPage = ({setLogin}:AuthPagesProps) => {
  const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    //call the sign up hooks
    return (
    <View >
        <View>
            <CustomTextInput
            title="Email"
            nextValue={setUsername}
            validationErr={<></>}/>

            <CustomTextInput
                title="Password"
                nextValue={setPassword}
                validationErr={<></>}/>
            <View>
                <Button variant="text" title="Sign in" onPress={()=>setLogin(true)}/>
                <View style={styles.buttonStack}>
                    <Text>New Here ? </Text>
                    <Button 
                        title='Create an account'
                        variant="text"
                        onPress={()=>setLogin(false)}
                        uppercase={false} />
                </View>
            </View>
        </View>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
    buttonStack:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
})