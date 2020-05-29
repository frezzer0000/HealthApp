import LinearGradient from 'react-native-linear-gradient';

import React from 'react';
import {
  Image,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const GradientButton = () =>{
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#19769F', '#35D8A6']}  style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Getting start
  </Text>
</LinearGradient>

    )
}
var styles = StyleSheet.create({
    linearGradient: {
      width: 303,
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