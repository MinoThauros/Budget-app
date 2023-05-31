import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Box, HStack } from "@react-native-material/core";

const ColorCategory = ({CatLabel,BoxColor}:{CatLabel:string,BoxColor:string}) => {
  return (
    <HStack spacing={4} style={styles.container}>
      <Box w={26} h={13} m={4} style={{ backgroundColor: BoxColor,borderRadius:2}} />
      <Text>{CatLabel}</Text>
    </HStack>
  )
}
export default ColorCategory

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})