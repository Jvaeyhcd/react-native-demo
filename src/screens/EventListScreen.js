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
import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/CustomTabBar';
import EventListItem from '../components/EventListItem';

export default class EventListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '事件处理',
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
      <ScrollableTabView
        style={{backgroundColor: Colors.divisionLineColor}}
        renderTabBar={() => (<CustomTabBar
        backgroundColor={'#ffffff'}
        tabUnderlineDefaultWidth={40} // default containerWidth / (numberOfTabs * 4)
        tabUnderlineScaleX={3} // default 3
        activeColor={"#409ee7"}
        inactiveColor={"#777777"}
        />)}>
        <ScrollView tabLabel='未处理' style={styles.container} contentContainerStyle={styles.contentContainer}>
          <EventListItem onPress={() => this.props.navigation.navigate('EventDetail')}></EventListItem>
          <EventListItem onPress={() => this.props.navigation.navigate('EventDetail')}></EventListItem>
        </ScrollView>
        <ScrollView tabLabel='已处理' style={styles.container} contentContainerStyle={styles.contentContainer}>
          <EventListItem onPress={() => this.props.navigation.navigate('EventDetail')}></EventListItem>
        </ScrollView>
      </ScrollableTabView>
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
