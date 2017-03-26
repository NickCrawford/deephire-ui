<template>
  <div id="hello-page">
  	<img src="./deephirelogo.svg">
    <h1>Welcome to Deep Hire</h1>
    <p>View my <router-link to="/jobs">job listings</router-link>.</p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Hello.scss" scoped></style>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>
