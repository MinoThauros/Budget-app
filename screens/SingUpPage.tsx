import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import CustomTextInput from '../components/CustomTextInput'
import { AuthPagesProps } from './AuthPages'
import { Stack, Button } from "@react-native-material/core";
import Colors from '../constants/colors';
import {Validator}from '../API/validator'

const SingUpPage = ({setLogin}:AuthPagesProps) => {
    const {wordValidator,emailValidator}=new Validator()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    //call the sign up hooks
    const errMessages={
        emailWarning:!emailValidator(email)? <Text style={styles.validationError}>Invalid Email</Text>:<></>,
        passwordMatchWarning:!wordValidator(password)?<Text style={styles.validationError}>Re-enter password</Text>:<></>,
        passwordValidityWarning:password!==confirmPassword?<Text style={styles.validationError}>Invalid Password</Text>:<></>
    }

    const [warnings,setWarnings]=useState({
        emailWarning:<></>,
        passwordMatchWarning:<></>,
        passwordValidityWarning:<></>
    })

    const submitButton=()=>{
        if (emailValidator(email) && wordValidator(password) && password===confirmPassword){
            //call the signup function

        }
        else{
            setWarnings(errMessages)
        }

    }
    
    return (
    <View>
        <View>
            <CustomTextInput
            title="Email"
            nextValue={setEmail}
            validationErr={warnings.emailWarning}/>

            <CustomTextInput
                title="Password"
                nextValue={setPassword}
                validationErr={warnings.passwordValidityWarning}/>

            <CustomTextInput
                title="Confirm Password"
                nextValue={setConfirmPassword}//create a handler for this
                validationErr={warnings.passwordMatchWarning}/>
            <View>
                <Button     
                    title="Signup" 
                    variant="text" 
                    onPress={submitButton}  
                    color={Colors.Orange}/>
                <View style={styles.buttonStack}>
                    <Text>Have an account? </Text>
                    <Pressable onPress={()=>setLogin(true)}>
                        <Text 
                        style={{color:Colors.Orange,fontWeight: 'bold'}}>
                            Log in</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
  )
}

export default SingUpPage

const styles = StyleSheet.create({
    buttonStack:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    validationError:{
        fontSize:12,
        color:'red'

    }
})