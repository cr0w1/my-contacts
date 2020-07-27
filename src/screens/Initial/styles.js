import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: '96%',
        marginTop: '7%'
    },

    back_ground: {
        height: "85%",
        backgroundColor: '#3121'
    },
    background_image: {
        resizeMode: "cover",
        justifyContent: "center",

        height: '100%',

    },
    box_logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        resizeMode: "cover",
        justifyContent: "center",
    
        width: 160,
        height: 160
    },

    avatar_container: {
        backgroundColor: 'rgba(255,255,255, 0.0)'
    },

    box_buttons: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
    },

    button_login: {
        width: 160,
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
        width: 160,
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
    bottom_bar: {
        justifyContent: "center",
        alignItems: "center",

        height: 'auto'
    },
    bar: {
        width: 150,
        height: 8,

        backgroundColor: '#000',

        borderRadius: 10,

        marginTop: 3
    }
})

export default styles;