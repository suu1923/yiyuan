import React, { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import { AtButton  } from 'taro-ui'
import Taro,{getCurrentInstance, getCurrentPages }from '@tarojs/taro'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/flex.scss";
import './index.scss'

import headerImg from '../../static/images/banner.png'
import footerImg1 from '../../static/images/main_footer_1.png'
import footerImg2 from '../../static/images/main_footer_2.png'
import fooImg from '../../static/images/logo.png'

export default class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      page: getCurrentInstance().router.params.page,
      footer_title:"术后康复指导",
      body_title:'',
      contentText:[],
      contentText0:[
        {
          "title":"人工间盘置换术治疗原理",
          "sub_title":"Mobi-C",
          "img":"http://share.suuweb.cn/yiyuan/main0.png",
          "video_url":"http://share.suuweb.cn/yiyuan/video/jing0.mp4"
        },
        {
          "title":"颈椎融合手术治疗原理",
          "sub_title":"Mobi-C",
          "img":"http://share.suuweb.cn/yiyuan/main1.png",
          "video_url":"http://share.suuweb.cn/yiyuan/video/jing1.mp4"
        }
      ],
      contentText1:[
        {
          "title":"腰椎动态稳定治疗原理",
          "sub_title":"Mobi-C",
          "img":"http://share.suuweb.cn/yiyuan/main0.png",
          "video_url":"http://share.suuweb.cn/yiyuan/video/yao0.mp4"
        },
        {
          "title":"腰椎融合手术治疗原理",
          "sub_title":"Mobi-C",
          "img":"http://share.suuweb.cn/yiyuan/main1.png",
          "video_url":"http://share.suuweb.cn/yiyuan/video/yao1.mp4"
        }
      ]
    }
  }
  
  componentWillMount () { }

  componentDidMount () {
    let {page,contentText} = this.state
    switch(page){
      case 'jing':
        this.setState({
          body_title:"颈椎手术原理", 
        })
        Taro.setNavigationBarTitle({
          title: "颈椎治疗"
        })
        break
      case 'yao':
        this.setState({
          body_title:"腰椎手术原理",
        })
        Taro.setNavigationBarTitle({
          title: "腰椎治疗"
        })
        break
    }
  } 

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 获取当前时间
  getTimeState = () =>{
    let now_time = new Date();
    let hours=  now_time.getHours();
    let text = '';
    if (hours >= 0 && hours <= 10) {
      text = `早上好`;
    } else if (hours > 10 && hours <= 14) {
        text = `中午好`;
    } else if (hours > 14 && hours <= 18) {
        text = `下午好`;
    } else if (hours > 18 && hours <= 24) {
        text = `晚上好`;
    }
    return text;
  }
  toPage = (e) => {
    Taro.navigateTo({
      url:"/pages/list/index?page="+e.currentTarget.dataset.page
    })
  }
  toVideoPage = (e) => {
    console.log(e.currentTarget.dataset.video_url)
    Taro.navigateTo({
      url:"/pages/show/video?static_url="+e.currentTarget.dataset.video_url+"&video_title="+e.currentTarget.dataset.video_title
    })
  }
  render () {
    let contentTextArr;

    if(this.state.page == "jing"){
      contentTextArr = this.state.contentText0
    }else if(this.state.page == "yao"){
      contentTextArr = this.state.contentText1
    }

    console.log(contentTextArr)

    return (
      <View className='index'>
        <View className='header'>
          <Text className='title'>{this.getTimeState()}</Text>
          <Image mode="widthFix" style='width:100%;margin-top:40rpx' data-page="0" src={headerImg}/>
        </View> 
        <View className='content'>
          <Text className='title'>{this.state.body_title}</Text>
          <View className='body'>
            {contentTextArr.map(item=>
              <View className='item at-row'>
                <View className='item_img at-col'>
                  <Image mode='widthFix' style='width:80%;height:80%' src={item.img}/>
                </View>
                <View className='item_text at-col'>
                  <Text className='text'>{item.title}</Text>
                  <Text className='sub_text'>{item.sub_title}</Text>
                  <View onClick={this.toVideoPage} size='small' className='item_btn' data-video_url={item.video_url} data-video_title={item.title} circle={true} type='primary'>点击播放</View>
                </View>
            </View>
            )}
          </View>
        </View>
        <View className='footer'>
          <Text className='title'>{this.state.footer_title}</Text>
          <View className='at-row at-row__justify--around'>
            <View className='at-col at-col-5'>
              <Image mode='aspectFit'  style="width:100%;height:260rpx" onClick={this.toPage} data-page="0" src={footerImg1}/>
            </View>
            <View className='at-col at-col-5'>
              <Image mode='aspectFit' style="width:100%;height:260rpx" onClick={this.toPage} data-page="1" src={footerImg2}/>
            </View>
          </View>
        </View>    
        <View className='footer_img'>
            <Image style='width:100%' mode="widthFix" src={fooImg} /> 
          </View>   
      </View>
    )
  }
}
