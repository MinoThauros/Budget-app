import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState,useContext } from 'react'
import CustomTextInput from '../components/CustomTextInput'
import { AuthPagesProps } from './AuthPages'
import { Stack, Button,Snackbar } from "@react-native-material/core";
import Colors from '../constants/colors';
import { useLogin } from '../Hooks/AuthReactQ'
import { Validator } from '../API/validator'
import { useQueryClient } from '@tanstack/react-query';
import { AuthContext } from '../states/context/CredentialsContext';
import SnackBar from '../components/SnackBar'
import { SnackBarContext } from '../states/context/SnackBarContext'

const LoginPage = ({setLogin}:AuthPagesProps) => {
    const [email,setEmail]=useState('')
    const {wordValidator,emailValidator}=new Validator()
    const [password,setPassword]=useState('')
    const {authenticate}=useContext(AuthContext)
    const {setSnackBar}=useContext(SnackBarContext)

    const onError=({response}:{response:any})=>{
        setSnackBar({message:response.data.error.message})
    }
    
    const onLogin=({idToken}:{idToken:string})=>{
        authenticate({token:idToken})
    }
    const {mutate:signup,isSuccess,data,error,isError,status}=useLogin({onSuccess:onLogin,onError:onError})
    
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

    if(isError){
        console.log('error',error.response.data.error.message)
    }
    return (
        <View style={{minHeight:'40%',  marginTop:'5%'}}>
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
                    color={Colors.Tangerine}
                    />
                <View style={styles.buttonStack}>
                    <Text>New Here ? </Text>
                    <Pressable onPress={()=>setLogin(false)}>
                        <Text 
                        style={{color:Colors.Tangerine,fontWeight: 'bold'}}>
                            Create an account</Text>
                    </Pressable>
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
        color:Colors.Skobeloff

    }
})