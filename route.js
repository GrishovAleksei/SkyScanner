import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home'
import Flight from './screens/Flight'

const Stack = createStackNavigator()

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} 
                options={{headerShown:false}}/>
            <Stack.Screen name="Flight" component={Flight} 
                options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export {Navigation}