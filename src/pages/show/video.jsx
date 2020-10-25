import React, { Component } from 'react'
import { View,Video } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import './video.scss'


// 请求JSON？

export default class Index extends Component {

  componentWillMount () { }


  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  constructor(props){
    super(props)
    this.state = {     
      video_url : getCurrentInstance().router.params.static_url,
      page_title : getCurrentInstance().router.params.video_title
    }

    Taro.setNavigationBarTitle({
      title: getCurrentInstance().router.params.video_title
    })
  }
  
  componentDidMount () { 

  }
  showReplayBtn = (e) =>{}

  render () {
    return (
      <View className='body'>
          <Video 
            src={this.state.video_url}
            controls={true}
            objectFit="fill"
            className='player'
            playBtnPosition="center"
            showFullscreenBtn={false}
            onEnded={this.showReplayBtn}
          />
        </View>     
    )
  }
}
