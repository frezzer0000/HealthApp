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
var radio_props = [
  {label: 'param1', value: 0 },
];

const SignIn = ({navigation}) =>{
  const [isEnabled, setIsEnabled] = useState(false);
  
  const [value, setvalue] = useState(0);
    return (
        <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
        <View >
        <View style={styles.backButton}>
            <Image source={require('../../asses/back-arrow.png')}
            onPress={() =>{
                navigation.navigate('Splash')
            }}
            ></Image>
        </View>
        <Text style={styles.textTitle}>
            Sign In
        </Text>
        <View style={styles.inputContainerColorDefault}>
        <TextInput  placeholder="E-mail" placeholderTextColor="#9A9A9A" style={styles.input}>
       
        </TextInput>
        </View>
        <View style={styles.inputContainerColorDefault}>
        <TextInput  placeholder="Password" placeholderTextColor="#9A9A9A" style={styles.input}>
       
        </TextInput>
        </View>
        <View style={{ flexDirection: 'column'}}>
        
  <View style={styles.checkButton}>

  <CheckBox style={{width: 15, height: 15}}
  lineWidth	={1.5}
  onTintColor	={'#D5D5D5'}
  onFillColor={"#19769F"}
    disabled={false}
    animationDuration	={0.1}
    value={isEnabled}
    onValueChange={() => isEnabled ? setIsEnabled(false) : setIsEnabled(true)}
  />
  <View style={{marginLeft: 11}}>
  <Text style={styles.textCheckbox}>Remmember</Text></View>
  <View style={{alignItems: "flex-end", marginLeft: 120}}>
  <Text style={styles.textCheckbox} onPress={() =>{
    navigation.navigate('ForgotPassword')
  }}>Forget Password ?</Text></View>
  </View>
  
</View>

            
        <View style={styles.gradientButton}>
        <GradientButton navigation={navigation} text={"Sign up"} screenname={"ForgotPassword"}></GradientButton>
        </View> 
        <View style={{alignItems: "center", marginTop: 22}}>
        <Text style={styles.textCheckbox}>Or</Text>
        </View> 
        <View style={{flexDirection: "row"}}>
            <View style={{ marginTop:22, marginLeft: 22,  borderRadius: 4,borderLeftWidth: 1 ,borderRightWidth:1, borderTopWidth:1, borderBottomWidth:1,width: 146.35, height: 41, borderColor: "#D5D5D5"}}>
              <TouchableOpacity style={{borderColor: "#D5D5D5"}}>
              <View style={{flex: 1, alignItems: "center", marginTop: 10}}>
                <Image   source={require('../../asses/facebook-logo.png')}></Image></View>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop:22, marginLeft: 38,  borderRadius: 4,borderLeftWidth: 1 ,borderRightWidth:1, borderTopWidth:1, borderBottomWidth:1,width: 146.35, height: 41, borderColor: "#D5D5D5"}}>
              <TouchableOpacity style={{borderColor: "#D5D5D5"}}>
              <View style={{flex: 1, alignItems: "center", marginTop: 10}}>
                <Image   source={require('../../asses/google-plus-social-logotype.png')}></Image></View>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 88}}>
            <Text style={{color: "#707070", fontSize: 14}}>Don't Have Account ? <Text style={{color: "#19769F"}}>Create Account.</Text></Text>

        </View>


        </View></TouchableWithoutFeedback></KeyboardAvoidingView>
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
export default SignIn;