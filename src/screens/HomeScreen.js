import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { SafeAreaView } from 'react-navigation';
import { MonoText } from '../components/MonoText';
import styled from "styled-components/native";
import Carousel from 'react-native-snap-carousel';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import InspectionListItem from '../components/InspectionListItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页'
  };

  constructor (props) {
    super();
    this.props = props;
    this.state = {
      entries: []
    }
    this._carousel = {};
    this.init();
  }

  init(){
    this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
          title: "Led Zeppelin - Stairway To Heaven"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
          title: "Eminem - My Name Is"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
          title: ""
        }
      ]
    };

    console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index){
    console.log("snapped to ", index)
  }

  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
      <ThumbnailBackgroundView>
        <CurrentAdTO
            onPress={ () => { 
              console.log("clicked to index", index)
              this._carousel.snapToItem(index);
            }}
          >
          <CurrentVideoImage source={{ uri: item.thumbnail }} />
        </CurrentAdTO>
        {/* <VideoTitleText>{item.title}</VideoTitleText> */}
      </ThumbnailBackgroundView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <CarouselBackgroundView>
              <Carousel
                ref={ (c) => { this._carousel = c; } }
                data={this.state.videos}
                renderItem={this._renderItem.bind(this)}
                onSnapToItem={this.handleSnapToItem.bind(this)}
                sliderWidth={Layout.window.width}
                itemWidth={300}
                autoplay={true}
                layout={'default'}
                firstItem={0}
              />
            </CarouselBackgroundView>
          </View>
          <View style={styles.workBoardContainer}>
            {
              workItemList.map((l, i) => (
                <TouchableOpacity onPress={this._handleWorkItemPress('tag')} style={styles.workItem}>
                  <Image
                    style={styles.workItemIcon}
                    source={l.iconImageSource}
                  />
                  <Text style={styles.workItemTitle}>{l.title}</Text>
                </TouchableOpacity>
              ))
            }
          </View>

          <View style={{flexDirection: 'column'}}>
            <View style={{height: 16, width: '100%', backgroundColor: Colors.divisionLineColor}}></View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 16, height: 20, backgroundColor: Colors.divisionLineColor}}></View>
              <View style={{flex: 1, height: 20, backgroundColor: Colors.divisionLineColor, flexDirection: 'row'}}>
                <View style={[styles.tagTextLeft, {flex: 1}]}>
                  <Text style={styles.tagText}>I类</Text>
                </View>
                <View style={{flex: 1, backgroundColor: '#60c624'}}>
                  <Text style={styles.tagText}>II类</Text>
                </View>
                <View style={{flex: 1, backgroundColor: '#f0de32'}}>
                  <Text style={styles.tagText}>III类</Text>
                </View>
                <View style={{flex: 1, backgroundColor: '#f18e25'}}>
                  <Text style={styles.tagText}>IV类</Text>
                </View>
                <View style={[{flex: 1}, styles.tagTextRight]}>
                  <Text style={styles.tagText}>V类</Text>
                </View>
              </View>
              <View style={{width: 16, height: 20, backgroundColor: Colors.divisionLineColor}}></View>
            </View>
          </View>

          <InspectionListItem
            defaultSource={require('../assets/images/home_ico_card.png')}
            source={{uri: 'https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg'}}>
            
          </InspectionListItem>

          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    
  };

  _handleHelpPress = () => {
    
  };

  _handleWorkItemPress = (tag) => {
    console.log(tag)
  };
}

const VideoTitleText = styled.Text`
  color: black;
  top: 28;
  justify-content: center;
`
const CurrentVideoImage = styled.Image`
  top: 25;
  box-shadow: 5px 10px;
  width: 300;
  height: 150;
  border-radius: 4;
  background-color: white;
`;

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: 300; 
  background-color: white;
`;

const CurrentAdTO = styled.TouchableOpacity`
`
const CarouselBackgroundView = styled.View`
  background-color: white;
  height: 200;
  width: 100%;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  workBoardContainer: {
    flexDirection: 'row', 
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: 'white',
    flexWrap: 'wrap',
  },
  workItem: {
    width: '25%',
    // flex: 1,
    // height: 0,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 20,
  },
  workItemIcon: {
    width: 30,
    height: 30,
    resizeMode: Image.resizeMode.contain,
  },
  workItemTitle: {
    fontSize: 12,
    color: '#666666',
    marginTop: 8,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
    backgroundColor: '#ffffff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  tagText: {
    flex: 1, 
    color: '#ffffff', 
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 20,
  },
  tagTextLeft: {
    backgroundColor: '#53e7dd',
    borderTopLeftRadius: 8,
  },
  tagTextRight: {
    backgroundColor: '#ca0e14',
    borderTopRightRadius: 8,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const workItemList = [
  {
    title: '任务管理',
    iconImageSource: require('../assets/images/home_ico_rwgl.png'),
    screenName: ''
  },
  {
    title: '事件处理',
    iconImageSource: require('../assets/images/home_ico_sjcl.png'),
    screenName: ''
  },
  {
    title: '一河一档',
    iconImageSource: require('../assets/images/home_ico_yhyd.png'),
    screenName: ''
  },
  {
    title: '一河一策',
    iconImageSource: require('../assets/images/home_ico_yhyc.png'),
    screenName: ''
  },
  {
    title: '巡检管理',
    iconImageSource: require('../assets/images/home_ico_xjgl.png'),
    screenName: ''
  },
  {
    title: '河长日志',
    iconImageSource: require('../assets/images/home_ico_hzrj.png'),
    screenName: ''
  },
  {
    title: '群众投诉',
    iconImageSource: require('../assets/images/home_ico_qzts.png'),
    screenName: ''
  },
  {
    title: '考核评价',
    iconImageSource: require('../assets/images/home_ico_khpj.png'),
    screenName: ''
  }
]