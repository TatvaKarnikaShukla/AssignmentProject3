import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import {SafeAreaView, Text} from 'react-native';
import assignmentStyle from '../styles/styles';
import WebView from 'react-native-webview';

type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

interface SettingsScreenProp {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC<SettingsScreenProp> = ({navigation}) => {
  return (
    <SafeAreaView
      style={assignmentStyle.alignContentCenterStyle}>
        <Text style={[assignmentStyle.linkStyle, assignmentStyle.marginTopStyle]} onPress={() => navigation.navigate("PrivacyPolicy")}> Privacy Policy </Text>
        <Text style={[assignmentStyle.linkStyle, assignmentStyle.marginTopStyle]} onPress={() => navigation.navigate("AboutPage")}> About Page </Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
