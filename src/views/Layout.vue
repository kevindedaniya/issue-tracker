<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/views/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
