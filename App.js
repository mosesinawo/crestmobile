import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import ListedLand from './src/screens/ListedLand';
import RootNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import BoostPremium from './src/screens/BoostPremium';

export default function App() {
  return (
    <NavigationContainer style={styles.container} >
      {/* <Home/> */}
      {/* <ListedLand/> */}
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
    // <View>
    //   <BoostPremium />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'

  },
});
