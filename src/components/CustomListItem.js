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

export default class CustomListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={[styles.eventListContainer, this.props.isLast ? {borderBottomWidth: 16,} : {borderBottomWidth: 1,}]}>
          <View style={styles.resultContainer}>
            <Image style={this.props.iconSource != null ? {width: 24, height: 24} : {width: 0, height: 0}} source={this.props.iconSource}/>
            <Text style={[styles.question, this.props.iconSource != null ? {paddingLeft: 8,} : {paddingLeft: 0,}]}>{this.props.title}</Text>
            <Text style={styles.answer}>{this.props.subtitle}</Text>
            <Image style={{width: 12, height: 12,marginLeft: 8}} source={require('../assets/images/home_ico_quanb.png')}></Image>
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
  },
  resultContainer: {
    alignItems: 'center', 
    flexDirection: 'row', 
    backgroundColor: '#ffffff'
  },
  question: {
    flex: 1, 
    color: '#333333', 
    fontSize: 15,
  },
  answer: {
    textAlign: 'right', 
    color: '#FA9A46', 
    fontSize: 15
  }
})