<template>
  <div>
    <el-table
    :data="nowTableData"
    border
    style="width: 100%">
    <el-table-column
      prop="img"
      label="头像"
      >
      <template slot-scope="scope">
        <img :src="scope.row.img" alt=""  style="width:50px;height:50px">
      </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
    >
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleFreeze(scope.$index, scope.row)" prob="isFreeze">{{!scope.row.isFreeze?'未冻结':'已冻结'}}</el-button>
          <el-button
          size="mini"
          @click="handleDel(scope.$index, scope.row)"  type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :current-page.sync="currentPage"
    :page-size="pageSize"
    :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          date: '2022-05-02',
          name: '甜甜冰沙',
          email: '468961@qq.com',
          isFreeze:false,
          img:'https://img0.baidu.com/it/u=375730396,536719342&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        }, {
            date: '2016-05-02',
            name: '王太后',
            email: '568961@qq.com',
            isFreeze:true
        }, {
            date: '2018-05-02',
            name: '张毅',
            email: '785761@qq.com',
            isFreeze:false
        }, {
            date: '2019-05-02',
            name: '李佳',
            email: '3654961@qq.com',
            isFreeze:false
        }],
        currentPage:1,
        pageSize:2
      }
    },
    methods:{
        handleFreeze(index,row){
            console.log(index,row)
            this.$message('冻结操作成功');
            this.tableData[index].isFreeze=!this.tableData[index].isFreeze
        },
        handleDel(index,row){
            this.$message('删除成功');
            this.tableData.splice(index,1)
        }
    },
    computed:{
        nowTableData(){
            return this.tableData.slice((this.currentPage - 1 )*this.pageSize,this.currentPage*this.pageSize)||[]
        }
    }
}
</script>

<style>

</style>