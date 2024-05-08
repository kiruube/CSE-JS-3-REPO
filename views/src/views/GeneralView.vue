
<template> 
    <div>
        <h1>This is a general page</h1>
        <NavComponent></NavComponent>
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