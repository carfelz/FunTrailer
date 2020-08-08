<template>
  <QBtn
    v-bind="[$props, $attrs]"
    outline
    size="xl"
    no-caps
    :class="$style.button"
  >
    <slot></slot>
  </QBtn>
</template>

<script>
export default {
  name: "FormCancelButton",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" module>
.button {
  width: 14.75rem;
  padding: 0.625rem 0;
  :global(.q-btn__content) {
    flex-direction: column;
  }

  :global(.q-btn__wrapper) {
    &::before {
      background: linear-gradient(white, white) padding-box,
        linear-gradient(229.99deg, #ee7d00 0%, #e85124 43.48%, #c74b87 100%)
          border-box;
      border: 2px solid transparent;
      border-radius: 7px;
    }
  }

  :global(.q-icon) {
    width: 3.25rem;
    height: 3rem;
  }
}
</style>
