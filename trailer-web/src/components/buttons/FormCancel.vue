<template>
  <QBtn
    color="primary"
    :loading="loading"
    :disable="disable"
    outline
    @click="$emit('cancel')"
  >
    <slot>
      {{ $t("labels.cancel") }}
    </slot>
  </QBtn>
</template>

<script>
export default {
  name: "FormCancelButton",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
