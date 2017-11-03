<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 就业申请</el-breadcrumb-item>
                <el-breadcrumb-item>申请就业</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="申请表格(+ 单击标题栏展开)" name="1" class="handle-select mr10">
        <div class="bg-form">
        <el-form ref="form" :label-position="labelPosition" :model="form" label-width="130px">
            <br/>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label=" 姓名:">
                        <el-input v-model="form.name" width="100px" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label=" 班级:">
                        <el-input v-model="form.class"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="期望就业方向:" >
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="期望就业地点:">
                        <el-select v-model="value5" multiple placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="期望推荐时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>

            </el-form-item>
            <el-form-item label="是否需要拓胜推荐">
                <el-select v-model="value2" multiple placeholder="请选择">
                    <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>

            <br/>
            <el-button type="primary" class="su">提交表格</el-button>
        </el-form>
        </div>
            </el-collapse-item>
        </el-collapse>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                labelPosition: 'top',
                form: {
                name: '',
                class: '',
            },
                options1:[{
                    value: '选项1',
                    label: 'Android'
                }, {
                    value: '选项2',
                    label: 'Java'
                }, {
                    value: '选项3',
                    label: '运维'
                }, {
                    value: '选项4',
                    label: '前端'
                }, {
                    value: '选项5',
                    label: '后端'
                }, {
                    value: '选项6',
                    label: 'php'
                }, {
                    value: '选项7',
                    label: 'c++'
                }, {
                    value: '选项8',
                    label: 'c#'
                }],
                options: [{
                    value: '选项1',
                    label: '广州'
                }, {
                    value: '选项2',
                    label: '上海'
                }, {
                    value: '选项3',
                    label: '汕头'
                }, {
                    value: '选项4',
                    label: '惠州'
                }, {
                    value: '选项5',
                    label: '佛山'
                }],
                options2: [{
                    value: '选项1',
                    label: '是'
                }, {
                    value: '选项2',
                    label: '否'

                }],
                value: '',
                value2:'',
                value5: []
            }
        }
    }
</script>

<style >
    .handle-select{
        width:100%;
        background-color: #8c939d;
        text-align: left;
    }

    .handle-choose{
        height: 80px;
        text-align: center;

    }
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .bg-form{
        padding-left: 200px;
        padding-right: 200px;
        background-image: url("../../image/1.jpg");
        padding-bottom: 50px;
    }
    .su{
        margin-left: 100px;
    }
</style>

