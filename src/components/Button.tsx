import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

export default function ButtonComp ({ buttonText, onPress, buttonStyle, textStyle }){
  return (
    <TouchableOpacity style={[buttonStyle]} onPress={onPress}>
      <Text style={[textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

