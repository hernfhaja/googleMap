import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import Vuegeolocation from "vue-browser-geolocation";

Vue.config.productionTip = false;
Vue.use(Vuegeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCoSish9xrLbJaS3L6GyQHkA6WJTQtxWNw",
    libraries: "places",
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
