<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center vh-100">
      <div class="col-6">
        <form action="" v-on:submit.prevent>
          <input
            type="text"
            class="form-control"
            placeholder="Narxi"
            v-model="price"
          />
          <input
            type="number"
            class="form-control my-3"
            placeholder="Tel"
            v-model="phone"
          />
          <button class="btn btn-success" @click="Add()">Add (abduvaliyev shuyerni o'zgartirdi</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddData',
  data() {
    return {
      price: '',
      phone: '',
    };
  },

  methods: {
    Add() {
      let addUrl = `https://api.getty.uz/public/v1/sl/add-client`;
      fetch(addUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          price: this.price,
          phone: this.phone,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // enter you logic when the fetch is successful
          console.log(data);
          if (data.status === 'Stored!') {
            this.$router.push('/');
          }
        })
        .catch((error) => {
          // enter your logic for when there is an error (ex. error toast)
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
