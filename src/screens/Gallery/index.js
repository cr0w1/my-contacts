import React , { useState , useEffect } from 'react';

import { FlatList ,Text , SafeAreaView , View , ScrollView ,Button , TouchableOpacity , Image} from 'react-native';
import { ListItem } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

export default function Gallery({ navigation }){

    const [ hasPermission , setHasPermission] = useState(null);
    const [ image , setImage ] = useState(null);

    useEffect(()=>{
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            setHasPermission(status === 'granted'); 
        })();
    }, []); 

    const options = {
        first: 15,
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
                renderItem={( {item} ) => <TouchableOpacity style={{padding: 10}} onPress={() => {navigation.navigate('Registration'),{ image: item.uri }}}><Image source={{uri: item.uri}} style={{width: 100 , height: 100 }}/></TouchableOpacity>}
            />
        </SafeAreaView>
    );
}
