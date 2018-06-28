import React, { Component } from 'react'
import { 
  View, 
  ScrollView,
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { Button, Icon } from '@shoutem/ui';
import InspectionListItem from '../components/InspectionListItem';

export default class InspectionListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '巡检河道',
      headerLeft: (
        <View>
          <Button styleName="clear" onPress={navigation.getParam('goBack')}>
            <Icon name="back" />
          </Button>
        </View>
      )
    };
  };

  constructor (props) {
    super();
    this.props = props;
    this.state = {
      entries: []
    }
    this.init();
  }

  init(){
    this.state = {
      news: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "http://images.unsplash.com/photo-1529926706528-db9e5010cd3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=15a2c24190c6c20f56d6699e57e1b422&auto=format&fit=crop&w=2241&q=80",
          title: "Led Zeppelin - Stairway To Heaven"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "http://images.unsplash.com/photo-1529925994111-478ddf3b9e9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5060fabb7d69df0486db18fa2c44a69&auto=format&fit=crop&w=2241&q=80",
          title: "Eminem - My Name Is"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://images.unsplash.com/photo-1529909373889-f1a832e7d513?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02b433d34ccea8c78eb0bf0a77b6d8ab&auto=format&fit=crop&w=2255&q=80",
          title: ""
        }
      ]
    };
  }

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
          {
            this.state.news.map((l, i) => (
              <InspectionListItem
                defaultSource={require('../assets/images/pic_bg_default.png')}
                source={{uri: l.thumbnail}}>
  
              </InspectionListItem>
            ))
          }
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
