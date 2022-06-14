<template>
  <div class="container">
    <div id="vue">
      <div class="loading" v-show="loading"></div>
      <div class="images-wrapper" v-show="!loading">
        <transition-group name="image-wrapper" tag="div" class="images-inner">
          <div
            class="image-wrapper"
            v-for="(image, i) in truncatedFilteredImages"
            :key="image.id + i"
          >
            <div
              class="image-img"
              :style="{ background: 'url(' + image.url + ')' }"
            ></div>

            <div class="image-details">
              <router-link :to="image.to">
                <h3
                  @click="
                    typeEspace = image.name;
                    saveEspace();
                  "
                  class="image-title"
                >
                  {{ image.name }}
                </h3>
                <p @click="
                    typeEspace = image.name;
                    saveEspace();
                  " class="image-description">
                  <span></span>{{ image.description | truncateText
                  }}<span></span>
                </p>
              </router-link>

              <!--   <p class="image-category">{{ image.category }}</p> -->
            </div>
          </div>
        </transition-group>
      </div>

      <div id="imageLoaderDock" style="display: none"></div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.doubleUp();
  },

  data() {
    return {
      typeEspace: "etanfes",
      loading: true,
      imagesLimit: 15,
      allLoaded: false,
      liveSearchString: "",
      images: [
        {
          id: 1,
          url: "http://via.placeholder.com/500x500",
          bigUrl: "https://etnafes.com/espace/espace-voyageur-etnafes.jpg",
          name: "Espace Voyageur",
          description:
            "Espace dédié pour les voyageurs,reservations cicruits,hébérgements,produits",
          category: "Espace Voyageur",
          to: "dashboard_client",
        },
        {
          id: 2,
          url: "http://via.placeholder.com/500x500",
          bigUrl: "https://etnafes.com/espace/espace-artisan-etnafes2.webp",
          name: "Espace Artisan",
          description: "Espace dédié pour les artisans et les femmes rurales",
          category: "Espace Artisa",
          to: "dashboard_femme",
        },
        {
          id: 3,
          url: "http://via.placeholder.com/500x500",
          bigUrl: "https://etnafes.com/espace/espace-guide-etnafes.jpg",
          name: "Espace Guide",
          description: "Espace Guide",
          category: "Espace Guide",
          to: "dashboard_guide",
        },

        /* ----- */

        {
          id: 4,
          url: "http://via.placeholder.com/500x500",
          bigUrl: "https://etnafes.com/espace/espace-agence-etnafes.png",
          name: "Espace Préstataire de service",
          description: "Espace Préstataire de service",
          category: "Espace Préstataire de service",
          to: "dashboard_agence",
        },
        {
          id: 5,
          url: "http://via.placeholder.com/500x500",
          bigUrl: "https://etnafes.com/espace/espace-hebergeur-etnafes.jpg",
          name: "Espace Hébergeur",
          description: "Espace Hébergeur",
          category: "Espace Hébergeur",
          to: "dashboard_proprietaire",
        },
        {
          id: 6,
          url: "http://via.placeholder.com/500x500",
          bigUrl: "https://etnafes.com/espace/espace-resto-etnafes.jpg",
          name: "Espace Restaurant",
          description: "Restaurants",
          category: "Espace Restaurant",
          to: "dashboard_proprietaire_restau",
        },
      ],
    };
  },

  computed: {
    truncatedFilteredImages() {
      return this.images;
    },

    truncatedFilteredImages1() {
      if (this.liveSearchString.trim().length > 0) {
        return this.images.filter((image) => {
          let parts = this.liveSearchString.trim().split(" ");

          for (let part of parts) {
            let searchRegex = new RegExp(part, "i");

            if (
              !(
                searchRegex.test(image.name) ||
                searchRegex.test(image.description) ||
                searchRegex.test(image.category)
              )
            ) {
              return false;
            }
          }

          return true;
        });
      } else {
        return this.images.slice(0, this.imagesLimit);
      }
    },
  },

  filters: {
    truncateText: (text) => {
      if (text.length > 60) {
        text = text.substring(0, 125) + "...";
      }

      return text;
    },
  },

  methods: {
    save() {},

    saveEspace() {
      return localStorage.setItem("espace", this.typeEspace);
    },
    doubleUp() {
      //fake a bunch of data
      /*   let localImages = this.images; */

      /* localImages.forEach((image) => {
        let newImage = image;
        newImage.id = image.id * 1;
        this.images.push(newImage);
      }); */
      /*  this.images.push(localImages); */
      setTimeout(() => {
        this.loading = false;
        //then run replacePleaceholders
        this.replacePlaceholders();
      }, 200);
    },

    replacePlaceholders() {
      this.images.forEach((image, i) => {
        let newImg = document.createElement("img");
        newImg.src = image.bigUrl;
        newImg.id = "preload-" + i;
        document.getElementById("imageLoaderDock").appendChild(newImg);

        document.getElementById("preload-" + i).onload = () => {
          this.images[i].url = image.bigUrl;
        };
      });
    },

    showMore() {
      this.imagesLimit += 6;

      if (this.imagesLimit >= this.images.length) {
        this.imagesLimit = this.images.length;
        this.allLoaded = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,400,700);

$max-width: 1280px;
$desktop: 1025px;
$tablet: 768px;
$mobile: 551px;
$font-family: "Roboto";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-family;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(359deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading {
  width: 36px;
  height: 36px;
  margin: 30px auto;
  transform: rotate(0deg);
  animation: spin 0.6s infinite linear;
  border: 4px solid white;
  border-top: 4px solid black;
  border-radius: 50%;
  stroke: white;

  @media (max-width: $mobile) {
    width: 24px;
    height: 24px;
    border: 2px solid white;
    border-top: 2px solid black;
  }
}

.images-wrapper {
  margin: 0 auto;
  max-width: $max-width;

  .images-inner {
    display: flex;
    flex-wrap: wrap;
    margin: 0;

    .image-wrapper {
      position: relative;
      display: flex;
      width: calc(100% - 1em);
      /*  height: 300px; */
      height: 280px;
      margin: 16px 16px 8px;
      cursor: pointer;
      transition: all 0.25s;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
      overflow: hidden;

      //animations
      &-move {
        transition: all 600ms ease-in-out 50ms;
      }
      &-enter-active {
        transition: all 300ms ease-out;
      }

      &-leave-active {
        transition: all 200ms ease-in;
        position: absolute;
        z-index: 0;
      }

      &-enter,
      &-leave-to {
        opacity: 0;
      }
      &-enter {
        transform: scale(0.9);
      }
      //animations

      .image-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-size: cover !important;
        background-position: center !important;
        transition: transform 200ms ease-out, blur 200ms ease-out;
        animation: fadeIn 200ms;
      }

      .image-details {
        align-self: flex-end;
        background: white;
        width: 100%;
        padding: 16px;

        .image-title {
          transition: color 250ms;
          color: #222a42;
        }

        .image-description {
          display: none;
          font-family: sans-serif;
          opacity: 0;
          max-height: 0px;
          overflow: hidden;
          transition: max-height 125ms;
          animation: slideUp 300ms;
          animation-delay: 50ms;
          animation-fill-mode: backwards;

          //Margin hack
          span {
            display: block;

            &:nth-of-type(1) {
              height: 5px;
            }

            &:nth-of-type(2) {
              height: 25px;
            }
          }
        }

        .image-category {
          font-weight: bold;
          margin-top: 2px;
          color: #b0b0b0;
        }
      }

      @media (min-width: $tablet) {
        margin-bottom: 16px;
        width: calc(50% - 32px);
      }

      @media (min-width: $desktop) {
        width: calc(33% - 32px);

        &:hover {
          .image-img {
            transform: scale(1.3);
            filter: blur(5px);
          }

          .image-title {
            transition: color 250ms;
            /* color: #f7931e; */
            color: #76b72a;
          }

          .image-description {
            display: block;
            opacity: 1;
            max-height: 500px;
            transition: max-height 250ms ease-in;
          }
        }
      }
    }
  }
}

.load-wrapper {
  position: relative;
  margin: 16px auto;
  text-align: center;
  max-width: $max-width;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 1px;
    width: 100%;
    background: #d2d2d2;
    z-index: -1;
    margin: 0 16px;
  }

  .button-wrapper {
    display: inline-block;
    background: white;
    padding: 0 32px;

    button {
      padding: 10px 32px;
      font-size: 14px;
      font-weight: bold;
      border: 1px solid #d2d2d2;
      border-radius: 0;
      color: #d2d2d2;
      appearance: none;
      background: transparent;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        border-color: #b0b0b0;
        color: #b0b0b0;
      }

      &:active {
        color: white;
        background: black;
      }
    }
  }

  p {
    background: white;
    font-style: italic;
    display: inline-block;
    padding: 0 32px;
    color: #b0b0b0;
  }
}
</style>
