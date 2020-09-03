<template>
  <div class="container-fluid pb-5">
    <div class="container container-lg bg-white">

    <div v-if="loading" class="spinner">
      <i class='bx bx-loader-circle bx-spin bx-lg'></i>
    </div>
    <div v-else>
      <div class="form-row">
        <div class="form-group col-md-3 mr-sm-3">
          <label for="assigneeFilter">Assignee</label>
          <select
            id="assigneeFilter"
            class="form-control custom-select"
            v-model="assigneeFilter"
          >
            <option value="" selected>Select User</option>
            <option v-for="user in usersList" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-3 mr-sm-3">
          <label for="statusFilter">Status</label>
          <select
            id="statusFilter"
            class="form-control custom-select"
            v-model="statusFilter"
          >
            <option value="" selected>Select Status</option>
            <option v-for="(s, i) in statusList" :key="i" :value="s.flag">
              {{ s.display_flag }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-3">
          <label for="dueDateFilter">Due Date</label>
          <input
            type="date"
            class="form-control"
            id="dueDateFilter"
            placeholder="select"
            v-model="dueDateFilter"
          />
        </div>
      </div>

      <div v-for="issue in issues" :key="issue.id">
        <IssueCard :issue-id="issue.id"/>
      </div>

      <div v-if="issues.length < 1" class="text-center mt-5">No Issue Found ☕</div>
    </div>
  </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/styles/_bits.sass'

.container-fluid
  background-color: #FCFCFC
  .container
    padding: 2em 6em
    +bp(768px)
      padding: 1em

.form-group label
  font-size: 12px

.custom-select, input
  font: normal normal normal 13px/18px Roboto Regular
  color: #869198
  cursor: pointer

.custom-select
  background: url('../assets/images/bx-chevron-down.svg') no-repeat right
  background-position-x: 95%

input[type="date"]::-webkit-calendar-picker-indicator
  filter: invert(0.6)
</style>

<script>
import IssueCard from '@/components/IssueCard.vue';

export default {
  components: {
    IssueCard,
  },

  data() {
    return {
      usersList: [],
      statusList: [],
      assigneeFilter: '',
      statusFilter: '',
      dueDateFilter: '',
      loading: true,
    };
  },

  mounted() {
    this.usersList = this.$store.getters.getUsers;
    this.statusList = this.$store.getters.getStatus;

    this.loading = false;
  },

  computed: {
    issues() {
      let issueList = this.$store.getters.getIssues;
      issueList = issueList.reverse();

      if (this.assigneeFilter) {
        issueList = issueList.filter((issue) => issue.assigned_to === this.assigneeFilter);
      }

      if (this.statusFilter) {
        issueList = issueList.filter((issue) => issue.status === this.statusFilter);
      } else {
        issueList = issueList.filter((issue) => issue.status !== 'close');
      }

      if (this.dueDateFilter) {
        issueList = issueList.filter((issue) => issue.due_date === this.dueDateFilter);
      }

      return issueList;
    },
  },
};
</script>
