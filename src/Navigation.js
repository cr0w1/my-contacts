import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
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

function HomeNavigation() {
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
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255,255,255, 0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929C'
            }}
            initialRouteName="Contacts"
        >   
            <Tab.Screen 
                name="Chat"
                component={ChatsScreen}
                options={{
                    title: 'Conversas'
                }}
            />
            <Tab.Screen 
                name="Contacts"
                component={HomeScreen}
                options={{
                    title: 'Contatos'
                }}
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

function PhotoNavigation(){
    return (
        <TabMaterial.Navigator 
            tabBarPosition='bottom'
        >
            <TabMaterial.Screen 
                name="Camera" 
                component={CameraScreen} 
            />
            <TabMaterial.Screen 
                name="Gallery" 
                component={GalleryScreen} 
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
                component={HomeNavigation}
                options={{
                    headerShown: false,
                    gesturesEnabled: false,
                }}
            />
            <Stack.Screen 
                name="Photo" 
                component={PhotoNavigation}
                options={{
                    headerShown: false,
                    gesturesEnabled: false,
                }}
            />
        </Stack.Navigator>
    );
}
