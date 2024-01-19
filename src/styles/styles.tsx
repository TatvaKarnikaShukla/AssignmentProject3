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
  }
});

export default assignmentStyle;
