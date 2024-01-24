import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import InputTextComponent from '../components/InputTextComponent';
import SubmitButtonComponent from '../components/SubmitButtonComponent';
import assignmentStyle from '../styles/styles';
import UserData from '../model/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = (props: any) => {
  const [userNameValue, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [userNameErrorMessage, setUserNameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);

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

  const handleSubmitButtonClick = () => {
    if (userNameValue.length === 0) {
      setUserNameErrorMessage('*Username is required.');
      setUserError(true);
    } else if (password.length === 0) {
      setPasswordError(true);
      setPasswordErrorMessage('*Password is required.');
    }else{
        storeUserData()
    }
  };

  const storeUserData = () => {
    const userData = new UserData(1,userNameValue,password,true)
    storeUserObjectToLocal(userData);
  }

  const storeUserObjectToLocal = async(userData: UserData) => {
    try {
        await AsyncStorage.setItem("UserData", JSON.stringify(userData))
        console.log('Object stored successfully!' + await AsyncStorage.getItem('UserData'));
        props.navigation.navigate('AuthenticatedScreens');
    } catch (error) {
        console.error('Error storing object:', error);
    }
  };

  const handleRegisterLinkClick = () => {
    props.navigation.navigate('Registration');
  };

  const handleForgotPasswordClick = () => {
    props.navigation.navigate('ForgotPassword');
  };


  return (
    <View style={assignmentStyle.containerStyle}>
      <Image
        style={assignmentStyle.logoImageStyle}
        source={require('../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
      />

      <Text style={assignmentStyle.titleTextStyle}>Login</Text>

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

      <SubmitButtonComponent title="Login" onClick={handleSubmitButtonClick} />

      <View style={assignmentStyle.alignContentCenterStyle}>
        <Text style={[assignmentStyle.boldTextStyle, assignmentStyle.marginTopStyle, assignmentStyle.marginBottomStyle]}
        onPress={handleForgotPasswordClick}>
          Forgot password?{' '}
          </Text>
      </View>


      <View style={assignmentStyle.alignContentCenterStyle}>
        <Text style={assignmentStyle.boldTextStyle}>
          Not registered yet?{' '}
          <Text
            style={assignmentStyle.linkStyle}
            onPress={handleRegisterLinkClick}>
            Register here!
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
