import React, { Component } from 'react'
import { 
  View, 
  Image,
  ScrollView, 
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { Button, Icon } from '@shoutem/ui';
import RiverLogListItem from '../components/RiverLogListItem';

export default class RiverHeadLogScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '河长日志',
      headerLeft: (
        <View>
          <Button styleName="clear" onPress={navigation.getParam('goBack')}>
            <Icon name="back" />
          </Button>
        </View>
      ),
      headerRight: (
        <View>
          <Button styleName="clear">
            <Image style={{width: 20, height: 20, marginRight: 8}} source={require('../assets/images/top_ico_add.png')}></Image>
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
          <RiverLogListItem></RiverLogListItem>
          <RiverLogListItem></RiverLogListItem>
          <RiverLogListItem></RiverLogListItem>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    paddingTop: 0,
    backgroundColor: '#ffffff',
  },
})
