<template>
  <div class="login">
    <h1>Log In</h1>
    <form @submit.prevent="signIn">
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
      Create an
      <router-link :to="{path:'/signup'}">account</router-link>here.
    </p>
  </div>
</template>


<script>
import firebase from 'firebase/app';
import "firebase/firebase-auth";
export default {
  name: "Login",
  data() {
    return {
        email: null,
        password:null,
    };
  },
  methods: {
      signIn() {
          if(this.email && this.password){
              firebase
              .auth()
              .signInWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                  this.$router.push({path:'/productsindex'});
              })
              .catch(err => {
                  console.log(err)
              })
          }
      }
  }
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
</style>