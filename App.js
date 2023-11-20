import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue); 
      
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Tính chỉ số BMI</Text>

      <TextInput
        style={{ borderWidth: 1, width:300, borderColor: 'black', padding: 10, marginVertical: 10 }}
        placeholder="Nhập chiều cao của bạn (cm)"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />

      <TextInput
        style={{ borderWidth: 1, width:300, borderColor: 'black', padding: 10, marginVertical: 10, }}
        placeholder="Nhập cân nặng của bạn (kg)"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      <TouchableOpacity style={{ backgroundColor: 'lightgreen', width:300, padding: 10, marginVertical: 10 }}>
        <Text style={{ color: 'black', fontSize: 20, textAlign: 'center'}} onPress={calculateBMI}>Tính BMI</Text>
      </TouchableOpacity>

      {bmi && (
        <Text style={{ fontSize: 18, marginVertical: 10 }}>Chỉ số BMI của bạn là {bmi}</Text>
      )}
    </View>
  );
};

export default BMICalculator;
