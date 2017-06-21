/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
//书中写法与此处不同，应该为版本不同导致
let Reacts  = require('react-native');
let React = require('react');//TODO 由于与书中的版本不一致，所以需要更换写法
let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} = Reacts;
let {
    Component
} = React;
//使用何种方式猜测与react-native版本有关
//生命变量方式  与var相同   require为请求系统的某些对象，属性等的方法
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;//获取对象中的属性值，该值为相对值，需要乘以密度，才为真实值
let leftStartPoint = totalWidth * 0.1;
let componentWidth = totalWidth * 0.8;
//代码中一行结束使用“;”

let Project1 = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.numberInputStyle}
            placeholder={'请输入手机号码'}/>
        <Text style={styles.textPromptStyle}>
          您输入的手机号:
        </Text>
        <TextInput style={styles.passwordInputStyle}
                    placeholder={'请输入密码'}
                    secureTextEntry={true}/>
        <Text style={styles.bigTextPrompt}>
          确  定
        </Text>
      </View>
    );
  }
});
/*
<TextInput style={styles.passwordInputStyle}
                    placeholder={'请输入密码'}
                    secureTextEntry={true}/>//TODO 显示为密码格式的属性
*/

//TODO 不要增加多余的属性，可能会造成适得其反的效果
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
    numberInputStyle:{
        top:20,
        left:leftStartPoint,
        width: componentWidth,
        backgroundColor:'gray',
        color:'white',
        fontSize: 20
    },
    textPromptStyle:{
        top: 30,
        left:leftStartPoint,
        width:componentWidth,
        fontSize:20
    },
    passwordInputStyle:{
        top:50,
        left:leftStartPoint,
        width:componentWidth,
        backgroundColor:'gray',
        color:'white',
        textAlign:'left',
        fontSize: 20
    },
    bigTextPrompt:{
        top:70,
        left:leftStartPoint,
        width:componentWidth,
        backgroundColor:'gray',// TODO 背景颜色
        color:'white',// TODO 文字颜色
        textAlign:'center',// TODO 文字对齐效果
        fontSize:40
    }
});

AppRegistry.registerComponent('Project1', () => Project1);
