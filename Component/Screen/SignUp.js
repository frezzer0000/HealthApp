import React from 'react';
import {
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

const SignUp = ({navigation}) =>{
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
            Sign Up
        </Text>
        <View style={styles.inputContainerColorDefault}>
        <TextInput  placeholder="Naruto" placeholderTextColor="#9A9A9A" style={styles.input}>
       
        </TextInput>
        </View>
        <View style={styles.inputContainerColorDefault}>
        <TextInput  placeholder="E-mail" placeholderTextColor="#9A9A9A" style={styles.input}>
       
        </TextInput>
        </View>
        <View style={styles.inputContainerColorDefault}>
        <TextInput  placeholder="Mobile Number" placeholderTextColor="#9A9A9A" style={styles.input}>
       
        </TextInput>
        </View>
        <View style={styles.inputContainerColorDefault}>
        <TextInput  placeholder="Password" placeholderTextColor="#9A9A9A" style={styles.input}>
       
        </TextInput>
        </View>
        <View style={styles.inputContainerColorDefault}>
        <TextInput  placeholder="Confirm Password" placeholderTextColor="#9A9A9A" style={styles.input}>
       
        </TextInput>
        </View>
        <View style={styles.gradientButton}>
        <GradientButton navigation={navigation} text={"Sign in"} screenname={'SignIn'}></GradientButton>
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
        marginTop: 44,
        alignItems: "center"
    },


    backButton :{ 
        marginTop: 40,
        marginLeft: 22
    },
    textTitle: {
        fontSize: 24,
        color: '#19769F',
        marginTop: 100,
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
export default SignUp;