import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PieChart  from 'react-native-pie-chart' //https://www.npmjs.com/package/react-native-pie-chart
import { FlashList } from "@shopify/flash-list";
import ColorCategory from './ColorCategory';
import Colors from '../constants/colors';
import ChartLegends from './ChartLegends';
const PieChartComponent = () => {
    //need to interact with react query
    //we need to get the data from the server
    //we need to restrict the categories
    const widthAndHeight = 250
    const series = [25, 20, 5, 33, 17,12,22]//total for each category
    const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00',Colors.Skobeloff,Colors.Columbia_blue]

    return (
      <View style={styles.overallContainer}>
        <View style={styles.ChartContainer}>
        <View>
             <Text>Spending overview:</Text>
        </View>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
            style={{ marginTop: '2.5%' }}
           />
        </View>
        <ChartLegends sliceColor={sliceColor}/>
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