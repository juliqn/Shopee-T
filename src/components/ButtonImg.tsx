import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default function ButtonImgComp ({ buttonStyle, onPress, imgStyle, source }){
  return (
    <TouchableOpacity style={[buttonStyle]} onPress={onPress}>
        <Image style={[imgStyle]} source={source}/>
    </TouchableOpacity>
  );
};

