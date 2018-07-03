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
import Layout from '../constants/Layout';

export default class ComplaintDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '投诉详情',
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
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{flexDirection: 'column', backgroundColor: '#ffffff'}}>
            <View style={styles.cellContainer}>
              <Text style={styles.taskTitle}>标题</Text>
              <Text style={styles.taskContent}>南湖有很多的海藻生物污染</Text>
            </View>
            <View style={styles.cellContainer}>
              <Text style={styles.taskTitle}>状态</Text>
              <Text style={styles.taskContent}>已处理</Text>
            </View>
            <View style={styles.cellContainer}>
              <Text style={styles.taskTitle}>投诉人</Text>
              <Text style={styles.taskContent}>杨丹云</Text>
            </View>
            <View style={styles.cellContainer}>
              <Text style={styles.taskTitle}>投诉时间</Text>
              <Text style={styles.taskContent}>2018-05-15 16:33</Text>
            </View>
            <View style={styles.cellContainer}>
              <Text style={styles.taskTitle}>投诉内容</Text>
              <Text style={styles.taskContent}>在南湖河里游许多的海藻生物污染，需要派人去捞一下，不能是无忌惮的让他生长，不然一发不可收拾。</Text>
            </View>
            <View style={{width: Layout.window.width, height: 16, backgroundColor: Colors.divisionLineColor}}></View>
            <View style={styles.cellContainer}>
              <Text style={styles.taskTitle}>处理证明</Text>
              <Text style={styles.taskContent}>这边已经派人去捞了，海藻面积会大量减少。此后的我们也会时常监测海藻的情况。</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
  taskTitle: {
    width: 70,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 15,
    lineHeight: 20,
    color: '#777777',
  },
  taskContent: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 15,
    lineHeight: 20,
    color: '#3E3E3E',
  },
  cellContainer: {
    flexDirection: 'row', 
    paddingTop: 13,
    paddingLeft: 16, 
    paddingRight: 13, 
    paddingBottom: 13,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 1,
  }
})
