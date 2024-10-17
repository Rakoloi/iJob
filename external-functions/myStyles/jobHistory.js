import { StyleSheet } from "react-native";

const jobHistory = StyleSheet.create({
    pendingJob: {
      backgroundColor: '#ffffb3', // Lighter shade for pending jobs
      padding: 15,
      borderRadius: 8,
      marginVertical: 10,
      width: '94%',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between', 
    },
    completedJob: {
      backgroundColor: '#a8f0d3', // Darker shade for completed jobs
      padding: 15,
      borderRadius: 8,
      marginVertical: 10,
      width: '94%',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    jobText: {
      fontSize: 18,
      alignSelf: 'center',
      marginTop: '3%'
    },
  });
  
 export default jobHistory
  