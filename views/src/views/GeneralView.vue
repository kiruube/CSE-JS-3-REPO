
<template> 
    <div>
        <NavComponent></NavComponent>
        <RouterView />
    </div>
</template>

<script>
    import NavComponent from './../components/NavComponent.vue'

    export default {
        name:'GeneralView',

        components: {
            NavComponent
        }
    }

</script>

<style scoped>
    h1{
        color: purple;
    }
</style>