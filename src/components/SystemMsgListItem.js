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
          <Text style={{fontSize: 13, color: '#979797', textAlign: 'center', lineHeight: 30}}>05月28日 15:45</Text>
          <View style={styles.msgBox}>
            <View style={{flexDirection: 'row', flex: 1,}}>
              <Text style={{flex: 1, fontSize: 16, fontWeight: 'bold', color: '#333333', lineHeight: 25,}}>版本更新提示</Text>
            </View>
            <Text style={{fontSize: 14, color: '#7F8085', lineHeight: 18, marginTop: 13}}>我们将于5月20日23:59进行版本更新，在这之间软件可能会出现卡、慢等现象。如果有什么不方便之处，敬请谅解，我们很快将恢复正常运行。</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.divisionLineColor,
    padding: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 1,
  },
  msgBox: {
    backgroundColor: '#ffffff',
    shadowOffset:{  width: 2,  height: 4,  },
    shadowColor: 'rgba(0,0,0,0.04)',
    shadowOpacity: 1.0,
    borderRadius: 3,
    padding: 16,
  }
})
