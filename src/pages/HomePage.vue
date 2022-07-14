<template>
  <div class="md-body">
    <div class="body-header">
      <h1 class="title">Star Wars</h1>
      <p>
        Type Script, Services, Composition API, REST API
        <router-link to="/about">and more</router-link>
      </p>
    </div>
    <div v-if="loading">
      <UISpinner />
    </div>
    <div v-else>
      <table>
        <!-- header -->
        <thead>
          <tr>
            <th>name</th>
            <th>gender</th>
            <th>mass</th>
          </tr>
        </thead>
        <!-- body -->
        <tbody>
          <tr v-for="(people, index) in peoples.results" :key="index">
            <td>{{ people.name }}</td>
            <td>{{ people.gender }}</td>
            <td>{{ people.mass }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import UISpinner from '@/components/UI/UISpinner.vue';

import { defineComponent, onMounted, ref } from 'vue';

import DataService from '@/services/DataService';
import IResponseData from '@/types/ResponseData';
import IPeoples from '@/types/Peoples';

export default defineComponent({
  components: {
    UISpinner
  },
  setup() {
    const loading = ref(true as boolean);
    const peoples = ref({} as IPeoples);

    onMounted(() => getPeople())

    const getPeople = () => {
      DataService.getAll()
        .then((res: IResponseData) => {
          peoples.value = res.data;
          loading.value = false;
        })
        .catch((e:Error) => console.log(e))
    }

    return {
      loading,
      peoples,
    }
  },
})
</script>

<style lang="scss" scoped>
  .body-header {
    text-align: center;
    margin: 2rem 0;
  }
</style>
