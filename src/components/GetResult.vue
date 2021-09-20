<template>
  <div
    class="
      container-fluid
      d-flex
      justify-content-center
      align-items-center
      vh-100
      bg-success
    "
  >
    <div class="row w-50 gy-3">
      <div class="col-12">
        <table
          class="
            table table-dark table-hover
            text-white text-center
            w-100
            hover
          "
        >
          <thead>
            <tr>
              <th>#</th>
              <th>narxi</th>
              <th>tel</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in result">
              <td>{{ item.id }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.phone }}</td>
              <button
                class="btn btn-danger bg-danger"
                @click="DelBtn(item.id, index)"
              >
                delete
              </button>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-12 d-flex justify-content-end">
        <router-link to="add" class="btn btn-danger rounded-circle"
          >+</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetResult',
  data() {
    return {
      result: [],
    };
  },
  created() {
    let url = `https://api.getty.uz/public/v1/sl/get-clients`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => (this.result = result.clients));
  },

  methods: {
    DelBtn(id, index) {
      let conf = confirm("rostan o'chirmoqchimiz");
      if(conf == false){
        console.log("malumotingiz o'chilmadi");
        
      }else{
        let formdata = new FormData();
      formdata.append('id', id);
      let delUrl = `https://api.getty.uz/public/v1/sl/delete-client`;
      fetch(delUrl, {
        body: formdata,
        method: 'post',
      })
        .then((res) => res.json())
        .then((data) => {
         
          if (data.status === 'Deleted!') {
            
            this.result.splice(index, 1);
          }
        });
      }
      
    },
  },
};
</script>

<style></style>
