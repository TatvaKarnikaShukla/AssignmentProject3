import {Dimensions, StyleSheet} from 'react-native';

const assignmentStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 100,
    margin: 10,
  },
  logoImageStyle: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  titleTextStyle: {
    color: 'black',
    fontSize: 24,
    marginBottom: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textInputErrorStyle: {
    color: 'red',
    marginStart: 10,
  },
  boldTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  linkStyle: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  alignContentCenterStyle: {
    alignSelf: 'center'
  },
  marginTopStyle: {
    marginTop: 10
  },
  marginBottomStyle: {
    marginBottom: 10
  },
  cardContainer: {
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    margin: 10,
  },
  productCardContainer: {
    width: Dimensions.get('window').width/2 - 30,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    margin: 10,
    alignSelf: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  productCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  inputStyle: {
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 8,
    color: 'black',
  },
  cameraIconStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 0,
    right: 130,
    zIndex: 1,
    left:210,
    padding:5,
    borderRadius: 50,
    backgroundColor: 'white',
    flexWrap: 'wrap',
  },
  profileImageStyle:{
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
  }
});

export default assignmentStyle;
