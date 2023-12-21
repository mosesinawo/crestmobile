import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListedLand from '../screens/ListedLand'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BoostPremium from '../screens/BoostPremium'
import BoostListing from '../screens/BoostListing'
import EditAsset from '../screens/EditAsset'
import EditAssetCont from '../screens/EditAssetcont'


const Stack = createNativeStackNavigator()
const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Lands' component={ListedLand} options={{ headerShown: false }} />
            <Stack.Screen name='BoostPremium' component={BoostPremium} options={{ headerShown: false }} />
            <Stack.Screen name='BoostListing' component={BoostListing} options={{ headerShown: false }} />
            <Stack.Screen name='EditAsset' component={EditAsset} options={{ headerShown: false }} />
            <Stack.Screen name='EditAssetCont' component={EditAssetCont} options={{ headerShown: false }} />
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