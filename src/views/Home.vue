<template>
  <div>
    <AddNewIssueJumbotron></AddNewIssueJumbotron>

    <ViewIssues></ViewIssues>
  </div>
</template>

<script>
import AddNewIssueJumbotron from '@/components/AddNewIssueJumbotron.vue';
import ViewIssues from '@/components/ViewIssues.vue';

export default {
  components: {
    AddNewIssueJumbotron,
    ViewIssues,
  },

  created() {
    if (localStorage.getItem('issues')) {
      this.$store.dispatch(
        'setIssues',
        JSON.parse(localStorage.getItem('issues')),
      );
    }
  },
};
</script>
