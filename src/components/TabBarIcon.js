import React from 'react';

import Colors from '../constants/Colors';
import { Image, StyleSheet } from 'react-native';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Image
        source={this.props.iconImage}
        style={styles.tabBarImage}
      />
    );
  }
}

// 定义样式
const styles = StyleSheet.create({
  tabBarImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  }
})