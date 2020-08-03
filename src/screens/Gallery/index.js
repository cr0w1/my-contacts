import React , { useState , useEffect } from 'react';

import { FlatList , SafeAreaView , TouchableOpacity , Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

export default function Gallery({ navigation , route }){

    const [ hasPermission , setHasPermission] = useState(null);
    const [ image , setImage ] = useState(null);
    const [ teste , setTeste ] = useState(15);

    useEffect(()=>{
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            setHasPermission(status === 'granted'); 
        })();
    }, []); 

    const options = {
        first: teste,
    }

    async function add() {
        setTeste(teste + 10);
    } 

    if(hasPermission === true ){
        async function mediaLibraryAsync(){
            // if permissions granted
            let albumsReponse = await MediaLibrary.getAssetsAsync(options);
            setImage(albumsReponse.assets);
        }; 
        mediaLibraryAsync();
    }

    const data = image;

    // Redirect Image
    async function getImage(url){
        const uri = {
            uri: url
        };

        if(route.params.page === 'registration'){
            navigation.navigate('Registration' , {file: uri } );
        }else if(route.params.page === 'newcontact'){
            navigation.navigate('NewContact' , {file: uri } );
        }else if(route.params.page === 'edite'){
            navigation.navigate('EditContacts' , {file: uri } );
        }
    }
    
    
    return (
        <SafeAreaView style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 44
        }}>
            <FlatList
                style={{
                    backgroundColor: '#fffd'
                }}
                data={data}
                numColumns={3}
                renderItem={( {item} ) => <TouchableOpacity style={{padding: 10}} onPress={() =>{getImage(item.uri)}}><Image source={{uri: item.uri}} style={{width: 100 , height: 100 }}/></TouchableOpacity>}
                onEndReached={add}
                onEndReachedThreshold={0.7}
            />
        </SafeAreaView>
    );
}
