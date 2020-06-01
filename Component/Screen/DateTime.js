import React, { Component, useState }  from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import GradientButton from './GradientButton'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';
  const DateTime = ({navigation}) =>{
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
      return(
          <View style={{flex: 1, backgroundColor: 'white'}}>
        <View>
            <Text style={styles.textTitle}>Your Birthday</Text>
        </View>

          <View style={styles.dateTimePicker}>
            <DateTimePicker 
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
          </View>
          <View style={{alignItems: "center", marginTop: 44}}>
              <GradientButton text={"Next"}></GradientButton>
          </View>
          
          </View>
      )
  }
const styles = StyleSheet.create({
    textTitle:{ 
        color: "#3D3D3D",
        fontSize: 24,
        marginLeft:22,
        marginTop:22
    },
    dateTimePicker: {
        width : 327.7, 
        height: 304, 
      marginTop:22,
        alignSelf: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 2.84,

elevation: 4,
    }
})

  export default DateTime