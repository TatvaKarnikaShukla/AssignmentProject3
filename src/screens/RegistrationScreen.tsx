import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import {Image, Text, View} from 'react-native';
import InputTextComponent from '../components/InputTextComponent';
import SubmitButtonComponent from '../components/SubmitButtonComponent';
import assignmentStyle from '../styles/styles';
import Toast from 'react-native-simple-toast';

type RegistrationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Registration'
>;

interface RegistrationScreenProp {
  navigation: RegistrationScreenNavigationProp;
}

const RegistrationScreen: React.FC<RegistrationScreenProp> = ({navigation}) => {
  const [userNameValue, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [userNameErrorMessage, setUserNameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleUserNameChange = (userName: string) => {
    if (userName.length > 0) {
      setUserError(false);
      setUserName(userName);
    }
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    setPasswordError(false);
  };

  const handleConfirmPasswordChange = (password: string) => {
    setConfirmPassword(password);
    setConfirmPasswordError(false);
  };

  const handleSubmitButtonClick = () => {
    if (userNameValue.length === 0) {
      setUserNameErrorMessage('*Username is required.');
      setUserError(true);
    } else if (password.length === 0) {
      setPasswordError(true);
      setPasswordErrorMessage('*Password is required.');
    } else if(password != confirmPassword){
        setConfirmPasswordError(true);
        setConfirmPasswordErrorMessage("*Password and confirm password should be same.");
    }else {
      Toast.show('Registration successful', Toast.SHORT);
      navigation.navigate('Login');
    }
  };

  const handleLoginLinkClick = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={assignmentStyle.marginTopStyle}>
      <Image
        style={assignmentStyle.logoImageStyle}
        source={require('../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
      />

      <Text style={assignmentStyle.titleTextStyle}>Registration</Text>

      <InputTextComponent
        label="Username"
        value={userNameValue}
        onChangeText={handleUserNameChange}
        placeholder="Username"
        secureTextEntry={false}
        error={userError}
      />

      {userError && (
        <Text style={assignmentStyle.textInputErrorStyle}>
          {userNameErrorMessage}
        </Text>
      )}

      <InputTextComponent
        label="Password"
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Password"
        secureTextEntry={true}
        error={passwordError}
      />

      {passwordError && (
        <Text style={assignmentStyle.textInputErrorStyle}>
          {passwordErrorMessage}
        </Text>
      )}

      <InputTextComponent
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        placeholder="Confirm Password"
        secureTextEntry={true}
        error={confirmPasswordError}
      />

      {confirmPasswordError && (
        <Text style={assignmentStyle.textInputErrorStyle}>
          {confirmPasswordErrorMessage}
        </Text>
      )}

      <SubmitButtonComponent
        title="Register"
        onClick={handleSubmitButtonClick}
      />

      <View style={assignmentStyle.alignContentCenterStyle}>
        <Text style={assignmentStyle.boldTextStyle}>
          Already registered?{' '}
          <Text
            style={assignmentStyle.linkStyle}
            onPress={handleLoginLinkClick}>
            Login here!
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default RegistrationScreen;
