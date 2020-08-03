import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box_top:{
        textAlign: "left",
        height: '5%',
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
        fontSize: 30,
        fontWeight: '600',
        marginTop: '8%',
        marginLeft: 10,

        fontStyle: "italic"
    },
    container:{
        justifyContent: "center",
        alignItems:"center",

        height: 600,

        marginTop: '20%'
    },

    user_image: {
        width: 190,
        height: 190,

        backgroundColor: '#fff',

        borderWidth: 4,
        borderColor: '#e9e9e9',
        borderRadius: 100,

        margin: 30,
        marginBottom: 35
    },
    image_user: {
        position: 'relative',

        resizeMode: "cover",
        justifyContent: "center",

        height: '100%',

        borderRadius: 100

    },
    add_image: {
        position: 'absolute',

        justifyContent: "center",
        alignItems: "center",

        width: 45,
        height: 45,

        backgroundColor: '#fff',

        borderWidth: 2,
        borderColor: '#e9e9e9',
        borderRadius: 30,

        top: 130,
        right: 0
    },

    inputs: {
        width: 300,
    },
    box_buttons: {
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",

    marginTop: 10
    },

    button_login: {
        width: 135,
        height: 45,
        
        borderColor: '#000',
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',

        margin: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 2,
    },
    button_registration: {
        width: 135,
        height: 45,
        
        backgroundColor: '#65abd6',
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',

        margin: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1,
    },
    teste: {
        width: 20,
        height: 20
    }
})

export default styles;