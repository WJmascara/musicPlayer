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
.tab_head_module {
    .nav_box {
        position: fixed;
        height: 5em;
        width: 100%;
        background-color: #252e39;
        top: 0;
        left: 0;
        z-index: 2;
        font-size: 2em;
        color: #fff;
        .nav-tab {
            display: inline-block;
            height: 5em;
            line-height: 5em;
            text-align: center;
            min-width: 3em;
            cursor: pointer;
        }
    }
}
</style>