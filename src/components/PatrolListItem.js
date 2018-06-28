/**
 * 巡检记录ListItem
 */

import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity 
} from 'react-native';

import OnLineImage from './OnLineImage';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default class PatrolListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={styles.boxContainer}>
          <View style={{flexDirection: 'row',height: 20, }}>
            <Text style={styles.nameText}>西郊河</Text>
            <View style={styles.levelContainer}>
              <Text style={styles.levelText}>IV类</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 8, borderBottomColor: Colors.divisionLineColor, borderBottomWidth: 1, paddingBottom: 10}}>
            <Text style={{fontSize: 14, color: '#777777', lineHeight: 20,}}>K72+156~K73+177</Text>
            <Text style={{fontSize: 14, color: '#777777', lineHeight: 20, marginLeft: 10}}>和盛镇至踏水段</Text>
          </View>
          <View style={{paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{width: 14, height: 14,}} source={require('../assets/images/home_ico_shij.png')}></Image>
            <Text style={{color: '#333333', fontSize: 14, marginLeft: 8}}>巡检时间：2018-04-03 10:24</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 16,
  },
  nameText: {lineHeight: 20, flex: 1, fontSize: 16, fontWeight: 'bold'},
  levelContainer: {
    width: 46, 
    height: 20, 
    borderRadius: 10,
    backgroundColor: '#f18e25', 
    alignItems: 'center',
  },
  levelText: {
    fontSize: 12,
    color: '#ffffff',
    lineHeight: 20,
  }
})