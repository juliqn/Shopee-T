import React from "react";
import { Pressable } from "react-native";

export default function CardProduct(props) {

    const { style, onPress } = props;

    return (
        <Pressable style={{ borderWidth: 1, borderRadius: 25, width: 300, height: 300, padding: 40, ...style }} onPress={onPress}>
            {props.children}
        </Pressable>
    )
}