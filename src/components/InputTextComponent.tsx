import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

interface inputTextComponentParams {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: any;
  secureTextEntry: boolean;
  error: boolean
}
const InputTextComponent: FC<inputTextComponentParams> = ({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  error,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      mode="outlined"
      style={textInputStyle.textStyle}
      secureTextEntry={secureTextEntry}
      error={error}
    />
  );
};

const textInputStyle = StyleSheet.create({
  textStyle: {
    margin: 10,
  },
});

export default InputTextComponent;
