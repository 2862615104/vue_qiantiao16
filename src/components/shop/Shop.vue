<template>
    <div>
        <!-- 头部 -->
        <app-header></app-header>
       <router-view></router-view>
       <app-footer></app-footer>
    </div>
</template>

<script>
import appHeader from './subocm/Header.vue';
import appFooter from './subocm/Footer.vue';
    export default {
        components: {
            appHeader,
            appFooter,
        }
    }
</script>

<style scoped>

</style>