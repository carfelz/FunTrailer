<template functional>
  <QCard :class="[$style.card, data.class]" v-bind="attrs" v-on="listeners">
    <slot />
  </QCard>
</template>

<style lang="scss" module>
.card {
  background-color: white;

  @include dark-mode {
    background-color: $dark-elevation-2 !important;
  }
}
</style>
