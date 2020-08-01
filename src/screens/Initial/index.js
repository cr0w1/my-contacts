import React from 'react';
import styles from './styles';

import { View , ImageBackground , Text ,TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';


export default function Initial({ navigation }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.back_ground}>
                <ImageBackground source={require('../../../assets/img/imagem.jpg')} style={styles.background_image} blurRadius={1.5}>
                    <View style={styles.box_logo}>
                        <ImageBackground source={require('../../../assets/img/logo.png')} style={styles.logo}></ImageBackground>
                    </View>
                    <ListItem 
                        leftAvatar={{
                            source: { uri: 'https://i.imgur.com/gf6BsdT.jpg' },
                            avatarStyle: {
                                width: 40,
                                height: 40,

                                margin: 0
                            }
                        }}
                        title= 'Clebson Santos'
                        subtitle='@cr0w01'
                        titleStyle={{ color: '#fff' , fontSize: 12 }}
                        subtitleStyle={{ color: '#fff' , fontSize: 10 }}
                        containerStyle={ styles.avatar_container }
                    />
                </ImageBackground>
            </View>

            <View style={styles.box_buttons}>
                <TouchableOpacity
                    style={styles.button_login}
                    onPress={ () => { navigation.navigate('Login') }}
                >
                    <Text style={{ color: '#000' , fontSize: 20 }}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button_registration}
                    onPress={ () => { navigation.navigate('Registration') }}
                >
                    <Text style={{ color: '#000' , fontSize: 20 }}> Registra-se </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottom_bar}>
                <View style={styles.bar}></View>
            </View>
        </View>
    )
}