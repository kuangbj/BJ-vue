<template>
  <div>
    <aph></aph>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href="#">首页</a>&gt;<a href="#">产品中心</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="pl_header">
        <router-link to="/product/1" :class="{cur: type == 1 ? true : false}">净美仕净化器</router-link>
        <router-link to="/product/2" :class="{cur: type == 2 ? true : false}">净美仕滤网</router-link>
      </div>
      <!-- 产品列表-->
      <ul v-if="pdata !== null" class="product_list clearfloat">
        <li v-for="(v,i) in pdata.data" :key="i">
          <router-link :to="'/pdetails/'+v.pid"><img :src="require(`../assets/${v.pic}`)"/></router-link>
          <div class="pdlist_text clearfloat">
            <h3>
              <p>{{v.title1}}</p>
              <span>{{v.title2}}</span>
            </h3>
            <router-link to="">查看详情</router-link>
          </div>
        </li>
      </ul>
      <!-- 分页导航-->
      <div v-if="pdata !== null" class="pages">
        <a @click.prevent="loadData(type,parseInt(pdata.pageNum) - 1)" :class="{default: pdata.pageNum == 1 ? true :false}">上一页</a>
        <a v-for="(v,i) in pdata.pageCount" @click.prevent="loadData(type,v)" :class="{cur: v == pdata.pageNum ? true : false}" :key="i">{{v}}</a>
        <a @click.prevent="loadData(type,parseInt(pdata.pageNum) + 1)" :class="{default: pdata.pageNum == pdata.pageCount ? true : false}">下一页</a>
      </div>
    </div>
    <apf></apf>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data(){
    return{
      type:null, //产品类型
      pdata:null, //产品数据
    }
  },
  methods:{
    loadData:function(type,pnum=1){
      let url = `http://127.0.0.1/data/product_select.php?pageNum=${pnum}&type=${type}`
      axios.get(url).then((res=>{
        this.pdata = res.data;
        console.log(res.data);
      })).catch((error)=>{
        console.log(error);
      })
    }
  },
  created:function() {
    this.type = this.$route.params.type;
    this.loadData(this.type);
  },
  watch:{
    $route:function(){
      this.type = this.$route.params.type;
      this.loadData(this.type);
    }
  }
}
</script>
