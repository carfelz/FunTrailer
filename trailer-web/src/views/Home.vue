<template>
  <div :class="$style.container">
    <DashboardButton
      icon="img:img/menu_icon.svg"
      :to="'/menu'"
      :class="[$style.button, $style.menuButton]"
    >
      Menu
    </DashboardButton>
  </div>
</template>

<script>
import DashboardButton from "@/components/buttons/DashboardButton"

export default {
  title: "Dashboard",
  components: {
    DashboardButton,
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-height: 36rem;
  padding: 32px 16px;
}

.button {
  margin-top: 1rem;
}

.menuButton {
  background: #f0332a;
}

.refer {
  width: 14.75rem;
  text-align: center;
}

.referText {
  margin-top: 1rem;

  @media screen and (max-width: 320px), screen and (max-height: 568px) {
    display: none;
  }
}

.referButton {
  width: 100%;
  margin-top: 1rem;
  font-size: 1.1875rem;
  border-radius: 7px;
  :global(.q-btn__wrapper) {
    min-height: initial;
  }
}

.referIcon {
  width: 53px;
  height: 56px;
}

.beeImg {
  position: relative;
  top: -5rem;

  /* width: 80%; */
}
</style>
