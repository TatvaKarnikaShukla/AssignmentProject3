import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import {Text, TextInput, View} from 'react-native';
import assignmentStyle from '../styles/styles';
import InputTextComponent from '../components/InputTextComponent';
import SubmitButtonComponent from '../components/SubmitButtonComponent';
import UserData from '../model/User';
import Toast from 'react-native-simple-toast';
import InputNumericTextComponent from '../components/InputNumericTextComponent';

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;

type ButtonType = {
  SendOtpButton: string;
  ResetPassword: string;
  VerifyOtp: string;
};

const buttonType: ButtonType = {
  SendOtpButton: 'Send OTP',
  ResetPassword: 'Reset Password',
  VerifyOtp: 'Verify OTP',
};

interface ForgotPasswordScreenProp {
  navigation: ForgotPasswordScreenNavigationProp;
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProp> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [submitButtonText, setSubmitButtonText] = useState(
    buttonType.SendOtpButton,
  );
  const [otpFieldVisibility, setOtpFieldVisibility] = useState(false);
  const [passwordFieldsVisibility, setPasswordFieldVisibility] =
    useState(false);
  const [otpValue, setOtpValue] = useState(123456);
  const [otpError, setOtpError] = useState(false);
  const [otpErrorMsg, setOtpErrorMsg] = useState('');
  const [randomGeneratedOtpValue, setRandomGeneratedOtpValue] =
    useState(123456);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailValid = (email: string) => {
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const isOtpVerified = () => {
    if (otpValue == randomGeneratedOtpValue) {
      return true;
    } else {
      return false;
    }
  };

  const handleSendOTP = () => {
    if (!!!isEmailValid) {
      setEmailError(true);
      setEmailErrorMsg('Invalid email address.');
      console.log("Send otp button clicked")
    } else {
      setOtpFieldVisibility(true);
      setSubmitButtonText(buttonType.VerifyOtp);
    }
  };

  const handleVerifyOtp = () => {
    if (!isOtpVerified) {
      setOtpError(true);
      setOtpErrorMsg('Incorrect OTP.');
    } else {
      setSubmitButtonText(buttonType.ResetPassword);
    }
  };

  const handleResetPassword = () => {
    if (passwordValue.length == 0) {
      setPasswordError(true);
      setPasswordErrorMsg('*Password is required.');
    } else if (passwordValue == confirmPasswordValue) {
      navigation.navigate('Login');
      Toast.show('Password changed successfully.', Toast.SHORT);
    } else {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMsg(
        '*Password and confirm password should be same.',
      );
    }
  };

  const handleSubmitButtonClick = () => {
    switch (submitButtonText) {
      case buttonType.ResetPassword:
        handleResetPassword;
        break;
      case buttonType.SendOtpButton:
        handleSendOTP;
        break;
      case buttonType.VerifyOtp:
        handleVerifyOtp;
        break;
      default:
        handleResetPassword;
        break;
    }
  };

  const handleEmailTextChange= (email: string) => {
    if(email.length == 0){
    setEmailError(true)
    setEmailErrorMsg("*Enter valid email.")
    }else{
        setEmail(email)
    }
}

  return (
    <View style={[assignmentStyle.alignContentCenterStyle, assignmentStyle.marginTopStyle]}>
      <Text style={assignmentStyle.boldTextStyle}>
        Reset your password for Assignment
      </Text>

      {!otpFieldVisibility ? (
        <>
          <InputTextComponent
            value={email}
            error={emailError}
            label="Email"
            onChangeText={handleEmailTextChange}
            placeholder="Enter your email"
            secureTextEntry={false}
          />

          {emailError && (
            <Text style={assignmentStyle.textInputErrorStyle}>
              {emailErrorMsg}
            </Text>
          )}
        </>
      ) : (
        <>
          <InputNumericTextComponent
            value={otpValue.toString()}
            error={emailError}
            label="OTP"
            placeholder="Enter otp"
          />
          {otpError && (
            <Text style={assignmentStyle.textInputErrorStyle}>
              {otpErrorMsg}
            </Text>
          )}
        </>
      )}

      {passwordFieldsVisibility && (
        <>
          <InputTextComponent
            label="Password"
            value={passwordValue}
            placeholder="Password"
            secureTextEntry={true}
            error={passwordError}
          />

          {passwordError && (
            <Text style={assignmentStyle.textInputErrorStyle}>
              {passwordErrorMsg}
            </Text>
          )}

          <InputTextComponent
            label="Confirm Password"
            value={confirmPasswordValue}
            placeholder="Confirm Password"
            secureTextEntry={true}
            error={confirmPasswordError}
          />

          {confirmPasswordError && (
            <Text style={assignmentStyle.textInputErrorStyle}>
              {confirmPasswordErrorMsg}
            </Text>
          )}
        </>
      )}

      <SubmitButtonComponent
        onClick={handleSubmitButtonClick}
        title={submitButtonText}
      />
    </View>
  );
};

export default ForgotPasswordScreen;
