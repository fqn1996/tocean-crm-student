<template>
    <div class="wrapper">
        <v-head></v-head>
        <div class="visitor-content">
            <v-sidebar></v-sidebar>
        </div>
    </div>
</template>

<script>
    import vHead from './VisitorHeader.vue';
    import vSidebar from './VisitorSidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        }
    }
</script>
<style>
</style>
