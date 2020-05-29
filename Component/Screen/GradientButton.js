import LinearGradient from 'react-native-linear-gradient';
export const { width, height } = Dimensions.get('window');

import React from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const GradientButton = ({navigation,text,screenname}) =>{
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#19769F', '#35D8A6']}  style={styles.linearGradient}>
       <TouchableOpacity onPress={() =>{
         navigation.navigate(screenname)
       }}
       >
        <Text style={styles.buttonText}>
            {text}
  </Text>
  </TouchableOpacity>
</LinearGradient>

    )
}
var styles = StyleSheet.create({
    linearGradient: {

      width: 330,
      height: 41,
      borderRadius: 5
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
export default GradientButton