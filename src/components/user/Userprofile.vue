<template>
  <div class="profile">
    <h1>Your Profile</h1>
    <h2>Products Ordered</h2>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firebase-auth";
export default {
  data() {
    return {
      // user: null,
      // email: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style scoped>
.profile {
  text-align: center;
}
</style>