<template>
  <div class="wrapper" ref="scroller">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroller',
    props:{
        handleToScroll:{
            type:Function,
            default:function(){}
        },
        handleTounchEnd:{
            type:Function,
            default:function(){}
        }
    },
    mounted(){
        console.log(2)
        this.$nextTick(()=>{
            var scroll=new BScroll(this.$refs.scroller,{
            tap:true,
            probeType: 1
        });
        console.log(scroll)
        scroll.on('scroll',(pos)=>{
            console.log(3)
            this.handleToScroll(pos)
        });
        scroll.on('touchEnd',(pos)=>{
            this.handleTounchEnd(pos)
        })
        })
        

    },

}
</script>

<style scoped>
.wrapper{
    height: 100%;
}
</style>