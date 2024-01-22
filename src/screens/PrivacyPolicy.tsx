import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import {SafeAreaView, Text} from 'react-native';
import assignmentStyle from '../styles/styles';
import WebView from 'react-native-webview';

type PrivacyPolicyScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PrivacyPolicy'
>;

interface PrivacyScreenProp {
  navigation: PrivacyPolicyScreenNavigationProp;
}

const PrivacyPolicy: React.FC<PrivacyScreenProp> = ({navigation}) => {
  return (
    <SafeAreaView
      style={assignmentStyle.containerStyle}>
        <WebView
          source={{ uri: 'https://www.google.com' }}
        />
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
