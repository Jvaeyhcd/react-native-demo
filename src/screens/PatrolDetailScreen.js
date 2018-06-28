import React, { Component } from 'react'
import { 
  View, 
  ScrollView, 
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { Button, Icon } from '@shoutem/ui';
import PatrolListItem from '../components/PatrolListItem';
import PositionListItem from '../components/PositionListItem';
import Colors from '../constants/Colors';

export default class PatrolDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '巡检详情',
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
  }

  _goBack = () => {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <PatrolListItem></PatrolListItem>
          <View style={{alignItems: 'center', borderBottomColor: Colors.divisionLineColor, borderBottomWidth: 1, flexDirection: 'row', padding: 16, backgroundColor: '#ffffff'}}>
            <View style={{backgroundColor: '#3A9CEA', width: 5, height: 17}}></View>
            <Text style={{marginLeft: 8, color: '#333333', fontSize: 14}}>点位信息</Text>
          </View>
          <PositionListItem onPress={() => {this.props.navigation.navigate('Position')}}></PositionListItem>
          <PositionListItem></PositionListItem>
          <PositionListItem></PositionListItem>
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
})
