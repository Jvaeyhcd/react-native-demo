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

export default class NewsListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={styles.inspectionListcontainer}>
          <OnLineImage 
            style={styles.coverImage}
            defaultSource={this.props.defaultSource}
            source={this.props.source}/>
          <View style={{flexDirection: 'column', flex: 1, paddingLeft: 12,}}>
            <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#ffffff'}}>
              <Text numberOfLines={2} style={styles.nameText}>强强联手“河长制”，助力资江“河长治”</Text>
            </View>
            <View style={{flexDirection: 'row', height: 20, alignItems: 'center', backgroundColor: '#ffffff'}}>
              <Text numberOfLines={1} style={[styles.smallText, {width: 130}]}>2018-04-23 12:09:00</Text>
              <Text numberOfLines={1} style={[styles.smallText, {textAlign: 'right', flex: 1,}]}>6575人看过</Text>
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
  smallText: {
    fontSize: 12,
    color: '#ADADAD',
    lineHeight: 20,
    paddingLeft: 4,
  },
  nameText: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 20,
    flex: 1,
  },
})
