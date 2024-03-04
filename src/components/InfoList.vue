<script setup>
import Home from '../components/Home.vue';
</script>
<template>
    <div>
        <Home/>
        <van-pull-refresh v-model="ifRefreshing" @refresh="onRefresh" success-text="刷新成功">
            <van-list :finished="ifLoadFinished" finished-text="没有更多了" :loading="ifLoad" @load="listOnLoad">
                <van-cell-group>
                    <van-cell v-for="cell in cellData" :key="cell.id" :title="cell.title" :id="cell.id" :value="cell.value" :label="cell.label" is-link :to="'/details/'+cell.id" />
                </van-cell-group>
            </van-list>
        </van-pull-refresh>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                ifRefreshing: false,
                ifLoad: false,
                ifLoadFinished: false,
                cellData: [
                    {
                        title: '测试1',
                        id: 1,
                        value: '测试1',
                        label: '测试1'
                    },
                    {
                        title: '测试2',
                        id: 2,
                        value: '测试2',
                        label: '测试2'
                    },
                    {
                        title: '测试3',
                        id: 3,
                        value: '测试3',
                        label: '测试3'
                    },
                    {
                        title: '测试4',
                        id: 4,
                        value: '测试4',
                        label: '测试4'
                    },
                ]
            }
        },
        created() {},
        methods: {
            onRefresh () {
                setTimeout(() => {
                    this.ifRefreshing = false
                }, 1000);
            },
            listOnLoad() {
                // 到底开始加载
                this.ifLoad = true
                setTimeout(() => {
                    //加载完毕
                    this.ifLoad = false
                    this.ifLoadFinished = true
                }, 1000);
            }
            
        }
    }
</script>

<style lang= 'less' scoped>
</style>