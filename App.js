/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './Component/Screen/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SvgXml } from 'react-native-svg';
import SignUp from './Component/Screen/SignUp'
import SignIn from './Component/Screen/SignIn'
import ForgotPassword from './Component/Screen/ForgotPassword'
import DateTime from './Component/Screen/DateTime'
import LinearGradient from 'react-native-linear-gradient';
const HomeScreen= ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Home" onPress={()=>{
        navigation.navigate('Splash')
      }}> </Button>
    </View>
  );
}


export const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();
const LinearGradientHeader =() =>{
  return (

    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#19769F', '#35D8A6']} style={styles.linearGradient}>
    </LinearGradient> 

  )
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: height,
    width: width,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile Details">
        <Stack.Screen name="Home" component={HomeScreen}   options={{ title: 'My home' }}/>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen  name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen  name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen  
        //  options={{ headerTitle: props => <LinearGradientHeader {...props} /> }}
        options={{
          
          headerBackground: props => <LinearGradientHeader {...props}></LinearGradientHeader>,
          headerTintColor: '#fff',
        }}
        name="Profile Details"  
        component={DateTime} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });


