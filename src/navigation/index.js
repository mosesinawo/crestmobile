import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListedLand from '../screens/ListedLand'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


const Stack = createNativeStackNavigator()
const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
            <Stack.Screen name='Lands' component={ListedLand} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}



// const Tab = createMaterialTopTabNavigator()

// const LandTabs = () => {
//     return (
//         <Tab.Navigator initialRouteName='Available'
//             tabBarOptions={{
//                 tabStyle: {
//                     padding: 10,
//                     // Add padding to create space around each tab
//                 },
//                 activeTintColor: 'lightblue',
//                 activeBackgroundColor: 'lightblue',
//                 inactiveTintColor: '#3D79EF',
//                 inactiveBackgroundColor: 'lightgray',
//                 labelStyle: { fontSize: 13 },

//                 style: {
//                     backgroundColor: '',

//                 },
//             }}

//         >
//             <Tab.Screen name="Lands" component={ListedLand} />
//             <Tab.Screen name="Instllment" component={ListedLand} />
//             <Tab.Screen name="Sold" component={ListedLand} />
//         </Tab.Navigator>
//     )
// }

export default RootNavigator