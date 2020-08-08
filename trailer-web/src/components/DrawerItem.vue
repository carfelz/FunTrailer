<template functional>
  <QItem
    :to="props.to"
    clickable
    :class="$style.item"
    exact
    :exact-active-class="$style.activeItem"
    :data-test="props.title"
    v-on="
      props.clickAction ? { ...listeners, click: props.clickAction } : listeners
    "
  >
    <BaseToolTip v-if="props.tooltip" anchor="center right" self="center left">
      <div :class="$style.tooltip">
        <strong>{{ props.text }}</strong>
      </div>
    </BaseToolTip>
    <QItemSection side>
      <QIcon :name="props.icon" size="sm" :class="$style.icon"></QIcon>
    </QItemSection>
    <QItemSection>
      {{ props.text }}
    </QItemSection>
  </QItem>
</template>

<script>
export default {
  name: "DrawerItem",
}
</script>

<style lang="scss" module>
.activeItem .icon {
  @include textCol("accent");
}

.activeItem {
  @include textCol("accent");
}

.tooltip {
  font-size: $text-sm;
}
</style>
