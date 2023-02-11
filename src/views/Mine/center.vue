<template>
  <div>
    <h2 style="text-align: center;">个人中心</h2>
    <p style="height:40px;font-size: 20px;margin-top: 30px;">当前用户：{{ $store.state.user.userName }}</p>
    <div @touchstart="ToLogout" style="height:50px;line-height:50px;border:1px solid #ccc;text-align: center;color: red;font-size: 20px;">退出</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Center',
  methods:{
    ToLogout(){
      this.axios.get('/api/logout').then((res)=>{
        if(res.data.status==0){
          this.$store.commit('user/CHANGE_NAME',{userName:''})
          this.$router.push('/mine/login')
        }
      })
      
    }
  },
  beforeRouteEnter(to,from,next){
    axios.get('/api/getusername').then((res)=>{
      console.log(res.data.data.userInfo.username)
      var status =res.data.status;
      var username =res.data.data.userInfo.username;
      if(status==0){
        next(vm=>{
          vm.$store.commit('user/CHANGE_NAME',{userName:username})
        })
      }else{
        next('/mine/login')
      }
    })

  }

}
</script>

<style>

</style>