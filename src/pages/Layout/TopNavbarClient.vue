<template>
  <nav
    class="navbar navbar-expand-lg navbar-absolute"
    style="
      position: fixed;
      background-color: #fff !important;
      box-shadow: 0 0 10px #ccc;
      height: 54px;
    "
    :class="{ 'bg-white': showMenu, 'navbar-transparent': !showMenu }"
  >
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div
          class="navbar-toggle d-inline"
          :class="{ toggled: $sidebar.showSidebar }"
        >
          <button type="button" class="navbar-toggler" @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <!-- <a class="navbar-brand" href="javascript:void(0)">{{ $route.name }}</a> -->
        <router-link to="/">
          <img
            loading="lazy"
            class="style_img_top_nav_cli"
            src="/images/logo-etnafes-couleur.png.webp"
          />
        </router-link>

        <!-- <router-link to="/packs"> Nos Circuits </router-link> -->
      </div>
      <!-- <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        data-toggle="collapse"
        data-target="#navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button> -->

      <b-nav-item
        style="list-style: none; width: 50%"
        class="d-none d-lg-block"
      >
        <router-link
          style="color: black !important"
          class="nav-link"
          to="/packs"
        >
          Circuits</router-link
        >
      </b-nav-item>

      <!--  <b-nav-item style="list-style: none; width: 50%" class="d-lg-none">
        <router-link
          style="color: black !important"
          class="nav-link"
          to="/mpacks"
          > Circuits</router-link
        >
      </b-nav-item> -->

      <b-nav-item
        class="d-none d-lg-block"
        style="list-style: none; width: 50%"
      >
        <router-link
          style="color: black !important"
          class="nav-link"
          to="/hebergementlibre"
          >Maison d'hôte</router-link
        >
      </b-nav-item>
      <b-nav-item
        class="d-none d-lg-block"
        style="list-style: none; width: 50%"
      >
        <router-link
          style="color: black !important"
          class="nav-link"
          to="/artisans"
          >Artisans</router-link
        >
      </b-nav-item>

      <b-nav-item-dropdown
        style="list-style: none; color: black !important"
        :text="'Quitter' + ' ' + espace"
        right
        class="d-none d-lg-block"
      >
        <b-dropdown-item
          @click="
            typeEspace = 'Espace Voyageur';
            saveEspace();
          "
          href="/dashboard_client"
          >Espace Voyageur</b-dropdown-item
        >
        <b-dropdown-item
          @click="
            typeEspace = 'Espace Artisan';
            saveEspace();
          "
          href="/dashboard_femme"
          >Espace Artisan</b-dropdown-item
        >
        <b-dropdown-item
          @click="
            typeEspace = 'Espace Guide';
            saveEspace();
          "
          href="/dashboard_guide"
          >Espace Guide</b-dropdown-item
        >

        <b-dropdown-item
          @click="
            typeEspace = 'Espace Prestataire de services';
            saveEspace();
          "
          href="/dashboard_agence"
          >Prestataire de services</b-dropdown-item
        >
        <b-dropdown-item
          @click="
            typeEspace = 'Espace Hébergeur';
            saveEspace();
          "
          href="/dashboard_proprietaire"
          >Espace Hébergeur</b-dropdown-item
        >
        <b-dropdown-item
          @click="
            typeEspace = 'Espace Restaurant';
            saveEspace();
          "
          href="/dashboard_proprietaire_restau"
          >Espace Restaurant</b-dropdown-item
        >
      </b-nav-item-dropdown>

      <div
        class="collapse navbar-collapse show text-left d-none d-lg-block"
        v-show="showMenu"
      >
        <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
          <li class="search-bar input-group" @click="searchModalVisible = true">
            <button
              class="btn btn-link"
              id="search-button"
              data-toggle="modal"
              data-target="#searchModal"
            >
              <i class="tim-icons icon-zoom-split"></i>
              <span class="d-lg-none d-md-block">Search</span>
            </button>
          </li>
          <modal
            :show.sync="searchModalVisible"
            class="modal-search"
            id="searchModal"
            :centered="false"
            :show-close="true"
          >
            <input
              aria-label="label"
              slot="header"
              v-model="searchQuery"
              type="text"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="SEARCH"
            />
          </modal>

          <drop-down>
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <div class="photo">
                <!-- <img loading="lazy" src="@/assets/img/anime3.png" alt="Profile Photo" /> -->
                <img
                  loading="lazy"
                  v-if="user.provider != null"
                  :src="`${client.photo}`"
                  alt="Profile Photo"
                />

                <img
                  loading="lazy"
                  v-if="user.provider == null"
                  :src="`https://etnafesapi20212018.etnafes.com/myapp/public/uploads/files_client/${user.photo}`"
                  alt="Profile Photo"
                />
              </div>
              <b class="caret d-none d-lg-block d-xl-block"></b>
            </a>
            <ul
              class="dropdown-menu dropdown-navbar"
              v-if="espace == 'Espace Voyageur'"
            >
              <li class="nav-link">
                <a href="/dashboard_client" class="nav-item dropdown-item"
                  >Tableau de bord</a
                >
              </li>

              <li class="nav-link">
                <a href="/client" class="nav-item dropdown-item">Profile</a>
              </li>

              <li class="nav-link">
                <a href="/reservations-client" class="nav-item dropdown-item"
                  >Mes Réservations</a
                >
              </li>

              <li class="nav-link">
                <a href="/notifications/client" class="nav-item dropdown-item"
                  >Notifications</a
                >
              </li>

              <li class="dropdown-divider"></li>
              <li class="nav-link">
                <a
                  href="javascript:void(0)"
                  class="nav-item dropdown-item"
                  @click.prevent="performLogout"
                  >Se déconnecter</a
                >
              </li>
            </ul>
            <!-- Espace Artisan -->
            <ul
              class="dropdown-menu dropdown-navbar"
              v-if="espace == 'Espace Artisan'"
            >
              <li class="nav-link">
                <a href="/Artisan" class="nav-item dropdown-item">Profil</a>
              </li>
              <li class="nav-link">
                <a href="/listes_mes_produit" class="nav-item dropdown-item">
                  Mes produits</a
                >
              </li>

              <li class="dropdown-divider"></li>
              <li class="nav-link">
                <a
                  href="javascript:void(0)"
                  class="nav-item dropdown-item"
                  @click.prevent="performLogout"
                  >Se déconnecter</a
                >
              </li>
            </ul>

            <!-- Espace Guide -->
            <ul
              class="dropdown-menu dropdown-navbar"
              v-if="espace == 'Espace Guide'"
            >
              <li class="nav-link">
                <a href="/guide" class="nav-item dropdown-item">Tableau de bord</a>
              </li>
              <li class="nav-link">
                <a href="/dashboard_guide" class="nav-item dropdown-item"
                  >Profile</a
                >
              </li>

              <li class="dropdown-divider"></li>
              <li class="nav-link">
                <a
                  href="javascript:void(0)"
                  class="nav-item dropdown-item"
                  @click.prevent="performLogout"
                  >Se déconnecter</a
                >
              </li>
            </ul>

            <!-- Espace Prestataire de services -->
            <ul
              class="dropdown-menu dropdown-navbar"
              v-if="espace == 'Espace Prestataire de services'"
            >
              <li class="nav-link">
                <a href="/dashboard_agence" class="nav-item dropdown-item"
                  >Tableau de bord</a
                >
              </li>
              <li class="nav-link">
                <a href="/agence" class="nav-item dropdown-item">Profile</a>
              </li>
              <li class="nav-link">
                <a href="/packs/agence" class="nav-item dropdown-item">Packs</a>
              </li>

              <li class="nav-link">
                <a href="/agence-réservations" class="nav-item dropdown-item"
                  >Réservations</a
                >
              </li>
              <li class="dropdown-divider"></li>
              <li class="nav-link">
                <a
                  href="javascript:void(0)"
                  class="nav-item dropdown-item"
                  @click.prevent="performLogout"
                  >Se déconnecter</a
                >
              </li>
            </ul>

            <!-- Espace Hébergeur -->
            <ul
              class="dropdown-menu dropdown-navbar"
              v-if="espace == 'Espace Hébergeur'"
            >
              <li class="nav-link">
                <a href="/dashboard_proprietaire" class="nav-item dropdown-item"
                  >Tableau de bord</a
                >
              </li>

              <li class="nav-link">
                <a href="/proprietaire" class="nav-item dropdown-item"
                  >Profile</a
                >
              </li>
              <li class="nav-link">
                <a href="/allhebergements" class="nav-item dropdown-item"
                  >Mes Hebergements</a
                >
              </li>

              <li class="nav-link">
                <a
                  href="/reservations-hebergement"
                  class="nav-item dropdown-item"
                  >Réservations</a
                >
              </li>
              <!-- <li class="nav-link">
                <a href="javascript:void(0)" class="nav-item dropdown-item">Settings</a>
              </li>-->
              <li class="dropdown-divider"></li>
              <li class="nav-link">
                <a
                  href="javascript:void(0)"
                  class="nav-item dropdown-item"
                  @click.prevent="performLogout"
                  >Se déconnecter</a
                >
              </li>
            </ul>

            <!-- Espace Restaurant -->
            <ul
              class="dropdown-menu dropdown-navbar"
              v-if="espace == 'Espace Restaurant'"
            >
              <li class="nav-link">
                <a
                  href="/dashboard_proprietaire_restau"
                  class="nav-item dropdown-item"
                  >Tableau de bord</a
                >
              </li>
              <li class="nav-link">
                <a
                  href="/proprietaire/restaurant"
                  class="nav-item dropdown-item"
                  >Profile</a
                >
              </li>
              <li class="nav-link">
                <a href="/allrestaurants" class="nav-item dropdown-item"
                  >Mes Restaurants</a
                >
              </li>
              <li class="dropdown-divider"></li>
              <li class="nav-link">
                <a
                  href="javascript:void(0)"
                  class="nav-item dropdown-item"
                  @click.prevent="performLogout"
                  >Se déconnecter</a
                >
              </li>
            </ul>
          </drop-down>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import DropDown from "@/components/Dropdown.vue";
