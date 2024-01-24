import React, {useLayoutEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import {Alert, Button, Image, Linking, PermissionsAndroid, Platform, SafeAreaView, Text, TextInput, View} from 'react-native';
import assignmentStyle from '../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface ProfileScreenProp {
  navigation: ProfileScreenNavigationProp;
}

const ProfileScreen: React.FC<ProfileScreenProp> = ({navigation}) => {
  const [isEditing, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState('Karnika');
  const [lastName, setLastName] = useState('Dave');
  const [gender, setGender] = useState('Female');
  const [about, setAbout] = useState(
    'Android developer, learning react native.',
  );
  const [profileImage, setProfileImage] = useState<string | null>(
    'https://reactnative.dev/img/tiny_logo.png',
  );

  const handleChooseFromGallery = async () => {
    try {
          ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              selectionLimit: 1,
            },
            response => {
              const takenImage = response.assets && response.assets[0];
              if (!response.didCancel) {
                setProfileImage(takenImage?.uri || null);
              }
            },
          );
            
    } catch (error: any) {
        console.log(error)
    }
  };

  const handleTakePhoto = async () => {
    try {
          await ImagePicker.launchCamera(
            {
              mediaType: 'photo',
              saveToPhotos: true,
            },
            response => {
              const takenImage = response.assets && response.assets[0];
              if (!response.didCancel) {
                console.log("Image " + takenImage?.uri || null + " "+ response.assets)
                setProfileImage(takenImage?.uri || null);
              }
            },
          );
     } catch (error: any) {
        console.log(error)        
    }
  };


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{marginRight: 10}}>
          {isEditing ? (
            <Ionicons
              name="checkmark"
              size={30}
              color="black"
              onPress={() => setIsEditable(false)}
            />
          ) : (
            <Ionicons
              name="pencil"
              size={30}
              color="black"
              onPress={() => setIsEditable(true)}
            />
          )}
        </View>
      ),
    });
  });
  return (
    <View style={{padding: 16}}>
      <View>
        <Image
          source={{uri: profileImage ?? undefined}}
          style={assignmentStyle.profileImageStyle}
        />
        {isEditing && (
            <Ionicons
              name="camera-outline"
              size={30}
              color="black"
              style={assignmentStyle.cameraIconStyle}
              onPress={() => {
                Alert.alert(
                  'Select Profile Image',
                  'How do you want to update your profile image?',
                  [
                    {
                      text: 'Choose from Gallery',
                      onPress: handleChooseFromGallery,
                    },
                    {
                      text: 'Take Photo',
                      onPress: handleTakePhoto,
                    }
                  ],
                  {cancelable: true, onDismiss: () => {},},
                )
              }}
            />
          // <View
          //   style={[
          //     assignmentStyle.marginTopStyle,
          //     assignmentStyle.marginBottomStyle,
          //   ]}>
          //   <Button
          //     title="Choose from Gallery"
          //     onPress={handleChooseFromGallery}
          //   />
          //   <View style={assignmentStyle.marginTopStyle} />
          //   <Button title="Take Photo" onPress={handleTakePhoto} />
          // </View>
        )}
      </View>
      <Text style={assignmentStyle.boldTextStyle}>First Name</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        editable={isEditing}
        style={assignmentStyle.inputStyle}
      />

      <Text style={assignmentStyle.boldTextStyle}>Last Name</Text>
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        editable={isEditing}
        style={assignmentStyle.inputStyle}
      />

      <Text style={assignmentStyle.boldTextStyle}>Gender</Text>
      <TextInput
        value={gender}
        onChangeText={setGender}
        editable={isEditing}
        style={assignmentStyle.inputStyle}
      />

      <Text style={assignmentStyle.boldTextStyle}>About</Text>
      <TextInput
        value={about}
        onChangeText={setAbout}
        editable={isEditing}
        multiline
        style={assignmentStyle.inputStyle}
      />
    </View>
  );
};

export default ProfileScreen;
