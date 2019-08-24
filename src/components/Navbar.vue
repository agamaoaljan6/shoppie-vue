<template>
  <div class="navbar">
    <nav class="navbox indigo lighten-2 white-text text-lighten-2">
      <div class="container">
        <router-link :to="{name :'Homepage'}" class="brand-logo left">
          <img :src="require('@/assets/store.svg')" class="logo" width="50" height="50" />
        </router-link>
        <router-link :to="{name:'Show'}" class="product">Products</router-link>

        <ul class="right">
          <li v-if="!user">
            <router-link :to="{name: 'Signup'}">Signup</router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{name: 'Login'}">Login</router-link>
          </li>
          <li v-if="user">
            <router-link :to="{name: 'Add'}">Add Items</router-link>
          </li>
          <li v-if="user">
            <router-link :to="{name:'Userprofile'}">Profile</router-link>
          </li>
          <li v-if="user">
            <a @click="signOut">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>


<script>
import firebase from "firebase/app";
import "firebase/firebase-auth";
export default {
  name: "Navbar",
  data() {
    return {
      user: null
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ path: "/" });
        });
    }
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
.logo {
  margin-top: 6.5px;
}
li,
a {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: black;
  text-decoration: none;
}
.home {
  display: flex;
  align-items: flex-start;
}
.product {
  margin-top: 0.6em;
  margin-left: 5em;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: lavenderblush;
}

.nav__links {
  list-style-type: none;
}

.nav__links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav__links li a {
  transition: all 0.3s ease 0s;
}
.nav__links li a:hover {
  color: #0088a9;
}
</style>