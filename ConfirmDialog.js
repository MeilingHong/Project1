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
  View,
  BackHandler
} = Reacts;
let {
    Component
} = React;

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;//获取对象中的属性值，该值为相对值，需要乘以密度，才为真实值
let totalHeight = Dimensions.get('window').height;

let WaitingLeaf = React.createClass({
  render: function() {
    return (
        <View style={styles.confirmCont}>
            <Text style={styles.textPrompt}>
                {this.props.promptToUser}
            </Text>
            <Text style={styles.yesButton}
                onPress = {this.props.userConfirmed}
                numberOfLines={3}
                >
                {'\r\n'}确  定
            </Text>
            <Text style={styles.cancelButton}
                onPress={this.props.userCanceled}
                numberOfLines={3}
                >
                {'\r\n'}取  消
            </Text>
        </View>
    );
  }
});

let styles = StyleSheet.create({
    confirmCont: {
        position: 'absolute',
        top: 0,
        width: totalWidth,
        height: totalHeight,
        backgroundColor: 'rgba(52,52,52,0.5)'
    },
    dialogStyle:{
        position: 'absolute',
        top: totalHeight*0.4,
        left: totalWidth*0.1,
        width: totalWidth*0.8,
        height: totalHeight*0.3,
        backgroundColor: 'white'
    },
    textPrompt:{
            width:300,
            backgroundColor:'gray',// TODO 背景颜色
            color:'white',// TODO 文字颜色
            textAlign:'center',// TODO 文字对齐效果
            fontSize:40
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
