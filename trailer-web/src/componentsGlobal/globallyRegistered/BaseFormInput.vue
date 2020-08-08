<template>
  <QInput
    :type="type"
    v-bind="$attrs"
    filled
    dense
    square
    lazy-rules
    no-error-icon
    :value="value"
    color="primary"
    @input="bubbleEmit"
    v-on="$listeners"
  >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </QInput>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    event: "update",
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Number, null],
      default: "",
    },
  },
  methods: {
    bubbleEmit(val) {
      this.$emit("update", val)
    },
  },
}
</script>
