import React from "react";
import { View, Text, Image} from 'react-native';
import BaseScreen from "../components/BaseScreen";
import CardProduct from "../components/CardProduct";
import { useNavigation } from "@react-navigation/native";

export default function Products(){


    const navigation = useNavigation();

    function productDefinition(){
        navigation.navigate("ProductDesc")
    }


    return(
        <BaseScreen namePage='' searchProduct={true}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 40, flex: 1, flexDirection: 'row'}}>
                <Text style={{ color: 'red', color: '#3E4958', fontSize: 24}}>Que deseas pedir ?</Text>
                <Image style={{ marginLeft: 30, marginTop: 2}} source={require('../assets/img/smile.png')}/>
            </View>
                <View style={{ flex: 6, position: 'relative'}}>
                    <CardProduct style={{ position: 'absolute', left: -30, borderColor: '#C9E6FF', backgroundColor: '#FF5B2C'}}
                        onPress={productDefinition}
                    >
                        <Text style={{ color: 'red', color: '#3E4958', fontSize: 20, padding: 10}}>Para Ti</Text>
                    </CardProduct>
                    <CardProduct 
                        style={{ position: 'absolute', right: -30, top: 100, borderColor: '#FCE8CA', backgroundColor: '#FCE8CA'}}
                        onPress={productDefinition}
                    >
                        <Text style={{ color: 'red', color: '#3E4958', fontSize: 20}}>Productos Destacados</Text>
                    </CardProduct>
                </View>
        </BaseScreen>
    )
}
