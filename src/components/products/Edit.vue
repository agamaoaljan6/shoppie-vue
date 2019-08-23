<template>
  <div class="editproduct">
    <h2>Edit product</h2>
    <form @submit.prevent="editProduct">
      <div class="row">
        <div class="input-field col s6">
          <p class="sub_title">Product Name</p>
          <input type="text" name="name" class="validate" v-model="name" />
        </div>
        <div class="input-field col s6">
          <p class="sub_title">Price</p>
          <input type="text" name="price" v-model="price" />
        </div>
        <div class="input-field col s12">
          <p class="sub_title">Description</p>
          <textarea
            id="textarea2"
            class="materialize-textarea"
            data-length="90"
            v-model="description"
          ></textarea>
        </div>
      </div>
      <div class="field center-align btn_box">
        <p v-if="feedback" class="red-text">{{feedback}}</p>
        <button class="btn waves-effect waves-light deep-orange lighten-1">Add Item</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";
export default {
  name: "Edit",
  data() {
    return {
      product: null,
      feedback: null
    };
  },
  methods: {
    editProduct() {
      if (this.product.name && this.product.description && this.product.price) {
        this.feedback = null;
        this.product.slug = slugify(this.product.name, {
          replacement: "-",
          remove: /$_+~.()'"!\-:@]/g,
          lower: true
        });
        console.log(this.product.slug);
        db.collection("products")
          .doc(this.product.id)
          .update({
            name: this.product.name,
            description: this.product.description,
            price: this.product.price,
            slug: this.product.slug
          })
          .then(() => {
            this.$router.push({ path: "/show" });
          })
          .catch(err => {
            console.log(err);
          });
      }
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
    });
  }
};
</script>

<style scoped>
.editproduct {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5em auto;
}
</style>