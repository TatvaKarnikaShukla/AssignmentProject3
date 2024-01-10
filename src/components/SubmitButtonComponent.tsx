import React, {FC} from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface submitButtonParams {
  title: string;
  onClick: any;
}
const SubmitButtonComponent: FC<submitButtonParams> = ({title, onClick}) => {
  return (
    <View style={submitButtonStyle.buttonStyle}>
      <Button title={title} onPress={onClick} />
    </View>
  );
};

const submitButtonStyle = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    width: 100,
    margin: 10,
  },
});

export default SubmitButtonComponent;
