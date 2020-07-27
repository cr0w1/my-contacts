import React from 'react';

import { View , Text ,TouchableOpacity} from 'react-native';


export default function Initial({ navigation }) {
    return (
        <View 
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={{ color: '#000' }}>Inicio</Text>

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 45,
                    
                    backgroundColor: '#eee23e',
                    borderRadius: 5,

                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                onPress={ () => { navigation.navigate('Login') }}
            >
                <Text style={{ color: '#000' , fontSize: 20 }}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 200,
                    height: 45,
                    
                    backgroundColor: '#eee23e',
                    borderRadius: 5,

                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                onPress={ () => { navigation.navigate('Registration') }}
            >
                <Text style={{ color: '#000' , fontSize: 20 }}> REgistro </Text>
            </TouchableOpacity>
        </View>
    )
}