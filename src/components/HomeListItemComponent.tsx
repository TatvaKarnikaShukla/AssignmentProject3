import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import assignmentStyle from '../styles/styles';

const HomeListItemComponent= (item: ListItemProps) => {

    return (
        <TouchableOpacity style={assignmentStyle.cardContainer}>
            <View style={assignmentStyle.cardContent}>
            <Image source={{uri: item.src}} style={assignmentStyle.cardImage}></Image>
            <Text style={assignmentStyle.cardTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeListItemComponent;