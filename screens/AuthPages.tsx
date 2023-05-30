import { View, Text, StyleSheet } from 'react-native'
import CustomTextInput from '../components/CustomTextInput'
import { useState } from 'react'
import { Button } from '@react-native-material/core'
import LoginPage from './LoginPage'
import SignupPage from './SingUpPage'

export type AuthPagesProps={
    setLogin:(value: React.SetStateAction<boolean>) => void,
}

//conditionally displays the login or signup page
const AuthPages = () => {
    const [login,setLogin]=useState(true)
        return(
            <View>
                {login && <LoginPage setLogin={setLogin}/>}
                {!login && <SignupPage setLogin={setLogin}/>}
            </View>
        )};

export default AuthPages

const styles = StyleSheet.create({
    overallView:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
    },
})