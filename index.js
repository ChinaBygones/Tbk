/**
 * @format
 */

import {AppRegistry,Alert,Linking} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>{
    let version = "0.0.1";
    fetch("http://abc.isshw.cn/version.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }).then((response) => response.json())
            .then(function (res) {
                if(res.version > version){
                    Alert.alert(
                        "更新啦",
                        res.message,
                        [
                            {text:"作者帅",onPress:()=>console.log()},
                            {text:"不下载",onPress:()=>console.log()},
                            {text:"去下载",onPress:()=>Linking.openURL(res.url)},
                        ],
                        {cancelable:false}
                    )
                 }
            }).catch(function (e) {

            });
    SplashScreen.hide();
    return App;
});
console.disableYellowBox = true;