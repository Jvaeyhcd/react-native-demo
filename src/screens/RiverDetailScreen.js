import React, { Component } from 'react'
import { 
  View, 
  ScrollView,
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { Button, Icon } from '@shoutem/ui';
import OnLineImage from '../components/OnLineImage';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/CustomTabBar';

export default class XJManageScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '江安河',
      headerLeft: (
        <View>
          <Button styleName="clear" onPress={navigation.getParam('goBack')}>
            <Icon name="back" />
          </Button>
        </View>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ goBack: this._goBack });
  }

  _goBack = () => {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inspectionListcontainer}>
          <OnLineImage 
            style={styles.coverImage}
            defaultSource={require('../assets/images/pic_bg_default.png')}
            source={{url: ''}}/>
          <View style={{flexDirection: 'column', flex: 1, paddingLeft: 12,}}>
            <View style={{flexDirection: 'row', height: 20, backgroundColor: '#ffffff'}}>
              <Text numberOfLines={1} style={styles.nameText}>江安河</Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', backgroundColor: '#ffffff'}}>
              <Text numberOfLines={2} style={[styles.descText,]}>江安河起于走江闸，顺金马河流向东南，是成都都江堰市与温江区…</Text>
            </View>
          </View>
        </View>
        <ScrollableTabView
          style={{backgroundColor: Colors.divisionLineColor}}
          renderTabBar={() => (<CustomTabBar
          backgroundColor={'#ffffff'}
          tabUnderlineDefaultWidth={40} // default containerWidth / (numberOfTabs * 4)
          tabUnderlineScaleX={3} // default 3
          activeColor={"#409ee7"}
          inactiveColor={"#777777"}
          />)}>
          <ScrollView tabLabel='问题' style={[styles.container,{backgroundColor: Colors.divisionLineColor}]} contentContainerStyle={styles.contentContainer}>
            
          </ScrollView>
          <ScrollView tabLabel='目标' style={[styles.container,{backgroundColor: Colors.divisionLineColor}]} contentContainerStyle={styles.contentContainer}>
            
          </ScrollView>
          <ScrollView tabLabel='任务' style={[styles.container,{backgroundColor: Colors.divisionLineColor}]} contentContainerStyle={styles.contentContainer}>
            
          </ScrollView>
          <ScrollView tabLabel='责任' style={[styles.container,{backgroundColor: Colors.divisionLineColor}]} contentContainerStyle={styles.contentContainer}>
            
          </ScrollView>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inspectionListcontainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
  },
  coverImage: {
    width: 95,
    height: 76,
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
