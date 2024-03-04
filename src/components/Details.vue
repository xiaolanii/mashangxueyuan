<template>
    <div>
        <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="onClickBack"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        created() {},
        methods: {
            onClickBack() {
                history.back()
            }
        }
    }
</script>

<style lang= 'less' scoped>
</style>