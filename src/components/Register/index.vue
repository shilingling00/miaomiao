<template>
  <div class="register_body">
    <div class="register_email">
      邮箱：<input type="text" class="register_text" v-model="email" ><button @touchstart="toVerify" :disabled="disabled">{{verifyInfo}}</button>
    </div>
    <div>
      用户名:<input type="password"  class="register_text" v-model="username">
    </div>
    <div>
      密码:<input type="password" class="register_text" v-model="password">
    </div>
    <div >
      确认密码:<input type="text" class="register_text">
    </div>
    <div >
      验证码:<input type="text" class="register_text" v-model="verify">
    </div>
    <div class="register_btn" @touchstart="toReigster">
      <button>注册</button>
    </div>
    <div class="register_link">
					<router-link  to="/mine/login">立即登录</router-link>
					<router-link  to="/mine/findPassword">找回密码</router-link>
				</div>
  </div>
</template>

<script>
import { messageBox } from '@/components/Js';
export default {
    name:'Register',
    data(){
      return{
        username:'',
        email:'',
        password:'',
        verify:'',
        verifyInfo:'发送验证码',
        disabled:false
      }
    },
    methods:{
      toVerify(){
        if(this.disabled){return;}
        this.axios.get('/api/verify?email='+this.email).then((res)=>{
          var status= res.data.status;
          var _this=this
          if(status==0){
            messageBox({
                title:'验证码',
                content:'发送成功',
                ok:'确定',
                handleOk:this.countDown()
                
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
      toReigster(){
        this.axios.post('/api/register',{
          email:this.email,
          password:this.password,
          verify:this.verify,
        }).then((res)=>{
          var status= res.data.status;
          var _this=this
          if(status==0){
            messageBox({
                title:'注册',
                content:'注册成功',
                ok:'确定',
                handleOk(){
                  _this.$router.push('/mine/login')
                }
            })
          }else{
            messageBox({
                title:'注册',
                content:'注册失败',
                ok:'确定'
            })
          }
        })

      },
      countDown(){
        this.disabled=true;
        var count=60;
        var timer=setInterval(()=>{
          count--;
          this.verifyInfo='剩余'+count+'秒';
          if(count==0){
            this.verifyInfo="发送验证码";
            this.disabled=false;
            count=60;
            clearInterval(timer)

          }

        },1000)
      }
    }

}
</script>

<style scoped>
#content .register_body{  width:100%;}
.register_body .register_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.register_body .register_btn{ height:50px; margin:10px;}
.register_body  .register_email{position: relative;}
.register_body  .register_email button{position: absolute;right: 10px;top:10px;height: 30px;}
.register_body .register_btn button{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.register_body .register_link{ display: flex; justify-content:space-between;}
.register_body .register_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
</style>