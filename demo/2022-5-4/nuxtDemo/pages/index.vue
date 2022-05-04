<template>
  <div class="indexPage">
    <div class="indexContent">练习nuxt动态路由，点击下方进行跳转</div>
    <div class="part">
      <router-link to="part_module/123">内容1</router-link>
    </div>
    <div class="part" @click="toModule('module', '2')">内容2</div>
    <div class="part">
      <router-link
        :to="{
          path: 'part/3',
          query: {
            partId: '3',
            age: '12',
          },
        }"
        >内容3</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'full',
  methods: {
    toModule(module, id) {
      this.$router.push({
        path: `/${module}/${id}`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.indexContent {
  color: #fff;
}
.part {
  color: red;
  padding: 10px;
  cursor: pointer;
  &:hover {
    font-size: larger;
  }
}
</style>
