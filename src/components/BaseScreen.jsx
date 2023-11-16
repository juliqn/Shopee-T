import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { arrow_back } from "../utils/Img";
import ButtonImgComp from './ButtonImg';
import { useNavigation } from '@react-navigation/native';


export default function BaseScreen( props ){

    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    

    function goToBack() {
        navigation.goBack();
    }

    const handleSearch = () => {
        console.log('search text', searchText);
        // if (onSearch) {
        //   onSearch(searchText);
        // }
    };

   return(
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <View >
                    <ButtonImgComp source={arrow_back} onPress={goToBack}/>
                </View>
                <View>
                    {
                        props.searchProduct ? 
                            <TextInput
                                style={styles.input}
                                placeholder="Buscar productos"
                                onChangeText={setSearchText}
                                value={searchText}
                                onSubmitEditing={handleSearch}
                            />
                        :
                        <Text style={{ color: '#3E4958', fontSize: 24, paddingTop: 7, paddingHorizontal: 90 }}>{props.namePage}</Text>
                    }
                </View>
            </View>
            <View style={{ flex: 1}}>
                {props.children}
            </View>
        </View>
   )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 30,
    },
    input: {
        height: 45,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        marginLeft: 15,
        marginTop: 2,
        borderRadius: 18,
        width: '175%',
        paddingLeft: 20
    },
})