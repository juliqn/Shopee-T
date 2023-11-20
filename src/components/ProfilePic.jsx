import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {

  const navigation = useNavigation();

  function gotoProduct(){
    navigation.navigate('AddProduct')
}

  return (
    <View style={styles.ImageContainer}>
      <TouchableOpacity
          onPress={gotoProduct}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 1,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;
