<template>
  <div class="signup">
    <h1>Sign up</h1>
    <form @submit.prevent="signUp">
      <div>
        <label for>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label for>Email</label>
        <input type="text" v-model="email" />
      </div>
      <div>
        <label for>Password</label>
        <input type="password" v-model="password" />
      </div>
      <div>
        <input type="Submit" />
      </div>
    </form>
    <p>
      Already have an account?
      <router-link :to="{path:'/login'}">Log in here</router-link>
    </p>
  </div>
</template>


<script>
import db from "@/firebase/init";
import firebase from "firebase/app";
import "firebase/firebase-auth";
export default {
  name: "Signup",
  data() {
    return {
      name: null,
      email: null,
      password: null
    };
  },
  methods: {
    signUp() {
      if (this.name && this.email && this.password) {
        let ref = db.collection("users").doc();
        ref.get().then(doc => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
                console.log(this.name, this.username, this.email)
                ref.set({
                    name:this.name,
                    email:this.email,
                    password:this.password,
                    userId: cred.user.uid
                })
                .then(()=> {
                    this.$router.push({path:'/productsindex'})
                })
                .catch(err=> {
                    console.log(err)
                })
            });
        });
      }
    }
  }
};
</script>

<style scoped>
.signup {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
</style>