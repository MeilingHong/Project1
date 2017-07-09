/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
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
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;//获取对象中的属性值，该值为相对值，需要乘以密度，才为真实值
let leftStartPoint = totalWidth * 0.1;
let componentWidth = totalWidth * 0.8;


// TODO navigator.push 类似于Activity中standard模式---每次调用都会重新创建一个页面覆盖在原来的上面
// TODO navigator.replace 则类似于Fragment中的replace函数，会将使用的销毁掉
let RegisterLeaf = React.createClass({
  getInitialState:function(){
    return {
        inputedNum:'',
        inputedPW:'',
    }
  },
  updateNum:function(newText){
    this.setState((state)=>{
        return {
            inputedNum:newText,
        };
    });
  },
  updatePW:function(newText){
    this.setState(()=>{
        return {
            inputedPW:newText,
        };
    });
  },
  userPressConfirm:function(){
    this.props.navigator.push({
        phoneNumber:this.state.inputedNum,
        userPW:this.state.inputedPW,
        name:'waiting'
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.numberInputStyle}
            placeholder={'请输入手机号码'}
            onChangeText={(newText)=> this.updateNum(newText)}
            />
        <Text style={styles.textPromptStyle}>
          您输入的手机号:{this.state.inputedNum}
        </Text>
        <TextInput style={styles.passwordInputStyle}
                    placeholder={'请输入密码'}
                    secureTextEntry={true}
                    onChangeText={(newText)=> this.updatePW(newText)}
                    />
        <Text style={styles.bigTextPrompt}
            onPress = {this.userPressConfirm}
        >
          确  定
        </Text>
      </View>
    );
  }
});
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
module.exports = RegisterLeaf;//TODO 声明组件可供外部调用