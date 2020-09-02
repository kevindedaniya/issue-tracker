<template>
  <div class="container-fluid">
    <div class="container">
      <nav class="navbar navbar-expand-xl navbar-light">
        <span class="navbar-brand">
          <img src="@/assets/images/logo.svg" class="d-inline-block align-middle">
          <span class="ml-2">IssueTracker</span>
        </span>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span class="navbar-toggler-icon"></span></button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link">Help</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .container-fluid
    box-shadow: 0px 3px 6px #00000029

  .navbar-brand span
    vertical-align: bottom
    font: normal normal 600 15px/21px BC Alphapipe
    color: #0E6BC7

  .nav-link
    font: normal normal medium 12px/16px Roboto
    letter-spacing: 0px
    color: #3C3B3B
</style>

<script>
export default {
};
</script>
