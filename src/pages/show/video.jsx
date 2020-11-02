import React, { Component } from 'react'
import { View,Video,Text,Button} from '@tarojs/components'
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
      is_show: "none",
      video_url : getCurrentInstance().router.params.static_url,
      page_title : getCurrentInstance().router.params.video_title,
      video_box : Taro.createVideoContext("myvideo",this)
    }

    Taro.setNavigationBarTitle({
      title: getCurrentInstance().router.params.video_title
    })
    // this.state.video_box.play();
  }
  
  componentDidMount () { }
  showReplayBtn = (e) =>{
    this.setState({
      is_show:"block"
    })
  }
  hideButton = (e) =>{
    this.setState({
      is_show:"none"
    })
  }
  play_start = (e) =>{
    this.state.video_box.play()
  }
  render () {
    return (
      <View className='body'>
          <View className='blank'></View>
          {/* <Text className='tips'>动图示意</Text> */}
          <Video 
            id="myvideo"
            src={this.state.video_url}
            autoplay={true}
            controls={false}
            objectFit="fill"
            className='player'
            playBtnPosition="center"
            showFullscreenBtn={true}
            onEnded={this.showReplayBtn}
            onPlay={this.hideButton}
          />
          <View><Button class='again' style={{display:this.state.is_show}} onClick={this.play_start}>再看一次动图</Button></View>
      </View>
    )
  }
}
