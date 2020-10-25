import React, { Component } from 'react'
import { View, Text,Image,Audio } from '@tarojs/components'
import Taro,{getCurrentInstance } from '@tarojs/taro'


import './image.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentWillUnmount () {
   }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
    this.state = {     
        id:getCurrentInstance().router.params.id,
        title:getCurrentInstance().router.params.title,
        textJson:[],
        text_json_url:getCurrentInstance().router.params.text,
        images_url:getCurrentInstance().router.params.static_url,
        voice_url:getCurrentInstance().router.params.voice_url
      }

      console.log(this.state.voice_url)

      // 设置当前的title
      Taro.setNavigationBarTitle({
        title: this.state.title
      })
      const innerAudioContext = Taro.createInnerAudioContext()
      innerAudioContext.autoplay = true
      innerAudioContext.src = this.state.voice_url
      innerAudioContext.onPlay(() => {
        console.log('start play')
      })
      innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })
  }
  // 请求JSON  文本 和 图片
  componentDidMount () {
    let jsonUrl = this.state.text_json_url
    let that = this
    Taro.request({
        url: jsonUrl, //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            console.log(res.data)
          that.setState({
              textJson:res.data
          })
        }
      })
  }
  render () {
    let {textJson} = this.state
    console.log(typeof(textJson))
    return (
      <View className='body'>
        <View className='header'>
          <Image mode="aspectFill" style='width:100%;height: calc(40vh);' src={this.state.images_url}/>
        </View> 
        <View className='components-page'>
      </View>
        <View className='content'>
           <Text className='title'>{this.state.title}</Text>
          {textJson.map(
              item=>
                <View className='item'>
                    <Text className='item_title'>{item.title}</Text>
                    <View className='item_desc'>
                        {item.desc.map(
                            item2=>
                            <Text className='desc'><Text className='li'>·</Text>{item2}</Text>
                        )}
                    </View>
                </View>
              )}
        </View>       
      </View>
    )
  }
}
