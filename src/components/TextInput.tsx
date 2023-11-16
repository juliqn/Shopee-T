import React from "react";
import { TextInput } from 'react-native';

export default function InputComp({keyboard, placeholder, placeholderStyle, textInput, value, styleInput, onChangeText}){
    return(
        <TextInput
            // keyboardType={keyboard}
            // placeholder={placeholder}
            // placeholderTextColor={placeholderStyle}
            onChangeText={onChangeText}
            style={styleInput}
            value={value}
        />
    )
}
