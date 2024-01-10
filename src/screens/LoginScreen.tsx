import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { SafeAreaView } from 'react-native';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface LoginScreenProp {
    navigation: LoginScreenNavigationProp
}

const LoginScreen: React.FC<LoginScreenProp> = ({navigation}) => { 
    return (
        <SafeAreaView>
            
        </SafeAreaView>
    );
}

export default LoginScreen;
