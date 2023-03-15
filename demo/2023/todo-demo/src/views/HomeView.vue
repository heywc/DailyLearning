<!--
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-03-14 14:11:08
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-03-14 17:48:54
 * @FilePath: /DailyLearning/demo/2023/todo-demo/src/views/HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="home">
        <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="false"
            :margin="[10, 10]"
            :use-css-transforms="true"
            :preventCollision="false"
        >
            <grid-item v-for="item in layout"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                    :key="item.i"
                    :style="{ backgroundColor: item.i === '0' ? '' : '#999999' }"
                    >
                {{item.i}}
            </grid-item>
        </grid-layout>
        <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="false"
            :margin="[10, 10]"
            :use-css-transforms="true"
            :preventCollision="false"
        >
            <grid-item v-for="item in layout"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                    :key="item.i"
                    :style="{ backgroundColor: item.i === '0' ? '' : '#999999' }"
                    >
                {{item.i}}
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
// @ is an alias to /src
import VueGridLayout from 'vue-grid-layout';

export default {
  name: 'HomeView',
  data() {
    return {
        layout: [
            {"x":0,"y":0,"w":2,"h":2,"i":"0"},
            {"x":2,"y":0,"w":2,"h":4,"i":"1"},
            {"x":4,"y":0,"w":2,"h":5,"i":"2"},
            {"x":6,"y":0,"w":2,"h":3,"i":"3"},
            {"x":8,"y":0,"w":2,"h":3,"i":"4"},
            {"x":10,"y":0,"w":2,"h":3,"i":"5"},

            {"x":0,"y":5,"w":2,"h":5,"i":"6"},
            {"x":2,"y":5,"w":2,"h":5,"i":"7"},
            {"x":4,"y":5,"w":2,"h":5,"i":"8"},
            {"x":6,"y":3,"w":2,"h":4,"i":"9"},
            {"x":8,"y":4,"w":2,"h":4,"i":"10"},
            {"x":10,"y":4,"w":2,"h":4,"i":"11"},
            
            {"x":0,"y":10,"w":2,"h":5,"i":"12"},
            {"x":2,"y":10,"w":2,"h":5,"i":"13"},
            {"x":4,"y":8,"w":2,"h":4,"i":"14"},
            {"x":6,"y":8,"w":2,"h":4,"i":"15"},
            {"x":8,"y":10,"w":2,"h":5,"i":"16"},
            {"x":10,"y":4,"w":2,"h":2,"i":"17"},
        ]
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
}
</script>

<style lang="scss">
    .home{
        .part{
            
        }
    }
</style>
