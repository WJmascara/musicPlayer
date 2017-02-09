<template lang="pug">
    .tab_head_module
        .nav_box
            router-link(:to="{path:'/dayNews/'}",class="nav-tab") 首页
            router-link(:to="{path:'/themeNews/'}",class="nav-tab")  主题日报
            .nav-rail
</template>
<script>
    export default{
        name:"tab_head_module"
    }
</script>
<style lang="scss">

</style>