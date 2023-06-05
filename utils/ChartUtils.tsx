import Colors from '../constants/colors';
import { Categories, spending } from '../models/spending';

type CategoryTypes=typeof Categories[number]
export const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00',Colors.Skobeloff,Colors.Columbia_blue, Colors.Slate_blue]

const getCategoryTotal=({category,spendings}:{category : CategoryTypes,spendings:spending[]})=>{
    //get all the spendings for a given category
    const moddedList=spendings.filter((spending)=>spending.category===category)
    const total=moddedList.reduce((prev,curr)=>prev+curr.price,0)
    return {total,category}
  }
const GetChartObj=({spendings}:{spendings:spending[]})=>{
let totalObj:{category:CategoryTypes,total:number}[]=[]
for (let category of Categories){  //will always return an array of length 8
    totalObj.push(getCategoryTotal({category,spendings}))
}
return totalObj.map((item,index)=>{
    return {
    ...item,
    catColor:sliceColor[index]}})
}

export default GetChartObj