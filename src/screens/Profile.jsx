import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BaseScreen from "../components/BaseScreen";



export default function ProfileScreen(){

    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledTwo, setIsEnabledTwo] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleChanges = () => setIsEnabledTwo(previousState => !previousState);


    function goToProductsLoaded(){
        console.log(('entra aqui'));
        navigation.navigate('AddProduct')
    }

    return(
        <BaseScreen namePage='Perfil' searchProduct={false}>
            <View style={{ marginHorizontal: 30}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ fontSize: 15, color: '#909191'}}>Personal Information</Text>
                    <Image style={{left: 165, width: 29, height: 25, }} source={require('../assets/img/edit.png')}/>
                </View>
                <View style={{ height: 75, width: '100%', alignSelf: 'center'}}>
                    <Text style={{ color: '#828282', padding: 5}}>Name</Text>
                    <TextInput
                            placeholder='Enter your name'
                            placeholderTextColor="gray"
                            style={{ height: 45, width: '100%', opacity: 5, elevation: 3, borderRadius: 5, backgroundColor: "#FFFFFF", paddingLeft: 20, color: 'gray'}}
                    />
                </View>
                <View style={{ height: 75, width: '100%', alignSelf: 'center'}}>
                    <Text style={{ color: '#828282', padding: 5}}>Email</Text>
                    <TextInput
                            placeholder='Enter your email'
                            placeholderTextColor="gray"
                            style={{ height: 45, width: '100%', opacity: 5, elevation: 3, borderRadius: 5, backgroundColor: "#FFFFFF", paddingLeft: 20, color: 'gray'}}
                    />
                </View>
                <View style={{ height: 75, width: '100%', alignSelf: 'center'}}>
                    <Text style={{ color: '#828282', padding: 5}}>Password</Text>
                    <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor="gray"
                            style={{ height: 45, width: '100%', opacity: 5, elevation: 3, borderRadius: 5, backgroundColor: "#FFFFFF", paddingLeft: 20, color: 'gray'}}
                    />
                </View>
                <Text style={{ fontSize: 15, color: '#909191', marginTop: 45}}>Notifications</Text>
                <View style={{ height: 55, width: '100%', marginTop: 10, opacity: 5, elevation: 3, borderRadius: 5, backgroundColor: "#FFFFFF", flexDirection: 'row'}}>
                    <Text style={{ fontSize: 16, color: '#3E4958', padding: 17}}>Sales</Text>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Switch
                            trackColor={{false: '#F2F3F4', true: '#2AA952'}}
                            thumbColor={'#FFFFFF'}
                            onValueChange={toggleSwitch}
                            style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], padding: 85}}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={{ height: 55, width: '100%', marginTop: 15, opacity: 5, elevation: 3, borderRadius: 5, backgroundColor: "#FFFFFF", flexDirection: 'row'}}>
                    <View style={{ width: '75%'}}>
                        <Text style={{ fontSize: 16, color: '#3E4958', padding: 17}}>Add product</Text>
                    </View>
                    <View style={{ width: '25%'}}>
                        <TouchableOpacity onPress={goToProductsLoaded}>
                             <Image style={{ alignSelf: 'center', width: 29, height: 25, marginTop: 10}} source={require('../assets/img/edit.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 55, width: '100%', marginTop: 15, opacity: 5, elevation: 3, borderRadius: 5, backgroundColor: "#FFFFFF", flexDirection: 'row'}}>
                    <Text style={{ fontSize: 16, color: '#3E4958', padding: 17}}>Delivery status changes</Text>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Switch
                            trackColor={{false: '#F2F3F4', true: '#2AA952'}}
                            thumbColor={'#FFFFFF'}
                            onValueChange={toggleChanges}
                            style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], padding: 20}}
                            value={isEnabledTwo}
                        />
                    </View>
                </View>
            </View>
        </BaseScreen>
    )
}