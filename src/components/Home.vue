<template>
    <div>
        <!-- <van-row>
            <van-col span="12">
                <van-nav-bar title="标题" left-text="分类" left-arrow fixed @click-left="showPopup" />
            </van-col>
        </van-row>

        <van-row>
            <van-col span="24">
                <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
            </van-col>
        </van-row> -->
        <van-nav-bar title="标题" left-text="分类" left-arrow @click-left="showPopup" />
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" />

        <!-- <van-cell title="展示弹出层" @click="showPopup" /> -->
        <van-popup :show="ifShow" position="left" :style="{ width: '50%', height: '100%' }" @click-overlay="closePopup">
            <van-collapse v-model="activeNames">
                <van-collapse-item v-for="yijiCell in newCell" :key="yijiCell.id" :title="yijiCell.title" :name="yijiCell.title">
                    <van-cell v-for="yijiContent in yijiCell.content" :key="yijiContent.id" :title="yijiContent.title" />
                    <van-collapse-item v-for="erjiCell in yijiCell.children" :key="erjiCell.id" :title="erjiCell.title" :name="erjiCell.title">
                        <van-cell v-for="erjiContent in erjiCell.content" :key="erjiContent.id" :title="erjiContent.title" />
                        <van-collapse-item v-for="sanjiCell in erjiCell.children" :key="sanjiCell.id" :title="sanjiCell.title" :name="sanjiCell.title">
                            <van-cell v-for="sanjiContent in sanjiCell.content" :key="sanjiContent.id" :title="sanjiContent.title" />
                        </van-collapse-item>
                    </van-collapse-item>
                </van-collapse-item>
            </van-collapse>
        </van-popup>
    </div>
<!-- 
    <div>
        <van-cell title="展示弹出层" @click="showPopup" />
        <van-popup :show="ifShow" position="left" :style="{ width: '50%', height: '100%' }" @click-overlay="closePopup">

            <van-collapse v-model="activeNames">
                <van-collapse-item v-for="yijiCell in newCell" :key="yijiCell.id" :title="yijiCell.title" :name="yijiCell.title">
                    <van-cell v-for="yijiContent in yijiCell.content" :key="yijiContent.id" :title="yijiContent.title" />

                    <van-collapse-item v-for="erjiCell in yijiCell.children" :key="erjiCell.id" :title="erjiCell.title" :name="erjiCell.title">
                        <van-cell v-for="erjiContent in erjiCell.content" :key="erjiContent.id" :title="erjiContent.title" />

                        <van-collapse-item v-for="sanjiCell in erjiCell.children" :key="sanjiCell.id" :title="sanjiCell.title" :name="sanjiCell.title">
                            <van-cell v-for="sanjiContent in sanjiCell.content" :key="sanjiContent.id" :title="sanjiContent.title" />
                        </van-collapse-item>

                    </van-collapse-item>

                </van-collapse-item>


            </van-collapse>


            
        </van-popup>
    </div> -->
</template>

<script>
    export default {
        data() {
            return {
                ifShow: false,
                activeNames: [],
                newCell: [
                    {
                        title: 'ZJ116',
                        id: 1,
                        content: [],
                        children: [
                            {
                                title: '维修类',
                                id: 2,
                                content: [],
                                children: [
                                    {
                                        title: '机械',
                                        id: 7,
                                        content: [
                                            {
                                                title: '设备安装调整',
                                                id: 8,
                                                url: '设备安装调整'
                                            },
                                            {
                                                title: '工艺流程',
                                                id: 9,
                                                url: '工艺流程'
                                            },
                                        ],
                                        children: []
                                    },
                                    {
                                        title: '电气',
                                        id: 10,
                                        content: [
                                            {
                                                title: '设备安装调整',
                                                id: 11,
                                                url: '设备安装调整'
                                            },
                                            {
                                                title: '维修经验库',
                                                id: 12,
                                                url: '维修经验库'
                                            },
                                        ],
                                        children: []
                                    },

                                ]
                            },
                            {
                                title: '操作类',
                                id: 3,
                                content: [
                                    {
                                        title: '操作流程',
                                        id: 4,
                                        url: '操作流程'
                                    },
                                    {
                                        title: '故障排除',
                                        id: 5,
                                        url: '故障排除'
                                    },
                                    {
                                        title: '日保养',
                                        id: 6,
                                        url: '日保养'
                                    },
                                ],
                                children: []
                            }
                        ]
                    },
                    {
                        title: 'FX2',
                        id: 21,
                        content: [],
                        children: [
                            {
                                title: '维修类',
                                id: 22,
                                content: [],
                                children: [
                                    {
                                        title: '机械',
                                        id: 27,
                                        content: [
                                            {
                                                title: '设备安装调整',
                                                id: 28,
                                                url: '设备安装调整'
                                            },
                                            {
                                                title: '工艺流程',
                                                id: 29,
                                                url: '工艺流程'
                                            },
                                        ],
                                        children: []
                                    },
                                    {
                                        title: '电气',
                                        id: 210,
                                        content: [
                                            {
                                                title: '设备安装调整',
                                                id: 211,
                                                url: '设备安装调整'
                                            },
                                            {
                                                title: '维修经验库',
                                                id: 212,
                                                url: '维修经验库'
                                            },
                                        ],
                                        children: []
                                    },

                                ]
                            },
                            {
                                title: '操作类',
                                id: 23,
                                content: [
                                    {
                                        title: '操作流程',
                                        id: 24,
                                        url: '操作流程'
                                    },
                                    {
                                        title: '故障排除',
                                        id: 25,
                                        url: '故障排除'
                                    },
                                    {
                                        title: '日保养',
                                        id: 26,
                                        url: '日保养'
                                    },
                                ],
                                children: []
                            }
                        ]
                    },
                    

                ],
                searchValue: ''
            }
        },
        created() {},
        methods: {
            showPopup() {
                this.ifShow = true
            },
            closePopup() {
                this.ifShow = false
            },
            jumpContent(herf) {
                console.log(herf);
            }
            
        },
        
    }
    import 'vant/lib/index.css';
</script>

<style lang= 'less' scoped>
</style>