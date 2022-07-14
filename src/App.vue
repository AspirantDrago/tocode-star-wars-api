<template>
  <div class="wrapper">
    <MainHeader />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default defineComponent({
  components: {
    MainHeader,
    MainFooter,
  },
})
</script>

<style lang="scss">
</style>
