<!--
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-04-03 15:42:53
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-04-04 10:43:09
 * @FilePath: /DailyLearning/demo/2023/todo-demo/src/views/VirtualList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div ref="list" class="infinite-list-container">
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
        <div ref="items"
            class="infinite-list-item"
            v-for="item in visibleData"
            :key="item.id"
            :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }"
        >{{ item.value }}</div>
    </div>
  </div>

</template>

<script>
    export default {
        name:'VirtualList',
        props: {
            //所有列表数据
            listData:{
            type:Array,
            default:()=>[]
            },
            //每项高度
            itemSize: {
            type: Number,
            default:200
            }
        },
        computed:{
            //列表总高度
            listHeight(){
            return this.listData.length * this.itemSize;
            },
            //可显示的列表项数
            visibleCount(){
            return Math.ceil(this.screenHeight / this.itemSize)
            },
            //偏移量对应的style
            getTransform(){
            return `translate3d(0,${this.startOffset}px,0)`;
            },
            //获取真实显示列表数据
            visibleData(){
            return this.listData.slice(this.start, Math.min(this.end,this.listData.length));
            }
        },
        mounted() {
            this.screenHeight = this.$el.clientHeight;
            this.start = 0;
            this.end = this.start + this.visibleCount;
        },
        data() {
            return {
            //可视区域高度
            screenHeight:0,
            //偏移量
            startOffset:0,
            //起始索引
            start:0,
            //结束索引
            end:null,
            };
        },
        methods: {
            scrollEvent() {
                //当前滚动位置
                let scrollTop = this.$refs.list.scrollTop;
                //此时的开始索引
                this.start = Math.floor(scrollTop / this.itemSize);
                //此时的结束索引
                this.end = this.start + this.visibleCount;
                //此时的偏移量
                this.startOffset = scrollTop - (scrollTop % this.itemSize);
            }
        }
    };
</script>