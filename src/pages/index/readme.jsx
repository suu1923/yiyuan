import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
export default class Index extends Component {

  componentWillMount () { 

          // 设置当前的title
          Taro.setNavigationBarTitle({
            title:"使用须知"
          })

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    return (
      <View style='width:94%;margin:0 auto;'>
            <Text style='font-size:40rpx;font-weight:800;display:block;text-align:center'>使用须知</Text>
            <br/>
            <Text style='display:block;font-size:30rpx;text-indent: 2em;margin-top:20rpx'>
                本微信小程序中提供的信息和内容仅供患者康复教育使用，不能替代检查和就诊。捷迈邦美
            也不对任何依据该等信息和内容进行医学诊疗、手术操作或用于其他目的所造成的直接或间
            接、有形或无形的损失或损害承担任何责任。
            </Text>
            <Text style='display:block;font-size:30rpx;text-indent: 2em'>
                本微信小程序所包含的信息和内容（包括但不限于相关数据、技术参数、文字描述、商标、
            图片、图像、图表、版面设计、电子文档等）的所有知识产权及相关权利，均归捷迈邦美所
            有。捷迈邦美力求相关信息准确，但并不就本微信小程序所包含的任何信息（包括其准确性、
            有效性或完整性）做出任何陈述或保证，亦不就此承担任何责任。
            </Text>
      </View>
    )
  }
}
