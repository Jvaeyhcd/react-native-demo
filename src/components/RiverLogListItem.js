/**
 * 河长日志ListItem
 */

import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity 
} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default class RiverLogListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        <View style={styles.inspectionListcontainer}>
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            <Image 
              style={{width: 40, height: 40}}
              source={require('../assets/images/home_ico_xjrw.png')}></Image>
            <View style={{flexDirection: 'column', flex: 1, paddingLeft: 14}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333333', lineHeight: 20}}>河口段（高浦-霞川）</Text>
              <Text style={{fontSize: 13, color: '#7F8085', lineHeight: 20}}>2018-04-10 16:01</Text>
            </View>
          </View>
          <View style={{flex: 1, paddingTop: 16,}}>
            <Text style={{lineHeight: 20, color: '#333333', fontSize: 15}}>对江安河和盛镇到踏水段的河道进行了巡检并上报了问题对江安河和盛镇到踏水段的河道进行了巡检并上报了问题。</Text>
          </View>
        </View>
        <View style={{backgroundColor: Colors.divisionLineColor, height: 1, width: Layout.window.width}}></View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  inspectionListcontainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 16,
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
