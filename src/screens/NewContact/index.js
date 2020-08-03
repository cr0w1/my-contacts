import React , {useState , useEffect} from 'react';
import axios from 'axios';
import firebase from '../../firebase';

import Toast from 'react-native-tiny-toast';

import { Input } from 'react-native-elements';
import IconMateria from 'react-native-vector-icons/MaterialIcons';

import { 
   View,
   SafeAreaView,
   ScrollView,
   Text,
   TouchableOpacity,
   ImageBackground,
   Modal,
   Image,
   LogBox
} from 'react-native';

import styles from './styles';

export default function Registration({ navigation , route }) {

   // State variable 
   const [ openModalll , setOpenModalll ] = useState(false);

   const [ contactImageN , setContactImageN ] = useState('https://i.imgur.com/HI4tdb6.png');
   const [ userId , setUserId ] = useState(route.params.user.id);
   const [ contactNameN , setContactNameN ] = useState('');
   const [ contactCpfN , setContactCpfN ] = useState('');
   const [ contactTelefoneN , setContactTelefoneN ] = useState('');

   const [ erroName, setErroName ] = useState('');
   const [ erroTelefone , setErrotelefone] = useState('');

   const [ neW , setNeW ] = useState(false);

   useEffect(() => {
      (() => {
         navigation.addListener('beforeRemove', (e) => {
         e.preventDefault();
         }),[navigation]
      })();

      setContactImageN(route.params.file ? route.params.file.uri : 'https://i.imgur.com/HI4tdb6.png' );
      
      const unsubscribe = navigation.addListener('tabPress', e => {
         // Prevent default behavior

         setUserId(route.params.user.id);
         setContactNameN('');
         setContactCpfN('');
         setContactTelefoneN('');
      
      });
      
   });
   
   async function createContact(){

      if(contactNameN === ''){
         setErroName('O Campo Nome é obrigatório.');
      }else if(contactTelefoneN === ''){
         setErrotelefone('O Campo Telefone é obrigatório.');
      }else {
         setErroName('');
         setErrotelefone('');
         try {
            setOpenModalll(true);
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
               xhr.open('GET', contactImageN, true); 
               xhr.send(null);
            });
      
            const ref = firebase.storage().ref().child('images/'+ fileName);
      
            const upload = await ref.put(blob);

            const remoteUri = await upload.ref.getDownloadURL();

            blob.close();

            await axios.post('https://api-clebson.herokuapp.com/contact', {
               user_id: userId,
               name: contactNameN,
               cpf: contactCpfN,
               telefone: contactTelefoneN,
               url: remoteUri
            })
            .then(function (response) {
               if(response.data.success === true){
                  setOpenModalll(false);
                  setContactImageN('https://i.imgur.com/HI4tdb6.png');
                  navigation.navigate('Contacts');
                  Toast.showSuccess('Contato Salvo!',{
                    position: Toast.position.TOP,
                    containerStyle:{
                       width: '80%',
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
               }else{
                  setOpenModalll(false);
                  console.log('Não foi Posivel salvar!!');
               }
            })
            .catch(function (error) {
               console.log('erro da req da minha API ',error);
               setOpenModalll(false);
            })

         } catch (error) {
            console.log('erro catch ',error);
         }
      }
   }
console.disableYellowBox = true;
    return (
        <SafeAreaView>
            <ScrollView  horizontal={false} showsVerticalScrollIndicator={true}>
                <View style={ styles.box_top }>
                    <Text style={ styles.title }>Contato</Text>
                </View>
                <View style={ styles.container }>

                    <View style={styles.user_image}>
                        <ImageBackground source={{uri: contactImageN }} style={styles.image_user} imageStyle={{
                            borderRadius: 100, borderColor: '#e9e9e9',
                        }}>
                            <TouchableOpacity style={styles.add_image} 
                                onPress={ () => {navigation.navigate('Photo', {page: 'newcontact'})} }
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
                        value={contactNameN}
                        onChangeText={text => setContactNameN(text)}
                        keyboardType="email-address"
                        errorMessage={erroName}
                    />
                    <Input 
                        containerStyle={ styles.inputs }
                        label='CPF (Opcional)'
                        placeholder='Exp: 000.000.000-00'
                        errorMessage=""
                        value={contactCpfN}
                        onChangeText={text => setContactCpfN(text)}
                        keyboardType='numeric'
                    />
                    <Input 
                        containerStyle={ styles.inputs }
                        label='Numero de Telefone'
                        placeholder='Exp: (00) 00000-0000'
                        errorMessage=""
                        value={contactTelefoneN}
                        onChangeText={text => setContactTelefoneN(text)}
                        keyboardType='phone-pad'
                        errorMessage={erroTelefone}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={ () => { createContact() }}
                    >
                        <Text style={{ color: '#000' , fontSize: 20 }}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* Modela de Loading */}
            <Modal
                animationType='slide'
                transparent={false}
                visible={openModalll}
            >  
                <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
                }}>  
                <Image 
                    style={{
                        width: 180,
                        height: 180
                    }}
                    source={{uri: 'https://logomakr.com/getstarted/wp-content/uploads/2018/03/ounq1mw5kdxy-sm.gif'}}
                />
                <Text style={{
                    fontSize: 18,
                    fontWeight: "bold"
                }}>Salvando Contato.</Text>
                </View>
            </Modal>
        </SafeAreaView>
    )
}