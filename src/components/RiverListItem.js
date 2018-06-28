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

export default class RiverListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={styles.inspectionListcontainer}>
          <OnLineImage 
            style={styles.coverImage}
            defaultSource={this.props.defaultSource}
            source={this.props.source}/>
          <View style={{flexDirection: 'column', flex: 1, paddingLeft: 12,}}>
            <View style={{flexDirection: 'row', height: 20, backgroundColor: '#ffffff'}}>
              <Text numberOfLines={1} style={styles.nameText}>江安河</Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', backgroundColor: '#ffffff'}}>
              <Text numberOfLines={2} style={[styles.descText,]}>江安河起于走江闸，顺金马河流向东南，是成都都江堰市与温江区…</Text>
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
  descText: {
    flex: 1,
    fontSize: 14,
    color: '#ADADAD',
    lineHeight: 20,
    paddingLeft: 4,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    lineHeight: 20,
    flex: 1,
  },
})
