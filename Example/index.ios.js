/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    TouchableHighlight,
    NativeAppEventEmitter
} from 'react-native';

let appid = 'wx51237f333d2a7ceb';

import WeChat from 'react-native-vunun-wechat'

function show(title, msg) {
    Alert.alert(title+'', msg+'');
}


class Example extends Component {

    componentDidMount() {
        this.registerApp();

        NativeAppEventEmitter.addListener(
            'didRecvAuthResponse',
            (response) => Alert.alert(JSON.stringify(response))
        );

        NativeAppEventEmitter.addListener(
            'didRecvMessageResponse',
            (response) => {
                if (parseInt(response.errCode) === 0) {
                    alert('分享成功');
                } else {
                    alert('分享失败');
                }
            }
        );
    }

    registerApp() {
        WeChat.registerApp(appid, (res) => {
            show('registerApp', res);
        });
    }

    registerAppWithDesc() {
        let appdesc = '测试';
        WeChat.registerApp(appid, appdesc, (res) => {
            show('registerAppWithDesc', res);
        });
    }

    isWXAppInstalled() {
        WeChat.isWXAppInstalled((res) => {
            show('isWXAppInstalled', res);
        });
    }

    getWXAppInstallUrl() {
        WeChat.getWXAppInstallUrl((res) => {
            show('getWXAppInstallUrl', res);
        });
    }

    isWXAppSupportApi() {
        WeChat.isWXAppSupportApi((res) => {
            show('isWXAppSupportApi', res);
        });
    }

    getApiVersion() {
        WeChat.getApiVersion((res) => {
            show('getApiVersion', res);
        });
    }

    openWXApp() {
        WeChat.openWXApp((res) => {
            show('openWXApp', res);
        });
    }

    sendAuthReq() {
        let scope = 'snsapi_userinfo';
        let state = 'wechat_sdk_test';
        WeChat.sendAuthReq(scope, state, (res) => {
            show('sendAuthReq', res);
        });
    }

    sendLinkURL() {
        WeChat.sendLinkURL({
            link: 'https://github.com/',
            tagName: 'github',
            title: '分享这个网页给你',
            desc: '我发现这个网页很有趣，特意分享给你',
            thumbImage: 'https://avatars2.githubusercontent.com/u/19281529?v=3&s=40',
            scene: 1
        });
    }

    weChatPay() {
        var payOptions = {
            appId: 'wx8888888888888888',
            nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
            packageValue: 'Sign=WXPay',
            partnerId: '1900000109',
            prepayId: 'WX1217752501201407033233368018',
            timeStamp: '1412000000',
            sign: 'C380BEC2BFD727A4B6845133519F3AD6'
        };

        WeChat.weChatPay(payOptions,(res) => {
            show('weChatPay', res);
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.wrapper}>

                <Text style={styles.pageTitle}>WeChat SDK for React Native (android)</Text>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.registerApp}>
                    <Text style={styles.buttonTitle}>registerApp</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.registerAppWithDesc}>
                    <Text style={styles.buttonTitle}>registerAppWithDesc</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.isWXAppInstalled}>
                    <Text style={styles.buttonTitle}>isWXAppInstalled</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.isWXAppSupportApi}>
                    <Text style={styles.buttonTitle}>isWXAppSupportApi</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.getApiVersion}>
                    <Text style={styles.buttonTitle}>getApiVersion</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.getWXAppInstallUrl}>
                    <Text style={styles.buttonTitle}>getWXAppInstallUrl</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.openWXApp}>
                    <Text style={styles.buttonTitle}>openWXApp</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.sendAuthReq}>
                    <Text style={styles.buttonTitle}>sendAuthReq</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.sendLinkURL}>
                    <Text style={styles.buttonTitle}>sendLinkURL</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button} underlayColor="#f38"
                    onPress={this.weChatPay}>
                    <Text style={styles.buttonTitle}>weChatPay</Text>
                </TouchableHighlight>

            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    wrapper: {
        paddingTop: 60,
        paddingBottom: 20,
        alignItems: 'center',
    },
    pageTitle: {
        paddingBottom: 40
    },
    button: {
        width: 200,
        height: 40,
        marginBottom: 10,
        borderRadius: 6,
        backgroundColor: '#f38',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 16,
        color: '#fff'
    }
});

AppRegistry.registerComponent('Example', () => Example);
