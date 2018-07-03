import React, { Component } from 'react'
import { 
  View, 
  ScrollView, 
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { Button, Icon } from '@shoutem/ui';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import CustomListItem from '../components/CustomListItem';

export default class SettingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '设置',
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
        <CustomListItem title={'修改密码'} onPress={() => {this.props.navigation.navigate('')}}></CustomListItem>
        <CustomListItem title={'消息设置'} onPress={() => {this.props.navigation.navigate('')}}></CustomListItem>
        <CustomListItem title={'意见反馈'} onPress={() => {this.props.navigation.navigate('')}}></CustomListItem>
        <CustomListItem title={'常见问题'} onPress={() => {this.props.navigation.navigate('')}}></CustomListItem>
        <CustomListItem title={'关于我们'} onPress={() => {this.props.navigation.navigate('')}}></CustomListItem>
        <CustomListItem title={'通用'} onPress={() => {this.props.navigation.navigate('')}}></CustomListItem>
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
})
