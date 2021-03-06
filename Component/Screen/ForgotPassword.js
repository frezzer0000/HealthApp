import React, { Component, useState }  from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import CheckBox from '@react-native-community/checkbox';

import {Switch,
  TouchableOpacity,
    KeyboardAvoidingView,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';
import GradientButton from './GradientButton'

const ForgotPassword = ({navigation}) =>{
    return(
        <View>
        <View style={styles.backButton}>
        <TouchableOpacity   onPress={() =>{
                navigation.navigate('SignIn')
            }}>
            <Image source={require('../../asses/back-arrow.png')}
          
            ></Image></TouchableOpacity>
        </View>
        <Text style={styles.textTitle}>
            Forgot Password
        </Text>
        <Text style={styles.textTitleSub}>
        We just need your register e-mail ID to send reset 
link
        </Text>
        <View style={styles.inputContainerColorDefault}>
        <TextInput  placeholder="E-Mail" placeholderTextColor="#9A9A9A" style={styles.input}>
       
        </TextInput>
        </View>
        <View style={styles.gradientButton}>
        <GradientButton text="Reset Password"></GradientButton>
        </View>
        </View>

    )




}
const styles = StyleSheet.create({
    gradientButton:{ 
        shadowColor: "#D8D8D8",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 6.27,
        
        elevation: 10,
        marginTop: 32,
        alignItems: "center"
    },
    textCheckbox:{
color:"#95989A",
fontSize: 12
    },


    backButton :{ 
        marginTop: 40,
        marginLeft: 22
    },
    checkButton:{
      flexDirection: "row",
      marginTop:22,
      marginLeft: 22
    },
    textTitle: {
    
        fontSize: 24,
        color: '#19769F',
        marginTop: 70,
        marginLeft: 22
    },
    textTitleSub: {
        fontSize: 12,
        color: '#95989A',
        marginTop: 11,
        marginLeft: 22,
        marginRight: 66
    },

    inputContainerColor: {
        marginLeft: 22,
        marginRight: 22,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        shadowColor: "#5FE5BC",
        
        borderColor: "#5FE5BC",
        marginTop: 20,
        borderRadius: 4,
        height: 40,
      
         justifyContent: 'center',
        // alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1
      },
      inputContainerColorDefault: {
        marginLeft: 22,
        marginRight: 22,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        shadowColor: "#D5D5D5",
        
        borderColor: "#D5D5D5",
        marginTop: 20,
        borderRadius: 4,
        height: 40,
        
         justifyContent: 'center',
        // alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1
      },




      input: {
          
        textAlign: "left",
        paddingLeft: 10
      }
     
    
})
export default ForgotPassword