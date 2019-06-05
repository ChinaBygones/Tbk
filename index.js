/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>{
    SplashScreen.hide();
    return App;
});
console.disableYellowBox = true;