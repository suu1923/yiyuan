import React, { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import Taro ,{getCurrentInstance }from '@tarojs/taro'
import "taro-ui/dist/style/components/flex.scss";

import './index.scss'

import listJson from './list.json'

export default class Index extends Component {

  componentWillMount () { }
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props){
    super(props)
    this.state = {     
      num:getCurrentInstance().router.params.page,
      list_data:listJson[getCurrentInstance().router.params.page]
    }
    if(this.state.num==0){
      Taro.setNavigationBarTitle({
        title: "颈椎手术术后康复指导"
      })
    }else if(this.state.num == 1){
      Taro.setNavigationBarTitle({
        title: "腰椎手术术后康复指导"
      })
    }
  }

  toPage = (e) => {
    // 根据类型，跳转到不同的页面
    let static_type = e.currentTarget.dataset.type;
    let title = e.currentTarget.dataset.name;
    let id = e.currentTarget.dataset.id;
    let static_url = e.currentTarget.dataset.static_url;
    if(static_type == "video"){
      // 跳转到视频播放页面
      Taro.navigateTo({
        url:"/pages/show/video?static_url="+static_url+"&video_title="+title
      })
    }else if(static_type == "image"){
      let text = e.currentTarget.dataset.text
      let voice = e.currentTarget.dataset.voice
      // 跳转到图文展示页面
      Taro.navigateTo({
        url:"/pages/show/image?id="+id+"&title="+title+"&static_url="+static_url+"&text="+text+"&voice_url="+voice
      })
    }
  }
  render () {
    return (
      <View className='index'>
          <Text className='title'>{this.state.list_data.name}</Text>
          <View className='content at-row at-row--wrap'>
            {this.state.list_data.data.map(
              item=>
                <View className='at-col at-col-6'>
                  <View className='item' onClick={this.toPage} data-id={item.id} data-name={item.title} data-type={item.type} data-static_url={item.static} data-text={item.text} data-voice={item.voice}>
                    <View className='item_img'>
                      <Image mode='widthFix' style='width:100%' src={item.img}/>
                    </View>
                    <View className='item_text'>
                      <Text>{item.title}</Text>
                    </View>
                  </View>
                </View>
              )}
          </View>
      </View>
    )
  }
}
