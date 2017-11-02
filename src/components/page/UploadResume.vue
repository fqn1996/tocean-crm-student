<template>
    <div class="ur_content">
    <div class="ur_header">
      当前功能:&nbsp;&nbsp;<b>上传简介信息</b>
       </div>
        <div class="ur_header2">
            <el-collapse v-model="activeNames" @change="handleChange"  accordion>
                <el-collapse-item title="基本资料 (+ 单击标题栏展开)" name="1">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-row :gutter="20">
                            <el-col :span="6">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="ruleForm.name" width="50px"></el-input>
                        </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="性别" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio label="男"></el-radio>
                                        <el-radio label="女"></el-radio>
                                    </el-radio-group>
                        </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <el-form-item label="出生年月">
                                    <el-input v-model="ruleForm.name" width="50px"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                            <el-form-item label="民族" prop="name">
                                    <el-input v-model="ruleForm.name" width="50px"></el-input>
                            </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <el-form-item label="籍贯">
                                    <el-input v-model="ruleForm.name" width="50px"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="政治面貌" prop="name">
                                    <el-input v-model="ruleForm.name" width="50px"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="6">
                        <el-form-item label="学历" prop="region">
                            <el-select v-model="ruleForm.region" placeholder="请选择学历">
                                <el-option label="本科" value="benke"></el-option>
                                <el-option label="大专" value="zhuanke"></el-option>
                            </el-select>
                        </el-form-item>
                            </el-col>
                            <el-col :span="6">
                        <el-form-item label="毕业院校" required>
                            <el-input v-model="ruleForm.name" width="50px"></el-input>
                        </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="爱好" prop="type">
                            <el-checkbox-group v-model="ruleForm.type">
                                <el-checkbox label="运动" name="type"></el-checkbox>
                                <el-checkbox label="看书" name="type"></el-checkbox>
                                <el-checkbox label="玩游戏" name="type"></el-checkbox>
                                <el-checkbox label="写作" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-row :gutter="20">
                            <el-col :span="15">
                        <el-form-item label="自我介绍" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
            </el-collapse>


        </div>
        <div class="ur_table" >
            <el-collapse  v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item title="上传简历" name="2">
                    简历:
                    <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList2"
                    :auto-upload="false"
                    list-type="picture">
                    <div slot="trigger"  type="primary" class="el-upload__text">
                        <i class="el-icon-upload"></i>将文件拖到此处，或
                           <em>
                        <el-button size="small" type="primary">点击上传</el-button></em></div>
                    <el-button  style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb
                    </div>
                </el-upload>

                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="ur_footer">
            <el-button id="qd" @click="quedingtj2">确定提交</el-button>
        </div>
    </div>

</template>
<script >
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    export default {
        components: {ElInput}, data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    value8: '',
                    type: [],
                    desc: ''
                },
                dialogImageUrl: '',
                dialogVisible: false,
                activeNames: ['1'],
                fileList2: [
                    {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                    ]
            }
            },rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                    region: [
                    { required: true, message: '请选择学历', trigger: 'change' }
                ],
                    type: [
                    { type: 'array', required: true, message: '请选择爱好', trigger: 'change' }
                ],
                    desc: [
                    { required: true, message: '请填写自我介绍', trigger: 'blur' }
                ]
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            quedingtj2() {
                this.$confirm('此操作将提交该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '提交成功!(该功能并无真正提交成功)'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消提交'
                    });
                });
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            type: 'success',
                            message: '提交成功!(该功能并无真正提交成功)'
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }

    }
</script>
<style>
.ur_header{
     background-color:#EEF1F6;
     border: solid  1px #DFE6EC;
     color:black;
     padding: 5px 0;
     margin-bottom: 10px;
 }
.ur_header2{
    color:black;
    margin-bottom: 20px;

}
.ur_footer{
    background-color:#EEF1F6;
    border: solid  1px #DFE6EC;
    color:black;
    padding: 5px 0;
    margin-top: 20px;
    height: 30px;
    text-align: center;
}
    #ur_tj{
        float: right;
    }
</style>

