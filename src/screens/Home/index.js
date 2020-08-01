import React , {useEffect , useState} from 'react';
import axios from 'axios';

import styles from './styles';
import { 
   Text,
   View,
   ScrollView,
} from 'react-native';
import { List,ListItem ,Avatar , SearchBar , FlatList } from 'react-native-elements';

export default function Home({ navigation , route }) {
   let teste;
   useEffect(()=>{

      (async ()=> {
         await axios.get('https://api-clebson.herokuapp.com/contacts/user/'+ route.params.user.id)
         .then(function (response) {
            console.log(response.data);
            teste = response.data;
         })
         .catch(function (error) {
            console.log("erro ",error);
         })
      })()

   },[])
   console.log('teste1', teste);
   
   return (
      <View style={{
      flex: 1,
      }}>
         <View style={styles.header}>
            <Text style={styles.title_page}>Contatos</Text>
            <View style={styles.box_avatar_user}>
               <Avatar
                  rounded
                  source={{uri: route.params.user.image_url}}
                  onPress={() => alert("Works!")}
                  activeOpacity={0.7}
               />
            </View>
         </View>

         <ScrollView>
            {
               teste.map((item, i) => (
                  <ListItem
                  key={i}
                  title={item.name}
                  bottomDivider
                  chevron
                  />
               ))
            }
         </ScrollView>

      </View>
   );
} 