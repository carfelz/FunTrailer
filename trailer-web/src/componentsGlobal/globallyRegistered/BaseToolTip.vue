<template functional>
  <QTooltip
    :delay="500"
    :anchor="props.anchor || 'top middle'"
    :self="props.self || 'bottom middle'"
    :content-class="[data.class, $style.tooltip]"
  >
    <slot />
  </QTooltip>
</template>

<style lang="scss" module>
.tooltip {
  font-size: $text-md;
}
</style>
