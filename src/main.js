import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import formCreate from '@form-create/element-ui';
Vue.use(ElementUI);
Vue.use(formCreate);
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
