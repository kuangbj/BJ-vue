<template>
  <div>
    <aph></aph>
    <div class="login_box">
      <div class="container">
        <div class="login">
          <h2>用户登录</h2>
          <dl class="clearfloat">
            <dt><span class="tips" id="uname_prompt_text"></span>用户名：</dt>
            <dd>
              <input v-model="norp" @blur="unameCheck()" type="text" id="uname" placeholder="邮箱/手机号"/>
              <em class="icon_user"></em>
              <i class="icon_error" id="uname_prompt_icon"></i>
            </dd>
          </dl>
          <dl>
            <dt><span class="tips" id="pwd_prompt_text">请输入密码</span>密码：</dt>
            <dd>
              <input v-model="upwd" @blur="pwdCheck()" type="password" id="pwd" placeholder="密码"/>
              <em class="icon_pwd"></em>
              <i class="icon_error" id="pwd_prompt_icon"></i>
            </dd>
          </dl>
          <p>
            <label>
              <input type="checkbox"/>
              <span>自动登录</span>
            </label>
          </p>
          <button type="button" id="login" @click="going()">立 即 登 录</button>
        </div>`
      </div>
    </div>
    <apf></apf>
  </div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  data(){
    return{
      norp:'admin',
      upwd:'123456'
    }
  },
  methods:{
    going(){
      let url=`http://127.0.0.1/data/user_login.php?unameOrPhone=${this.norp}&upwd=${this.upwd}`;
      axios.post(url).then((res)=>{
        if(res.data.code === 1){
          history.go(-1);
          sessionStorage.uname=res.data.uname;
          sessionStorage.uid=res.data.uid;
        } else {
          $("#uname_prompt_text").show().text("用户名或密码不正确");
        }
      }).catch((err)=>{
        alert('异步请求失败');
      });
    },
    unameCheck(){
      var uname= $.trim($("#uname").val());
      if(!uname){//用户名为空的时候
          $("#uname_prompt_text").show().text("用户名不能为空");
          $("#uname_prompt_icon").show();
          return false;
      }else{
          $("#uname_prompt_text").hide();
          $("#uname_prompt_icon").hide();
          return true;
      }
    },
    pwdCheck(){
      var pwd= $.trim($("#pwd").val());
      if(!pwd){//密码为空的时候
          $("#pwd_prompt_text").show().text("用户名不能为空");
          $("#pwd_prompt_icon").show();
          return false;
      }else{
          $("#pwd_prompt_text").hide();
          $("#pwd_prompt_icon").hide();
          return true;
      }
    }
  }
}
</script>
