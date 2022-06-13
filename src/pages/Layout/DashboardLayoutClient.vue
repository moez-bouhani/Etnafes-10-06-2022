<template>
  <div class="wrapper">
    <!-- <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}"> -->

    <side-bar :background-color="backgroundColor">
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/dashboard_client" class="menuClient">
        <i class="tim-icons icon-chart-pie-36"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Dashboard</p>
        </template>
        <template v-else>
          <p>لوحة القيادة</p>
        </template>
      </sidebar-link>

      <div v-if="espace == 'Espace Voyageur'">

      <sidebar-link to="/notifications/client" class="menuClient">
        <i class="tim-icons icon-bell-55"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">
            Notifications&nbsp;
            <span
              class="badge badge-danger image-clignote"
              style="background-color: red"
              >New</span
            >
          </p>
        </template>
        <template v-else>
          <p>طباعة</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/client" class="menuClient">
        <i class="tim-icons icon-single-02"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Mon Profile</p>
        </template>
        <template v-else>
          <p>ملف تعريفي للمستخدم</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/reservations-client" class="menuClient">
        <i class="tim-icons icon-single-copy-04"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">
            Mes réservations
            <!-- &nbsp;
            <span
              v-if="notifRes>0"
              class="badge badge-pill badge-danger"
              style="background-color:red"
            >{{notifRes}}</span>-->
          </p>
        </template>
        <template v-else>
          <p>ملف تعريفي للمستخدم</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/mesFavs" class="menuClient">
        <i class="tim-icons icon-shape-star"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Mes Favoris</p>
        </template>
        <template v-else>
          <p>ملف تعريفي للمستخدم</p>
        </template>
      </sidebar-link>
      </div>

      <div v-if="espace == 'Espace Artisan'">
                 <sidebar-link class="menuAdmin" to="/dashboard_femme">
        <i class="tim-icons icon-chart-pie-36"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Dashboard</p>
        </template>
        <template v-else>
          <p>لوحة القيادة</p>
        </template>
      </sidebar-link>

      <sidebar-link class="menuAdmin" to="/Artisan">
        <i class="tim-icons icon-single-02"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Profile</p>
        </template>
        <template v-else>
          <p>ملف تعريفي للمستخدم</p>
        </template>
      </sidebar-link>
      <sidebar-link class="menuAdmin" to="/ajouter_produit_femme">
        <i class="tim-icons icon-chart-pie-36"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Ajouter produit</p>
        </template>
        <template v-else>
          <p>لوحة القيادة</p>
        </template>
      </sidebar-link>
      <sidebar-link class="menuAdmin" :to="{ name: 'listes_mes_produit' }">
        <i class="tim-icons icon-single-copy-04"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">
            Mes produits
          </p>
        </template>
        <template v-else>
          <p>طباعة</p>
        </template>
      </sidebar-link>
                </div>
        <div v-if="espace == 'Espace Guide'">
           <sidebar-link to="/dashboard_guide">
        <i class="tim-icons icon-chart-pie-36"></i>
        <template v-if="!isRTL">
          <p style="color:#fff">Dashboard</p>
        </template>
        <template v-else>
          <p>لوحة القيادة</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/guide">
        <i class="tim-icons icon-single-02"></i>
        <template v-if="!isRTL">
          <p style="color:#fff">Mon Profile</p>
        </template>
        <template v-else>
          <p>ملف تعريفي للمستخدم</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/guide/cv">
        <i class="tim-icons icon-single-02"></i>
        <template v-if="!isRTL">
          <p style="color:#fff">Mon Cv</p>
        </template>
        <template v-else>
          <p>ملف تعريفي للمستخدم</p>
        </template>
      </sidebar-link>
        </div>
<div v-if="espace == 'Espace Préstataire de service'">
  <side-bar :background-color="backgroundColor">
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/dashboard_agence" class="menuClient">
        <i class="tim-icons icon-chart-pie-36"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Dashboard</p>
        </template>
        <template v-else>
          <p>لوحة القيادة</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/dashboard_agence" class="menuClient">
        <i class="tim-icons icon-bell-55"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">
            Notifications&nbsp;
            <span
              class="badge badge-danger image-clignote"
              style="background-color: red"
              >New</span
            >
          </p>
        </template>
        <template v-else>
          <p>طباعة</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/profil" class="menuClient">
        <i class="tim-icons icon-single-02"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Mon Profile</p>
        </template>
        <template v-else>
          <p>ملف تعريفي للمستخدم</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/MesFilialesAgence" class="menuClient">
        <i class="tim-icons icon-bulb-63"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">
            Mes Filiales
          </p>
        </template>
      </sidebar-link>

      <sidebar-link to="/MesPacksAgence" class="menuClient">
        <i class="tim-icons icon-notes"></i>

        <template v-if="!isRTL">
          <p style="color: #fff">
            Mes Packs
          </p>
        </template>
      </sidebar-link>

      <sidebar-link to="/MesSatistiqueAgence" class="menuClient">
        <i class="tim-icons icon-world"></i>

        <template v-if="!isRTL">
          <p style="color: #fff">
            Statistiques
          </p>
        </template>
      </sidebar-link>

      <sidebar-link to="/nouveaupack/agence" class="menuClient">
        <i class="tim-icons icon-world"></i>

        <template v-if="!isRTL">
          <p style="color: #fff">
            Prestataire de Services
          </p>
        </template>
      </sidebar-link>
</div>

