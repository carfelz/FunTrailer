<template>
  <QBtn
    color="primary"
    :type="type"
    :loading="loading"
    :disable="disable"
    @click="$emit('click')"
  >
    <slot>
      {{ $t("labels.submit") }}
    </slot>
  </QBtn>
</template>

<script>
export default {
  name: "FormSubmitButton",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "submit",
    },
  },
}
</script>
