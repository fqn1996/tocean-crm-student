<template>
    <div class="ur_content">
    <div class="ur_header">
      当前功能:&nbsp;&nbsp;<b>上传简介信息</b>
       </div>
        <div class="ur_header2">
            <el-button size="small" id="ur_tj" >提交</el-button>
        </div>
        <div class="ur_table" >
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item title="基本资料 (+ 单击标题栏展开) " name="1">
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
            <el-button id="qd">确定提交</el-button>
        </div>
    </div>

</template>
<script >
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    export default {
        components: {ElInput}, data() {
            return {
                activeNames: ['1'],
                fileList2: [
                    {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                    ]
            };
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
    background-color:#EEF1F6;
    border: solid  1px #DFE6EC;
    color:black;
    padding: 5px 0;
    margin-bottom: 20px;
    height: 30px;
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

