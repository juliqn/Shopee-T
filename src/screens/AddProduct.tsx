import React, { useState } from 'react';
import BaseScreen from '../components/BaseScreen';
import { Text, Image, View, TextInput, Alert, TouchableOpacity, Pressable} from 'react-native';
import { ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { FONTFAMILY } from '../theme/theme';

export default function AddProduct(){

    const loadedImage = ''
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const imagePicker = (): void => {
        let options: ImageLibraryOptions = {
            mediaType: 'photo', // Ajusta según tus necesidades ('photo', 'video', 'mixed')
        };

        launchImageLibrary(options, (response: ImagePickerResponse) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error Code: ', response.errorCode);
                console.log('ImagePicker Error Message: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                // Asegúrate de que hayas declarado y definido setSelectedImage en algún lugar
                const selectedUri = response.assets[0].uri;
                setSelectedImage(selectedUri);
                console.log(selectedUri);
            }
        });
    };


   return(
    <BaseScreen namePage='Productos' searchProduct={false}>
           <View style={{ backgroundColor: 'white', flex: 3 }}>
               <View style={{ alignSelf: 'center' }}>
                   <TouchableOpacity onPress={imagePicker}>
                       {selectedImage ? (
                           <Image source={{ uri: selectedImage }} style={{ width: 300, height: 270 }} />
                       ) : (
                           <Image source={require('../assets/app_images/addProduct.png')} />
                       )}
                   </TouchableOpacity>
               </View>
               <View style={{ height: 75, width: '85%', alignSelf: 'center', marginTop: 10 }}>
                   <Text style={{ color: '#828282', padding: 5, fontFamily: FONTFAMILY.poppins_regular}}>Name</Text>
                   <TextInput
                       placeholder='Enter the name of the product'
                       placeholderTextColor="gray"
                       style={{ height: 45, width: '100%', opacity: 5, elevation: 3, borderRadius: 5, backgroundColor: "#FFFFFF", paddingLeft: 20, color: 'gray',  fontFamily: FONTFAMILY.poppins_regular}}
                   />
               </View>
               <View style={{ height: 75, width: '85%', alignSelf: 'center', marginTop: 15 }}>
                   <Text style={{ color: '#828282', padding: 5, fontFamily: FONTFAMILY.poppins_regular }}>Description</Text>
                   <TextInput
                       placeholder='Enter a product description'
                       placeholderTextColor="gray"
                       style={{ height: 100, width: '100%', opacity: 5, elevation: 3, borderRadius: 5, backgroundColor: "#FFFFFF", paddingLeft: 20, paddingTop: '-10%', color: 'gray',  fontFamily: FONTFAMILY.poppins_regular}}
                   />
               </View>
               <View style={{ height: 55, width: '85%', alignSelf: 'center', marginTop: 80, flexDirection: 'row', elevation: 3, borderRadius: 5, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: 'transparent' }}>
                   <Text style={{ color: '#828282', paddingLeft: 20, paddingVertical: 15, fontFamily: FONTFAMILY.poppins_regular}}>Valor</Text>
                   <Text style={{ color: '#828282', paddingLeft: 30, paddingVertical: 15, fontFamily: FONTFAMILY.poppins_regular}}>$700</Text>
               </View>
               <Pressable style={{ backgroundColor: '#FF5B2C', borderRadius: 14, height: 50, width: '85%', alignSelf: 'center', marginTop: 40 }}>
                   <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold', padding: 13,  fontFamily: FONTFAMILY.poppins_medium }}>Agregar producto</Text>
               </Pressable>
           </View>
    </BaseScreen>
   )
}