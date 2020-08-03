import React , {useEffect , useState} from 'react';
import axios from 'axios';

import Toast from 'react-native-tiny-toast';

import styles from './styles';
import { 
   Text,
   View,
   ScrollView,
   Alert
} from 'react-native';
import {
   ListItem,
   Avatar,
   Icon
} from 'react-native-elements';

export default function Home({ navigation , route }) {
   
   const [ itemsData , setItemsData ] = useState([]);

   useEffect(()=>{
      (() => {
         navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
         }),[navigation]
      })();

      (async ()=> {
         await axios.get('https://api-clebson.herokuapp.com/contacts/user/'+ route.params.user.id)
         .then(function (response) {
            setItemsData(response.data);
         })
         .catch(function (error) {
            console.log("erro ",error);
         })
      })(); 
   })

   async function deletarContato(id){
      await axios.delete('https://api-clebson.herokuapp.com/contact/'+id)
         .then(function (response) {
            if(response.data.success === true){
               navigation.navigate('Contacts');
               Toast.showSuccess('Contato Excluido!',{
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

            }else{
               console.log('Não foi Posivel salvar!!');
            }
         })
         .catch(function (error) {
            console.log('erro da req da minha API ',error);
         })
   }
   
   return (
      <View style={{
      flex: 1,
      }}>
         <View style={styles.header}>
            <Text style={styles.title_page}>Contatos</Text>
            <Text style={styles.text_user_name}>{route.params.user.name}</Text>
            <View style={styles.box_avatar_user}>
               <Avatar
                  rounded
                  source={{uri: route.params.user.image_url}}
                  containerStyle={styles.avatar_border}
                  activeOpacity={0.7}
               />
            </View>
            
         </View>

         <ScrollView>
            {
               itemsData.map((item, i) => (
                  <ListItem
                  key={i}
                  title={item.name}
                  subtitle={item.telefone}
                  rightTitle={''}
                  leftAvatar={{source: {uri: item.image_url },containerStyle: styles.avatar_border}}
                  rightElement={
                     <View style={{width: 90 , backgroundColor: '#fff' , flexDirection: "row"}}>
                        <View style={styles.bottons} >
                           <Icon onPress={() => {navigation.navigate('EditContacts' , {data : item })}} name='edit' type='material-icons' color='#ffa500'/>
                        </View>
                        <View style={styles.bottons} >
                           <Icon onPress={() => {
                              Alert.alert(
                                 'Excluir Contato',
                                 'Tem certeza que deseja excluir o contato '+item.name+' ?',
                                 [
                                    { text: 'Não' , style: styles.delete_text},
                                    { text: 'Sim' , onPress:()=> {deletarContato(item.id)}}
                                 ]
                              )
                           }} name='delete' type='material-icons' color='#ff0000'/>
                        </View>
                     </View>
                  }
                  bottomDivider
                  topDivider
                  />
               ))
            }
         </ScrollView>

      </View>
   );
} 