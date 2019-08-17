<template>
  <div class="productlist">
    <h1 class="h1product">Product List</h1>
    <div v-for="(product) in products" :key="product.id">
      <div class="products">
        <h2>
          <router-link :to="{path:'/productsindex'}">{{product.productname}}</router-link>
        </h2>
        <h3>{{product.description}}</h3>
        <h5>{{product.price}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase/app";
import "firebase/firebase-auth";

export default {
  name: "Productsshowpage",
  data() {
    return {
      products: []
    };
  },
  methods: {},
  created() {
    db.collection("products")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data(), doc.id);
          let product = doc.data();
          product.id = doc.id;
          this.products.push(product);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.productlist {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 auto;
}
.products {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 8px solid red;
  background: yellow;
  margin-top: 5em;
}

</style>