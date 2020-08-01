import React , {useState , useEffect } from 'react';
import axios from 'axios';

import FlashMessage from "react-native-flash-message";

import { Input } from 'react-native-elements';
import IconMateria from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { 
   View,
   SafeAreaView,
   ScrollView,
   Text,
   TouchableOpacity,
   Modal,
   Image
} from 'react-native';

import styles from './styles';

export default function Login({ navigation , route}) {

   // State variable 
   const [ openModal , setOpenModal ] = useState(false);

   const [ getEmail , setEmail ] = useState('');
   const [ getSenha , setSenha ] = useState('');
   const [ mSuccess , setMSuccess ] = useState(null);

   const [ error , setError ] = useState('');

   useEffect(() => {
      setMSuccess(route.params != undefined ? route.params.create : false );
   });

   // useEffect(() => {
   //    if(mSuccess == true){
   //       return (
   //          <FlashMessage 
   //             position='top'
   //             message='Cadastro realizado com sucesso , faça login e desfrute de nosso app!'
   //             type='success'
   //             floating={true}
   //             duration={2000}
   //          />
   //       )
   //    }
   // },[]);

   async function login(){

      await axios.post('https://api-clebson.herokuapp.com/auth', {
         email: getEmail,
         password: getSenha
      })
      .then(function (response) {
         if(response.data.success === true){
            setOpenModal(true)
            navigation.navigate('Home', {user: response.data.user});
            setOpenModal(false);
         }else{
            setError(response.data.error);
         }
      })
      .catch(function (error) {
         console.log("erro ",error);
      })
      
   }

   return (
      <SafeAreaView >
         <ScrollView>
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
                     label='Email'
                     placeholder='Email'
                     rightIcon={ 
                        <IconMateria
                              name='email'
                              size={25}
                              color='black'
                        />
                     }
                     errorMessage=''
                     value={getEmail}
                     onChangeText={text => setEmail(text)}
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
                     errorMessage=''

                     secureTextEntry={true}
                     value={getSenha}
                     onChangeText={text => setSenha(text)}
                  />
                  <Text style={{color: 'red',margin: 5,fontSize: 15}}>{error}</Text>
                  <TouchableOpacity
                     style={styles.button}
                     onPress={ () => login() }
                  >
                     <Text style={{ color: '#000' , fontSize: 20 }}> Entrar</Text>
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
               }}>Entrando</Text>
            </View>
         </Modal>   
      </SafeAreaView>
   )
}