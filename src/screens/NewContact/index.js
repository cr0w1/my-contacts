import React from 'react';

import { Input } from 'react-native-elements';
import IconMateria from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { View , SafeAreaView , ScrollView ,Text ,TouchableOpacity, ImageBackground} from 'react-native';
import styles from './styles';

export default function Registration({ navigation , route }) {

    const imageMy = 'https://i.imgur.com/HI4tdb6.png';
    
    return (
        <SafeAreaView>
            <ScrollView  horizontal={false} showsVerticalScrollIndicator={true}>
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

                    <Text style={ styles.title }>Contato</Text>
                </View>
                <View style={ styles.container }>

                    <View style={styles.user_image}>
                        <ImageBackground source={{uri: route.params ? route.params.image : imageMy }} style={styles.image_user} imageStyle={{
                            borderRadius: 100, borderColor: '#e9e9e9',
                        }}>
                            <TouchableOpacity style={styles.add_image} 
                                onPress={ () => {navigation.navigate('Photo')} }
                            >
                                <IconMateria
                                    name='add-a-photo'
                                    size={26}
                                    color='black'
                                />
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <Input 
                        containerStyle={ styles.inputs }
                        label='Nome de Usuário'
                        placeholder='Nome de Usuário'
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
                        label='Email'
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
                        label='Senha'
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
                        <Text style={{ color: '#000' , fontSize: 20 }}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}