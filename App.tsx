import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpensesScreen';
import RecentExpenses from './screens/RecentExpensesScree';
import Profile from './screens/profile';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
      </Tab.Navigator>
    </NavigationContainer>
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
