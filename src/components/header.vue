<template>
  <div>
    <header class="header container">
      <h1 class="logo"><router-link to="/" class="link"/></h1>
      <div class="h_con">
        <ul class="clearfloat">
          <li class="phone">4000-585-116</li>
          <li><a href="#">中文</a></li>
          <li><em>|</em></li>
          <li><a href="#">English</a></li>
          <li><a href="#" class="weixin"></a></li>
          <li><a href="#" class="weibo"></a></li>
          <template v-if="on_off">
            <li><router-link to="/login" class="h_login">登录</router-link></li>
            <li><em>|</em></li>
            <li><router-link to="/register" class="h_register">注册</router-link></li>
          </template>
          <template v-else>
            <li class="top_user"><a href="">{{uname}}</a></li>
            <li class="top_quit"><a href="" @click="out()">退出</a></li>
          </template>
        </ul>
        <div class="search clearfloat">
          <button type="button"></button>
          <input type="text"/>
        </div>
      </div>
    </header>
    <!--nav-->
    <nav class="navbar">
      <div class="container">
        <div class="nav">
          <ul>
            <li><a href="index.html"><span class="icon_home"></span>首页</a></li>
            <li><a href="about.html">关于净美仕</a></li>
            <li><a href="news.html">公司动态</a></li>
            <li class="nav_pd">
              <a href="product.html">产品中心<span class="icon_pd"></span></a>
              <div class="pd_dropdown">
                <a href="product.html?type=2">净美仕滤网</a>
              </div>
            </li>
            <li><a href="contact.html">联系我们</a></li>
          </ul>
        </div>
        <div class="s_cart" @mouseover="showCart()" @mouseout="hideCart()">
          <a href="cart.html">
            <span class="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span class="icon_sj"></span>
          </a>
          <div class="cart_dropdown">
            <h3 v-if="on_off">您的购物车为空~</h3>
            <ul v-else>
              <li>
                <a href=""><img src="../assets/product-imgs/jhq-m8088a.jpg" alt=""/></a>
                <div>
                  <span>-</span><input type="text" value="2"/><span>+</span>
                </div>
                <strong>¥1599.00</strong>
                <em></em>
              </li>
              <li>
                <a href=""><img src="../assets/product-imgs/jhq-m8088a.jpg" alt=""/></a>
                <div>
                  <span>-</span><input type="text" value="2"/><span>+</span>
                </div>
                <strong>¥1599.00</strong>
                <em></em>
              </li>
            </ul>
            <div class="cd_js clearfloat">
              <span>共计：<strong>0.00</strong></span>
              <a href="#">结算</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data(){
    return{
      on_off:'',
      uname:'',
      uid:sessionStorage.uid
    }
  },
  methods:{
    out(){
      sessionStorage.clear();
      this.uname = '';
      this.on_off = true;
    },
    showCart(){
      $(".cart_dropdown").stop().slideDown(100);
    },
    hideCart(){
       $(".cart_dropdown").stop().slideUp(100);
    }
  },
  mounted:function(){
    if(!sessionStorage.uname){
      this.on_off = true;
    }else{
      this.on_off = false;
      this.uname = sessionStorage.uname;
    }
  }
}
</script>
