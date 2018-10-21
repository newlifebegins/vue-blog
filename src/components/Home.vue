<template lang="html">
    <div class="row">
        <div class="home col-sm-12 text-center">
            <div class="background">
                <h1>欢迎来到vue.js</h1>
                <h2>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。</h2>
                <button type="button" name="button" @click="gotoMenu" class="btn btn-success">
                    let`s out
                </button>
            </div>
        </div>
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
.home {
    background: url(../assets/vue.jpg) no-repeat center;
    background-size: 100%;
    height: 85vh;
    padding: 10%;
}
h1,h2 {
    margin: 6%;
}
.background {
    background-color: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
}
</style>
