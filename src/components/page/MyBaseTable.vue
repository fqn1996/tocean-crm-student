<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 提交报告</el-breadcrumb-item>
                <el-breadcrumb-item>提交日报</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
        <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor';
    export default {
        data: function(){
            return {
                content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;环球网4月20日消息，台湾《中时电子报》称越南武装巡逻艇在3月22日及26日，曾两度接近南沙太平岛，台湾方面海巡警艇驱离时，遭对方鸣枪挑衅，台方随后也开枪示警。太平岛的台湾守军立刻进入紧急状态准备开火还击。<br/>' +



                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;据了解，这起冲突撼动台湾“总统府”及“国安”高层，台“国安会”召开跨部会紧急会议，要求守军不得动武，同时也透过“外交”途径向越南表达最严重抗议，这不但是台、越双方首次武装部队正面冲突，更让诡谲多变的南沙冲突，升温到有史以来最高',


                editorOption: {
                    // something config
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
        }
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
</style>
