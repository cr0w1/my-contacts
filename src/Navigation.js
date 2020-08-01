import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AntDesign } from '@expo/vector-icons';

import InitialScreen from './screens/Initial/index';
import LoginScreen from './screens/Login/index';
import HomeScreen from './screens/Home/index';
import ChatsScreen from './screens/Chats/index';
import NewContactScreen from './screens/NewContact/index';
import RegistrationScreen from './screens/Registration/index';
import CameraScreen from './screens/Camera/index';
import GalleryScreen from './screens/Gallery/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabMaterial = createMaterialTopTabNavigator();

const icons = {
    Chat: {
        lib: AntDesign,
        name: 'wechat'
    },
    Contacts: {
        lib: AntDesign,
        name: 'home'
    },
    NewContact: {
        lib: AntDesign,
        name: 'adduser'
    }
}

function HomeNavigation({route}){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color , size }) => {
                    const { lib: Icon , name } = icons[route.name];
                    return <Icon name={name} size={size} color={color}/>;
                },

            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#fff',
                    borderTopColor: 'rgba(255,255,255, 0.2)',
                },
                activeTintColor: '#000',
                inactiveTintColor: '#bdbebd'
            }}
            initialRouteName="Contacts"
            
        >   
            {/* <Tab.Screen 
                name="Chat"
                component={ChatsScreen}
                options={{
                    title: 'Conversas',
                }}

            /> */}
            <Tab.Screen 
                name="Contacts"
                component={HomeScreen}
                options={{
                    title: 'Contatos'
                }}
                initialParams={route.params}
            />
            <Tab.Screen 
                name="NewContact"
                component={NewContactScreen}
                options={{
                    title: 'Novo Contato'
                }}
            />
        </Tab.Navigator>
    )
}

function PhotoNavigation({route}){
    return (
        <TabMaterial.Navigator 
            tabBarPosition='bottom'
        >
            <TabMaterial.Screen 
                name="Camera" 
                component={CameraScreen} 
                initialParams={route.params}
            />
            <TabMaterial.Screen 
                name="Gallery" 
                component={GalleryScreen}
                initialParams={route.params}
            />
        </TabMaterial.Navigator>
    )
}

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName="Initial">
            <Stack.Screen 
                name="Initial" 
                component={InitialScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Registration" 
                component={RegistrationScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Home" 
                children={HomeNavigation}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Photo" 
                component={PhotoNavigation}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
