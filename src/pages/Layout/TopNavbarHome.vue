<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="navhome">
      <div class="row">
        <div class="col-md-1">
          <router-link :to="{ name: 'Home' }">
            <img
              loading="lazy"
              class="logo_top_nav"
              alt="logo"
              src="/images/logo-etnafes-couleur-blanc.png.webp"
              :class="{ change_size: scrollPosition > 50 }"
            />
          </router-link>
        </div>
        <div class="col-md-1 toggelNAV_top_nav_bar">
          <center>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          </center>
        </div>
        <div class="col-md-10 testresp">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item>
                <router-link class="nav-link" to="/">Accueil</router-link>
              </b-nav-item>
              <b-nav-item class="d-none d-lg-block">
                <router-link class="nav-link" to="/packs">
                  Circuits</router-link
                >
              </b-nav-item>

              <b-nav-item class="d-lg-none">
                <router-link class="nav-link" to="/mpacks">
                  Circuits</router-link
                >
              </b-nav-item>

              <b-nav-item>
                <router-link class="nav-link" to="/hebergementlibre"
                  >Maison d'hôte</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link class="nav-link" to="/artisans"
                  >Artisans</router-link
                >
              </b-nav-item>

              <!--    <b-nav-item v-if="!loggedIn" class="d-none d-lg-block">
                <router-link class="nav-link" to="/inscritfemme"
                  >Espace Femme R/A</router-link
                >
              </b-nav-item>

              <b-nav-item v-if="!loggedIn" class="d-lg-none">
                <router-link class="nav-link" to="/login/femme"
                  >Espace Femme R/A</router-link
                >
              </b-nav-item> -->
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/"> Accueil </router-link>
              </li>-->

              <!-- <b-nav-item-dropdown class="mt-2" right v-if="!loggedIn">
                <template v-slot:button-content>Proprietaire</template>

                <b-dropdown-item>
                  <router-link to="/login/proprietaire">Hébergement</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link to="/login/proprietaire_restaurant">Restaurant</router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>-->
              <!-- <b-nav-item v-if="!loggedIn">
                <router-link class="nav-link" to="/login/guide">Guide</router-link>
              </b-nav-item>-->
              <b-nav-item v-if="!loggedIn" class="d-none d-lg-block">
                <router-link class="nav-link" to="/login/client-register"
                  >Se connecter</router-link
                >
              </b-nav-item>

              <b-nav-item v-if="!loggedIn" class="d-lg-none">
                <router-link class="nav-link" to="/login/client"
                  >Se connecter</router-link
                >
              </b-nav-item>

              <!-- <b-nav-item v-if="!loggedIn">
                <router-link class="nav-link" to="/login/agence">Prestataire de Services</router-link>
              </b-nav-item>-->

              <b-nav-item-dropdown class="mt-2" text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
              <router-link to='/espace_etanfes'>
              <button  style="padding:2px 15px 2px 15px !important;border-radius:10px;margin: 5px !important;background: red !important;" class="btn btn-danger btn-sm" type="button">
    Quitter {{ espace }}
  </button>
              </router-link>
              <!-- <b-nav-item v-if="loggedIn">
                <router-link class="nav-link" to="/espace_etanfes"
                  >Quitter &nbsp;{{ espace }}</router-link
                >
              </b-nav-item> -->
              <b-nav-item-dropdown right v-if="loggedIn">
                <template v-slot:button-content>
                  <em>{{ user.nom }} {{ user.prenom }}</em>
                  &nbsp;
                  <em v-if="user.role == 1">{{ user.name }}&nbsp;</em>
                  <img
                    loading="lazy"
                    v-if="user.role == 1"
                    :src="`https://etnafesapi20212018.etnafes.com/myapp/public/uploads/files_admins/${user.photo}`"
                    alt="Profile Photo"
                    class="photo"
                  />

                  <img
                    loading="lazy"
                    v-if="user.role != 1 && user.provider != null"
                    :src="`${client.photo}`"
                    alt="Profile Photo"
                    class="photo"
                  />

                  <img
                    loading="lazy"
                    v-if="user.role != 1 && user.provider == null"
                    :src="`https://etnafesapi20212018.etnafes.com/myapp/public/uploads/files_client/${client.photo}`"
                    alt="Profile Photo"
                    class="photo"
                  />
                </template>
                <!-- espace etanfes admin -->

                <!-- admin -->
                <b-dropdown-item v-if="user.role == 1" href="/user"
                  >Profile</b-dropdown-item
                >

                <b-dropdown-item v-if="user.role == 1" href="/statistiques"
                  >Tableau de bord</b-dropdown-item
                >
                <!-- espace etanfes admin -->
                <!-- client -->
                <div v-if="espace == 'Espace Voyageur'">
                  <b-dropdown-item to="/dashboard_client">
                    <router-link to="/dashboard_client">Tableau de bord</router-link>
                  </b-dropdown-item>
                  <b-dropdown-item to="/client">
                    <router-link to="/client">Profile</router-link>
                  </b-dropdown-item>
                  <b-dropdown-item to="/reservations-client">
                    <router-link to="/reservations-client"
                      >Mes réservations</router-link
                    >
                  </b-dropdown-item>
                </div>
                <!-- artisan -->
                <div v-if="espace == 'Espace Artisan'">
                  <b-dropdown-item to="/dashboard_femme">
                    <router-link to="/dashboard_femme">Tableau de bord</router-link>
                  </b-dropdown-item>

                  <b-dropdown-item to="/Artisan">
                    <router-link to="/Artisan">Profile</router-link>
                  </b-dropdown-item>

                  <b-dropdown-item to="/ajouter_produit_femme">
                    <router-link to="/ajouter_produit_femme"
                      >Ajouter produit</router-link
                    >
                  </b-dropdown-item>

                  <b-dropdown-item to="/listes_mes_produit">
                    <router-link to="/listes_mes_produit"
                      >Mes produits</router-link
                    >
                  </b-dropdown-item>
                </div>

                <!-- guide -->
                <div v-if="espace == 'Espace Guide'">
                  <b-dropdown-item to="/dashboard_guide">
                    <router-link to="/dashboard_guide">Tableau de bord</router-link>
                  </b-dropdown-item>

                  <b-dropdown-item to="/guide">
                    <router-link to="/guide">Profile</router-link>
                  </b-dropdown-item>

                  <b-dropdown-item to="/guide/cv">
                    <router-link to="/guide/cv">Mon Cv</router-link>
                  </b-dropdown-item>
                </div>

                <!-- agence -->
                <div v-if="espace == 'Espace Prestataire de services'">
                  <b-dropdown-item to="/dashboard_agence">
                    <router-link to="/dashboard_agence">Tableau de bord</router-link>
                  </b-dropdown-item>

                  <b-dropdown-item to="/profil">
                    <router-link to="/profil">Profile</router-link>
                  </b-dropdown-item>

                  <b-dropdown-item to="/MesFilialesAgence">
                    <router-link to="/MesFilialesAgence">
                      Mes Filiales</router-link
                    >
                  </b-dropdown-item>

                  <b-dropdown-item to="/MesPacksAgence">
                    <router-link to="/MesPacksAgence"> Mes Packs</router-link>
                  </b-dropdown-item>
                </div>

                <!-- hebergeur -->
                <div v-if="espace == 'Espace Hébergeur'">
                  <b-dropdown-item to="/dashboard_proprietaire">
                    <router-link to="/dashboard_proprietaire"
                      >Tableau de bord</router-link
                    >
                  </b-dropdown-item>

                  <b-dropdown-item to="/hebergeur">
                    <router-link to="/hebergeur">Profile</router-link>
                  </b-dropdown-item>

                  <b-dropdown-item to="/NouveauHebergement">
                    <router-link to="/NouveauHebergement">
                      Ajouter hébergement</router-link
                    >
                  </b-dropdown-item>

                  <b-dropdown-item to="/allhebergements">
                    <router-link to="/allhebergements">
                      Mes hébergements</router-link
                    >
                  </b-dropdown-item>
                  <b-dropdown-item to="/reservations-hebergement">
                    <router-link to="/reservations-hebergement">
                      Mes réservations</router-link
                    >
                  </b-dropdown-item>
                </div>

                <!-- resto -->
                <div v-if="espace == 'Espace Restaurant'">
                  <b-dropdown-item to="/dashboard_proprietaire_restau">
                    <router-link to="/dashboard_proprietaire_restau"
                      >Tableau de bord</router-link
                    >
                  </b-dropdown-item>

                  <b-dropdown-item to="/proprietaire/restaurant">
                    <router-link to="/proprietaire/restaurant"
                      >Profile</router-link
                    >
                  </b-dropdown-item>

                  <!--   <b-dropdown-item to="/NouveauHebergement">
                    <router-link to="/NouveauHebergement">
                      Ajouter hébergement</router-link
                    >
                  </b-dropdown-item> -->

                  <b-dropdown-item to="/allrestaurants">
                    <router-link to="/allrestaurants">
                      Mes restaurants</router-link
                    >
                  </b-dropdown-item>
                  <!--  <b-dropdown-item to="/reservations-hebergement">
                    <router-link to="/reservations-hebergement">
                      Mes réservations</router-link
                    >
                  </b-dropdown-item> -->
                </div>

                <b-dropdown-item @click.prevent="performLogout"
                  >Déconnexion</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
    </b-navbar>
  </div>
