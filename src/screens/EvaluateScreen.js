import React, { Component } from 'react'
import { 
  View, 
  ScrollView, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { Button, Icon, ImageBackground } from '@shoutem/ui';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
export default class EvaluateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '考核评价',
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
    const boxWidth = (Layout.window.width - 3 * 16) / 2;
    const boxHeight = boxWidth * 270 / 495;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.topContainner}>
          <ImageBackground
            style={{width: boxWidth, height: boxHeight}}
            source={require('../assets/images/kh_bg1.png')}>
            <Text style={{color:'#FFFFFF', fontSize: 15,textAlign: 'left', width: '100%', paddingLeft: 30}}>排名</Text> 
            <Text style={{color:'#FFFFFF', fontSize: 40,textAlign: 'right', width: '100%', paddingRight: 30}}>24</Text>  
          </ImageBackground>
          <ImageBackground
            style={{width: boxWidth, height: boxHeight, marginLeft: 16,}}
            source={require('../assets/images/kh_bg2.png')}>
            <Text style={{color:'#FFFFFF', fontSize: 15,textAlign: 'left', width: '100%', paddingLeft: 30}}>分数</Text> 
            <Text style={{color:'#FFFFFF', fontSize: 40,textAlign: 'right', width: '100%', paddingRight: 30}}>86</Text>  
          </ImageBackground>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.question}>水污染情况</Text>
          <Text style={styles.answer}>12分</Text>
          <Image style={{width: 12, height: 12,marginLeft: 8}} source={require('../assets/images/home_ico_quanb.png')}></Image>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.question}>水环境治理</Text>
          <Text style={styles.answer}>10分</Text>
          <Image style={{width: 12, height: 12,marginLeft: 8}} source={require('../assets/images/home_ico_quanb.png')}></Image>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.question}>水生态修复情况</Text>
          <Text style={styles.answer}>11分</Text>
          <Image style={{width: 12, height: 12,marginLeft: 8}} source={require('../assets/images/home_ico_quanb.png')}></Image>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.question}>执法监管情况</Text>
          <Text style={styles.answer}>15分</Text>
          <Image style={{width: 12, height: 12,marginLeft: 8}} source={require('../assets/images/home_ico_quanb.png')}></Image>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.question}>水域岸线保护</Text>
          <Text style={styles.answer}>9分</Text>
          <Image style={{width: 12, height: 12,marginLeft: 8}} source={require('../assets/images/home_ico_quanb.png')}></Image>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.question}>水资源保护</Text>
          <Text style={styles.answer}>10分</Text>
          <Image style={{width: 12, height: 12,marginLeft: 8}} source={require('../assets/images/home_ico_quanb.png')}></Image>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.question}>河长制工作情况</Text>
          <Text style={styles.answer}>18分</Text>
          <Image style={{width: 12, height: 12,marginLeft: 8}} source={require('../assets/images/home_ico_quanb.png')}></Image>
        </View>
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
  topContainner: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 16,
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
    fontSize: 15
  },
  answer: {
    textAlign: 'right', 
    color: '#FA9A46', 
    fontSize: 15
  }
})
