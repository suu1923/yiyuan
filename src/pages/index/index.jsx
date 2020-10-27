import React, { Component } from 'react'
import { View, Text,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import "taro-ui/dist/style/components/button.scss" // 按需引入

import './index.scss'


import oneImg from '../../static/images/0.png'
import twoImg from '../../static/images/1.png'
import fooImg from '../../static/images/logo.png'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  toPage = (e) => {
    Taro.navigateTo({
      url:"/pages/main/index?page="+e.currentTarget.dataset.page
    })
  }

  toUse = (e) =>{
    Taro.navigateTo({
      url:"/pages/index/readme"
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='header'>
          <Text className='title'>欢迎来到zimmer</Text>
          <Text className='sub_title'>您身边的脊椎健康专家</Text>
        </View>
        <View className='body'>
          <View className='body_desc'>
            <Text className='body_title'>您想了解……</Text>
            <Text className='body_sub_title'>根据选择为您提供更精准的服务</Text>
          </View>
          <View className='body_img'>
            <View className='choose_btn'><Image mode="widthFix" style='width:100%' onClick={this.toPage} data-page="jing" src={oneImg}/></View>
            <View className='choose_btn'><Image mode="widthFix" style='width:100%' onClick={this.toPage} data-page="yao" src={twoImg}/></View>
          </View>
        </View>
        <View style='text-align:center'>
            <Text onClick={this.toUse} style='font-size: 30rpx;color: blue;text-decoration: underline'>使用须知</Text>
        </View>
        <View className='footer'>
          <Image style='width:100%' mode="widthFix" src={fooImg} /> 
        </View>
      </View>
    )
  }
}
