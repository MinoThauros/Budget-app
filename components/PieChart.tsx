import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PieChart  from 'react-native-pie-chart' //https://www.npmjs.com/package/react-native-pie-chart
import ChartLegends from './ChartLegends';
import { useGetExpenses } from '../Hooks/ReactQ';
import { Categories, spending } from '../models/spending';
import GetChartObj, {sliceColor} from '../utils/ChartUtils';

const PieChartComponent = () => {
  type CategoryTypes=typeof Categories[number]
  const [chartData,setChartData]=useState<{category:CategoryTypes,total:number,catColor: typeof sliceColor[number] }[]>([
    {category:'Food',total:0,catColor:sliceColor[0]},
    {category:'Clothes',total:1,catColor:sliceColor[1]},
    {category:'Housing',total:0,catColor:sliceColor[2]},
    {category:'Transportation',total:0,catColor:sliceColor[3]},
    {category:'Utilities',total:0,catColor:sliceColor[4]},
    {category:'Insurance',total:0,catColor:sliceColor[5]},
    {category:'Health',total:0,catColor:sliceColor[6]},
    {category:'Personal',total:0,catColor:sliceColor[7]},
  ])
    const {data,isError}=useGetExpenses({
      onSuccess:({data})=>setChartData(GetChartObj({spendings:data}))})
    

    //fetch total for each category using a getCategoryTotal function
    //return an object with the total for each category, and the category name, and the color
    const widthAndHeight = 250
    const series = [25, 20, 5, 33, 17,12,22]//total for each category
    

    return (
      <View style={styles.overallContainer}>
        <View style={styles.ChartContainer}>
        <View>
             <Text>Spending overview:</Text>
        </View>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={chartData.map((item)=>item['total'])}
            sliceColor={chartData.map((item)=>item['catColor'])}
            coverRadius={0.45}
            coverFill={'#FFF'}
            style={{ marginTop: '2.5%' }}
           />
        </View>
        <ChartLegends sliceColor={chartData.map((item)=>item['catColor'])}/>
      </View>
    )
  }


export default PieChartComponent

const styles = StyleSheet.create({
    ChartContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: '5%',
    },
    title: {
        fontSize: 24,
        margin: 10,
    },
    legends:{
        padding:'2.5%',
        marginHorizontal:'2.5%',
    },
    overallContainer:{
        flex:1,
        shadowColor: "#000",
        borderRadius: 10,
        backgroundColor:'white',
        marginHorizontal:'2%',
        margin:'4%',
        padding:'2%',
        shadowBorderRadius:10,
        shadowOpacity: 0.50,
    }
  })