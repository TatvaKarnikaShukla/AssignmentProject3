import React, {FC} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import assignmentStyle from '../styles/styles';

interface submitButtonParams {
  title: string;
  onClick: any;
}
const SubmitButtonComponent: FC<submitButtonParams> = ({title, onClick}) => {
  return (
    <View style={assignmentStyle.buttonStyle}>
      <Button title={title} onPress={onClick} />
    </View>
  );
};

export default SubmitButtonComponent;
