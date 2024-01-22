import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { View, Text, FlatList } from 'react-native';
import assignmentStyle from '../styles/styles';
import HomeListItemComponent from '../components/HomeListItemComponent';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface HomeScreenProp {
    navigation: HomeScreenNavigationProp
}

const listData: ListItemProps[] = [
    {id: 1,src: 'https://reactnative.dev/img/tiny_logo.png', title: "HomeListItemComponent1"},
    {id: 2,src: 'https://reactnative.dev/img/tiny_logo.png', title: "HomeListItemComponent2"},
    {id: 3,src: 'https://reactnative.dev/img/tiny_logo.png', title: "HomeListItemComponent3"},
    {id: 4,src: 'https://reactnative.dev/img/tiny_logo.png', title: "HomeListItemComponent4"},
]

const HomeScreen: React.FC<HomeScreenProp> = ({navigation}) => { 
    return (
        <View>
            <FlatList
                data={listData}
                renderItem={({item}) => HomeListItemComponent(item)}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default HomeScreen;
