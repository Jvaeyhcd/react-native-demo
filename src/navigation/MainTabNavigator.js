import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import MineScreen from '../screens/MineScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused = {focused}
      iconImage = {
        focused ? require('../assets/images/nav_ico_home2.png') : require('../assets/images/nav_ico_home1.png')
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: MessageScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: '消息',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused = {focused}
      iconImage = {
        focused ? require('../assets/images/nav_ico_xx2.png') : require('../assets/images/nav_ico_xx1.png')
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: MineScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: '我的',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused = {focused}
      iconImage = {
        focused ? require('../assets/images/nav_ico_mine2.png') : require('../assets/images/nav_ico_mine1.png')
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
