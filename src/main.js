const { createApp } = require('vue');
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router/router';
createApp(App).use(router).mount('#app');
createApp.devtools = true;
