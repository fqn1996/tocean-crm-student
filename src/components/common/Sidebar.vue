<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'FinHomework',
                        title: '提交作业'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '提交报告',
                        subs: [
                            {
                                index: 'basetable',
                                title: '提交日报'
                            },
                            {
                                index: 'vuetable',
                                title: '提交周报'
                            },
                            {
                                index: 'historyday',
                                title: '历史日报'
                            },
                            {
                                index: 'historyweek',
                                title: '历史周报'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '问卷调查',
                        subs: [
                            {
                                index: 'baseform',
                                title: '填写问卷'
                            },
                            {
                                index: 'vueeditor',
                                title: '历史问卷'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'uploadresume',
                        title: '上传简历'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '4',
                        title: '学员信息查询',
                        subs: [
                            {
                                index: 'StudentFiles',
                                title: '学员档案'
                            },
                            {
                                index: 'AttendanceCheck',
                                title: '考勤记录'
                            },
                            {
                                index: 'DisciplinaryRecords',
                                title: '违规记录'
                            },
                            {
                                index: 'PraiseRecord',
                                title: '表扬记录'
                            },
                            {
                                index: 'Homework',
                                title: '作业完成情况'
                            },
                            {
                                index: 'Assessment',
                                title: '项目考勤情况'
                            },
                            {
                                index: 'Management',
                                title: '班级管理积极性'
                            },
                            {
                                index: 'Speech',
                                title: '演讲查询'
                            },
                            {
                                index: 'Groupdiscussion',
                                title: '分组讨论查询'
                            },
                            {
                                index: 'Score',
                                title: '综合考评分'
                            },

                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
