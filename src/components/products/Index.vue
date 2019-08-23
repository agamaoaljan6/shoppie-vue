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
      products: []
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
    db.collection("users")
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          (this.user = doc.data()), (this.user.id = doc.id);
        });
        console.log("get current user id");
        console.log(this.user.id);
      });
  }
};
</script>