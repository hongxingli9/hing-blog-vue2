<template>
    <div id="app">
        <blog-header :backend="backend"></blog-header>
        <router-view/>
    </div>
</template>

<script>
import blogHeader from '@/components/blog-header.vue'

export default {
    name: 'App',
    components: {
        blogHeader
    },
    data() {
        return {
            backend: false
        }
    },
    computed: {

    },
    methods: {

    }
}
</script>

<style>
#app {
  font-family:  -apple-system-font,Helvetica Neue,Tahoma,PingFang SC,lantinghei sc,Microsoft Yahei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
