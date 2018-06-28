/**
 * 巡检任务ListItem
 */

import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity, 
} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from '@shoutem/ui';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import React, { Component } from 'react';

export default class TaskListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={styles.taskListContainer}>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.taskTitle}>任务名称</Text>
            <Text style={styles.taskContent}>江安河道情况摸排调查</Text>
            <TouchableOpacity style={{width: 52, borderRadius: 2, backgroundColor: '#3A9CEA', justifyContent: 'center',alignItems: 'center', }}>
              <Text style={{color: '#ffffff', fontSize: 14,}}>接受</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.taskTitle}>下发时间</Text>
            <Text style={styles.taskContent}>2018-04-11 18:38</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.taskTitle}>预计完成</Text>
            <Text style={styles.taskContent}>2018-04-12 18:00</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.taskTitle}>任务内容</Text>
            <Text style={styles.taskContent}>对江安河河道沿线的排污口进行摸排调查，做好记录，拍照存证工作。</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  taskListContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 16,
  },
  taskTitle: {
    width: 70,
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 14,
    color: '#777777',
  },
  taskContent: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 14,
    color: '#3E3E3E',
  },
  acceptBtn: {
    backgroundColor: '#3A9CEA',
    height: 20,
    fontSize: 12
  }
})