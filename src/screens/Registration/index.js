import React from 'react';

import { View , Text ,TouchableOpacity} from 'react-native';


export default function Registration({ navigation }) {
    return (
        <View 
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={{ color: '#000' }}>Registro</Text>

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 45,
                    
                    backgroundColor: '#eee23e',
                    borderRadius: 5,

                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                onPress={ () => { navigation.goBack() }}
            >
                <Text style={{ color: '#000' , fontSize: 20 }}> Voltar </Text>
            </TouchableOpacity>
        </View>
    )
}