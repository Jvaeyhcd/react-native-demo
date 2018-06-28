/**
 * 任务管理界面
 */

import React, { Component } from 'react';

import { 
  View, 
  Animated,
  Text, 
  StyleSheet,
  TouchableOpacity,
  ScrollView,  
} from 'react-native';
import { Button, Icon } from '@shoutem/ui';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/CustomTabBar';
import TaskListItem from '../components/TaskListItem';

export default class TaskListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: '任务管理',
      headerLeft: (
        <View>
          <Button styleName="clear" onPress={navigation.getParam('goBack')}>
            <Icon name="back" />
          </Button>
        </View>
      )
    };
  };

  render() {
    return (
      <ScrollableTabView
        style={{backgroundColor: Colors.divisionLineColor}}
        renderTabBar={() => (<CustomTabBar
        backgroundColor={'#ffffff'}
        tabUnderlineDefaultWidth={40} // default containerWidth / (numberOfTabs * 4)
        tabUnderlineScaleX={3} // default 3
        activeColor={"#409ee7"}
        inactiveColor={"#777777"}
        />)}>
        <ScrollView tabLabel='已下发' style={styles.container} contentContainerStyle={styles.contentContainer}>
          <TaskListItem onPress={() => this._goTaskDetail()}></TaskListItem>
          <TaskListItem onPress={() => this._goTaskDetail()}></TaskListItem>
        </ScrollView>
        <ScrollView tabLabel='进行中' style={styles.container} contentContainerStyle={styles.contentContainer}>
          <TaskListItem onPress={() => this._goTaskDetail()}></TaskListItem>
        </ScrollView>
        <ScrollView tabLabel='已完成' style={styles.container} contentContainerStyle={styles.contentContainer}>
          <TaskListItem onPress={() => this._goTaskDetail()}></TaskListItem>
        </ScrollView>
      </ScrollableTabView>
    );
  }

  componentDidMount() {
    this.props.navigation.setParams({ goBack: this._goBack });
  }

  _goBack = () => {
    this.props.navigation.goBack();
  }

  _goTaskDetail = () => {
    this.props.navigation.navigate('TaskDetail');
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.divisionLineColor,
  },
  contentContainer: {
    paddingTop: 0,
    backgroundColor: '#ffffff',
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 0,
    backgroundColor: '#ffffff',
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#ffffff',
  },
})
