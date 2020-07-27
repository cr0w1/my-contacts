import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box_top:{
        textAlign: "left",
        height: '29%',
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
        alignItems:"center",

    },
    
    container_social_media: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
    },
    social_media: {
        justifyContent: "center",
        alignItems: "center",

        width: 60,
        height: 60,
        borderRadius: 30,

        margin: 10,

        borderWidth: 2,
        borderColor: '#e9e9e9',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1,
    },

    text: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 6,
        marginLeft: 10
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

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1,
    }
});

export default styles;