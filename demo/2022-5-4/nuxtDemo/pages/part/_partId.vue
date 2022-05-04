<template>
  <div class="">
    {{ $route.params.partId }}
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
    console.log(this.$route)
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
