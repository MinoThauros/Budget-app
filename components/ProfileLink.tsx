import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Divider } from '@react-native-material/core'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'
import * as WebBrowser from 'expo-web-browser';

const ProfileDetailInstance = ({ButtonTitle,Link}:{ButtonTitle:string,Link?:string}) => {

    const [result, setResult] = useState(null);
    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://expo.dev');
        setResult(result as any);
      };
  return(
    <View>
        <Button variant="text" onPress={_handlePressButtonAsync} title={ButtonTitle} style={{alignSelf:'flex-start'}}/>
        <Divider style={{ marginTop:10 }} />
    </View>        
)}

export default ProfileDetailInstance