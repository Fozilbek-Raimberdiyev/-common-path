  <template>
    <el-button class="btn" :class="[route.name=='login' ? 'hidden' : 'visible' ]" v-if="auth.user && auth.token" type="primary"  @click="drawer = true">
      open
    </el-button>
  
    <el-drawer direction="ltr" v-model="drawer" title="I am the title" :with-header="false">
      <ul class="lists">
        <router-link @click="drawer=false" to="/">Home</router-link>
        <!-- <router-link to="/movies">Movies</router-link>
        <router-link to="/videos">Videos</router-link> -->
        <router-link @click="drawer=false" to="/me">Kabinet</router-link>
      </ul>
    </el-drawer>
  </template>
  
  <script lang="ts" setup>
  import authStore from '../stores/auth';
  import { ref } from 'vue'
import { useRoute } from 'vue-router';
  const drawer = ref(false)
   let route = useRoute()


  let auth = authStore()

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
  </script>
  <style> 
    .lists a{
      text-decoration: none;
      display: block;
      margin: 10px 0;
      color: #6a6d6b;
      font-size: 18px;
      font-family: "gilroy";
    }

    .lists a:hover {
      color: rgb(34, 33, 33);
    }

    a.router-link-exact-active {
      color: #f90;
    }

    .btn.visible {
      visibility: visible;
    }
    .btn.hidden {
      visibility: hidden;
    }
  </style>