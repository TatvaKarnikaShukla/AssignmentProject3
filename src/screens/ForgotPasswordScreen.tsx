import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { SafeAreaView } from 'react-native';

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;

interface ForgotPasswordScreenProp {
    navigation: ForgotPasswordScreenNavigationProp
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProp> = ({navigation}) => { 
    return (
        <SafeAreaView>
            
        </SafeAreaView>
    );
}

export default ForgotPasswordScreen;
