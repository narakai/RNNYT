/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import NewsItem from "./src/components/NewsItem";

export default class RNNYT extends Component {
  render() {
    return (
        <NewsItem title="React Native" author="Facebook" index={1}/>
    );
  }
}

AppRegistry.registerComponent('RNNYT', () => RNNYT);
