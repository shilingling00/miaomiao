<template>
    <div class="password_body">
    <div class="password_email">
      邮箱：<input type="text" class="password_text" v-model="email" >
    </div>
    <div>
      新密码:<input type="password" class="password_text" v-model="password">
    </div>
    <div class="password_email">
      验证码:<input type="text" class="password_text" v-model="verify"><button @touchstart="toVerify">发送验证码</button>
    </div>
    <div class="password_btn" @touchstart="changePasswor">
      <button>修改</button>
    </div>
    <div class="password_link">
					<router-link  to="/mine/login">立即登录</router-link>
					<router-link  to="/mine/register">立即注册</router-link>
				</div>
  </div>
  </template>
  
  <script>
  import { messageBox } from '@/components/Js';
  export default {
      name:'FindPassword',
      data(){
        return{
            email:'',
            password:'',
            verify:'',
        }
      },
      methods:{
        toVerify(){
        this.axios.get('/api/verify?email='+this.email).then((res)=>{
          var status= res.data.status;
          var _this=this
          if(status==0){
            messageBox({
                title:'验证码',
                content:'发送成功',
                ok:'确定',
            })
          }else{
            messageBox({
                title:'验证码',
                content:'发送失败',
                ok:'确定',
            })
          }

        })

      },
        changePasswor(){
            this.axios.post('/api/findPassword',{
          username:this.username,
          email:this.email,
          password:this.password,
          verify:this.verify,
        }).then((res)=>{
          var status= res.data.status;
          var _this=this
          if(status==0){
            messageBox({
                title:'修改',
                content:'修改密码成功',
                ok:'确定',
                handleOk(){
                  _this.$router.push('/mine/login')
                }
            })
          }else{
            messageBox({
                title:'注册',
                content:'修改密码失败',
                ok:'确定'
            })
          }
        })
        }
      }
  
  }
  </script>
  
  <style>
  #content .password_body{  width:100%;}
.password_body .password_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.password_body .password_btn{ height:50px; margin:10px;}
.password_body  .password_email{position: relative;}
.password_body  .password_email button{position: absolute;right: 10px;top:10px;height: 30px;}
.password_body .password_btn button{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.password_body .password_link{ display: flex; justify-content:space-between;}
.password_body .password_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
  </style>