<div v-if="espace == 'Espace Hébergeur'">
  <sidebar-link to="/dashboard_proprietaire">
        <i class="tim-icons icon-chart-pie-36"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Dashboard</p>
        </template>
        <template v-else>
          <p>لوحة القيادة</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/hebergeur">
        <i class="tim-icons icon-single-02"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Mon Profile</p>
        </template>
        <template v-else>
          <p>ملف تعريفي للمستخدم</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/NouveauHebergement">
        <i class="tim-icons icon-bank"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Ajouter hébergement</p>
        </template>
        <template v-else>
          <p>طباعة</p>
        </template>
      </sidebar-link>
      <sidebar-link to="/allhebergements">
        <i class="tim-icons icon-bank"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Mes hébergements</p>
        </template>
        <template v-else>
          <p>طباعة</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/reservations-hebergement">
        <i class="tim-icons icon-bullet-list-67"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">Mes réservations</p>
        </template>
        <template v-else>
          <p>طباعة</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/nouveauhebergement" class="menuClient">
        <i class="tim-icons icon-bank"></i>
        <template v-if="!isRTL">
          <p style="color: #fff">
            Hébergeur
          </p>
        </template>
      </sidebar-link>
</div>

<div v-if="espace == 'Espace Restaurant'">
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
</div>

      <li class="nav-item menuClient">
        <a
          href
          style="color: #fff"
          @click.prevent="
            performLogout();
            scrollToTop();
          "
        >
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
import TopNavbar from "./TopNavbarClient.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./DashboardContent.vue";
import SidebarShare from "./SidebarSharePlugin.vue";
import MobileMenu from "./MobileMenu.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";
import { apiDomain } from "../../config";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    SideBar,
    SidebarLink,
    SidebarShare,
  },
  data() {
    return {
      espace: localStorage.getItem("espace", this.espace),
      packsln: "",
      reservationsP: "",
      reservationsH: "",
      agencesln: "",
      restaurantslength: "",
      reservationsUnread: "",
      reservationspUnread: "",
      reslength: "",
      hebergementsunread: "",
      resheb: "",
      backgroundColor: "green",
    };
  },
  computed: {
    /* notifRes() {
      return Number(this.resheb) + Number(this.reslength);
    },
    notifAgence() {
      return (
        Number(this.packsln) +
        Number(this.reservationsP) +
        Number(this.reservationsH) +
        Number(this.agencesln)
      );
    },
    notifHebergeur() {
      return (
        Number(this.hebergementsunread) +
        Number(this.reservationsUnread) +
        Number(this.reservationspUnread)
      );
    }, */
    user() {
      return this.$store.getters.get_user;
    },
    prop() {
      return this.$store.getters.get_prop;
    },
    proprestau() {
      return this.$store.getters.get_proprestau;
    },
    propagence() {
      return this.$store.getters.get_propagence;
    },
    guide() {
      return this.$store.getters.guide;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
  },

  created() {
    /* this.fetchRestaurants(this.$store.state.proprestau[0].id);
    this.fetchReservations(this.$store.state.user.id);
    this.fetchReservationsPack(this.$store.state.user.id);
    this.fetchUnreadHeb(this.$store.state.prop[0].id);
    this.fetchReservationsh(this.$store.state.prop[0].id);
    this.fetchReservationsPackp(this.$store.state.prop[0].id);
    this.fetchAgences(this.$store.state.propagence[0].id);
    this.fetchPacks(this.$store.state.propagence[0].id);
    this.fetchReservationsag(this.$store.state.propagence[0].id); */
  },
  methods: {
    fetchReservationsag(id) {
      fetch(
        `${apiDomain}/api/reservation-agence-adagence/${id}?token=${this.$store.state.token}`
      )
        .then((res) => res.json())
        .then((res) => {
          this.reservationsP = res.reservationsP;
          this.reservationsH = res.reservationsH;
        })
        .catch((err) => console.log(err));
    },

    fetchPacks(id) {
      fetch(`${apiDomain}/api/agence/packs/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.packsln = res.packsln;
        })
        .catch((err) => console.log(err));
    },

    fetchAgences(id) {
      fetch(`${apiDomain}/api/agences/admin/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.agencesln = res.agencesln;
        })
        .catch((err) => console.log(err));
    },
    fetchRestaurants(id) {
      fetch(`${apiDomain}/api/restaurants/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.restaurantslength = res.restaurants.length;
        })
        .catch((err) => console.log(err));
    },
    fetchReservationsh(id) {
      fetch(`${apiDomain}/api/reservation-proprietaire-libre/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.reservationsUnread = res.reservationc;
        })
        .catch((err) => console.log(err));
    },
    fetchReservationsPackp(id) {
      fetch(`${apiDomain}/api/reservation-proprietaire-pack/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.reservationspUnread = res.reservationp;
        })
        .catch((err) => console.log(err));
    },
    fetchUnreadHeb(id) {
      axios
        .get(
          `${apiDomain}/api/hebergements/unread/${this.$store.state.prop[0].id}`
        )
        .then((response) => (this.hebergementsunread = response.data.length))
        .catch((error) => console.log(error));
    },
    fetchReservationsPack(id) {
      fetch(
        `${apiDomain}/api/reservation-client/${id}${this.$store.state.user.id}`
      )
        .then((res) => res.json())
        .then((res) => {
          this.reslength = res.reslength;
        })
        .catch((err) => console.log(err));
    },

    fetchReservations(id) {
      fetch(
        `${apiDomain}/api/reservation-client-heb/${id}?token=${this.$store.state.token}`
      )
        .then((res) => res.json())
        .then((res) => {
          this.resheb = res.resheb;
        })
        .catch((err) => console.log(err));
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    performLogout() {
      this.$store
        .dispatch("performLogoutAction")
        .then((res) => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style>
.menuClient {
  margin-bottom: -8px;
}
.image-clignote {
  animation-duration: 1.4s;
  animation-name: clignoter;
  animation-iteration-count: infinite;
  transition: none;
}
@keyframes clignoter {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
