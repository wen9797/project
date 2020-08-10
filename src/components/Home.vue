<template>
 
    <el-container class="home-container">
      <!-- 头部 -->
  <el-header>
    <div>
<img src="" alt="">
<span>电商后台管理系统</span>
  </div>

  <el-button type="info" @click="logout">退出</el-button>
   </el-header>
  <!-- 页面主体 -->
  <el-container>
    <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <div class="toggle-button" @click="toggleCollapse">|||

      </div>
      <el-menu background-color="#333744" text-color="#fff"
      active-text-color="#409eff" unique-opened :collapse="isCollapse" 
      :collapse-transition="false" :router="true" :default-active="avtivePath">

        <!-- 一级菜单 -->
      <el-submenu :index="item.id +''" v-for="item in menulist" :key="item.id">
        <!-- 一级菜单的模板区域 -->
        <template slot="title">
          <!-- 图标 -->
          <i :class="iconsObj[item.id]"></i>
          <!-- 文本 -->
          <span> {{item.authName}} </span>
        </template>


        <!-- 二级菜单 -->
          <el-menu-item :index="'/'+ subItem.path" v-for="subItem in item.children" :key="subItem.id" 
          @click="saveNavState('/'+ subItem.path)">
            <template slot="title">
          <!-- 图标 -->
          <i class="el-icon-menu"></i>
          <!-- 文本 -->
          <span>  {{subItem.authName}}</span>
        </template>
          </el-menu-item>
         </el-submenu>
       
         
    </el-menu>
   </el-aside>
    
   
    <!--  右侧主体-->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  
</template>

<script>
export default {
  data(){
return{
  menulist:[],
  iconsObj:{
   '125':'el-icon-s-custom',
   '103':'el-icon-s-release',
   '101':'el-icon-s-goods',
   '102':'el-icon-s-order',
   '145':'el-icon-s-data'

  },
  // 是否折叠
  isCollapse:false,
  // 被激活的链接地址
  avtivePath:''
}
  },
  created(){
    this.getMenuList()
    this.avtivePath = window.sessionStorage.getItem('avtivePath')
    
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
   async getMenuList(){
    const { data: res } = await this.$http.get('menus')
    console.log(res);
    if(res.meta,status == 200) return this.$message.error(res.meta.msg)
    this.menulist = res.data

  console.log(res);
  
    },
    // 点击按钮 展开
    toggleCollapse(){
 this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(avtivePath){
      window.sessionStorage.setItem('avtivePath',avtivePath)
      this.avtivePath = avtivePath
    }
  
  }
}
</script>

<style lang="less" scoped>
.el-header{
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size:20px;
  >div{
    display: flex;
    align-items: center;
    span{
      margin-left: 15px;
    }
  }
}
.el-aside{
  background-color: #333744;
  .el-menu{
    border-right: none;
  }
}
.el-main{
    background-color: #eaedf1;
}
.home-container{
height: 100%;
}
.toggle-button{
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.icon{
  margin-left: 10px;
}

</style>