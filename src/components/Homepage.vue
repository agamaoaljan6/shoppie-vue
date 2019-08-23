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
              <button class="btn custom-btn btn-info mr-4">Explore</button>
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
      <!-- contact section -->
      <div class="contact">
        <div class="col m10">
          <h3 class="center-align">Contact Us!</h3>
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
      <!-- --------------  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style scoped>
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
.content-2 {
  margin-top: 5em;
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
</style>