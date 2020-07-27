import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    camera: {
        flex: 1,
    },
    options: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    cam_flip: {
        position: 'absolute',

        bottom: 25,
        left: 20
    },
    cam_photo: {
        position: 'absolute',

        bottom: 10,
        left: 150

    },
    cam_back: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,

        marginLeft: 8,
        marginTop: 10,

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
    box_image: {
        justifyContent: 'center',
        alignItems: 'center',

        margin: 20
    },
    user_image: {
        width: 270,
        height: 270,

        backgroundColor: '#fff',

        borderWidth: 4,
        borderColor: '#e9e9e9',
        borderRadius: 135,

        margin: 20,
        marginBottom: 35
    },
    image_user: {
        position: 'relative',

        resizeMode: "cover",
        justifyContent: "center",

        height: '100%',

        borderRadius: 135

    },
    button_select: {
        justifyContent: "center",
        alignItems: "center",

        width: 180,
        height: 40,

        backgroundColor: '#65abd6',
        borderRadius: 5,

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