</template>
<script>
import { apiDomain } from "../../config";
import axios from "axios";
export default {
  data() {
    return {
      client: [],

      admin: [],

      guide: [],
      adagence: [],

      proprietaire: [],
      proprestau: [],
      scrollPosition: null,
      token: null,

      espace: localStorage.getItem("espace", this.espace),
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
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
    if (this.loggedIn == true) {
      //client
      if (this.user.role == 2) this.fetchclient(this.$store.state.user.id);
      //proprietaire hébergement
      if (this.user.role == 6)
        this.fetchproprietaire(this.$store.state.user.id);
      //proprietaire restaurant
      if (this.user.role == 5) this.fetchproprestau(this.$store.state.user.id);
      //agence admin
      if (this.user.role == 3) this.fetchagenceadmin(this.$store.state.user.id);
      //guide
      if (this.user.role == 4) this.fetchguide(this.$store.state.user.id);
      //admin
      if (this.user.role == 1) this.fetchadmin(this.$store.state.user.id);
    }
  },
  methods: {
    //show user by id
    fetchagenceadmin(id) {
      fetch(`${apiDomain}/api/agencead/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.adagence = res.adagence;
        })
        .catch((err) => console.log(err));
    },

    fetchguide(id) {
      fetch(`${apiDomain}/api/guide/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.guide = res.guide;
        })
        .catch((err) => console.log(err));
    },
    fetchproprestau(id) {
      fetch(`${apiDomain}/api/proprietaire_restau/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.proprestau = res.proprietaire;
        })
        .catch((err) => console.log(err));
    },
    fetchproprietaire(id) {
      fetch(`${apiDomain}/api/prop/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.proprietaire = res.proprietaire;
        })
        .catch((err) => console.log(err));
    },
    //show user by id
    fetchclient(id) {
      fetch(`${apiDomain}/api/client/${id}?token=${this.$store.state.token}`)
        .then((res) => res.json())
        .then((res) => {
          this.client = res;
        })
        .catch((err) => console.log(err));
    },

    fetchadmin(id) {
      fetch(`${apiDomain}/api/admin/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.admin = res;
        })
        .catch((err) => console.log(err));
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
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

    performLogoutAdmin() {
      this.$store
        .dispatch("performLogoutActionAdmin")
        .then((res) => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    checkUserStatus() {
      if (localStorage.getItem("token") != null) {
        this.token = localStorage.getItem("token");
      }
    },
  },
};
</script>





