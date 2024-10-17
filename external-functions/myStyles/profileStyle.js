import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create({
  container: {
    backgroundColor:'#a8f0d3',
    width: '100%',
    height: '20%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderWidth: 1,
    borderColor: '#e7faf3',
  },
  profile: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#a8f0d3',
    marginTop: '10%',
  },
  itemUnique: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30%',
    marginLeft: '5%',
    marginRight: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20
  }
});

export default profileStyle;