import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { confirm_Pass, descr_Pass, log_pass, sucess_pass, title_Pass, title_sucess, update_Pass } from "../utils/Texts";
import { arrow_back, check_pass } from "../utils/Img";
import { background_color_all, color_gray, color_others, color_white } from "../utils/ColorApplication";
import ButtonComp from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import ButtonImgComp from '../components/ButtonImg';

export default function PasswordScreen() {

    const [ contentPass ] = useState('formPassRecovery');
    const navigation = useNavigation();

    function goToBack() {
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, backgroundColor: color_white }}>
            <View style={styles.container}>
                {
                    contentPass === "formPassRecovery" ? (
                        <>
                            <View style={styles.containerDouble}>
                                <ButtonImgComp source={arrow_back} onPress={goToBack}/>
                                <Text style={styles.title_action}>{title_Pass}</Text>
                            </View>
                                <Text style={styles.description_pass}>{descr_Pass}</Text>
                                <Text style={styles.title_input}>{title_Pass}</Text>
                                <TextInput style={styles.inputSingUp}/>
                                <Text style={styles.title_input}>{confirm_Pass}</Text>
                                <TextInput style={styles.inputSingUp}/>
                        </>
                    ) : (contentPass === "sucessfully") ? (
                        <View>
                            <Image style={styles.img_sucess} source={check_pass}/>
                            <Text style={styles.titleinfo_pass}>{title_sucess}</Text>
                            <Text style={styles.info_pass}>{sucess_pass}</Text>
                        </View>
                    ) : null
                }
            </View>
            <ButtonComp buttonStyle={styles.btn_password} textStyle={styles.text_Up} buttonText={log_pass} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 30
    },
    inputSingUp: {
        borderWidth: 1,
        borderRadius: 14,
        borderWidth: 0.5,
        backgroundColor: '#F7F8F9',
        height: 60
    },
    title_action: {
        color: color_gray,
        fontSize: 24,
        padding: 5,
        marginLeft: 15
    },
    title_input: {
        color: color_gray,
        fontSize: 15,
        paddingBottom: 8,
        marginTop: 10
    },
    containerDouble: {
        flexDirection: 'row'
    },
    btn_password: {
        backgroundColor: background_color_all,
        borderRadius: 14,
        width: '85%',
        height: 65,
        marginHorizontal: 30,
        position: 'absolute',
        bottom: '7%',
    },
    text_Up: {
        color: color_white,
        fontSize: 18,
        textAlign: 'center',
        padding: 18
    },
    img_sucess:{
        alignSelf: 'center',
        margin: 30, 
        marginTop: '60%'
    },
    titleinfo_pass:{
        color: color_gray, 
        fontSize: 18, 
        textAlign: 'center' 
    },
    info_pass:{
        color: color_others, 
        fontSize: 14, 
        textAlign: 'center',
        padding: 40,
        paddingTop: 5
    },
    description_pass:{
        color: color_gray, 
        fontSize: 15, 
        marginVertical: 30
    }
})