import React , { useState , useEffect , useRef } from 'react';

import { MaterialCommunityIcons , AntDesign } from '@expo/vector-icons';

import styles from './styles';
import { SafeAreaView ,Text, View , TouchableOpacity , ImageBackground , Modal } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({ navigation , route }) {
    const camRef = useRef(null);
    const [ type , setType ] = useState(Camera.Constants.Type.front);
    const [ hasPermission, setHasPermission ] = useState(null);
    const [ capturedPhoto , setCapturedPhoto ] = useState(null);
    const [ dataPhoto , setDataPhoto ] = useState(null);
    const [ openModal , setOpenModal ] = useState(false);

    useEffect(()=>{
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted'); 
        })();
    }, []); 

    if(hasPermission === null ){
        return <View/>
    }

    if( hasPermission === false ){
        return <Text> Acesso negado! </Text>;
    }

    async function takePicture() {
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            console.log(data);
            setCapturedPhoto(data.uri);
            setDataPhoto(data);
            setOpenModal(true);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera 
                style={styles.camera}
                type={type}
                ref={ camRef }
            >
                <View  style={ styles.options }>
                    <TouchableOpacity style={styles.cam_flip}
                        onPress={ () => {
                            setType(
                                type === Camera.Constants.Type.front
                                ? Camera.Constants.Type.back
                                : Camera.Constants.Type.front
                            )
                        }}
                    >
                        <MaterialCommunityIcons
                            name='camera-retake'
                            size={27}
                            color='#fff'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cam_photo} onPress={ takePicture }>
                        <MaterialCommunityIcons
                            name='camera-iris'
                            size={60}
                            color='#fff'
                        />
                    </TouchableOpacity>
                </View>
            </Camera>

            {capturedPhoto &&
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={openModal}
                >
                    <View>
                        <TouchableOpacity style={styles.cam_back} onPress={ () => setOpenModal(false) }>
                            <AntDesign
                                name='back'
                                size={27}
                                color='black'
                            />
                        </TouchableOpacity>

                        <Text style={ styles.title }>Previsualização</Text>
                    </View>

                    <View style={styles.box_image}>
                        <View style={styles.user_image}>
                            <ImageBackground source={{uri: capturedPhoto }} style={styles.image_user} imageStyle={{
                                borderRadius: 135, borderColor: '#e9e9e9',
                            }}>
                            </ImageBackground>
                        </View>

                        <TouchableOpacity style={styles.button_select} 
                            onPress={ () => route.params.page === true ? navigation.navigate('Registration' , {file: dataPhoto} ) : navigation.navigate('NewContact' , {file: dataPhoto } )}
                        >
                            <Text>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            }
        </SafeAreaView>
    )
}

