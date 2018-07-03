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

export default class ComplaintListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row', borderBottomColor: Colors.divisionLineColor, borderBottomWidth: 1, paddingBottom: 13}}>
            <Text style={styles.taskContent}>江安河道情况摸排调查</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 13}}>
            <Text style={styles.taskContent}>在河边已经有很多垃圾堆积，还有人把垃圾不断的倒在河里，行为至恶劣，导致河水都有臭味了，希望相关部门尽快处理</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.timeText}>2018-04-12 18:00</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 16,
  },
  taskContent: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 15,
    lineHeight: 20,
    color: '#333333',
  },
  timeText: {
    paddingTop: 13,
    color: '#777777',
    fontSize: 13,
  }
})