<template>
  <div>
    <h2>{{product.productname}}</h2>
    <h3>{{product.description}}</h3>
    <h5>{{product.price}}</h5>
  </div>
</template>

<script>
import firebase from "firebase/app";
import db from '@/firebase/init';
import 'firebase/firebase-auth';
export default {
    data() {
        return {
            products: []
        }
    }
} 
</script>