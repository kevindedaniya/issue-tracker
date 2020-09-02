<template>
  <div>
    <AddNewIssueJumbotron />

    <div class="container-fluid">
      <div class="container container-lg bg-white">
        <div class="form-row">
          <div class="form-group col-md-3 mr-sm-3">
            <label for="assigneeFilter">Assignee</label>
            <select class="form-control custom-select" id="assigneeFilter">
              <option selected>Select User</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="form-group col-md-3 mr-sm-3">
            <label for="statusFilter">Status</label>
            <select class="form-control custom-select" id="statusFilter">
              <option selected>Select Status</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="form-group col-md-3">
            <label for="dueDateFilter">Due Date</label>
            <input type="date" class="form-control" id="dueDateFilter" placeholder="select" />
          </div>
        </div>

        <Card />
        <Card />
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

.custom-select, input, textarea
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
import Card from '@/components/Card.vue';
import AddNewIssueJumbotron from '@/components/AddNewIssueJumbotron.vue';

export default {
  name: 'HomeComponent',
  components: {
    Card,
    AddNewIssueJumbotron,
  },
  methods: {
  },
};
</script>
