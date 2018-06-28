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

export default class EventListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={styles.eventListContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Colors.divisionLineColor}}>
            <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', marginBottom: 10,}}>
              <Text style={{fontSize: 16, color: '#333333'}}>江安河违规排放废水</Text>
              <View style={{flexDirection: 'row', marginTop: 10,}}>
                <Text style={{color: '#6C6C6C', borderRadius: 2, backgroundColor: '#F0F3F8', fontSize: 12, width: 60, height: 20, lineHeight: 20, textAlign: 'center'}}>已批示</Text>
                <Text style={{marginLeft: 20, fontSize: 14, color: '#777777', lineHeight: 20}}>2018-04-12 11:23</Text>
              </View>
            </View>
            <TouchableOpacity style={{width: 74, height: 26, borderRadius: 2, backgroundColor: '#FA9A46', justifyContent: 'center',alignItems: 'center', }}>
              <Text style={{color: '#ffffff', fontSize: 14,}}>设为跟踪</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.eventTitle}>涉及河道</Text>
            <Text style={styles.eventContent}>江安河</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.eventTitle}>涉及河段</Text>
            <Text style={styles.eventContent}>和盛镇至踏水段</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.eventTitle}>事件等级</Text>
            <Text style={styles.eventContent}>三级</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  eventListContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 16,
  },
  eventTitle: {
    width: 70,
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 14,
    color: '#777777',
  },
  eventContent: {
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