<template>
    <div class="grey darken-1 empty-layout">
        <router-view />
    </div>
</template>

<script>
export default {
    computed: {
        error(){
            this.$store.getters.error
        }
    },
    watch: {
        error(fbErr){
            console.log(fbErr)
        }
    }
}
</script>