import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { SafeAreaView } from 'react-native';

type RegistrationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Registration'
>;

interface RegistrationScreenProp {
    navigation: RegistrationScreenNavigationProp
}

const RegistrationScreen: React.FC<RegistrationScreenProp> = ({navigation}) => { 
    return (
        <SafeAreaView>
            
        </SafeAreaView>
    );
}

export default RegistrationScreen;
