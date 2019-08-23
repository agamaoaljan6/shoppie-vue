<template>
  <div>
    <h3 class="header">Product List</h3>
    <div class="index">
      <div class="card" v-for="(product) in products" :key="product.id">
        <div class="card-content">
          <h4>
            <router-link :to="{name:'Index',params:{product_slug: product.slug}}">{{product.name}}</router-link>
          </h4>
          <h5>${{product.price}}</h5>
          <router-link :to="{name: 'Edit', params:{product_slug: product.slug}}">EDIT</router-link>

          <i
            @click="deleteProduct(product.id)"
            class="material-icons grey-text delete"
          >delete_forever</i>

          <div class="divider">
            <ul class="left_icon">
              <li v-show="deletebtn" @click="deleteItem(product.id)">
                <i class="material-icons grey-text delete">delete_forever</i>
              </li>
              <li v-show="editbtn">
                <router-link :to="{ name: 'Edit', params:{product_slug: product.slug}}">
                  <i class="material-icons grey-text">edit</i>
                </router-link>
              </li>
            </ul>
            <ul class="right_icon">
              <li>
                <router-link :to="{ name: 'Detail', params: {product_slug: product.slug}}">
                  <i class="material-icons grey-text">local_grocery_store</i>
                </router-link>
              </li>
            </ul>
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
  name: "Productsshowpage",
  data() {
    return {
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
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5em;
}

.index {
  padding-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}

.index .right_icon {
  float: right;
}
.index .left_icon li {
  display: inline-block;
  cursor: pointer;
  padding: 5px 10px 10px 10px;
}
.index .left_icon {
  float: left;
}

.index .delete {
  cursor: pointer;
  color: #aaa;
  margin-right: 5em;
  float: right;
}
</style>