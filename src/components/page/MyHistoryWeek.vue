<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 提交报告</el-breadcrumb-item>
                <el-breadcrumb-item>历史周报</el-breadcrumb-item>
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



                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;据了解，这起冲突撼动台湾“总统府”及“国安”高层，台“国安会”召开跨部会紧急会议，要求守军不得动武，同时也透过“外交”途径向越南表达最严重抗议，这不但是台、越双方首次武装部队正面冲突，更让诡谲多变的南沙冲突，升温到有史以来最高<br/>'+
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中广网青岛4月22日消息（记者穆亮龙）4月22日上午8点，“海上联合-2012”中俄海上联合军事演习开始仪式在北海舰队的作战指挥模拟训练中心联合导演部举行。演习随后进入指挥所推演阶段<br/>' +
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开始仪式主要包括4个环节。第一个是中方总导演海军副司令员丁一平海军中将和俄方总导演俄海军副参谋长苏哈诺夫海军少将一起为演习标志揭幕。第二个是双方总导演各自发表简短致辞。<br/>'+
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之后进入第三个环节，参演人员迅速就位。这个环节中，视讯系统发挥了重要作用。从导演部的三块大屏幕和六块小屏幕上可以看到，设在不同位置的3个舰艇编队指挥所和联合指挥部及联合导演部间的相互沟通都是通过视讯系统进行。<br/>'+
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来第四个环节，就是由俄方总导演宣布演习正式开始，中方总导演下达演练任务。',


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
