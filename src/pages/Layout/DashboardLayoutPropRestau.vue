<template>
  <div class="wrapper">
    <!-- <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}"> -->

    <side-bar :background-color="backgroundColor">
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/dashboard_proprietaire_restau">
        <i class="tim-icons icon-chart-pie-36"></i>
        <template v-if="!isRTL">
          <p style="color:#fff">Dashboard</p>
        </template>
        <template v-else>
          <p>لوحة القيادة</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/proprietaire/restaurant">
        <i class="tim-icons icon-single-02"></i>
        <template v-if="!isRTL">
          <p style="color:#fff">Mon Profile</p>
        </template>
        <template v-else>
          <p>ملف تعريفي للمستخدم</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/allrestaurants">
        <i class="tim-icons icon-notes"></i>
        <template v-if="!isRTL">
          <p style="color:#fff">Mes restaurants</p>
        </template>
        <template v-else>
          <p>طباعة</p>
        </template>
      </sidebar-link>

      <li class="nav-item">
        <a href style="color:#fff" @click.prevent="performLogout();scrollToTop()">
          <i class="tim-icons icon-button-power"></i> Se déconnecter
        </a>
      </li>
    </side-bar>
    <sidebar-share :background-color.sync="backgroundColor"></sidebar-share>

    <div class="main-panel" :data="backgroundColor">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbarRestau.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./DashboardContent.vue";
import SidebarShare from "./SidebarSharePlugin.vue";
import MobileMenu from "./MobileMenu.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    SideBar,
    SidebarLink,
    SidebarShare
  },
  data() {
    return {
      backgroundColor: "green"
    };
  },
  computed: {
    isRTL() {
      return this.$rtl.isRTL;
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    performLogout() {
      this.$store
        .dispatch("performLogoutAction")
        .then(res => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    },
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
