<template>
  <div>
    <div>{{ $route.params.module }}</div>
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    console.log(this.$route.params)
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
