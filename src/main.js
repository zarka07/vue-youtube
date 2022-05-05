import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import messagePlugin from '@/utils/message.plugin';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase} from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyB3yLPA93lzffbhtUzQblaZvpwbWGiRwzc",
  authDomain: "cashnote-55fcb.firebaseapp.com",
  databaseURL: "https://cashnote-55fcb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cashnote-55fcb",
  storageBucket: "cashnote-55fcb.appspot.com",
  messagingSenderId: "130990629709",
  appId: "1:130990629709:web:e4e65e8bf7606be1230d04",
  measurementId: "G-EGYK88QBZM"
};
let app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const auth = getAuth();

onAuthStateChanged(auth, (app)=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


//const app = firebase.app.initializeApp(firebaseConfig)

// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//    app = new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount('#app')
//   } else {
//     app = new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount('#app')
//   }
// });


Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)
  
  

  

    
  

