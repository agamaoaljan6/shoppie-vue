<template>
  <div class="addproduct">
    <h2>Add A product</h2>
    <form @submit.prevent="addProduct">
      <div>
        <label for>Name of Product</label>
        <input type="text" v-model="productname" />
      </div>
      <div>
        <label for>Description</label>
        <input type="text" v-model="description" />
      </div>
      <div>
        <label for>Price</label>
        <input type="number" v-model="price" />
      </div>
      <div>
        <input type="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Addproduct",
  data() {
    return {
      productname: null,
      description: null,
      price: null,
    //   image:null,
    };
  },
  methods: {
    addProduct() {
        db.collection('products')
        .add({
            productname:this.productname,
            description:this.description,
            price: this.price
            // image: this.image
        })
        .then(()=> {
          console.log(this.productname, this.description, this.price)
            this.$router.push({path:'/productsshow'})
        })
        .catch(err => {
            console.log(err)
        })
    }
  }
};
</script>

<style scoped>
.addproduct {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
</style>