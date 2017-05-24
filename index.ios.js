import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './app/root'

global.__APP__=true;
global.__ANDORID__=false;
global.__IOS__=true;

AppRegistry.registerComponent('ReactWeather', () => Root)
