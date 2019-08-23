<template>
  <div class="hero">
    <div class="container">
      <div class="row">
        <div class="col m6 content">
          <div class="hero-content">
            <form @submit.prevent="signIn" class="card-panel">
              <h2 class="center">Login</h2>
              <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email" />
              </div>
              <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password" />
              </div>
              <p v-if="feedback" class="red-text center">{{feedback}}</p>
              <div class="field center btn_field">
                <button class="btn waves-effect waves-light deep-orange lighten-1">Login</button>
              </div>
            </form>
          </div>
        </div>

        <div class="col m6">
          <div class="graphic">
            <img :src="require('@/assets/login2.svg')" class="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import firebase from "firebase/app";
import "firebase/firebase-auth";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    signIn() {
      console.log(this.email, this.password);
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user);
            this.$router.push({ name: "Index" });
          })
          .catch(err => {
            this.feedback = err.message;
          });
        this.feedback = null;
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 35%;
  margin-top: 70px;
}

.img {
  margin-top: 9.5em;
  margin-left: 3em;
  content: "";
  width: 100%;
  height: 70%;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}
.content {
  margin-top: 9em;
}
</style>