import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import ListedLand from './src/screens/ListedLand';
import RootNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import BoostPremium from './src/screens/BoostPremium';
import { AppLoadingProps } from 'expo-app-loading'
import { Inter_400Regular } from '@expo-google-fonts/inter'
import { useFonts, Merriweather_700Bold, Merriweather_900Black } from '@expo-google-fonts/merriweather'
import EditAsset from './src/screens/EditAsset';
import EditAssetCont from './src/screens/EditAssetcont';
import ListData from './assets/data/ListData';


export default function App() {

  let [fontsLoaded, error] = useFonts({
    Merriweather_700Bold,
    Merriweather_900Black
  });

  // if (!fontsLoaded) {
  //   return <AppLoadingProps />
  // }
  return (
    <NavigationContainer style={styles.container} >
      {/* <Home/> */}
      {/* <ListedLand/> */}
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
    // <View>
    //   {/* <Text style={{fontFamily:' Merriweather_900Black'}} >Sweet Font</Text> */}
    //   <ListedLand />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'

  },
});
