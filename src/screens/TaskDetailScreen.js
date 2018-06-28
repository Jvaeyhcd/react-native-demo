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
export default class TaskDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '任务详情',
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
        <View style={styles.taskDetailContainer}>
          <View style={{flexDirection: 'row', borderBottomColor: Colors.divisionLineColor, borderBottomWidth: 1,paddingBottom: 16,}}>
            <Text style={styles.taskName}>江安河道情况摸排调查</Text>
            <TouchableOpacity style={{width: 52, height: 26, borderRadius: 2, backgroundColor: '#3A9CEA', justifyContent: 'center',alignItems: 'center', }}>
              <Text style={{color: '#ffffff', fontSize: 14,}}>接受</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 16,}}>
            <Text style={styles.taskTitle}>任务状态</Text>
            <Text style={styles.taskContent}>已下发</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.taskTitle}>下发时间</Text>
            <Text style={styles.taskContent}>2018-04-11 18:38</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.taskTitle}>预计完成</Text>
            <Text style={styles.taskContent}>2018-04-12 18:00</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.taskTitle}>任务内容</Text>
            <Text style={styles.taskContent}>对江安河河道沿线的排污口进行摸排调查，做好记录，拍照存证工作。对江安河河道沿线的排污口进行摸排调查，做好记录，拍照存证工作。对江安河河道沿线的排污口进行摸排调查，做好记录，拍照存证工作。</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Text style={styles.taskTitle}>发布人</Text>
            <Text style={styles.taskContent}>黄成达</Text>
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
  taskDetailContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 16,
  },
  taskTitle: {
    width: 70,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 14,
    lineHeight: 20,
    color: '#777777',
  },
  taskContent: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 14,
    lineHeight: 20,
    color: '#3E3E3E',
  },
  taskName: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#3E3E3E',
  },
  acceptBtn: {
    backgroundColor: '#3A9CEA',
    height: 20,
    fontSize: 12
  }
})
