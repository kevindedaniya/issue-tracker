<template>
  <div class="issue-card my-3">
    <div class="issue-card__header">
      <div class="float-right">
        <button class="btn btn-sm btn-warning mr-2 text-white">Close</button>
        <button class="btn btn-sm btn-danger text-white">Delete</button>
      </div>

      <span class="float-left pt-2">
        Issue ID : 7134743777217A25432646294A404E63</span>

      <div class="clearfix"></div>
    </div>

    <div class="issue-card__status">
      <span class="badge badge-pill badge-primary">In Progress</span>
    </div>

    <p class="issue-card__title">
      Design Empty States fdsafsd
    </p>

    <p class="issue-card__description">
      Need empty states for list page and details pages
    </p>

    <div class="issue-card__meta-info">
      <span class="issue-card__meta-info--icon">
        <i class='bx bxs-flag'></i>&nbsp;High
      </span>
      <span class="issue-card__meta-info--icon">
        <i class='bx bxs-time-five' ></i>&nbsp;13/06/2020
      </span>
      <span class="issue-card__meta-info--icon">
        <i class='bx bxs-user-circle'></i>&nbsp;Robert
      </span>
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
    margin: 0.2em auto
    .badge-pill
      font-size: 10px
      padding: 0.6em 1.5em
  &__title
    margin: 1.3em auto 0.5em
  &__description
    margin: 0.5em auto
    color: #727272
    font: normal normal normal 12px/16px Roboto Regular
  &__meta-info
    margin: 1.5em auto
    font: normal normal normal 11px/13px Roboto Regular
    color: #8F9BA3
    &--icon
      margin-right: 1.6em
</style>

<script>
export default {

};
</script>
