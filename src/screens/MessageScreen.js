import React from 'react';
import { 
  View, 
  ScrollView, 
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';

import MessageListItem from '../components/MessageListItem';

export default class MessageScreen extends React.Component {
  static navigationOptions = {
    title: '消息',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <MessageListItem onPress={() => {this.props.navigation.navigate('SystemMessage');}}></MessageListItem>
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