<template>
    <div class="login-wrap">
        <div class="ms-title">拓胜学生管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入学号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">学生登录</el-button>
                    </div>
                </el-form-item>
                <!--<div class="login-btn">-->
                <!--<el-button type="primary" @click="visitorSubmitForm">游客登录</el-button>-->
                <!--</div>-->
                <p style="font-size:12px;line-height:30px;color:#999;">{{errorMsg}}</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '学号不能为空'  },
/*                        { type: 'number', message: '学号必须为数字值',trigger: 'blur'}*/
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                },
                url:"/student/login",
                errorMsg:'Tips : 学号是数字和密码随便填。'
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        let param = {
                            username:self.ruleForm.username,
                            password:self.ruleForm.password
                        };
                        self.$axios.post(self.url, param).then((res) => {
                           if(res.data.success){
                               localStorage.setItem('USERNAME',self.ruleForm.username);
                               localStorage.setItem('JWT_TOKEN',res.data.result);
                               self.$router.push('/readme');
                           }else{
                               self.data.errorMsg = res.data.error;
                           }
                        })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
//            visitorSubmitForm:function(){
//                      this.$router.push('/VisitorHome');
//            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:200px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
