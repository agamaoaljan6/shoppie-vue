<template>
  <div class="hero">
    <div class="container">
      <!-- 1st section -->
      <div class="row first-section">
        <div class="col m6 content">
          <div class="hero-content">
            <h1 class="hero-title">Shoppie</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?</p>
            <div class="hero-btn mt-5">
              <router-link :to="{name:'Signup'}">
                <button class="btn custom-btn btn-info mr-4">Get started</button>
              </router-link>
              <router-link :to="{name:'Show'}">
                <button class="btn custom-btn btn-outline-secondary">Products</button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col m6">
          <div class="graphic">
            <img :src="require('@/assets/landingpage.svg')" class="img" />
          </div>
        </div>
      </div>
      <!-- 2nd section -->
      <div class="row second-section">
        <div class="col m6">
          <div class="graphic">
            <img :src="require('@/assets/product.svg')" class="img-2" />
          </div>
        </div>
        <div class="col m6 content-2">
          <div class="hero-content">
            <h3 class="hero-title">Learn more about us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?</p>
            <div class="hero-btn mt-5">
              <button class="btn btn-info">Click here</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Carousel section -->
      <div>
        <p class="carousel-header" style="margin-bottom: 2em;">Our Best Sellers</p>
        <carousel-3d class="carousel" :autoplay="true" :autoplay-timeout="3000" :display="6">
          <slide :index="0">
            <img src="https://i.imgur.com/GzNl8lf.jpg" height="270" />
          </slide>
          <slide :index="1">
            <img src="https://i.imgur.com/M8uiYpt.jpg" height="270" />
          </slide>
          <slide :index="2">
            <img src="https://i.imgur.com/nW4MBZZ.jpg" height="270" />
          </slide>
          <slide :index="3">
            <img src="https://i.imgur.com/mTx0Krh.jpg" height="270" />
          </slide>
          <slide :index="4">
            <img src="https://i.imgur.com/GFQJkSY.jpg" height="270" />
          </slide>
          <slide :index="5">
            <img src="https://i.imgur.com/X13DNec.jpg" height="270" />
          </slide>
        </carousel-3d>
      </div>

      <!-- contact section -->
      <div class="contact">
        <div class="col m10">
          <p class="center-align contact-header">Contact Us!</p>
          <div class="row">
            <form class="col m8 offset-m2 s12">
              <div class="row">
                <div class="input-field col s12">
                  <input id="name" type="text" />
                  <label for="name">Name</label>
                </div>
                <div class="input-field col s12">
                  <input id="email" type="email" class="form-input" />
                  <label for="email">Email</label>
                </div>
                <div class="input-field col s12">
                  <textarea id="message" class="materialize-textarea"></textarea>
                  <label for="message">Message</label>
                </div>
              </div>

              <div class="row">
                <div class="col m8">
                  <p class="right-align">
                    <button
                      class="btn btn-large waves-effect waves-light"
                      type="button"
                      name="action"
                    >Send Message</button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Footer  -->
      <div>
        <div class="footer">
          <div class="container">
            © 2019 Copyright
            <ul class="icons">
              <li class="icon">
                <i class="fa fa-facebook-square"></i>
              </li>
              <li class="icon">
                <i class="fa fa-instagram"></i>
              </li>
              <li class="icon">
                <i class="fa fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  data() {
    return {};
  },
  components: {
    Carousel3d,
    Slide
  }
};
</script>


<style scoped>
.carousel {
  margin-top: 4em;
  min-height: 50vh;
}
.carousel-header,
.contact-header {
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.img {
  margin-top: 5em;
  content: "";
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}

.content {
  margin-top: 5em;
}

.img-2 {
  margin-top: 3em;
  content: "";
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}
.content-2 {
  margin-top: 3em;
}

.first-section,
.second-section {
  min-height: 70vh;
}

.btn {
  margin-top: 1em;
}
.contact {
  margin-top: 2em;
  margin-bottom: 3em;
}
.footer {
  margin-top: 5em;
  text-align: center;
}
.icons {
  margin-top: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 2.5em;
}
.icon:hover {
  opacity: 0.5;
}
</style>