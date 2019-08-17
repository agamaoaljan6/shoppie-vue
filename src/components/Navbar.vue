<template>
  <div class="header">
    <div class="home">
      <router-link :to="{path:'/'}">
        <h1>HOME</h1>
      </router-link>
      <router-link :to="{path:'/productsshow'}" class="product">Products</router-link>
    </div>
    <nav>
      <ul class="nav__links">
        <li v-if="!user">
          <router-link :to="{path:'/login'}">Log In</router-link>
        </li>
        <li v-if="!user">
          <router-link :to="{path:'/signup'}">Sign Up</router-link>
        </li>
        <li v-if="user">
          <router-link :to="{path:'/userprofile'}">{{user.email}}</router-link>
        </li>
        <li v-if="user">
          <a @click="signOut">Sign Out</a>
        </li>
      </ul>
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
  align-items:flex-start;
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