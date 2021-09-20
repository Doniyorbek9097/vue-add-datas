<template>
<router-link to="/" class="text-decoration-none">
<header class="d-flex justify-content-center bg-black text-white p-3" > <h1>Bosh sahifa</h1> </header>
</router-link>
<router-view/>
</template>

<script>
import AddData from './components/AddData.vue';
import GetResult from "./components/GetResult.vue";

export default {
  name: 'App',
  components: {
    AddData,
    GetResult
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans&family=Roboto&family=Yanone+Kaffeesatz:wght@500;600&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
font-family: 'Roboto', sans-serif;
}
</style>
