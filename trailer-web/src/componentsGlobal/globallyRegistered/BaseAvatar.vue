<template functional>
  <QAvatar rounded :class="[$style.avatar, data.class]" v-bind="$attrs">
    <QPopupProxy>
      <QCard>
        <img :src="props.image || '/no_avatar.png'" />
      </QCard>
    </QPopupProxy>
    <img :src="props.image || '/no_avatar.png'" :class="$style.image" />
  </QAvatar>
</template>

<style lang="scss" module>
.image {
  object-fit: cover;
}
</style>
