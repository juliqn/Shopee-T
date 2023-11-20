import React from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from "react-native";
import { alreadyAccount, btn_Up, email, info, name, password } from "../utils/Texts";
import { arrow_back, icon_facebook, icon_google } from "../utils/Img";
import ButtonComp from "../components/Button";
import { background_color_all, color_gray, color_others, color_white } from "../utils/ColorApplication";
import { useNavigation } from '@react-navigation/native';
import ButtonImgComp from "../components/ButtonImg";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp} from 'firebase/app';
import { firebaseConfig } from "../../firebase.config";
import { FONTFAMILY } from "../theme/theme";


export default function SingUpScreen(){

    const navigation = useNavigation();
    const [email1, setEmail] = React.useState('');
    const [password1, setPassword] = React.useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // const handleCreateAccount = () => {
    //     createUserWithEmailAndPassword(auth, email1, password1)
    //     .then((userCredential) => {
    //         Alert.alert('Account created!')
    //         const user = userCredential.user;
    //         navigation.navigate("Home")
    //         console.log(user)
    //     })
    //     .catch(error => {
    //         Alert.alert(error.message)
    //     })
    // }

    function goToBack() {
        navigation.goBack();
    }

    return(
        <View style={{ flex: 1, backgroundColor: color_white}}>
            <View style={styles.container}>
                <View style={styles.containerDouble}>
                    <ButtonImgComp source={arrow_back} onPress={goToBack}/>
                    <Text style={styles.title_action}>{btn_Up}</Text>
                </View>
                    <Text style={styles.textinput_init}>{name}</Text>
                    <TextInput style={styles.inputSingUp}/>
                    <Text style={styles.title_input}>{email}</Text>
                    <TextInput onChangeText={(text) => setEmail(text)} style={styles.inputSingUp}/>
                    <Text style={styles.title_input}>{password}</Text>
                    <TextInput onChangeText={(text) => setPassword(text)} style={styles.inputSingUp}/>
                    <ButtonComp buttonStyle={styles.btn_Up} textStyle={styles.text_Up} buttonText={btn_Up}/>
                    <Text style={styles.text_social}>{info}</Text>
                <View style={styles.containerDouble}>
                    <ButtonImgComp imgStyle={styles.icon_social} source={icon_facebook} onPress={goToBack} buttonStyle={styles.btn_social}/>
                    <ButtonImgComp imgStyle={styles.icon_social} source={icon_google} onPress={goToBack} buttonStyle={styles.btn_social}/>
                </View>
                    <Text style={styles.textFinal}>{alreadyAccount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 30,
        marginVertical: 30
    },
    inputSingUp:{
        borderWidth: 1, 
        borderRadius: 14, 
        borderWidth: 0.5,  
        backgroundColor: '#F7F8F9', 
        height: 60,
        borderColor: '#d5dde0d6',
    },
    title_action:{
        color: color_gray, 
        fontSize: 24, 
        padding: 5, 
        marginLeft: 15,
        fontFamily: FONTFAMILY.poppins_medium
    },
    title_input:{
        color: color_gray, 
        fontSize: 15, 
        paddingBottom: 8,
        marginTop: 10,
        fontFamily: FONTFAMILY.poppins_regular
    },
    textinput_init:{
        color: color_gray, 
        fontSize: 15, 
        paddingTop: 50, 
        paddingBottom: 8,
        fontFamily: FONTFAMILY.poppins_regular
    },
    containerDouble:{
        flexDirection: 'row'
    },
    btn_Up:{
        backgroundColor: background_color_all, 
        borderRadius: 14,
        width: '100%', 
        height: 65,
        marginTop: 50
    },
    btn_social:{
        backgroundColor: color_others, 
        borderRadius: 14,
        margin: 10,
        width: '45%', 
        height: 65,
    },
    text_social:{
        color: color_gray, 
        fontSize: 15, 
        paddingTop: 50, 
        paddingBottom: 30, 
        textAlign: 'center',
        fontFamily: FONTFAMILY.poppins_regular
    },
    text_Up:{
        color: color_white, 
        fontSize: 17,
        textAlign: 'center',
        padding: 20,
        fontFamily: FONTFAMILY.poppins_medium,
    },
    textFinal:{
        color: color_gray, 
        fontSize: 15,
        textAlign: 'center',
        marginTop: 35,
        fontFamily: FONTFAMILY.poppins_regular
    },
    icon_social:{
        alignSelf: 'center', 
        margin: 19
    }
})