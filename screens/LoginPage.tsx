import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomTextInput from '../components/CustomTextInput'
import { AuthPagesProps } from './AuthPages'
import { Stack, Button } from "@react-native-material/core";
import Colors from '../constants/colors'
import { useLogin } from '../Hooks/AuthReactQ'
import { Validator } from '../API/validator'

const LoginPage = ({setLogin}:AuthPagesProps) => {
    const [email,setEmail]=useState('')
    const {wordValidator,emailValidator}=new Validator()
    const [password,setPassword]=useState('')
    //call the sign up hooks
    //call the sign up hooks
    const {mutate:signup,isSuccess,data}=useLogin()
    const errMessages={
        emailWarning:!emailValidator(email)? <Text style={styles.validationError}>Invalid Email</Text>:<></>,
        passwordValidity:!wordValidator(password)?<Text style={styles.validationError}>Re-enter password</Text>:<></>,
    }

    const [warnings,setWarnings]=useState({
        emailWarning:<></>,
        passwordValidity:<></>,
    })
    
    const submitButton=()=>{
        if (emailValidator(email) && wordValidator(password)){
            console.log('loggin in',{email,password})
            return signup({email,password})

        }
        return setWarnings(errMessages)
            
 

    }
    return (
    <View >
        <View>
            <CustomTextInput
            title="Email"
            nextValue={setEmail}
            validationErr={warnings.emailWarning}/>

            <CustomTextInput
                title="Password"
                nextValue={setPassword}
                validationErr={warnings.passwordValidity}/>
            <View>
                <Button 
                    variant="text" 
                    title="Sign in" 
                    onPress={submitButton}
                    color={Colors.Orange}
                    />
                <View style={styles.buttonStack}>
                    <Text>New Here ? </Text>
                    <Pressable onPress={()=>setLogin(false)}>
                        <Text 
                        style={{color:Colors.Orange,fontWeight: 'bold'}}>
                            Create an account</Text>
                    </Pressable>
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
        justifyContent:'center',
        padding:0,
        margin:0
    },
    validationError:{
        fontSize:12,
        color:'red'

    }
})