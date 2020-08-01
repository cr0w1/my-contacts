import React , { useState , useEffect } from 'react';
import axios from 'axios';

import { Input } from 'react-native-elements';
import IconMateria from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { 
   View,
   SafeAreaView,
   ScrollView,
   Text,
   TouchableOpacity,
   ImageBackground,
   Modal,
   Image
} from 'react-native';

import styles from './styles';

import firebase from '../../firebase';
import { storage } from 'firebase';

export default function Registration({ navigation , route }) {

   // State variable 
   const [ openModal , setOpenModal ] = useState(false);

   // State variables
   const [ getFile , setFile ] = useState(null);
   const [ getName , setName ] = useState('');
   const [ getEmail , setEmail ] = useState('');
   const [ getPassword , setPassword ] = useState('');

   useEffect(()=>{
      setFile(route.params != undefined ? route.params.file.uri: 'https://i.imgur.com/HI4tdb6.png' );
   })
      
   async function uploadImage(){
      try {
         setOpenModal(true);
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
           xhr.open('GET', getFile, true); 
           xhr.send(null);
         });
   
         const ref = firebase.storage().ref().child('images/'+ fileName);
   
         const upload = await ref.put(blob);

         const remoteUri = await upload.ref.getDownloadURL();

         blob.close();

         await axios.post('https://api-clebson.herokuapp.com/user', {
            name: getName,
            email: getEmail,
            password: getPassword,
            url: remoteUri
         })
         .then(function (response) {
            if(response.data.success === true){
               setOpenModal(false);
               navigation.navigate('Login' , {create: true});
            }else{
               setOpenModal(false);
               console.log('Não foi Posivel salvar!!');
            }
         })
         .catch(function (error) {
            console.log('erro da req da minha API ',error);
            setOpenModal(false);
         })

      } catch (error) {
         console.log('erro catch ',error);
      }
      
   }

   function scape(){
         
      console.log('chamei outra vez');
      uploadImage();
   }

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

                  <Text style={ styles.title }>Registra-se</Text>
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

                  <View style={styles.user_image}>
                     <ImageBackground source={{uri: route.params != undefined ? route.params.file.uri : 'https://i.imgur.com/HI4tdb6.png'}} style={styles.image_user} imageStyle={{
                           borderRadius: 100, borderColor: '#e9e9e9',
                     }}>
                           <TouchableOpacity style={styles.add_image} 
                              onPress={ () => {navigation.navigate('Photo', {page: true} )} }
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

                     value={getName}
                     onChangeText={text => setName(text)}

                     maxLength={50}
                  />
                  <Input 
                     containerStyle={ styles.inputs }
                     label='Email'
                     placeholder='Email'

                     value={getEmail}
                     onChangeText={text => setEmail(text)}

                     maxLength={100}
                  />
                  <Input 
                     containerStyle={ styles.inputs }
                     label='Senha'
                     placeholder='Senha'

                     value={getPassword}
                     onChangeText={text => setPassword(text)}

                     secureTextEntry={true}
                     maxLength={20}
                  />
                  <TouchableOpacity
                     style={styles.button}
                     onPress={ () => {
                        uploadImage()
                        }}
                  >
                     <Text style={{ color: '#000' , fontSize: 20 }}>Cadastra-se</Text>
                  </TouchableOpacity>
               </View>
         </ScrollView>

         {/* Modela de Loading */}
         <Modal
            animationType='slide'
            transparent={false}
            visible={openModal}
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
                  source={{uri: 'https://thumbs.gfycat.com/PlumpAdolescentArmyant-size_restricted.gif'}}
               />
               <Text style={{
                  fontSize: 18,
                  fontWeight: "bold"
               }}>Aguarde enviando!</Text>
            </View>
         </Modal>
      </SafeAreaView>
   )
}