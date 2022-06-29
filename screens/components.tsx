import { Button, Text, View, StyleSheet } from "react-native";
import { spending } from "../models/spending";

const Components=({navigation,route}:any)=>{

    const button=()=>{
        navigation.navigate('Recent expenses');
        

    }

    const PriceDisplayer=({title,price,category,date}:spending,navigation:any):JSX.Element=>{
        return (
            <View style={styles.overallContainer}>
                <View style={styles.DetailsContainer} >
                    <View style={styles.DetailsColumn}>
                        <Text>{title}</Text>
                        <Text>{date}</Text>
                    </View>
                    <View style={styles.PriceContainer}>
                        <Text>
                            {price}
                        </Text>
                    </View>
                </View>
{/*                <View>
                    <Text>
                        {category}
                    </Text>
        </View>*/}
            </View>
        )
    }

    return (
        <View>
            <PriceDisplayer title={'Test'} price={24} category={'food'} date={'today'}/>
            <Button title="navigate test" onPress={button}/>
        </View>
    )
}

const styles=StyleSheet.create({
    overallContainer:{
        backgroundColor:"#521e87",
        borderRadius:12,
        padding:10,
        margin:20,
        height:60
    },
    DetailsContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    DetailsColumn:{
        paddingEnd:220

    },
    PriceContainer:{
        borderRadius:6,
        backgroundColor:'white',
        height:'80%',
        width:'20%',
        alignItems:'center',
        paddingTop:5,
        marginTop:4
    },
    DetailsText:{

    },
    PriceTexy:{

    }
})

export default Components;