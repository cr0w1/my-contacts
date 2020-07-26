import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from './screens/Home/index';
import NewContactScreen from './screens/NewContact/index';

const Tab = createBottomTabNavigator();

const icons = {
    Chat: {
        lib: AntDesign,
        name: 'wechat'
    },
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    NewContact: {
        lib: AntDesign,
        name: 'adduser'
    }
}

export default function Navigation() {
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
        >   
            <Tab.Screen 
                name="Chat"
                component={HomeScreen}
                options={{
                    title: 'Conversas'
                }}
            />
            <Tab.Screen 
                name="Home"
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