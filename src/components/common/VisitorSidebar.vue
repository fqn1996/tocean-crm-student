<template>
    <div class="content" width="700px">

        <div class="textContent">
            <div class="ms-doc">
                <h3>使用说明</h3>
                <article>
                    <img src="../../image/visitor03.jpg" height="450">
                    <h1>拓胜学生系统管理端</h1>
                    <p>一个简单、快捷的系统管理端</p>
                    <h2>功能</h2>
                    <h4>
                        <el-checkbox disabled checked>登录/注销</el-checkbox>
                        <br>
                        <el-checkbox disabled checked>提交作业</el-checkbox>
                        <br>
                        <el-checkbox disabled checked>填写日报、周报</el-checkbox>
                        <br>
                        <el-checkbox disabled checked>查看周报、日报</el-checkbox>
                        <br>
                        <el-checkbox disabled checked>填写问卷</el-checkbox>
                        <br>
                        <el-checkbox disabled checked>查看历史问卷</el-checkbox>
                        <br>
                        <el-checkbox disabled checked>上传简历</el-checkbox>
                        <br>
                        <el-checkbox disabled checked>查看简历</el-checkbox>
                        <br>
                        <el-checkbox disabled checked>学员信息查询</el-checkbox>
                        <br>
                    </h4>
                </article>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
    .textContent{
        width:800px;
    }
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
</style>

