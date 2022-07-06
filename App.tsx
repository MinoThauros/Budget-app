import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpensesScreen';
import RecentExpenses from './screens/RecentExpensesScreen';
import Profile from './screens/profile';
import {Ionicons} from '@expo/vector-icons';
import Components from './screens/components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {HeaderButton} from './components/headerAddButton';
/**
 Gameplan:
 1) Build all components needed: 
  * individual spending displayer
  * group spending displayer
  * profile page (add either drawer or a bottomTab)
  * browse strategies
2) Think about budgeting strategies, etc...
 */

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerRight:({color,size}:any)=> <HeaderButton size={30}/>
          
          
        }}>

          
          <Tab.Screen 
            name="All Expenses" 
            component={AllExpenses}
            options={{
              tabBarIcon: ({color,size}:any)=>(<Ionicons name="cash-outline" color={color} size={size}/>)
            }}
            
            
            />
          <Tab.Screen 
            name="Recent expenses" 
            component={RecentExpenses}
            options={{
              tabBarIcon: ({color,size}:any)=>(<Ionicons name="receipt-outline" color={color} size={size}/>)
            }}
            />
          <Tab.Screen 
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({color,size}:any)=>(<Ionicons name="person-outline" color={color} size={size}/>)
            }}/>

          <Tab.Screen 
            name="Components"
            component={Components}
            options={{
              tabBarIcon: ({color,size}:any)=>(<Ionicons name="baseball-sharp" color={color} size={size}/>)
            }}/>
          

          
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * todo:
 * + add plus button in order to add more spendings
 * + style header
 * + add background colors and themes (linear gradient maybe)
 * + use overlay for form 
 */