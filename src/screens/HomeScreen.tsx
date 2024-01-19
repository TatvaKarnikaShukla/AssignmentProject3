import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { View, Text } from 'react-native';
import assignmentStyle from '../styles/styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface HomeScreenProp {
    navigation: HomeScreenNavigationProp
}

const HomeScreen: React.FC<HomeScreenProp> = ({navigation}) => { 
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={assignmentStyle.boldTextStyle}>Home screen</Text>
        </View>
    );
}

export default HomeScreen;
