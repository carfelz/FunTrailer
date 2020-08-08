<template>
  <QBtn color="primary" @click="$emit('submit')">
    {{ $t("labels.submit") }}
  </QBtn>
</template>

<script>
export default {
  name: "GenericSubmitButton",
  props: {
    color: {
      type: String,
      default: "light-blue-4",
    },
    type: {
      type: String,
      default: "button",
    },
  },
}
</script>
