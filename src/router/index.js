import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/VisitorHome'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/mybasetable',
                    component: resolve => require(['../components/page/MyBaseTable.vue'], resolve)
                },
                {
                    path: '/myvuetable',
                    component: resolve => require(['../components/page/MyVueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/myhistoryday',
                    component: resolve => require(['../components/page/MyHistoryDay.vue'], resolve)
                },
                {
                    path: '/myhistoryweek',
                    component: resolve => require(['../components/page/MyHistoryWeek.vue'], resolve)     // vue-datasource组件
                },

                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/wirtequestionnaire',
                    component: resolve => require(['../components/page/WirteQuestionnaire.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/questionnairehistory',
                    component: resolve => require(['../components/page/QuestionnaireHistory.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/uploadresume',
                    component: resolve => require(['../components/page/UploadResume.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/application',
                    component: resolve => require(['../components/page/Application.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/StudentFiles',
                    component: resolve => require(['../components/page/StudentFiles.vue'], resolve)   // 学员信息查询组件1
                },
                {
                    path: '/AttendanceCheck',
                    component: resolve => require(['../components/page/AttendanceCheck.vue'], resolve)   // 学员信息查询组件2
                },
                {
                    path: '/DisciplinaryRecords',
                    component: resolve => require(['../components/page/DisciplinaryRecords.vue'], resolve)   // 学员信息查询组件3
                },
                {
                    path: '/PraiseRecord',
                    component: resolve => require(['../components/page/PraiseRecord.vue'], resolve)   // 学员信息查询组件4
                },
                {
                    path: '/Homework',
                    component: resolve => require(['../components/page/Homework.vue'], resolve)   // 学员信息查询组件5
                },
                {
                    path: '/Assessment',
                    component: resolve => require(['../components/page/Assessment.vue'], resolve)   // 学员信息查询组件6
                },
                {
                    path: '/Management',
                    component: resolve => require(['../components/page/Management.vue'], resolve)   // 学员信息查询组件7
                },
                {
                    path: '/Speech',
                    component: resolve => require(['../components/page/Speech.vue'], resolve)   // 学员信息查询组件8
                },
                {
                    path: '/Groupdiscussion',
                    component: resolve => require(['../components/page/Groupdiscussion.vue'], resolve)   // 学员信息查询组件9
                },
                {
                    path: '/Score',
                    component: resolve => require(['../components/page/Score.vue'], resolve)   // 学员信息查询组件10
                },
                {
                    path: '/FinHomework',
                    component: resolve => require(['../components/page/FinHomework.vue'], resolve)   // 提交作业
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/profile',
                    component: resolve => require(['../components/page/Profile.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },

        {
            path: '/VisitorHome',
            component: resolve => require(['../components/common/VisitorHome.vue'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
