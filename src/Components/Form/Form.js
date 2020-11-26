import React from 'react';
import {View, StyleSheet} from 'react-native';

const Form = ({children}) => {
  return <View style={styles.form}>{children}</View>;
};

const styles = StyleSheet.create({
  form: {
    marginVertical: 20,
    width: '80%',
    alignItems: 'flex-start',
  },
});

export default Form;
