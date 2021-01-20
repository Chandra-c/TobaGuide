import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import ForgotPassword from '../screens/auth/ForgotPassword'

function Stack() {
  const PrivateStack = createStackNavigator();

  return (
    <NavigationContainer>
      <PrivateStack.Navigator
        screenOptions={TransitionPresets.SlideFromRightIOS}
        initialRouteName="Login"
        headerMode="none">
        <PrivateStack.Screen name="Login" component={Login} />
        <PrivateStack.Screen name="Register" component={Register} />
        <PrivateStack.Screen name="ForgotPassword" component={ForgotPassword} />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

export default Stack;