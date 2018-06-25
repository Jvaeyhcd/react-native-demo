/**
 * 巡检河道ListItem
 */

import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';
import OnLineImage from './OnLineImage';

export default class InspectionListItem extends React.Component {
  render() {
    return (
      <View style={styles.inspectionListcontainer}>
        <OnLineImage 
          style={styles.coverImage}
          defaultSource={this.props.defaultSource}
          source={this.props.source}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inspectionListcontainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  coverImage: {
    width: 95,
    height: 76,
    backgroundColor: '#efefef',
  },
})
