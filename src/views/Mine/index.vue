<template>
  <div>
    <div id="main">
    <Header title="我的喵喵"/>
    <router-view></router-view>
    <Tabbar/>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
import Login from '@/components/Login'
export default {
  name:"Mine",
  components:{
    Header,
    Tabbar,
    Login
  }
}
</script>

<style>

</style>