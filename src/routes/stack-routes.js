import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import ForgotPassword from '../screens/auth/ForgotPassword'
import Home from '../screens/destination/Home'
import DetailDestination from '../screens/destination/DetailDestination'
import ListDestination from '../screens/destination/ListDestination'
import TourGuide from '../screens/guide/TourGuide'
import Messenger from '../screens/guide/Messenger'

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
        <PrivateStack.Screen name="Home" component={Home} />
        <PrivateStack.Screen name="ListDestination" component={ListDestination} />
        <PrivateStack.Screen name="DetailDestination" component={DetailDestination} />
        <PrivateStack.Screen name="TourGuide" component={TourGuide} />
        <PrivateStack.Screen name="Messenger" component={Messenger} />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

export default Stack;