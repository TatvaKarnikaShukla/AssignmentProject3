import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import {SafeAreaView, Text} from 'react-native';
import assignmentStyle from '../styles/styles';
import WebView from 'react-native-webview';

type AboutPageScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AboutPage'
>;

interface AboutPage {
  navigation: AboutPageScreenNavigationProp;
}

const HtmlContent = 
    `<html>
        <body>
            <h1 style="font-size: 100px;color: red; text-align: center;">About Page</h1>
            <p style="font-size: 50px; color: blue; text-align: center;">This is About Page with static HTML content.</p>
        </body>
    </html>`


const AboutPage: React.FC<AboutPage> = ({navigation}) => {
  return (
    <SafeAreaView
      style={assignmentStyle.containerStyle}>
        <WebView
          source={{ html: HtmlContent }}
        />
    </SafeAreaView>
  );
};

export default AboutPage;
