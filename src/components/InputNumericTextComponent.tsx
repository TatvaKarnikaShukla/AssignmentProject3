import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

interface inputNumericTextComponentParams {
  label: string;
  value: string;
  placeholder: string;
  error: boolean
}
const InputNumericTextComponent: FC<inputNumericTextComponentParams> = ({
  label,
  value,
  placeholder,
  error,
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
    />
  );
};

const textInputStyle = StyleSheet.create({
  textStyle: {
    margin: 10,
  },
});

export default InputNumericTextComponent;
