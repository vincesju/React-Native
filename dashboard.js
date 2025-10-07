import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Reviewpage from './pages/Reviewpage';
// import UserList from './pages/UserList'; // Uncomment when you create this

const Stack = createNativeStackNavigator();

export default function Dashboard() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={Homepage}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen 
                    name="Register" 
                    component={Register}
                    options={{ title: 'User Registration' }}
                />
                <Stack.Screen 
                    name="Reviewpage"
                    component={Reviewpage}
                    options={{ title: 'Review Information' }}
                />
                {/* Uncomment when you have UserList */}
                {/* <Stack.Screen 
                    name="UserList" 
                    component={UserList}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}