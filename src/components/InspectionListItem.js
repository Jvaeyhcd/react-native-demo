/**
 * 巡检河道ListItem
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

export default class InspectionListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={styles.inspectionListcontainer}>
          <OnLineImage 
            style={styles.coverImage}
            defaultSource={this.props.defaultSource}
            source={this.props.source}/>
          <View style={{flexDirection: 'column', flex: 1, paddingLeft: 12,}}>
            <View style={{flexDirection: 'row',height: 20, backgroundColor: '#ffffff'}}>
              <Text style={styles.nameText}>江安河</Text>
              <View style={styles.levelContainer}>
                <Text style={styles.levelText}>IV类</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row',flex: 1, backgroundColor: '#ffffff'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                <Image 
                  style={styles.iconImage}
                  source={require('../assets/images/home_ico_qdian.png')}/>
                <Text style={styles.addressText}>二道桥</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                <Image 
                  style={styles.iconImage}
                  source={require('../assets/images/home_ico_zdian.png')}/>
                <Text style={styles.addressText}>十二桥出口</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', height: 20, alignItems: 'center', backgroundColor: '#ffffff'}}>
              <Image 
                style={styles.iconImage}
                source={require('../assets/images/home_ico_long.png')}/>
              <Text style={[styles.addressText,{marginTop: 1,}]}>河道长度25.8千米</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: Colors.divisionLineColor, height: 1, width: Layout.window.width}}></View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  inspectionListcontainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
  },
  coverImage: {
    width: 95,
    height: 76,
  },
  iconImage: {
    width: 12,
    height: 12,
  },
  addressText: {
    fontSize: 14,
    color: '#777777',
    lineHeight: 20,
    paddingLeft: 4,
  },
  nameText: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 20,
    flex: 1,
  },
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
