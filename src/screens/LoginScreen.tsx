import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { StyleSheet, View, Image, Text } from 'react-native';
import InputTextComponent from '../components/InputTextComponent';
import SubmitButtonComponent from '../components/SubmitButtonComponent';

type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Login'
>;

interface LoginScreenProp {
    navigation: LoginScreenNavigationProp
}

const LoginScreen: React.FC<LoginScreenProp> = ({ navigation }) => {
    const [userNameValue, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [userError, setUserError] = useState(false)
    const [userNameErrorMessage, setUserNameErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [passwordError, setPasswordError] = useState(false);

    const handleUserNameChange = (userName: string) => {
        if(userName.length > 0)
            setUserError(false)
            setUserName(userName);
    }
    const handlePasswordChange = (password: string) => {
        setPassword(password);
        setPasswordError(false);
    }

    const handleSubmitButtonClick= () => {
        if(userNameValue.length == 0){
            setUserNameErrorMessage("*Username is required.")
            setUserError(true)
        }
        else if (password.length == 0){
            setPasswordError(true)
            setPasswordErrorMessage("*Password is required.")
        }
    }

    return (
        <View style={loginScreenStyle.containerStyle}>

            <Image
                style= {loginScreenStyle.imageStyle}
                source={require('../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
            />

            <Text style={loginScreenStyle.titleTextStyle}>Login</Text>

            <InputTextComponent
                label='Username'
                value={userNameValue}
                onChangeText={handleUserNameChange}
                placeholder='Username'
                secureTextEntry={false}
                error={userError}
            />

            {userError ? (<Text style={{color:'red', marginStart: 10}}>{userNameErrorMessage}</Text>) : null}

            <InputTextComponent
                label='Password'
                value={password}
                onChangeText={handlePasswordChange}
                placeholder='Password'
                secureTextEntry={true}
                error= {passwordError}
            />

            {passwordError ? (<Text style={{color:'red', marginStart: 10}}>{passwordErrorMessage}</Text>) : null}


            <SubmitButtonComponent
                title='Login'
                onClick={handleSubmitButtonClick}
            />
        </View>
    );
}

const loginScreenStyle = StyleSheet.create({
    containerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }, 
    imageStyle: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 10
    },
    titleTextStyle: {
        color: 'black',
        fontSize: 24,
        marginBottom: 40,
        alignSelf: 'center',
        fontWeight: 'bold',
    }
});

export default LoginScreen;
