<template>
  <div class="messageBox">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <div>
        <div  v-if="cancle" @touchstart="handleCancle">{{cancle}}</div>
        <div v-if="ok"   @touchstart="handleOk">{{ok}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'MessageBox'

}
</script>

<style scoped>
.messageBox{
    width: 200px;
    height:120px;
    border:1px solid #ccc;
    background: white;
    position:absolute;
    top:50%;
    left:50%;
    margin:-60px 0 0 -100px
}
.messageBox h2{
    text-align:center;
    font-size: 18px;
    line-height: 40px;
}
.messageBox p{
    text-align:center;
    font-size: 15px;
    line-height: 40px;
}
.messageBox >div{
    width:100%;
    display:flex;
    border-top: 1px solid #ccc;
    position:absolute;
    bottom:0;
    left:0;
    line-height:30px
}
.messageBox >div div{
    flex:1;
    text-align: center;
    border-right: 1px solid #ccc;
}
.messageBox >div div:last-child{
    border: none;
}

</style>