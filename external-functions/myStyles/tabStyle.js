

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileImage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0acf83'
  },
  profileName: {
    alignSelf: 'center',
    fontSize: 19,
    paddingTop: 10,
    color: '#0acf83'
    //
  },
  tabList: {
    paddingTop: 10,
    backgroundColor:'white',
    //height: '100%'
  },
  profileHeader: {
    backgroundColor:'#e7faf3',
    borderBottomRightRadius: 25,
    //padding: 20,
  },
  logOutButton: {
    backgroundColor: '#0acf83',
    //width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
    
  }
});

export default styles;
