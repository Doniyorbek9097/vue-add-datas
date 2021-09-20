<template>
  <div
    class="
      container-fluid
      d-flex
      justify-content-center
      align-items-center
      vh-100
      
    "
  >
    <div class="row w-50 gy-3">

    <div class="col-12 d-flex">
       <input type="date" class = "form-control" v-model="From">
       <input type="date" class="form-control" v-model="To"> 
       <button class="btn btn-success" @click="FilterData()">Filter</button>   
    </div>

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
              <th>Delete</th>
              
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in result">
              <td>{{ item.id }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.phone }}</td>
                <th><button class="btn btn-danger text-white bg-danger" @click="DelBtn(item.id, index)"></td>
                delete
              </button>
            </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-12 d-flex justify-content-end">
        <router-link to="add" class="btn btn-success rounded"
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
      From:"",
      To:"",
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

  FilterData(){
    if(this.From == "" && this.To == ""){
      alert("sanani kiriting")
    }else{
      let Filtered = new FormData();
        Filtered.append("from",this.From);
        Filtered.append("to",this.To);
    let FilterUrl = `https://api.getty.uz/public/v1/sl/filter`;
    
    if(navigator.onLine){
      fetch(FilterUrl,{
      method:"post",
      body:Filtered
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
      
    })
    }else{
      alert("Internetga ulanmagansiz!")
    }




    }
  }



  },
};
</script>

<style></style>
