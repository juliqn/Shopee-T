import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { background_color_all, color_grandient, color_white } from '../utils/ColorApplication';
import { btn_In, btn_Up, title_home } from '../utils/Texts';
import ButtonComp from '../components/Button';
import { img_logo } from '../utils/Img';
import { FONTFAMILY } from '../theme/theme';


export default function ShopeeScreen(){

    const navigation = useNavigation();

    function sendsSingUp(){
        console.log('ingresa a up');
        navigation.navigate("SingUp")
    }

    function sendsSingIn(){
        navigation.navigate("SingIn")
    }

    return(
        <View style={styles.container}>
            <Image source={img_logo}/>
            <Text style={styles.textInitial}>{title_home}</Text>
            <ButtonComp buttonStyle={styles.btn_Up} textStyle={styles.text_Up} buttonText={btn_Up} onPress={sendsSingUp}/>
            <ButtonComp buttonStyle={styles.btn_In} textStyle={styles.text_In} buttonText={btn_In} onPress={sendsSingIn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: background_color_all,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInitial:{
        textAlign: 'center',
        fontSize: 17,
        color: '#FFFFFF',
        fontFamily: FONTFAMILY.poppins_regular
    },
    btn_Up:{
        backgroundColor: color_white, 
        borderRadius: 14,
        width: '85%', 
        height: 65,
        position: 'absolute',
        bottom: '17%',
    },
    btn_In:{
        position: 'absolute',
        bottom: '10%',
    },
    text_Up:{
        color: background_color_all, 
        fontSize: 18,
        textAlign: 'center',
        padding: 18,
        fontFamily: FONTFAMILY.poppins_medium
    },
    text_In:{
        fontSize: 18,
        color: color_white,
        fontFamily: FONTFAMILY.poppins_medium
    }
});