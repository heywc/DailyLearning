<template>
  <div class="container">
    <el-row class="header">
      头部导航栏
      <router-link to="./about">跳转about</router-link>
    </el-row>
    <el-row class="content" type="flex">
      <el-col :span="4">
        <aside>侧边栏，可放置菜单栏</aside>
      </el-col>
      <el-col :span="20">
        <section>
          主体内容
          <Nuxt />
        </section>
      </el-col>
    </el-row>
    <el-row class="footer">底部</el-row>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: 100px;
  background-color: royalblue;
  color: #fff;
}
.content {
  min-height: calc(100vh - 200px);
  aside {
    height: 100%;
    background-color: aqua;
    padding: 10px;
  }
  section {
    height: 100%;
    background-color: orange;
    padding: 10px;
  }
}
.footer {
  height: 100px;
  background-color: gray;
}
</style>
