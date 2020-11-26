import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../theme/colors';
const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>F</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {},
});

export default Logo;
