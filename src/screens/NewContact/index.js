import React from 'react';

import { Input } from 'react-native-elements';
import IconMateria from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { View , SafeAreaView , ScrollView ,Text ,TouchableOpacity, ImageBackground} from 'react-native';
import styles from './styles';

export default function Registration({ navigation , route }) {

    const imagePadrao = 'https://i.imgur.com/HI4tdb6.png';

    const valoresIniciais = {
        nome: ''
    }
    console.log(route.params);
    return (
        <SafeAreaView>
            <ScrollView  horizontal={false} showsVerticalScrollIndicator={true}>
                <View style={ styles.box_top }>
                    <Text style={ styles.title }>Contato</Text>
                </View>
                <View style={ styles.container }>

                    <View style={styles.user_image}>
                        <ImageBackground source={{uri: route.params ? route.params.image : imagePadrao }} style={styles.image_user} imageStyle={{
                            borderRadius: 100, borderColor: '#e9e9e9',
                        }}>
                            <TouchableOpacity style={styles.add_image} 
                                onPress={ () => {navigation.navigate('Photo', {page: false})} }
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
                        label='Nome'
                        placeholder='Exp: Corol Ribeiro'
                        errorMessage=""
                        keyboardType="email-address"
                    />
                    <Input 
                        containerStyle={ styles.inputs }
                        label='CPF'
                        placeholder='Exp: 000.000.000-00'
                        errorMessage=""
                        keyboardType='numeric'
                    />
                    <Input 
                        containerStyle={ styles.inputs }
                        label='Numero de Telefone'
                        placeholder='Exp: (00) 00000-0000'
                        errorMessage=""
                        keyboardType='phone-pad'
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