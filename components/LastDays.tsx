import { spending } from '../models/spending';
import { View,Text } from "react-native"

const LastDaysTotal=({spendings}:{spendings:spending[]}):JSX.Element=>{

    

    const LastDaysDisplay=():JSX.Element=>{

        return <Text>Hi lol</Text>
    }

    const ContentManager=()=>{
        let content=<View><Text>You do not have any spending yet</Text></View>
        if (spendings.length!=0){
            content=(
            <View>
                <LastDaysDisplay/>
            </View>);

        };
        return content

    };

    return <ContentManager/>
    


}

export default  LastDaysTotal