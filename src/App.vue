<template>
<header class="d-flex justify-content-center bg-black text-white p-3" > <h1>Bosh sahifa</h1> </header>
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

</style>
