import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import App from './pages/App';
import SecondPage from './pages/SecondPage';

const Stack = createNativeStackNavigator()


function Router(){
    return(
     <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen name="App" component={App} />
             <Stack.Screen name="SecondPage" component={SecondPage} />
        </Stack.Navigator>
    </NavigationContainer>

    )
}

export default Router;