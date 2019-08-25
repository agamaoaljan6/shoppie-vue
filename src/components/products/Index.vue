<template>
  <div class="row index-section">
    <div>
      <div class="graphic">
        <img :src="product.images" alt="imgurl" height="250" />
      </div>
    </div>
    <div>
      <div class="hero-content content">
        <p class="name">{{product.name}}</p>
        <p class="description">{{product.description}}</p>
        <p class="price">${{product.price}}.00</p>
        <div class="quantity_pick">
          <p class="sub_title">Quantity</p>
          <div class="quantity_box">
            <i class="material-icons" @click="subtractQuantity">remove</i>
            <span class="quantity_value">{{quantityNumber}}</span>
            <i class="material-icons" @click="addQuantity">add</i>
          </div>
        </div>
      </div>
      <a class="btn custom-btn btn-info mr-4 adding_btn" @click="addingList">Add to cart</a>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase/app";
import "firebase/firebase-auth";
import slugify from "slugify";
export default {
  data() {
    return {
      products: [],
      product: [],
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
    let ref = db
      .collection("products")
      .where("slug", "==", this.$route.params.product_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.product = doc.data();
        this.product.id = doc.id;
        this.images = doc.data().images;
        // this.images = product.images;
      });
      console.log(this.product);
    });

    // db.collection("users")
    //   .where("uid", "==", firebase.auth().currentUser.id)
    //   .get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       (this.user = doc.data()), (this.user.id = doc.id);
    //     });
    //     console.log("get current user id");
    //     console.log(this.user.id);
    //   });
  }
};
</script>

<style scoped>
.name {
  font-size: 60px;
}
.description {
  font-size: 45px;
}
.price {
  font-size: 30px;
}

.index-section {
  margin: 5em auto;
  display: flex;
  justify-content: space-around;
}
.content {
  display: flex;
  flex-direction: column;
}
</style>