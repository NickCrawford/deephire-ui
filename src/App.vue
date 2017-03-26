<template>
  <div id="app">
    <header>
      <router-link to="/" exact>
        <img id="logo" src="./assets/deephirelogo.svg">
      </router-link>
    </header>
    <transition name="slide-left" mode="out-in">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
  header {
  position: absolute;
  top: 0;
  left: 0;

  z-index: 200;
  height: 60px;
  width: 100%;
  text-align: right;

  background-color: transparent;

  #logo {
    display: inline-block;
    padding: 10px;
    max-height: 50px;
    max-width: 50px;
    width: 50px;
  }
}
</style>

<style src="@/Global.scss" lang="scss"></style>
