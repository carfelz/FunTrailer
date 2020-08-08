<template>
  <QSelect
    v-bind="$attrs"
    filled
    dense
    square
    lazy-rules
    no-error-icon
    :options="options"
    color="primary"
    @input="bubbleEmit"
    v-on="$listeners"
  >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </QSelect>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    event: "update",
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    bubbleEmit(val) {
      this.$emit("update", val)
    },
  },
}
</script>
