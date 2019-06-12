/**
 * 淘宝领券王
 */
import React, {Component} from 'react';
import {StyleSheet,Text,View,WebView,Platform,BackHandler,ToastAndroid} from 'react-native';


export default class App extends Component<Props> {
    onNavigationStateChange = navState => {
        this.setState({
            backButtonEnabled: navState.canGoBack
        });
    };
    componentDidMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        if (this.state.backButtonEnabled) {
            this.refs['webView'].goBack();
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }
    };
    render() {
        return (
            <WebView
                source={{ uri: 'http://abc.isshw.cn/' }}
                style={{ width: '100%', height: '100%' }}
                ref="webView"
                onNavigationStateChange={this.onNavigationStateChange}
            />
        );
    }
}
const styles = StyleSheet.create({

});