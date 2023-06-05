import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ColorCategory from './ColorCategory'

const ChartLegends = ({sliceColor}:{sliceColor:string[]}) => {
  return (
    <View style={styles.legends}>
            <ColorCategory CatLabel="Food" BoxColor={sliceColor[0]}/>
            <ColorCategory CatLabel="Fitness" BoxColor={sliceColor[1]}/>
            <ColorCategory CatLabel="Housing" BoxColor={sliceColor[2]}/>
            <ColorCategory CatLabel="Transportation" BoxColor={sliceColor[3]}/>
            <ColorCategory CatLabel="Healthcare" BoxColor={sliceColor[4]}/>
            <ColorCategory CatLabel="Entertainment" BoxColor={sliceColor[5]}/>
            <ColorCategory CatLabel="Personal" BoxColor={sliceColor[6]}/>
            <ColorCategory CatLabel="Insurance and Pensions" BoxColor={sliceColor[7]}/>

        </View>
  )
}

export default ChartLegends

const styles = StyleSheet.create({
    legends:{
        padding:'2.5%',
        marginHorizontal:'2.5%',
    },
})