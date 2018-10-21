<template lang="html">
  <div class="row mb-3">
      <div class="col-4">
            <!-- 导航 -->
            <ul class="list-group mb-5">
                <router-link tag="li" :to="{ name: 'abstractLink', params: {} }" class="nav-link">
                    <a class="list-group-item list-group-item-action">简介</a>
                </router-link>
                <router-link tag="li" :to="{ name: 'partnerLink', params: {} }" class="nav-link">
                    <a class="list-group-item list-group-item-action">合作伙伴</a>
                </router-link>
                <router-link tag="li" :to="{ name: 'sourceLink', params: {} }" class="nav-link">
                    <a class="list-group-item list-group-item-action">专家资源</a>
                </router-link>
                <router-link tag="li" :to="{ name: 'contactLink', params: {} }" class="nav-link">
                    <a class="list-group-item list-group-item-action">联系我们</a>
                </router-link>
            </ul>
      </div>
      <div class="col-8">
          <!-- 导航所对应的内容 -->
          <div class="list-group mb-5">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
