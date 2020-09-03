<template>
  <div v-if="issue" class="issue-card my-3">
    <div
      class="issue-card__header d-sm-flex flex-sm-row
        justify-content-sm-between align-items-sm-center"
    >
      <div class="order-sm-2 float-right float-sm-none">
        <button
          v-if="issue.status !== 'close'"
          class="btn btn-sm btn-warning mr-2 text-white"
          @click="markIssueAsClosed"
        >Close</button>
        <button
          class="btn btn-sm btn-danger text-white"
          @click="deleteIssue"
        >Delete</button>
      </div>

      <span class="order-sm-1 pt-2 pt-sm-0 float-left float-sm-none">
        Issue ID : {{ issue.id }}</span>
      <div class="d-block d-sm-none clearfix"></div>
    </div>

    <span :class="{
      'issue-card__status': true,
      badge: true,
      'badge-pill': true,
      [`badge-${getStatusColorClass()}`]: true}"
    >{{ getStatusDisplayFlag() }}</span>

    <p class="issue-card__summary">{{ issue.summary }}</p>

    <p class="issue-card__description">{{ issue.description }}</p>

    <div class="issue-card__meta-info">
      <div class="d-inline-block issue-card__meta-info--icon">
        <i class='bx bxs-flag'></i>&nbsp;{{ issue.severity }}
      </div>
      <div class="d-inline-block issue-card__meta-info--icon">
        <i class='bx bxs-time-five' ></i>&nbsp;{{ issue.due_date }}
      </div>
      <div class="d-inline-block issue-card__meta-info--icon">
        <i class='bx bxs-user-circle'></i>&nbsp;{{ getUserName() }}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/styles/_bits.sass'

.issue-card
  padding: 1.5rem
  border: 1px solid #EAEAEA
  border-radius: 6px
  &:hover
    border: 1px solid #356DA7
  &__header
    font: normal normal normal 10px/13px Roboto Regular
    color: #727272
    margin-bottom: 0.5em
  &__status
    font-size: 10px
    padding: 0.6em 1.5em
    margin: 0.2em auto
  &__summary
    margin: 1.3em auto 0.5em
  &__description
    color: #727272
    font: normal normal normal 12px/16px Roboto Regular
  &__meta-info
    margin: 1.5em auto
    font: normal normal normal 11px/13px Roboto Regular
    color: #8F9BA3
    div
      +bp(768px)
        margin-bottom: 1em
    &--icon
      margin-right: 1.6em
</style>

<script>
export default {
  props: {
    issueId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      issue: null,
    };
  },

  mounted() {
    this.issue = this.$store.getters.getIssue(this.issueId);
  },

  methods: {
    getStatusDisplayFlag() {
      console.log(this.issue.status);
      return this.$store.getters.getStatusDisplayFlag(this.issue.status);
    },

    getStatusColorClass() {
      return this.$store.getters.getStatusColorClass(this.issue.status);
    },

    getUserName() {
      return this.$store.getters.getUserName(this.issue.assigned_to);
    },

    markIssueAsClosed() {
      this.$store.dispatch('markIssueAsClosed', this.issue.id);
    },

    deleteIssue() {
      this.$store.dispatch('deleteIssue', this.issue.id);
    },
  },
};
</script>
