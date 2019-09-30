<template>
    <div>
        这是根组件,叫做{{name}}
        <router-link to="/home">首页</router-link>
        <router-link to="/music">音乐</router-link>
        <router-link to="/friend">朋友</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {name:"App"}
        }
    }
</script>

<style>

</style>