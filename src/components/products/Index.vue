<template>
  <div>
    <h2>{{product.name}}</h2>
    <h3>{{product.description}}</h3>
    <h5>{{product.price}}</h5>
    <router-link :to="{name: 'Edit', params:{product_slug: product.slug}}">EDIT</router-link>
    <button @click="deleteProduct(product.id)">Delete</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firebase-auth";
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  data() {
    return {
      product: [],
      products: [],
      user: null
    };
  },
  methods: {
    deleteProduct(id) {
      db.collection("products")
        .doc(id)
        .delete()
        .then(() => {
          this.products = this.products.filter(product => {
            return product.id !== id;
          });
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
    let ref = db
      .collection("products")
      .where("slug", "==", this.$route.params.product_slug);

    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.product = doc.data();
        this.product.id = doc.id;
      });
      console.log(this.product);
    });
  }
};
</script>