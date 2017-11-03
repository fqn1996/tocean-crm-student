<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 提交报告</el-breadcrumb-item>
                <el-breadcrumb-item>提交日报</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="handle-box">
            <el-button  class="handle-select mr10">调查列表（+单击标题栏展开）</el-button>
        </div>
        <table border="1" class="handle-choose">
            <tr>
                <th width="100">姓名</th>
                <th width="100">班级</th>
                <th width="130">期望就业方向</th>
                <th width="130">期望就业地点</th>
                <th width="130">期望推荐时间</th>
                <th width="130">是否需要拓胜推荐</th>
            </tr>

            <tr>
                <td>余子荣</td>
                <td>SD806</td>
                <td>
                    <select name="course" >
                    <option selected>Android</option>
                    <option>Java</option>
                    <option>运维</option>
                    <option>前端</option>
                    <option>后端</option>
                    <option>php</option>
                    <option>c++</option>
                    <option>c#</option>
                    </select>
                </td>
                <td>
                    <select name="place" >
                        <option selected>广州</option>
                        <option>上海</option>
                        <option>北京</option>
                        <option>广州</option>
                        <option>汕头</option>
                        <option>佛山</option>
                        <option>惠州</option>
                    </select>
                </td>
                <td><input type="text" size="10"></td>
                <td>
                    <select name="choose" >
                    <option selected>是</option>
                    <option>否</option>
                    </select>
                </td>
            </tr>
        </table>
        <table border="1" class="submit">
            <tr>
                    <button>确认提交</button>

            </tr>
        </table>
    </div>

</template>


<style >
    .handle-select{
        width:100%;
        background-color: #8c939d;
        text-align: left;
    }

    .handle-choose{
        height: 100px;
        text-align: center;

    }
    .submit{
        width: 100%;
        height:50px;
        text-align: center;
        padding-top: 10px;

    }
</style>

