import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { SafeAreaView, Text } from 'react-native';
import assignmentStyle from '../styles/styles';

type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

interface SettingsScreenProp {
    navigation: SettingsScreenNavigationProp
}

const SettingsScreen: React.FC<SettingsScreenProp> = ({navigation}) => { 
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={assignmentStyle.boldTextStyle}>Settings screen</Text>

        </SafeAreaView>
    );
}

export default SettingsScreen;
