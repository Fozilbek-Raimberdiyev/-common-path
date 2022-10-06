<script setup>
  import { useAttrs } from "@vue/runtime-core";
  
    const attrs = useAttrs()
  </script>
  <script>
   export default {
    // inheritAttrs : false
   }
  </script>
  <template>
    <div>
      <input v-bind="attrs" type="text" placeholder="Enter the value">
    </div>
  </template>