import Modal from "@/components/Modal.vue";
import { SidebarPlugin } from "@/components/index";
import { apiDomain } from "../../config";
export default {
  components: {
    DropDown,
    Modal,
    SidebarPlugin,
  },
  data() {
    return {
      espace: localStorage.getItem("espace", this.espace),
      client: {},
      notifications: [],
      reservationsp: [],
      typeEspace: "",
      searchModalVisible: false,
      searchQuery: "",
      showMenu: false,
    };
  },

  computed: {
    loggedIn() {
      return this.$store.getters.get_loggedIn;
    },

    user() {
      return this.$store.getters.get_user;
    },
  },
  created() {
    // this.fetchNotifications();
    this.fetchclient(this.$store.state.user.id);
    /*  this.fetchReservations(this.$store.state.user.id); */
  },

  sockets: {
    message2(data) {
      let message2 = JSON.parse(data);

      console.log(message2);
      if (message2.client_id === this.$store.state.user.id) {
        this.fetchReservations(this.$store.state.user.id).push(message2);
      }
    },
  },

  methods: {
    saveEspace() {
      return localStorage.setItem("espace", this.typeEspace);
    },
    resetNotification: function () {
      if (this.reservationsp.length > 0) {
        this.reservationsp.length = 0;
      }
    },
    fetchReservations(id) {
      fetch(
        `${apiDomain}/api/reservation-client-notif/${id}?token=${this.$store.state.token}`
      )
        .then((res) => res.json())
        .then((res) => {
          this.reservationsp = res.reservationsp;
        })
        .catch((err) => console.log(err));
    },
    fetchclient(id) {
      fetch(`${apiDomain}/api/client/${id}?token=${this.$store.state.token}`)
        .then((res) => res.json())
        .then((res) => {
          this.client = res;
        })
        .catch((err) => console.log(err));
    },
    markAsRead() {
      axios
        .get(`${apiDomain}/api/mark-all-read/${this.user.id}`)
        .then((response) => {
          this.unreadNotifications = [];
        });
    },
    fetchNotifications() {
      fetch(`${apiDomain}/api/notifications`)
        .then((res) => res.json())
        .then((res) => {
          this.notifications = res.notifications;
        })
        .catch((err) => console.log(err));
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
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  computed: {
    unreadNotifications() {
      return this.notifications.filter((notification) => {
        return notification.read_at == null;
      });
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    loggedIn() {
      return this.$store.getters.get_loggedIn;
    },

    user() {
      return this.$store.getters.get_user;
    },
  },
};
</script>

