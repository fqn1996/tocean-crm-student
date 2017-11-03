<template>
    <div class="ur_content">
    <div class="ur_header">
      当前功能:&nbsp;&nbsp;<b>填写问卷</b>
       </div>
        <div class="ur_header">
            你还有1份问卷未填写
        </div>
        <div class="ur_header2">
            <el-radio-group v-model="labelPosition" size="small">
                <el-radio-button label="left">左对齐</el-radio-button>
                <el-radio-button label="right">右对齐</el-radio-button>
                <el-radio-button label="top">顶部对齐</el-radio-button>
            </el-radio-group>
            <div style="margin: 20px;"></div>
            <el-form  :label-position="labelPosition"  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="1300px" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q1：您的性别？()" prop="resource" label-width="200px">
                            <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q2：您所在的年级？( )" prop="grade" label-width="200px">
                            <el-radio-group v-model="ruleForm.grade">
                                <el-radio label="大一"></el-radio>
                                <el-radio label="大二"></el-radio>
                                <el-radio label="大三"></el-radio>
                                <el-radio label="大四"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q3：您认为当前学哪类专业更易于找到工作？( )" prop="q3" label-width="200px">
                            <el-radio-group v-model="ruleForm.q3">
                                <el-radio label="师范类"></el-radio>
                                <el-radio label="理工类"></el-radio>
                                <el-radio label="管理类"></el-radio>
                                <el-radio label="电子类"></el-radio>
                                <el-radio label="经管类"></el-radio>
                                <el-radio label="农林类"></el-radio>
                                <el-radio label="文史类"></el-radio>
                                <el-radio label="其他"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q4：您认为当前普通大学生的就业形势怎样？( )" prop="q4" label-width="200px">
                            <el-radio-group v-model="ruleForm.q4" size="medium">
                                <el-radio  label="十分严峻，很难 找到合适 的工作"></el-radio>
                                <el-radio  label="有点严峻，但比其他较低学历人群要容易"></el-radio>
                                <el-radio  label="有点严峻，与其他较低学历人群差不多"></el-radio>
                                <el-radio  label="不了解"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q5：您是否认为当前高学历者就业会更容易？( )" prop="q5" label-width="200px">
                            <el-radio-group v-model="ruleForm.q5">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                                <el-radio label="不一定"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row><el-row :gutter="20">
                <el-col :span="16">
                    <el-form-item label="Q6：您如何看待专业与工作的不对口现象？( )" prop="q6" label-width="200px">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="这种现象很普遍，根本无所谓，很容易适应"></el-radio>
                            <el-radio label="给就业造成一定困难，但可以克服"></el-radio>
                            <el-radio label="会严重阻碍工作，很难在其岗位上呆得长久"></el-radio>
                            <el-radio label="专业与工作不对口，根本无法就业"></el-radio>
                            <el-radio label="从未关注过这一现象"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q7：您所学的专业是？()" prop="q7" label-width="200px">
                            <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="师范类"></el-radio>
                                <el-radio label="理工类"></el-radio>
                                <el-radio label="管理类"></el-radio>
                                <el-radio label="电子类"></el-radio>
                                <el-radio label="经管类"></el-radio>
                                <el-radio label="农林类"></el-radio>
                                <el-radio label="文史类"></el-radio>
                                <el-radio label="其他"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q8：您认为用人单位最关心毕业生的哪些条件( )（多选题）" prop="q8" label-width="200px">
                            <el-checkbox-group v-model="ruleForm.q8">
                                <el-checkbox label="专业成绩" name="q8"></el-checkbox>
                                <el-checkbox label="专业技能" name="q8"></el-checkbox>
                                <el-checkbox label="综合能力" name="q8"></el-checkbox>
                                <el-checkbox label="社会经验" name="q8"></el-checkbox>
                                <el-checkbox label="发展潜力" name="q8"></el-checkbox>
                                <el-checkbox label="思想品德" name="q8"></el-checkbox>
                                <el-checkbox label="其他" name="q8"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q9：您曾采取过哪些媒介手段来帮助自己就业( )（多选题）" prop="q9" label-width="200px">
                            <el-checkbox-group v-model="ruleForm.q9">
                                <el-checkbox label="人才网站" name="q9"></el-checkbox>
                                <el-checkbox label="招聘会" name="q9"></el-checkbox>
                                <el-checkbox label="人才市场" name="q9"></el-checkbox>
                                <el-checkbox label="其他" name="q9"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q10：您就业时会听取来自哪个方面的意见？( ) (多选题)" prop="q10" label-width="200px">
                            <el-checkbox-group v-model="ruleForm.q10">
                                <el-checkbox label="父母的期望" name="q10"></el-checkbox>
                                <el-checkbox label="过来人的意见" name="q10"></el-checkbox>
                                <el-checkbox label="媒体的分析" name="q10"></el-checkbox>
                                <el-checkbox label="学校的指导" name="q10"></el-checkbox>
                                <el-checkbox label="政府的号召" name="q10"></el-checkbox>
                                <el-checkbox label="其他" name="q10"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q11：在就业时，您比较注重公司( ) (多选题)" prop="q11" label-width="200px">
                            <el-checkbox-group v-model="ruleForm.q11">
                                <el-checkbox label="发展前景" name="q11"></el-checkbox>
                                <el-checkbox label="学习与培训机会" name="q11"></el-checkbox>
                                <el-checkbox label="薪资标准" name="q11"></el-checkbox>
                                <el-checkbox label="合同期限" name="q11"></el-checkbox>
                                <el-checkbox label="工作地域" name="q11"></el-checkbox>
                                <el-checkbox label="单位性质" name="q11"></el-checkbox>
                                <el-checkbox label="其他" name="q11"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q12：您认为以下哪些在就业过程中很重要( ) (多选题)" prop="q12" label-width="200px">
                            <el-checkbox-group v-model="ruleForm.q12">
                                <el-checkbox label="专业知识" name="q12"></el-checkbox>
                                <el-checkbox label="学习成绩" name="q12"></el-checkbox>
                                <el-checkbox label="外语水平" name="q12"></el-checkbox>
                                <el-checkbox label="计算机能力" name="q12"></el-checkbox>
                                <el-checkbox label="责任意识" name="q12"></el-checkbox>
                                <el-checkbox label="团队合作意识" name="q12"></el-checkbox>
                                <el-checkbox label="应变能力" name="q12"></el-checkbox>
                                <el-checkbox label="沟通能力" name="q12"></el-checkbox>
                                <el-checkbox label="创新能力" name="q12"></el-checkbox>
                                <el-checkbox label="其他" name="q12"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="Q13：您认为哪些就业观影响了大学生就业难( )(多选题)" prop="q13" label-width="200px">
                            <el-checkbox-group v-model="ruleForm.q13">
                                <el-checkbox label="对就业形势认识不明确" name="q13"></el-checkbox>
                                <el-checkbox label="就业意识浅薄，依耐性强" name="q13"></el-checkbox>
                                <el-checkbox label="就业期望高，定位不明确" name="q13"></el-checkbox>
                                <el-checkbox label="追求稳定工作，缺乏开拓精神" name="q13"></el-checkbox>
                                <el-checkbox label="普遍从众心理" name="q13"></el-checkbox>
                                <el-checkbox label="创业知识缺乏" name="q13"></el-checkbox>
                                <el-checkbox label="其他" name="q13"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                </el-row>

            </el-form>
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
                labelPosition: 'top',
                ruleForm: {
                    resource: '',
                    grade:'',
                    q3:'',
                    q4:'',
                    q5:'',
                    q6:'',
                    q7:'',
                    q8:[],
                    q9:[],
                    q10:[],
                    q11:[],
                    q12:[],
                    q13:[]

                },
            }
            },
        methods: {

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
    border: solid  1px #DFE6EC;
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
</style>

