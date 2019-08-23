<template>
  <div class="profile">
    <h1>USER PROFILE</h1>
    <h2>Products Ordered</h2>
    <h3>Wishlist</h3>
    <router-link :to="{name: 'Add'}">Add New Product</router-link>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      // user:null,
    };
  }
};
</script>

<style scoped>
.profile {
  text-align: center;
}
</style>