<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src="../assets/logo.png" height="40" alt="blog"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link :to="{ name: 'homeLink' }" class="nav-link">主页</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ path: '/menu' }" class="nav-link">菜单</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'adminLink' }" class="nav-link">管理</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ path: '/about' }" class="nav-link">关于我们</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link :to="{ path: '/login' }" class="nav-link">登录</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ path: '/register' }" class="nav-link">注册</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
