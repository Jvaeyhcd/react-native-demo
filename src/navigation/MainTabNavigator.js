import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import MineScreen from '../screens/MineScreen';
import TaskListScreen from '../screens/TaskListScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import ComplaintDetailScreen from '../screens/ComplaintDetailScreen';
import ComplaintListScreen from '../screens/ComplaintListScreen';
import EvaluateScreen from '../screens/EvaluateScreen';
import EventListScreen from '../screens/EventListScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import InspectionListScreen from '../screens/InspectionListScreen';
import NewsListScreen from '../screens/NewsListScreen';
import RiverHeadLogScreen from '../screens/RiverHeadLogScreen';
import RiverPolicyScreen from '../screens/RiverPolicyScreen';
import XJManageScreen from '../screens/XJManageScreen';
import RiverDetailScreen from '../screens/RiverDetailScreen';
import PatrolListScreen from '../screens/PatrolListScreen';
import PatrolDetailScreen from '../screens/PatrolDetailScreen';
import PositionScreen from '../screens/PositionScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    TaskList: TaskListScreen,
    TaskDetail: TaskDetailScreen,
    ComplaintDetail: ComplaintDetailScreen,
    ComplaintList: ComplaintListScreen,
    Evaluate: EvaluateScreen,
    EventList: EventListScreen,
    EventDetail: EventDetailScreen,
    InspectionList: InspectionListScreen,
    NewsList: NewsListScreen,
    RiverHeadLog: RiverHeadLogScreen,
    RiverPolicy: RiverPolicyScreen,
    XJManage: XJManageScreen,
    RiverDetail: RiverDetailScreen,
    PatrolList: PatrolListScreen,
    PatrolDetail: PatrolDetailScreen,
    Position: PositionScreen
  }, {
    mode: 'card',
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: true,
    },
  }
);

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
