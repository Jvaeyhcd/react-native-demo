import React, {Component} from 'react';
import {TouchableOpacity, Image, ImageBackground} from 'react-native';

export default class OnLineImage extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
        {this._renderImg()}
      </TouchableOpacity>
    )
  }
  _renderImg(){
    if(this.props.defaultSource){
      return (
        <ImageBackground
          style={this.props.style}
          source={this.props.defaultSource}>
          <Image
            style={this.props.style}
            source={this.props.source}>
            {this.props.children}
          </Image>
        </ImageBackground>
      )
    }else {
      return (
        <ImageBackground
          style={this.props.style}
          source={this.props.source}>
          {this.props.children}
        </ImageBackground>
      )
    }
  }

}