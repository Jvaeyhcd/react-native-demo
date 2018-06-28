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

export default class PositionListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={{flexDirection: 'row', backgroundColor: '#ffffff', alignItems: 'center', borderBottomColor: Colors.divisionLineColor, borderBottomWidth: 1}}>
          <View style={styles.positionListContainer}>
            <View style={{flexDirection: 'row', }}>
              <Text style={styles.positionTitle}>点位名称</Text>
              <Text style={styles.positionContent}>天河养鸡场</Text>
            </View>
            <View style={{flexDirection: 'row', }}>
              <Text style={styles.positionTitle}>点位编号</Text>
              <Text style={styles.positionContent}>K31</Text>
            </View>
            <View style={{flexDirection: 'row', }}>
              <Text style={styles.positionTitle}>检查内容</Text>
              <Text style={styles.positionContent}>水闸是否正常，水闸前是否有垃圾堆积，点位摄像头是否损坏，点位传感器是否损坏</Text>
            </View>
          </View>
          <Image style={{width: 12, height: 12,marginRight: 8}} source={require('../assets/images/home_ico_quanb.png')}></Image>
        </View>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  positionListContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 16,
    flex: 1,
  },
  positionTitle: {
    width: 70,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 14,
    lineHeight: 20,
    color: '#777777',
  },
  positionContent: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 14,
    lineHeight: 20,
    color: '#3E3E3E',
  },
  acceptBtn: {
    backgroundColor: '#3A9CEA',
    height: 20,
    fontSize: 12
  }
})