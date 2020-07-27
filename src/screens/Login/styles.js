import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box_top:{
        textAlign: "left",
        height: '38%',
        marginTop: '10%'
    },
    button_back:{
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        marginLeft: 8,
        backgroundColor: '#e9e9e9',
        borderRadius: 20
    },
    title:{
        color: '#000',
        fontSize: 35,
        fontWeight: '600',
        marginTop: '8%',
        marginLeft: 10
    },
    container:{
        justifyContent: "center",
        alignItems:"center"
    },
    inputs: {
        width: 300,
    },
    button: {
        width: 200,
        height: 50,
        marginTop: 10,
        backgroundColor: '#eee23e',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;