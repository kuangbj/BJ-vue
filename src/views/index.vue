<template>
  <div>
    <aph></aph>
    <div class="banner" @mouseenter="removeSlide()" @mouseleave="startSlide()">
      <!-- 图片列表-->
      <ul>
        <li :style="{background: 'url(' + require('../assets/images/banner_01.jpg') +') center 0 no-repeat',display: 'block',Zindex: 20}">
          <a href="#" class="link"></a>
        </li>
        <li :style="{background: 'url(' + require('../assets/images/banner_02.jpg') +' ) center 0 no-repeat'}">
          <a href="#" class="link"></a>
        </li>
        <li :style="{background: 'url(' + require('../assets/images/banner_03.jpg') +' ) center 0 no-repeat'}">
          <a href="#" class="link"></a>
        </li>
        <li :style="{background: 'url(' + require('../assets/images/banner_04.jpg') + ') center 0 no-repeat'}">
          <a href="#" class="link"></a>
        </li>
      </ul>
      <!-- 左右箭头-->
      <span class="cut prev" @click="prevImg()"></span>
      <span class="cut next" @click="nextImg()"></span>
      <!-- 小圆点指示器-->
      <div class="indicator" @mouseover="indicatorHover()">
        <a href="#" class="cur"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
    <!--main-->
    <div class="main container">
      <div class="ind_con1">
        <h2 class="title"><a href="#" class="more">more</a>净美仕产品</h2>
        <ul class="clearfloat">
          <li><a href="#" class="link"><img src="../assets/images/01.jpg" alt=""/></a></li>
          <li><a href="#" class="link"><img src="../assets/images/02.jpg" alt=""/></a></li>
          <li><a href="#" class="link"><img src="../assets/images/03.jpg" alt=""/></a></li>
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title">
            <a href="#" class="more">more</a>
            关于净美仕
          </h2>
          <p>北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。
            2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全
            生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。 
            <a href="#">查看更多</a>
          </p>
        </div>
        <div class="ind_news">
          <h2 class="title"><a href="#" class="more">more</a>公司动态</h2>
          <ul>
            <li v-for="(v,i) in news" :key="i">
              <span>2016-02-21</span>
              <router-link to="ndetails">{{v}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <apf></apf>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  data:function(){
    return{
      number:0,//图片的数量
      cur:0,//当前显示的图片
      timer:0,//定时器
      news:[
        '空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵',
        '净美仕新风净化系统　助力校园新风行动',
        '全国新风行动全面启动 助推净美仕战略升级',
        '智能空气净化器翻盘：净美仕能否领衔?'
      ]
    }
  },
  methods:{
    slideNext:function(){//下一个
      if(this.cur<this.number){
          $(".banner ul li").eq(this.cur).css({'z-index':10}).stop().fadeOut();
          $(".banner ul li").eq(this.cur+1).css({'z-index':20}).stop().fadeIn();
          $(".indicator a").removeClass().eq(this.cur+1).addClass("cur");
          this.cur+=1;
      }else{
          $(".banner ul li").eq(this.cur).css({'z-index':10}).stop().fadeOut();
          $(".banner ul li").eq(0).css({'z-index':20}).stop().fadeIn();
          $(".indicator a").removeClass().eq(0).addClass("cur");
          this.cur=0;
      }
    },
    slidePrev:function(){//上一个
      if(this.cur>0){
          $(".banner ul li").eq(this.cur).css({'z-index':10}).stop().fadeOut();
          $(".banner ul li").eq(this.cur-1).css({'z-index':20}).stop().fadeIn();
          $(".indicator a").removeClass().eq(this.cur-1).addClass("cur");
          this.cur-=1;
      }else{
          $(".banner ul li").eq(this.cur).css({'z-index':10}).stop().fadeOut();
          $(".banner ul li").eq(this.number).css({'z-index':20}).stop().fadeIn();
          $(".indicator a").removeClass().eq(this.number).addClass("cur");
          this.cur=this.number;
      }
    },
    removeSlide:function(){//鼠标进入banner是停止轮播，绑定到mosueover事件上
      clearInterval(this.timer);
    },
    startSlide:function(){//鼠标移出banner是开始轮播，绑定到mosueleave事件上
      this.timer=setInterval(this.slideNext,3000)
    },
    nextImg: function(){ //点击下一张按钮
      this.slideNext();
    },
    prevImg: function(){ //点击上一张按钮
      this.slidePrev();
    },
    indicatorHover: function(){//小圆点指示器
      
    }
  },
  mounted: function(){
    this.indicatorHover();
    this.number = $(".banner ul li").length - 1; //获取轮播图总长度
    this.timer = setInterval(this.slideNext, 3000); //存储定时
    $(".indicator>a").mouseover((e)=>{
      var now=$(e.target).index();//获取鼠标移入的是第几个a标记
      $(".indicator>a").removeClass("cur");//删除a标记中的class=this.cur
      $(e.target).addClass("cur");//为此a标记添加this.cur样式
      $(".banner ul li").eq(this.cur).css({'z-index':10}).stop().fadeOut();//隐藏当前的图片
      $(".banner ul li").eq(now).css({'z-index':20}).stop().fadeIn();//显示和a序列号一样的图片
      this.cur=now;//为变量this.cur重新赋值，以便于再次启用定时器的时候，从当前显示的图片开始播放
    });
  }
}
</script>
