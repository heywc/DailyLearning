<template>
  <div class="about">
    <div class="part">
      <div class="name"> 小明</div>
        <draggable v-model="myArray1">
          <transition-group>
              <div v-for="element in myArray1" :key="element.id">
                  {{element.name}}
              </div>
          </transition-group>
      </draggable>
    </div>
    <div class="part">
      <div class="name"> 小红</div>
        <draggable v-model="myArray2">
          <transition-group>
              <div v-for="element in myArray2" :key="element.id">
                  {{element.name}}
              </div>
          </transition-group>
      </draggable>
    </div>
    <div class="part">
      <div class="name"> 小明</div>
        <draggable v-model="myArray3">
          <transition-group>
              <div v-for="element in myArray3" :key="element.id">
                  {{element.name}}
              </div>
          </transition-group>
      </draggable>
    </div>
    <div class="part">
      <div class="name"> 小明</div>
        <draggable v-model="myArray4">
          <transition-group>
              <div v-for="element in myArray4" :key="element.id">
                  {{element.name}}
              </div>
          </transition-group>
      </draggable>
    </div>
    <div class="part">
      <div class="name"> 小明</div>
        <draggable v-model="myArray4">
          <transition-group>
              <div v-for="element in myArray4" :key="element.id">
                  {{element.name}}
              </div>
          </transition-group>
      </draggable>
    </div>
    <div class="part">
      <div class="name"> 小明</div>
        <draggable v-model="myArray4">
          <transition-group>
              <div v-for="element in myArray4" :key="element.id">
                  {{element.name}}
              </div>
          </transition-group>
      </draggable>
    </div>
    <div class="part">
      <div class="name"> 小明</div>
        <draggable v-model="myArray4">
          <transition-group>
              <div v-for="element in myArray4" :key="element.id">
                  {{element.name}}
              </div>
          </transition-group>
      </draggable>
    </div>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
  name: 'AboutView',
  data() {
    return {
      myArray1:[
        {
          "name": "Edgard",
          "id": 3
        },
        {
          "name": "Juan 4",
          "id": 4
        },
        {
          "name": "Juan 5",
          "id": 5
        },
        {
          "name": "Juan 6",
          "id": 6
        },
        {
          "name": "Juan 7",
          "id": 7
        },
        {
          "name": "Juan 8",
          "id": 8
        }
      ],
      myArray2:[
        {
          "name": "Edgard",
          "id": 3
        },
        {
          "name": "Juan 4",
          "id": 4
        },
        {
          "name": "Juan 5",
          "id": 5
        },
        {
          "name": "Juan 6",
          "id": 6
        },
        {
          "name": "Juan 7",
          "id": 7
        },
        {
          "name": "Juan 8",
          "id": 8
        }
      ],
      myArray3:[
        {
          "name": "Edgard",
          "id": 3
        },
        {
          "name": "Juan 4",
          "id": 4
        },
        {
          "name": "Juan 5",
          "id": 5
        },
        {
          "name": "Juan 6",
          "id": 6
        },
        {
          "name": "Juan 7",
          "id": 7
        },
        {
          "name": "Juan 8",
          "id": 8
        }
      ],
      myArray4:[
        {
          "name": "Edgard",
          "id": 3
        },
        {
          "name": "Juan 4",
          "id": 4
        },
        {
          "name": "Juan 5",
          "id": 5
        },
        {
          "name": "Juan 6",
          "id": 6
        },
        {
          "name": "Juan 7",
          "id": 7
        },
        {
          "name": "Juan 8",
          "id": 8
        },

      ]
    }
  },
  components: {
    draggable,
  }
}
</script>
<style lang="scss">
  .about{
    width: 1000px;
    overflow: auto;
    white-space: nowrap;
    .part{
      width: 200px;
      display: inline-block;
      .name{
        font-weight: 600;
      }
    }
    
  }

</style>
