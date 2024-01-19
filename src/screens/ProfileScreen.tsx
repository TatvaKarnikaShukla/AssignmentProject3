import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { SafeAreaView, Text } from 'react-native';
import assignmentStyle from '../styles/styles';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface ProfileScreenProp {
    navigation: ProfileScreenNavigationProp
}

const ProfileScreen: React.FC<ProfileScreenProp> = ({navigation}) => { 
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={assignmentStyle.boldTextStyle}>Profile screen</Text>

        </SafeAreaView>
    );
}

export default ProfileScreen;
