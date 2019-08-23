<template>
  <div class="addproduct">
    <h2>Add product to listing</h2>
    <form @submit.prevent="addProduct">
      <div class="row">
        <div class="input-field">
          <button @click.prevent="onPickFile">Upload image</button>
          <input
            type="file"
            style="display:none;"
            ref="fileInput"
            accept="image/*"
            @change="onFilePicked"
          />
        </div>

        <div class="imageurl">
          <img :src="imageUrl" alt="imgurl" height="150" />
        </div>

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
        <button class="btn waves-effect waves-light deep-orange lighten-1" @click="upload">Add Item</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import db from "@/firebase/init";
import slugify from "slugify";
export default {
  name: "Add",
  data() {
    return {
      name: null,
      description: null,
      price: null,
      slug: null,
      imageUrl: null,
      image: null
    };
  },
  methods: {
    addProduct() {
      if (this.name) {
        this.slug = slugify(this.name, {
          replacement: "-",
          remove: /$_+~.()'"!\-:@]/g,
          lower: true
        });
      }
      db.collection("products")
        .add({
          name: this.name,
          description: this.description,
          price: this.price,
          imageUrl: this.imageUrl,
          image: this.image,
          slug: this.slug
        })
        .then(() => {
          console.log(this.name, this.description, this.price);
          this.$router.push({ name: "Show" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    upload() {},
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      let file = event.target.files[0];
      let storageRef = firebase.storage().ref("images/" + file.name);
      let uploadTask = storageRef.put(file);
      console.log(event.target.files[0]);

      // const files = event.target.files;
      // let filename = files[0].name;

      // if (filename.lastIndexOf(".") <= 0) {
      //   return alert("Please add a valid file");
      // }
      // const fileReader = new FileReader();
      // fileReader.addEventListener("load", () => {
      //   this.imageUrl = fileReader.result;
      // });
      // fileReader.readAsDataURL(files[0]);
      // this.image = files[0];
      // firestorage
      //   .ref("images")
      //   .child(filename)
      //   .put(this.image)
      //   .then(snapshot => {
      //     console.log(snapshot);
      //   });
    }
  }
};
</script>

<style scoped>
.addproduct {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5em auto;
}
</style>