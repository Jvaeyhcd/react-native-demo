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
import NewsListItem from '../components/NewsListItem';
import OnLineImage from '../components/OnLineImage';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
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
          thumbnail: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=15a2c24190c6c20f56d6699e57e1b422&auto=format&fit=crop&w=2241&q=80",
          title: "Led Zeppelin - Stairway To Heaven"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://images.unsplash.com/photo-1529925994111-478ddf3b9e9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5060fabb7d69df0486db18fa2c44a69&auto=format&fit=crop&w=2241&q=80",
          title: "Eminem - My Name Is"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://images.unsplash.com/photo-1529909373889-f1a832e7d513?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02b433d34ccea8c78eb0bf0a77b6d8ab&auto=format&fit=crop&w=2255&q=80",
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
          <OnLineImage 
            style={styles.currentAdsImage} 
            defaultSource={require('../assets/images/pic_bg3.png')} 
            source={{ uri: item.thumbnail }} />
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
                <TouchableOpacity key={i} onPress={() => this._handleWorkItemPress(l.screenName)} style={styles.workItem}>
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
          <View style={styles.headerContainer}>
            <Text style={styles.headerContainerTitle}>巡检河道</Text>
            <TouchableOpacity onPress={() => this._handleSeeMore('InspectionList')} style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#7F8085', textAlign: 'right', fontSize: 12}}>全部</Text>
              <Image 
                style={{width: 10, height: 10}}
                source={require('../assets/images/home_ico_quanb.png')}></Image>
            </TouchableOpacity>
          </View>
          <InspectionListItem
            defaultSource={require('../assets/images/pic_bg_default.png')}
            source={{uri: 'https://avatars3.githubusercontent.com/u/6993775?s=460&v=4 '}}>
            
          </InspectionListItem>

          <InspectionListItem
            defaultSource={require('../assets/images/pic_bg_default.png')}
            source={{uri: 'https://images.unsplash.com/photo-1529931736005-85047bb51b72?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=285dbc8ad37850d36fb267f24a2bb528&auto=format&fit=crop&w=2250&q=80'}}>
            
          </InspectionListItem>
          <View style={{height: 16, width: '100%', backgroundColor: Colors.divisionLineColor}}></View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerContainerTitle}>新闻资讯</Text>
            <TouchableOpacity onPress={() => this._handleSeeMore('NewsList')} style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#7F8085', textAlign: 'right', fontSize: 12}}>更多</Text>
              <Image 
                style={{width: 10, height: 10}}
                source={require('../assets/images/home_ico_quanb.png')}></Image>
            </TouchableOpacity>
          </View>
          <NewsListItem
            defaultSource={require('../assets/images/pic_bg_default.png')}
            source={{uri: 'https://images.unsplash.com/photo-1529789864526-f7067145c1b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=122d73dc8e0cd54c2327699a237aa12a&auto=format&fit=crop&w=2250&q=80'}}>

          </NewsListItem>
        </ScrollView>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    
  };

  _handleHelpPress = () => {
    
  };

  _handleWorkItemPress = (tag) => {
    this.props.navigation.navigate(tag);
  };

  _handleSeeMore = (tag) => {
    this.props.navigation.navigate(tag);
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
  top: 25;
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
  currentAdsImage: {
    width: 300,
    height: 150,
    borderRadius: 4,
    // shadowRadius: 5,
    // shadowOffset:{  width: 10,  height: 10, },
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
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
  headerContainer: {
    flexDirection: 'row', 
    backgroundColor: '#ffffff', 
    paddingLeft: 16, 
    paddingRight: 16,
    borderBottomColor: Colors.divisionLineColor,
    borderBottomWidth: 1,
    paddingTop: 10
  },
  headerContainerTitle: {
    height: 40, 
    lineHeight: 40, 
    fontSize: 16, 
    color: '#3E3E3E', 
    flex: 1, 
    fontWeight: 'bold',
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
    screenName: 'TaskList'
  },
  {
    title: '事件处理',
    iconImageSource: require('../assets/images/home_ico_sjcl.png'),
    screenName: 'EventList'
  },
  {
    title: '一河一档',
    iconImageSource: require('../assets/images/home_ico_yhyd.png'),
    screenName: ''
  },
  {
    title: '一河一策',
    iconImageSource: require('../assets/images/home_ico_yhyc.png'),
    screenName: 'RiverPolicy'
  },
  {
    title: '巡检管理',
    iconImageSource: require('../assets/images/home_ico_xjgl.png'),
    screenName: 'XJManage'
  },
  {
    title: '河长日志',
    iconImageSource: require('../assets/images/home_ico_hzrj.png'),
    screenName: 'RiverHeadLog'
  },
  {
    title: '群众投诉',
    iconImageSource: require('../assets/images/home_ico_qzts.png'),
    screenName: 'ComplaintList'
  },
  {
    title: '考核评价',
    iconImageSource: require('../assets/images/home_ico_khpj.png'),
    screenName: 'Evaluate'
  }
]