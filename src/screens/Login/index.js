import React from 'react';

import { Input } from 'react-native-elements';
import IconMateria from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { View , Text , TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Login({ navigation }) {
    return (
        <View >
            <View style={ styles.box_top }>
                <TouchableOpacity
                    style={styles.button_back}
                    onPress={ () => { navigation.goBack() }}
                >
                    <IconAntDesign
                        name='back'
                        size={27}
                        color='black'
                    />
                </TouchableOpacity>

                <Text style={ styles.title }>Login</Text>
            </View>

            <View style={ styles.container }>
                <View style={styles.container_social_media}>
                    <TouchableOpacity style={styles.social_media}>
                        <IconAntDesign
                            name='google'
                            size={40}
                            color='#ea4335'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.social_media}>
                        <IconAntDesign
                            name='apple1'
                            size={40}
                            color='#a6b1b7'
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.text}>Ou utilize seu email</Text>

                <Input 
                    containerStyle={ styles.inputs }
                    placeholder='Email'
                    rightIcon={ 
                        <IconMateria
                            name='email'
                            size={25}
                            color='black'
                        />
                    }
                    errorMessage='Email Inválido'
                />
                <Input 
                    containerStyle={ styles.inputs }
                    placeholder='Senha'
                    rightIcon={
                        <IconMateria
                            name='lock'
                            size={25}
                            color='black'
                        />
                    }
                    errorMessage='Senha Inválida'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={ () => { navigation.navigate('Home') }}
                >
                    <Text style={{ color: '#000' , fontSize: 20 }}> Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}