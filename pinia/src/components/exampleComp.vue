<script setup>
import { ref } from "@vue/reactivity";

    // defineProps(["token"])
    let token = ref("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb2Jpcmpvbm92aHVzYW5AZ21haWwuY29tIiwicm9sZXMiOlsiVEVBQ0hFUiIsIlNUVURFTlQiXSwiaWF0IjoxNjYzODIzMjM4LCJleHAiOjE2NjM4NjY0Mzh9.rdjurxYRdO0kmv3aOv_IR0_LlZdSe4-ZOIN1P5dtEFE")
    function sendRequest() {
      fetch('https://learning-center-project-heroku.herokuapp.com/api/user', {
    method: 'PUT',
    body: JSON.stringify({
      first_name : "John",
      last_name: "Doe",
      password: "12345678",
      phone_number: "+9989421515185"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization' : `Bearer ${token}`
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    console.log(token)
    }
  </script>
  
  <template>
    <div>
      <button @click="sendRequest" class="btn">Send</button>
    </div>
  </template>
  
  <style>
  
  </style>