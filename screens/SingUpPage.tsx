import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import CustomTextInput from '../components/CustomTextInput'
import { AuthPagesProps } from './AuthPages'
import { Stack, Button } from "@react-native-material/core";

const SingUpPage = ({setLogin}:AuthPagesProps) => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    //call the sign up hooks
    return (
    <View>
        <View>
            <CustomTextInput
            title="Email"
            nextValue={setUsername}
            validationErr={<></>}/>

            <CustomTextInput
                title="Password"
                nextValue={setPassword}
                validationErr={<></>}/>

            <CustomTextInput
                title="Confirm Password"
                nextValue={setConfirmPassword}//create a handler for this
                validationErr={<></>}/>
            <View>
                <Button title="Signup" variant="text" onPress={()=>setLogin(true)}/>
                <View style={styles.buttonStack}>
                    <Text>Have an account? </Text>
                    <Button 
                        title='Sign in' 
                        onPress={()=>setLogin(true)}
                        variant='text'
                        uppercase={false} 
                        />
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
    }
})