import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation'

import WeatherScreen from '../containers/weather_screen'
import SettingScreen from '../containers/setting_screen'
import CityScreen from '../containers/city_screen'
import TestScreen from '../containers/test_screen'

const Navigation = StackNavigator({
    WeatherScreen: {screen: WeatherScreen},
    SettingScreen: {screen: SettingScreen},
    CityScreen: {screen: CityScreen},
    TestScreen:{screen:TestScreen}
});

export default Navigation
