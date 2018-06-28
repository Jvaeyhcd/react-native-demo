import React, { Component } from 'react'
import { 
  View, 
  ScrollView,
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { Button, Icon } from '@shoutem/ui';
import PositionListItem from '../components/PositionListItem';
import Colors from '../constants/Colors';

export default class PositionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '点位详情',
      headerLeft: (
        <View>
          <Button styleName="clear" onPress={navigation.getParam('goBack')}>
            <Icon name="back" />
          </Button>
        </View>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ goBack: this._goBack });
    this.props.navigation.setParams({ goToPatrolList: this._goToPatrolList })
  }

  _goBack = () => {
    this.props.navigation.goBack();
  }

  _goToPatrolList = () => {
    this.props.navigation.navigate('PatrolList')
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.resultContainer}>
            <View style={{backgroundColor: '#3A9CEA', width: 5, height: 17}}></View>
            <Text style={{marginLeft: 8, color: '#333333', fontSize: 14}}>点位信息</Text>
          </View>
          <PositionListItem></PositionListItem>
          <View style={styles.resultContainer}>
            <View style={{backgroundColor: '#3A9CEA', width: 5, height: 17}}></View>
            <Text style={{marginLeft: 8, color: '#333333', fontSize: 14}}>巡检结果</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.question}>水闸是否正常？</Text>
            <Text style={styles.answer}>是</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.question}>水闸前是否有垃圾堆积？</Text>
            <Text style={styles.answer}>是</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.question}>点位摄像头是否损坏？</Text>
            <Text style={styles.answer}>是</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.question}>点位传感器是否损坏？</Text>
            <Text style={styles.answer}>是</Text>
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
  resultContainer: {
    alignItems: 'center', 
    borderBottomColor: Colors.divisionLineColor, 
    borderBottomWidth: 1, 
    flexDirection: 'row', 
    padding: 16, 
    backgroundColor: '#ffffff'
  },
  question: {
    flex: 1, 
    color: '#333333', 
    fontSize: 14
  },
  answer: {
    width: 20, 
    textAlign: 'right', 
    color: '#333333', 
    fontSize: 14
  }
})