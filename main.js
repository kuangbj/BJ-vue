import Vue from 'vue'
import App from './App.vue'
import router from './router'

import HeadPart from './components/header.vue'
import FootPart from './components/footer.vue'

Vue.component('aph', HeadPart);
Vue.component('apf', FootPart);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
