import React from 'react';

import styles from './styles';
import { Text , View , FlatList, } from 'react-native';
import { List,ListItem ,Avatar , SearchBar} from 'react-native-elements';

export default function Home() {

   const list = [
      {
         name: 'Amy Farha',
         avatar_url: 'https://i.imgur.com/gf6BsdT.jpg',
         subtitle: '(89) 2121121'
      },
      {
         name: 'Chris Jackson',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
         subtitle: 'Vice Chairman'
      },
      {
         name: 'Amy Farha',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
         subtitle: 'Vice President'
      },
      {
         name: 'Chris Jackson',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
         subtitle: 'Vice Chairman'
      },
      {
         name: 'Chris Jackson',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
         subtitle: 'Vice Chairman'
      },
      {
         name: 'Amy Farha',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
         subtitle: 'Vice President'
      }
   ]

   return (
      <View style={{
      flex: 1,
      }}>
         <View style={styles.header}>
            <Avatar
               small
               rounded
               source={{uri: "https://i.imgur.com/gf6BsdT.jpg"}}
               onPress={() => console.log("Works!")}
               activeOpacity={0.7}
            />
         </View>
         {
            list.map((l) => (
               <ListItem
                  roundAvatar={true}
                  title={l.name}
                  subtitle={l.subtitle}
                  leftAvatar={{
                     source: { uri: l.avatar_url },
                     avatarStyle: {
                         width: 40,
                         height: 40,

                         margin: 0
                     }
                  }}
                  badge={{ value: 12, textStyle: { color: 'orange' }, containerStyle: { marginTop: -0 } }}
                  bottomDivider
                  key={l.name}
                  chevron
               />
            ))

         }

      </View>
   );
} 