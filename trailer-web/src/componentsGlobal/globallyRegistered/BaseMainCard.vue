<template functional>
  <div :class="[$style.card, data.class, data.staticClass]">
    <h1 v-if="$slots.title" :class="$style.title">
      <slot name="title"></slot>
    </h1>
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
.card {
  position: relative;
  width: 100%;
  max-width: 75rem;

  @include mq(tablet) {
    // tablet up
    overflow: hidden;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  @include dark-mode {
    background-color: $dark-elevation-1;
  }
}

.content {
  padding: 0.5rem;
}

.title {
  // padding: 0.5rem 1rem;
  // margin: 0 -1rem 1rem -1rem;
  // margin-top: -1rem;
  // margin-bottom: 1rem;
  padding: 0.25rem 1rem;
  font-size: $text-lg;
  line-height: 3rem;

  @include bgCol("primary");
}
</style>
