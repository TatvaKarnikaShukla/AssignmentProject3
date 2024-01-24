import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

interface inputNumericTextComponentParams {
  label: string;
  value: string;
  placeholder: string;
  error: boolean;
  onChangeText: (otp: string) => void;
}
const InputNumericTextComponent: FC<inputNumericTextComponentParams> = ({
  label,
  value,
  placeholder,
  error,
  onChangeText
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      placeholder={placeholder}
      mode="outlined"
      style={textInputStyle.textStyle}
      error={error}
      keyboardType='number-pad'
      onChangeText={(otp) => onChangeText(otp)}
    />
  );
};

const textInputStyle = StyleSheet.create({
  textStyle: {
    margin: 10,
  },
});

export default InputNumericTextComponent;
