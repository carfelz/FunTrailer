<template>
  <QField
    v-bind="$attrs"
    filled
    dense
    square
    lazy-rules
    no-error-icon
    v-on="$listeners"
  >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </QField>
</template>

<script>
export default {}
</script>
