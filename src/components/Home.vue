<template lang="html">
    <div class="home">
        <h1>home</h1>
        <button type="button" name="button" @click="gotoMenu" class="btn success-btn">
            let`s out
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        gotoMenu() {
            // 跳转到上一次浏览的页面
            // this.$router.go(-1)
            // 指定跳转的地址
            // this.$router.replace('/menu');
            // 指定跳转到路由的名字下
            // this.$router.replace({name: 'adminLink'})
            // 通过push进行跳转
            this.$router.push({name: 'adminLink'})
        }
    }
}
</script>

<style lang="css">
</style>
