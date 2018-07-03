import React, { Component } from 'react'
import { 
  View, 
  ScrollView, 
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { Button, Icon } from '@shoutem/ui';
import Colors from '../constants/Colors';

export default class EventDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '事件详情',
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
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.eventListContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Colors.divisionLineColor}}>
            <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', marginBottom: 10,}}>
              <Text style={{fontSize: 16, color: '#333333'}}>江安河违规排放废水</Text>
              <View style={{flexDirection: 'row', marginTop: 10,}}>
                <Text style={{color: '#6C6C6C', borderRadius: 2, backgroundColor: '#F0F3F8', fontSize: 12, width: 60, height: 20, lineHeight: 20, textAlign: 'center'}}>已批示</Text>
                <Text style={{marginLeft: 20, fontSize: 14, color: '#777777', lineHeight: 20}}>2018-04-12 11:23</Text>
              </View>
            </View>
            <TouchableOpacity style={{width: 74, height: 26, borderRadius: 2, backgroundColor: '#FA9A46', justifyContent: 'center',alignItems: 'center', }}>
              <Text style={{color: '#ffffff', fontSize: 14,}}>设为跟踪</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.eventTitle}>涉及河道</Text>
            <Text style={styles.eventContent}>江安河</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.eventTitle}>涉及河段</Text>
            <Text style={styles.eventContent}>和盛镇至踏水段</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.eventTitle}>事件等级</Text>
            <Text style={styles.eventContent}>三级</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.eventTitle}>事件状态</Text>
            <Text style={[styles.eventContent, {color: '#3A9CEA'}]}>未处理</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.eventTitle}>事件内容</Text>
            <Text style={[styles.eventContent]}>天河养鸡场还是在持续排污，污水未经任何处理直接排放。臭气熏天！</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', backgroundColor: '#ffffff', padding: 16,}}>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.eventTitle}>处理意见</Text>
            <Text style={[styles.eventContent]}>联系环保处进行垃圾清理工作，并设立禁止乱扔垃圾警示牌。</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.divisionLineColor,
  },
  contentContainer: {
    paddingTop: 0,
    backgroundColor: Colors.divisionLineColor,
  },
  eventListContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 16,
  },
  eventTitle: {
    width: 70,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 15,
    lineHeight: 20,
    color: '#777777',
  },
  eventContent: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 15,
    lineHeight: 20,
    color: '#3E3E3E',
  },
})
