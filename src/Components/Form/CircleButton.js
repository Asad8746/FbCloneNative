import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const CircleButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Icon name="arrowright" size={20} color={colors.blue} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CircleButton;
