import React from 'react'
import { StyleSheet } from 'react-native'

const AvailJobsStyle = StyleSheet.create({
    Container: {
        flex: 1,
        alignContent: 'center'
    },

    EachItem: {
        width: "90%",
        borderWidth: 1,
        borderColor: '#0acf83',
        borderRadius: 10,
        alignSelf: 'center',
        padding: 15,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',  
    },

    payText: {
        marginBottom: 'auto',
        marginTop: 'auto', 
        fontSize: 16,
        letterSpacing: 0,
        fontWeight: "500",
    }
})

export default AvailJobsStyle
