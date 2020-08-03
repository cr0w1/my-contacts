import React , { useState , useEffect } from 'react';
import axios from 'axios';
import firebase from '../../firebase';

import Toast from 'react-native-tiny-toast';

import {  AntDesign , MaterialIcons} from '@expo/vector-icons';

import styles from './styles';
import { ScrollView,Text, View , TouchableOpacity , ImageBackground , Modal,Image} from 'react-native';
import { Input } from 'react-native-elements';

export default function EditContactsScreen({ navigation , route }) {

    // State variable 
    const [ openModall , setOpenModall ] = useState(false);

    const [ contactId , setContactId ] = useState(route.params.data.id);
    const [ contactImage , setContactImage ] = useState(route.params.data.image_url);
    const [ contactName , setContactName ] = useState(route.params.data.name);
    const [ contactCpf , setContactCpf ] = useState(route.params.data.cpf);
    const [ contactTelefone , setContactTelefone ] = useState(route.params.data.telefone);
    const [ cameraImage , setCameraImage ] = useState('');
    const [ image ,setImage ] = useState('');

    const [ erroName, setErroName ] = useState('');
    const [ erroTelefone , setErrotelefone] = useState('');

    useEffect(()=>{
        setCameraImage(route.params.file ? route.params.file.uri : '');
    })

    async function updateContact(){

        if(contactName === ''){
            setErroName('O Campo Nome é obrigatório.');
        }else if(contactTelefone === ''){
            setErrotelefone('O Campo Telefone é obrigatório.');
        }else {
            setErroName('');
            setErrotelefone('');
            if(cameraImage == ''){
                setOpenModall(true);
                await axios.put('https://api-clebson.herokuapp.com/contact/'+contactId, {
                    name: contactName,
                    cpf: contactCpf,
                    telefone: contactTelefone,
                    image_url: contactImage,
                })
                .then(function (response) {
                    if(response.data.success === true){
                        setOpenModall(false);
                        navigation.navigate('Contacts');
                        Toast.showSuccess('Contato Atualizado!',{
                            position: Toast.position.TOP,
                            containerStyle:{
                            width: 300,
                            height: 50,
                            backgroundColor: '#32CD32',
                            borderRadius: 10,
                            flexDirection: "row"
                            },
                            textStyle:{
                            color:'#fff',
                            },
                            mask:false,
                            maskStyle:{}, 
                            duration: 2000,             
                            animation: true,
                        });
                    }
                })
                .catch(function (error) {
                    console.log("erro ",error);
                })
            }else{
                try {
                    setOpenModall(true);
                    const fileName = Date.now();
                    
                    const blob = await new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        resolve(xhr.response);
                    };
                    xhr.onerror = function() {
                        reject(new TypeError('Network request failed'));
                    };
                    xhr.responseType = 'blob'; 
                    xhr.open('GET', cameraImage, true); 
                    xhr.send(null);
                    });
            
                    const ref = firebase.storage().ref().child('images/'+ fileName);
            
                    const upload = await ref.put(blob);
        
                    const remoteUri = await upload.ref.getDownloadURL();
                    
                    blob.close();

                    await axios.put('https://api-clebson.herokuapp.com/contact/'+contactId, {
                        name: contactName,
                        cpf: contactCpf,
                        telefone: contactTelefone,
                        image_url: remoteUri,
                    })
                    .then(function (response) {
                        if(response.data.success === true){
                            setOpenModall(false);
                            navigation.navigate('Contacts');
                            Toast.showSuccess('Contato Atualizado!',{
                                position: Toast.position.TOP,
                                containerStyle:{
                                width: '90%',
                                height: 50,
                                backgroundColor: '#32CD32',
                                borderRadius: 9,
                                flexDirection: "row"
                                },
                                textStyle:{
                                color:'#fff',
                                },
                                imgStyle: {width: 10,
                                height: 10},
                                mask:false,
                                maskStyle:{}, 
                                duration: 2000,             
                                animation: true,
                            });
                        }
                    })
                    .catch(function (error) {
                        console.log("erro ",error);
                    })
                } catch (error) {
                    console.log('erro catch ',error);
                }
            }
        }
        
    }
  

    return (
        <ScrollView  horizontal={false} showsVerticalScrollIndicator={true}>
            <View style={ styles.box_top }>
                    <TouchableOpacity
                        style={styles.button_back}
                        onPress={()=>{navigation.goBack()}}
                    >
                    <AntDesign
                            name='back'
                            size={27}
                            color='black'
                    />
                    </TouchableOpacity>
                    <Text style={ styles.title }>Editar Contato</Text>
            </View>
            <View style={ styles.container }>

                <View style={styles.user_image}>
                    <ImageBackground source={{uri: cameraImage == ''? contactImage: cameraImage }} style={styles.image_user} imageStyle={{
                        borderRadius: 100, borderColor: '#e9e9e9',
                    }}>
                        <TouchableOpacity style={styles.add_image} 
                            onPress={ () => { navigation.navigate('Photo', {page: 'edite' })} }
                        >
                            <MaterialIcons
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
                    value={contactName}
                    onChangeText={text => setContactName(text)}
                    keyboardType="email-address"
                    errorMessage={erroName}
                />
                <Input 
                    containerStyle={ styles.inputs }
                    label='CPF'
                    placeholder='Exp: 000.000.000-00'
                    errorMessage=""
                    value={contactCpf}
                    onChangeText={text => setContactCpf(text)}
                    keyboardType='numeric'
                />
                <Input 
                    containerStyle={ styles.inputs }
                    label='Numero de Telefone'
                    placeholder='Exp: (00) 00000-0000'
                    errorMessage=""
                    value={contactTelefone}
                    onChangeText={text => setContactTelefone(text)}
                    keyboardType='phone-pad'
                    errorMessage={erroTelefone}
                />
                <View style={styles.box_buttons}>
                    <TouchableOpacity
                        style={styles.button_login}
                        onPress={()=>{navigation.goBack()}}
                    >
                        <Text style={{ color: '#000' , fontSize: 20 }}> Cancelar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button_registration}
                        onPress={()=> {updateContact()}}
                    >
                        <Text style={{ color: '#000' , fontSize: 20 }}> Salvar </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Modela de Loading */}
            <Modal
                animationType='slide'
                transparent={false}
                visible={openModall}
            >  
                <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
                }}>  
                <Image 
                    style={{
                        width: 200,
                        height: 200
                    }}
                    source={{uri: 'https://logomakr.com/getstarted/wp-content/uploads/2018/03/ounq1mw5kdxy-sm.gif'}}
                />
                <Text style={{
                    fontSize: 18,
                    fontWeight: "bold"
                }}>Atualizando os dados.</Text>
                </View>
            </Modal>
        </ScrollView>
    )
}

