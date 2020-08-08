<template>
  <span :class="$style[product]">
    <template v-if="product == 've'">Visitor<span>.</span>Express</template>
    <template v-if="product == 'c2p'">Click<span>2</span>Park</template>
  </span>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      product: "ve",
    }
  },
  mounted() {
    this.product = this.$store.state.client.product || "ve"
  },
}
</script>

<style lang="scss" module>
.ve,
.c2p {
  font-weight: 300;
  > span {
    color: red;
  }
}

.ve > span {
  font-size: 110%;
  font-weight: 600;
}
.c2p > span {
  margin: 0 0.05rem 0 0.1rem;
}
</style>
