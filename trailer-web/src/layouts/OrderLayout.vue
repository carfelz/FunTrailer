<template>
  <QLayout id="q-app" view="lhr LpR lfr" :class="$style.pageBackground">
    <QHeader :class="$style.header">
      <QToolbar :class="$style.smallToolbar">
        <div :class="$style.logoWrapper">
          <QBtn
            v-if="!isHome"
            flat
            dense
            round
            aria-label="Home"
            icon="keyboard_arrow_left"
            color="white"
            size="lg"
            :class="$style.logo"
            @click="$router.go(-1)"
          />
        </div>

        <h1 :class="$style.pageTitleSmall" data-test="page title">
          {{ clientName || $title }}
        </h1>
        <div class="q-space"></div>
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <QPage :style-fn="styleFn">
        <div
          :class="[$style.page, { [$style.beeBackground]: beeBackgroundImage }]"
        >
          <RouterView :key="$route.fullPath" />
        </div>
      </QPage>
    </QPageContainer>
  </QLayout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: false,
      drawerWidth: 280,
      drawerMini: true,
      // isDesktop: screen.width >= 866,
    }
  },
  computed: {
    beeBackgroundImage() {
      return ["Dashboard"].includes(this.$title)
    },
    routesSectionUser() {
      return this.filterAllowedLinks([
        {
          title: "Log Out",
          text: this.$t("actions.logOut.title"),
          icon: "fas fa-sign-out-alt",
          clickAction: this.logOut,
        },
      ])
    },
    loggedIn() {
      return this.$store.state.auth.loggedIn
    },
    isDesktop() {
      return this.$q.screen.gt.sm
    },
    clientName() {
      return this.$store.state.client.name
    },
    clientIsDemo() {
      return this.$store.state.client.isDemo
    },
    clientFeatures() {
      return this.$store.state.client.features
    },
    userAuthGroups() {
      return this.$store.state.auth.groups
    },
    logo() {
      return this.$store.state.client.logo
    },
    email() {
      return this.$store.state.employee.email
    },
    isHome() {
      return this.$router.currentRoute.path === "/"
    },
  },
  methods: {
    styleFn(offset, height) {
      const pageHeight = height - offset
      return `height: ${pageHeight}px`
    },
    filterAllowedLinks(linkList) {
      return linkList.filter((item) => {
        let allowed = true

        if (item.demo) allowed = !!this.clientIsDemo

        if (item.group)
          allowed = allowed && this.userAuthGroups.includes(item.group)

        if (item.feature)
          allowed = allowed && this.clientFeatures.includes(item.feature)

        return allowed
      })
    },
    logOut() {
      this.$store.dispatch("auth/logOut")
    },
  },
}
</script>

<style lang="scss" module>
.pageBackground {
  padding: 0;

  @include bgCol("primary");

  background: url(/img/moneycombe_bg_texture.svg);
  background-repeat: repeat;

  @media only screen and (min-width: $max-page-width) {
    padding: 20px;
  }
}

.page {
  max-width: $max-page-width;
  height: 100%;
  padding: 16px;
  margin: 0 auto;
  color: black;
  background-color: white;
  border-radius: 0;

  @media only screen and (min-width: $max-page-width) {
    height: initial;
    border-radius: 4px;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14),
      0 1px 14px rgba(0, 0, 0, 0.12);
  }
}

.brand {
  padding-top: 1rem;
  font-size: $text-xxxl;
  font-weight: 500;
}

.footer {
  color: black;
  text-align: center;
  background-color: white;

  @include dark-mode {
    color: white;
    background: $dark-elevation-7;
  }
}

.toLoginButton {
  width: 100%;
  height: 100%;
  padding: 8px;
}

.pageTitleSmall {
  margin: 0 auto 0 auto;
  font-family: chevin-pro, sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  color: white;
}

.header {
  /* background: linear-gradient(
    229.99deg,
    #ee7d00 0%,
    #e85124 40%,
    #e85124 60%,
    #c74b87 100%
  ); */
  background: linear-gradient(
    229.99deg,
    #ee7d00 0%,
    #e85124 43.48%,
    #c74b87 100%
  );
}

.smallToolbar {
  max-width: $max-page-width;
  height: 60px;
  margin: 0 auto;
  color: #333;
  box-shadow: none;

  @include dark-mode {
    color: white;
    background-color: $dark-elevation-7;
  }
}

.drawerTitle {
  width: 100%;
  padding: 13px 10px;
  span {
    font-size: 1.8rem;
  }

  @include bgCol("primary");
}

.textTitleRed {
  font-size: $text-xxl;
  font-weight: 700;

  @include textCol("red");
}

.textTitleBlack {
  font-size: $text-xxl;
  font-weight: 300;
}

.menuWrapper,
.logoWrapper {
  display: flex;
  flex: 1;
  justify-content: center;
}

.menuButton {
  margin-left: auto;
  color: white;
}

.logo {
  margin-right: auto;
  font-size: 1.5em;
}

.accountMenu {
  color: black;
  background-color: #eee;
  border-right: 1px solid rgba(0, 0, 0, 0.12);

  @include dark-mode {
    color: white;
    background-color: $dark-elevation-7;
  }
}

.menuEmail {
  font-size: $text-sm;
}
</style>
