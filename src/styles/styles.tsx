import {StyleSheet} from 'react-native';

const assignmentStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
    margin:10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default assignmentStyle;
