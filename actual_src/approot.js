import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import UserInfoPage from './pages/UserInfoPage.js';
import OrderPage from './pages/OrderPage.js';
import ExercisePage from './pages/ExercisePage.js';
import UserInfoPageV from './pages/UserInfoPageV2.js';
import AsyncClear from './pages/AsyncClear.js';

const AppRoot = createBottomTabNavigator({
  Order: {
    screen: OrderPage,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='fast-food' size={30} color={ tintColor }/>
      )
    }
  },
  Exercise: {
    screen: ExercisePage,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='pulse-sharp' size={30} color={ tintColor }/>
      )
    }
  },
  Information: {
    screen: UserInfoPageV,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='md-ellipsis-horizontal-circle-outline' size={30} color={ tintColor }/>
      )
    }
  },
  Test: {
    screen: AsyncClear,
  }
  //test:UserInfoPage2
});

export default createAppContainer(AppRoot);