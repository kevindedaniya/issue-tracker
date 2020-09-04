<template>
  <div class="container d-flex justify-content-center align-content-center">
    <div class="mt-5 text-center">
      <img class="w-50 h-50" src="@/assets/images/page-not-found.svg" />

      <br>
      <h4 class="m-4">Uh oh. That page doesn’t exist.</h4>
      <p>
        The link you followed may be broken, or the page may have been removed.
        Would you like to go back to the homepage and try again?
      </p>
      <p>
        <i class='bx bxs-home'></i>&nbsp;
        <router-link to="/">Go to Homepage</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
p
  font-family: Romoto Regular
</style>
