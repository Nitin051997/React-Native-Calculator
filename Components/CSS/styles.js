import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    viewStyle: {
        flex: 1,
        backgroundColor: 'black',
    },

    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 15,
      },

    dialerBoard: {
        padding: 5,
        flex: 1,
        paddingTop: 30,
    },

    dialerBtn: {
        width: 70,
        height: 50,
    },

    dialerSize:{
        paddingTop: 13,
        justifyContent: 'center',
        fontSize: 30,
        // color: 'white'
    },

    dialerResult:{
        paddingTop: 13,
        justifyContent: 'center',
        fontSize: 30,
        color: 'white'
    },

    dialerBack:{
        paddingTop: 20,
        paddingRight: 5,
        justifyContent: 'center',
        fontSize: 50,
        // color: 'white'
    },
    
    textArea: {
        // flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'gray',
        borderWidth: 0,
        textAlignVertical: 'bottom', 
        padding: 6,
        fontSize: 50,
        // paddingTop: 120,
      },

      textAreaE: {
        // flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'gray',
        borderWidth: 0,
        textAlignVertical: 'bottom', 
        padding: 6,
        fontSize: 20,
        // paddingTop: 120,
      },

      textAreaQ: {
        // flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'gray',
        borderWidth: 0,
        textAlignVertical: 'bottom', 
        padding: 6,
        fontSize: 30,
        paddingTop: 120,
      },

})