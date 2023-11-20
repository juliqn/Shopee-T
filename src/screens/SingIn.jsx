import React , { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import { btn_In, btn_Up, email, info, info_SingIn, not_account, pass_forgot, password } from "../utils/Texts";
import { arrow_back, icon_facebook, icon_google } from "../utils/Img";
import ButtonComp from "../components/Button";
import { background_color_all, color_gray, color_others, color_white } from "../utils/ColorApplication";
import { useNavigation } from "@react-navigation/native";
import ButtonImgComp from "../components/ButtonImg";
import Checkbox from "../components/CheckBox";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp} from 'firebase/app';
import { firebaseConfig } from "../../firebase.config";
import { FONTFAMILY } from '../theme/theme';



export default function SingInScreen(){

    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [email1, setEmail] = React.useState('');
    const [password1, setPassword] = React.useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // const handleSingIn = () => {
    //     signInWithEmailAndPassword(auth, email1, password1)
    //     .then((userCredential) => {
    //         Alert.alert('Sign In')
    //         const user = userCredential.user;
    //         navigation.navigate("Home")
    //         console.log(user)
    //     })
    //     .catch(error => {
    //         Alert.alert(error.message)
    //     })
    // }

    const handleCheckboxChange = (value) => {
        setIsChecked(value);
    };

    function sendsRecoveryPass(){
        navigation.navigate("Password")
    }


    function goToBack() {
        navigation.goBack();
    }

    function logIn(){
        navigation.navigate('Navigation')
    }
    
    return(
        <View style={{ flex: 1, backgroundColor: color_white}}>
            <View style={styles.container}>
                <View style={styles.containerDouble}>
                    <ButtonImgComp source={arrow_back} onPress={goToBack}/>
                    <Text style={styles.title_action}>Sign In</Text>
                </View>
                    <Text style={{ color: color_gray, fontSize: 15, marginVertical: 25, fontFamily: FONTFAMILY.poppins_light}}>
                        Please fill E-mail & password to login your Shopy application account.
                    </Text>
                    <Text style={styles.title_input}>Email</Text>
                    <TextInput onChangeText={(text) => setEmail(text)} style={styles.inputSingUp}/>
                    <Text style={styles.title_input}>Password</Text>
                    <TextInput onChangeText={(text) => setPassword(text)} style={styles.inputSingUp}/>
                <View style={styles.containerDouble}>
                    <Checkbox checked={isChecked} onChange={handleCheckboxChange}/>
                    <Text style={styles.text_pass}>Forgot password?</Text>  
                </View>
                    <ButtonComp onPress={logIn} buttonStyle={styles.btn_Up} textStyle={styles.text_Up} buttonText='Sign In'/>
                    <Text style={styles.text_social}>Or sign up with</Text>
                <View style={styles.containerDouble}>
                    <ButtonImgComp imgStyle={styles.icon_social} source={icon_facebook} onPress={goToBack} buttonStyle={styles.btn_social}/>
                    <ButtonImgComp imgStyle={styles.icon_social} source={icon_google} onPress={goToBack} buttonStyle={styles.btn_social}/>
                </View>
                    <Text style={styles.textFinal}>Don’t have an account? Sign Up</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 30,
        marginVertical: 30,
    },
    inputSingUp:{
        borderWidth: 1, 
        borderColor: '#d5dde0d6',
        borderRadius: 14, 
        backgroundColor: '#F7F8F9', 
        height: 60
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
        paddingTop: 10, 
        paddingBottom: 8
    },
    containerDouble:{
        flexDirection: 'row'
    },
    btn_Up:{
        backgroundColor: background_color_all, 
        borderRadius: 14,
        width: '100%', 
        height: 65,
        marginTop: 40
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
        fontFamily: FONTFAMILY.poppins_medium,
        padding: 20
    },
    textFinal:{
        color: color_gray, 
        fontSize: 14,
        textAlign: 'center',
        marginTop: 40,
        fontFamily: FONTFAMILY.poppins_regular
    },
    text_pass:{
        fontSize: 14, 
        color: color_gray, 
        paddingTop: 10, 
        paddingLeft: 190,
        fontFamily: FONTFAMILY.poppins_regular
    },
    icon_social:{
        alignSelf: 'center', 
        margin: 19
    }
})