<template>
  <div id="app">
    <div class="container">
        <app-header></app-header>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-112 col-lg-4">
                <router-view name="abstract"></router-view>
            </div>
            <div class="col-md-112 col-lg-4">
                <router-view name="partner"></router-view>
            </div>
            <div class="col-md-112 col-lg-4">
                <router-view name="source"></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>

</style>
