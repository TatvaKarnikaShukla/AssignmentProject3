import React from 'react';
import { Image, Text, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const HomeListItemComponent = () => {

    return (
        <View>
            <Image source={require("../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png")}></Image>
            <Text>HomeListItemComponent</Text>
        </View>
    )
}

export default HomeListItemComponent;