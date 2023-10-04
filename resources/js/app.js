import './bootstrap';


// jQuery
import 'admin-lte/plugins/jquery/jquery.min.js';

// Bootstrap 4
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';

// AdminLTE App
import 'admin-lte/dist/js/adminlte.min.js';


import {createApp} from 'vue'
import App from './components/app.vue'
import router from './router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
