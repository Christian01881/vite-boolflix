<template>
    <div>
        <input type="text">
        <button @click="$emit('find')">Search</button>
    </div>
</template>

<script>
    export default {
        name: 'AppSearch'
    }
</script>

<style lang="scss" scoped>

</style>