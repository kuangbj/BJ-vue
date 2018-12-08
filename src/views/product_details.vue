<template>
  <div>
    <aph></aph>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href="">首页</a>&gt;<a href="">产品中心</a>&gt;<a href="">净美仕净化器</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <template v-if="pdata !== null">
        <div class="pd_info clearfloat">
          <div class="pdinfo_img">
            <img :src="require('../assets/'+pdata.pic)" alt=""/>
          </div>
          <div class="pdinfo_text">
            <h2></h2>
            <ul>
              <li>型号：{{pdata.model}}</li>
              <li>功能：{{pdata.func}}</li>
              <li>噪音：{{pdata.noise}}</li>
              <li>风量：{{pdata.wind}}</li>
              <li>适用对象：{{pdata.applyTo}}</li>
              <li>适用面积：{{pdata.size}}</li>
              <li>空气净化能效等级：{{pdata.level}}</li>
            </ul>
            <p>价格：<span>¥</span><strong id="price">{{pdata.price}}</strong></p>
            <a @click.prevent="gocart()" href="" id="addCart"><span class="icon_cart"></span>加入购物车</a>
          </div>
        </div>
        <div class="details_box">
          <h2 class="title">产品详情</h2>
          <div class="pd_details" v-html="pdata.detail"></div>
        </div>
      </template>
    </div>
    <apf></apf>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data:function(){
    return{
      pdata:null, //存数据
    }
  },
  methods:{
    gaindata(){
      let url = `http://127.0.0.1/data/product_detail.php?pid=${this.$route.params.pid}`;
      axios.get(url).then((res)=>{
        this.pdata = res.data;
      }).catch((err)=>{
        console.log(err);
      });
    },
    gocart(){
      if(sessionStorage.uid){
        let url = `http://127.0.0.1/data/cart_detail_add.php?uid=1&pid=${this.$route.params.pid}`;
        axios.get(url).then((res)=>{
          console.log(res);
          if(res.data.code == 1){
            alert('成功');
          }else{
            alert('失败.请重试!');
          }
        }).catch((err)=>{
          console.log(err);
        });
      }
    }
  },
  created:function(){
    this.gaindata();
  }
}
</script>

