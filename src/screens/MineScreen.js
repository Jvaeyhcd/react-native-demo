import React from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import { 
  List, 
  ListItem, 
  Text, 
  Avatar,
  Divider
} from 'react-native-elements';

import { Button, Icon } from '@shoutem/ui';
import Colors from '../constants/Colors';
import CustomListItem from '../components/CustomListItem';
import Layout from '../constants/Layout';

export default class MineScreen extends React.Component {
  static navigationOptions = {
    title: '我的',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.userInfoContainer}>
            <View style={{flex: 4, backgroundColor:"#ffffff", flexDirection: 'column'}}>
              <Text style={{fontSize: 20, color: '#333333', marginBottom: 8}}>Salvador</Text>
              <View style={styles.addressContainer}>
                <Image
                  style={styles.addressIcon}
                  source={require('../assets/images/home_ico_dwei.png')}
                />
                <Text style={styles.addressText}>四川成都郫都区</Text>
              </View>
              <Button 
                style={{
                  backgroundColor: Colors.divisionLineColor,
                  alignItems: 'center',
                  width: 70,
                  height: 26,
                  borderRadius: 4,
                }}>
                <Image
                  style={{
                    width: 12,
                    height: 12,
                    resizeMode: 'center',
                    marginLeft: -8,
                  }}
                  source={require('../assets/images/xi_ico_bj.png')}
                />
                <Text 
                  style={styles.editText}>编辑</Text>
              </Button>
            </View>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor:"white", alignItems: 'center', justifyContent: 'center'}}>
              <Avatar
                overlayContainerStyle={{backgroundColor: '#409ee7', width: 50, height: 50, borderRadius: 25, marginTop: -7}}
                size={200}
                rounded
                title="黄"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            </View>
          </View>
          {
            list.map((l, i) => (
              l.map((ll, j) => (
                // <ListItem
                //   avatar={{source: require('../assets/images/mine_ico_dbsx.png')}}
                //   key={i}
                //   title={ll.name}
                //   titleStyle={styles.listItemTitle}
                //   containerStyle={j == 0 ? styles.listItemFirstContainer : styles.listItemContainer}
                //   onPress={() => console.log("Works!")}
                // />
                <CustomListItem 
                  iconSource={ll.iconName}
                  title={ll.name}
                  section={j}
                  row={i}
                  isLast={j == l.length - 1}
                  onPress={() => {this.props.navigation.navigate(ll.screen)}}
                  ></CustomListItem>
                
              ))
            ))
          }this._setHeader(0)
        </ScrollView>
      </View>
    )
  }

  _setHeader(index) {
    if (index == 0) {
      return (
        <View style={{height: 16, width:Layout.window.width, backgroundColor: Colors.divisionLineColor}}></View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.divisionLineColor
  },
  contentContainer: {
    paddingVertical: 0
  },
  userInfoContainer: {
    flexDirection: 'row', 
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 16,
    backgroundColor: '#ffffff',
    borderBottomColor: Colors.divisionLineColor
  },
  listItemContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    marginLeft: 0,
    marginRight: 0,
    borderBottomColor: Colors.divisionLineColor
  },
  listItemFirstContainer: {
    borderTopWidth: 16,
    borderBottomWidth: 1,
    marginLeft: 0,
    marginRight: 0,
    borderBottomColor: Colors.divisionLineColor,
    borderTopColor: Colors.divisionLineColor,
  },
  listItemTitle: {
    fontSize: 14,
  },
  editText: {
    fontSize: 12,
    color: '#999999',
    marginLeft: 4,
  },
  addressContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#ffffff',
    marginBottom: 8,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  addressIcon: {
    width: 14,
    height: 14,
    resizeMode: 'center',
  },
  addressText: {
    fontSize: 12,
    backgroundColor: '#ffffff', 
    lineHeight: 20,
    color: '#999999',
    marginLeft: 4,
  },
  avatarBox: {
    backgroundColor: '#409ee7'
  },
  listDivider: {
    width: '100%',
    height: 16,
    backgroundColor: Colors.divisionLineColor
  }
})

const list = [
  [
    {
      name: '跟踪事项',
      iconName: require('../assets/images/mine_ico_gzsx.png'),
      screen: 'TrackList'
    },
    {
      name: '待办事项',
      iconName: require('../assets/images/mine_ico_dbsx.png'),
      screen: 'TodoList'
    },
    {
      name: '领导批示',
      iconName: require('../assets/images/mine_ico_ldps.png'),
      screen: 'LeaderApprovalList'
    },
    {
      name: '我的批示',
      iconName: require('../assets/images/mine_ico_wdps.png'),
      screen: 'MineApprovalList'
    },
  ],
  [
    {
      name: '会商',
      iconName: require('../assets/images/mine_ico_hsxt.png'),
      screen: 'Vice President'
    },
  ],
  [
    {
      name: '设置',
      iconName: require('../assets/images/mine_ico_set.png'),
      screen: 'Setting'
    },
  ]
]