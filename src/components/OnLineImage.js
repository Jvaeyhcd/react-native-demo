import React, {Component} from 'react';
import {TouchableOpacity, Image, ImageBackground} from 'react-native';
import { CachedImage } from 'react-native-img-cache';

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
          <CachedImage
            style={this.props.style}
            source={this.props.source}>
            {this.props.children}
          </CachedImage>
        </ImageBackground>
      )
    }else {
      return (
        <CachedImage
          style={this.props.style}
          source={this.props.source}>
          {this.props.children}
        </CachedImage>
      )
    }
  }

}