<template>
  <div id="login">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: 'This is Login Page'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #f00;
  }
</style>