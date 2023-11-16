import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { check_min } from '../utils/Img';
import { useNavigation } from '@react-navigation/native';

const Checkbox = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const navigation = useNavigation();

  const handlePress = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
    if (!isChecked) {
        navigation.navigate('Password');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.checkboxContainer, isChecked && styles.checked]}>
        {isChecked && 
             <View>
                <Image
                    source={check_min}
                    style={styles.checked_img}
                />
            </View>
        }
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#D5DDE0',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 22,
    height: 22,
    backgroundColor: '#FF5F00',
    borderRadius: 2,
  },
  checked_img: {
    width: 22,
    height: 22
  },
});

export default Checkbox;