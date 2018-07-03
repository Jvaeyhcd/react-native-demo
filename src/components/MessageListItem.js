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
        <View style={styles.cellContainer}>
          <Image style={{width: 50, height: 50}}
            source={require('../assets/images/home_ico_xt.png')}></Image>
          <View style={{flexDirection: 'column', flex: 1, paddingLeft: 13}}>
            <View style={{flexDirection: 'row', flex: 1,}}>
              <Text style={{flex: 1, fontSize: 16, fontWeight: 'bold', color: '#333333', lineHeight: 25,}}>系统消息</Text>
              <Text style={{fontSize: 12, color: '#7F8085', lineHeight: 25, width: 80, textAlign: 'right'}}>刚刚</Text>
            </View>
            <Text style={{fontSize: 14, color: '#7F8085'}}>您上报事件已回复处理批示</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 1,
  },
  
})
