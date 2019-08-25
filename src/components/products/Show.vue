<template>
  <div>
    <h3 class="header">Products</h3>
    <div class="search">
      <div class="searching_box input-field col s6">
        <input id="icon_prefix" type="text" class="validate" placeholder="Search" />
      </div>
    </div>
    <div class="divider"></div>
    <div class="index">
      <div class="card" v-for="(product) in products" :key="product.id">
        <div class="card-content">
          <div class="card-text">
            <div class="images">
              <img :src="product.images" alt="imgurl" height="150" />
            </div>
            <p class="product-name">{{product.name}}</p>
            <p class="product-price">${{product.price}}</p>
            <p class="product-description">{{product.description}}</p>
          </div>
          <div class="icons">
            <ul class="left_icon" v-if="user">
              <router-link :to="{ name: 'Edit', params:{product_slug: product.slug}}">
                <i class="material-icons grey-text">edit</i>
              </router-link>
              <i
                @click="deleteProduct(product.id)"
                v-if="user"
                class="material-icons grey-text delete"
              >delete_forever</i>
            </ul>

            <ul class="right_icon">
              <li>
                <router-link :to="{ name: 'Index', params: {product_slug: product.slug}}">
                  <i class="material-icons grey-text">add_shopping_cart</i>
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
  name: "Show",
  data() {
    return {
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
    db.collection("products")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data(), doc.id);
          let product = doc.data();
          product.id = doc.id;
          images: product.images;
          console.log(product.images);
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
  margin-top: 1em;
}

.index {
  margin: 3em 1.7em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.index .right_icon {
  float: right;
  margin-right: 2em;
}
.index .left_icon li {
  display: inline-block;
  cursor: pointer;
  padding: 5px 10px 10px 10px;
}
.index .left_icon {
  float: left;
  margin-left: 2em;
}

.index .delete {
  cursor: pointer;
  color: #aaa;
  margin-right: 5em;
}
.icons {
  margin-top: 1em;
  margin-bottom: 3em;
}
.card-text {
  text-align: center;
  margin-bottom: 1.4em;
}
.product-name {
  font-size: 33px;
}
.product-price {
  font-size: 24px;
}
.product-description {
  font-size: 22px;
}
.search {
  width: 15%;
  position: absolute;
  top: 10%;
  right: 10%;
}
</style>