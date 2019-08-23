<template>
  <div class="hero">
    <div class="container">
      <div class="row">
        <div class="col m6 content">
          <div class="hero-content">
            <form @submit.prevent="signUp" class="card-panel">
              <h2 class="center header-text">Create an account</h2>
              <div class="field">
                <label for="alias">Name</label>
                <input type="text" name="alias" v-model="name" />
              </div>
              <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email" />
              </div>
              <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password" />
              </div>
              <p class="red-text center" v-if="feedback">{{feedback}}</p>
              <div class="field center">
                <button
                  class="btn waves-effect waves-light btn custom-btn btn-outline-secondary lighten-1"
                >Signup</button>
              </div>
              <p class="signin-here">
                Already registered?
                <a>Sign in</a> here!
              </p>
            </form>
          </div>
        </div>

        <div class="col m6">
          <div class="graphic">
            <img :src="require('@/assets/signup.svg')" class="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase/app";
import "firebase/firebase-auth";
import slugify from "slugify";
export default {
  name: "Signup",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    signUp() {
      if (this.name && this.email && this.password) {
        this.slug = slugify(this.name, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "user is already registered";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                console.log(this.name, this.email);
                ref
                  .set({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    userId: cred.user.uid
                  })
                  .then(() => {
                    this.$router.push({ path: "/show" });
                  })
                  .catch(err => {
                    console.log(err);
                    this.feedback = err.message;
                  });
              });
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.header-text {
  margin-bottom: 1em;
}

.img {
  margin-top: 6em;
  margin-left: 1.5em;
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
  margin: 3.5em auto;
}
.btn {
  margin-top: 2em;
}
.signin-here {
  margin-top: 1em;
  margin-right: 2em;
  text-align: center;
}
</style>