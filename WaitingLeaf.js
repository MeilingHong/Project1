/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
let Reacts  = require('react-native');
let React = require('react');//TODO 由于与书中的版本不一致，所以需要更换写法
let {
  StyleSheet,
  Text,
  View
} = Reacts;
let {
    Component
} = React;

let WaitingLeaf = React.createClass({
  goBack:function(){
    this.props.navigator.push({
        name:'register'
    });
  },
  render: function() {
    return (
        <View style={styles.container}>
            <Text style={styles.textPromptStyle}>
                注册使用手机号：{this.props.phoneNumber}
            </Text>
            <Text style={styles.textPromptStyle}>
                注册使用密码：{this.props.userPW}
            </Text>
            <Text style={styles.textPromptStyle}
                onPress={this.goBack}
                >
                注册使用手机号：{this.props.phoneNumber}
            </Text>
        </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white',
  },
    textPromptStyle:{
        fontSize:20
    },
    bigTextPrompt:{
        width:300,
        backgroundColor:'gray',// TODO 背景颜色
        color:'white',// TODO 文字颜色
        textAlign:'center',// TODO 文字对齐效果
        fontSize:40
    }
});
module.exports = WaitingLeaf;
