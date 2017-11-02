<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 学员信息查询</el-breadcrumb-item>
                <el-breadcrumb-item>考勤记录</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-select v-model="select_cate" placeholder="班级" class="handle-select mr10">
                <el-option key="1" label="1班" value="1班"></el-option>
                <el-option key="2" label="2班" value="2班"></el-option>
            </el-select>
            <el-input placeholder="学员" class="handle-input mr10"></el-input>
            <el-input  placeholder="开始时间" class="handle-input mr10"></el-input>至
            <el-input  placeholder="结束时间" class="handle-input mr10"></el-input>
            <el-select v-model="select_cate" placeholder="上课情况" class="handle-select mr10">
                <el-option key="1" label="正常" value="正常"></el-option>
                <el-option key="2" label="请假" value="请假"></el-option>
                <el-option key="3" label="迟到" value="迟到"></el-option>
                <el-option key="4" label="早退" value="早退"></el-option>
                <el-option key="5" label="旷课" value="旷课"></el-option>
            </el-select>
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column prop="no" label="序号"  width="120">
            </el-table-column>
            <el-table-column prop="date" label="日期"  width="180">
            </el-table-column>
            <el-table-column prop="name" label="学员" width="120">
            </el-table-column>
            <el-table-column prop="class" label="班级"  width="120">
            </el-table-column>
            <el-table-column prop="timeH" label="开始时间" width="150">
            </el-table-column>
            <el-table-column prop="timeF" label="结束时间" width="150">
            </el-table-column>
            <el-table-column prop="zt" label="状态">
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                @current-change ="handleCurrentChange"
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: './static/vuetable.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false
            }
        },
        created(){
            this.getData();
        },
        computed: {
            data(){
                const self = this;
                return self.tableData.filter(function(d){
                    /*   let is_del = false;
                     for (let i = 0; i < self.del_list.length; i++) {
                     if(d.name === self.del_list[i].name){
                     is_del = true;
                     break;
                     }
                     }
                     if(!is_del){
                     if(d.address.indexOf(self.select_cate) > -1 &&
                     (d.name.indexOf(self.select_word) > -1 ||
                     d.address.indexOf(self.select_word) > -1)
                     ){
                     return d;
                     }
                     }*/
                    return true;
                })
            }
        },
        methods: {
            handleCurrentChange(val){
                this.cur_page = val;
                this.getData();
            },
            getData(){
                let self = this;
                if(process.env.NODE_ENV === 'development'){
                    self.url = '/ms/vue/list';
                };
                self.$axios.post(self.url, {page:self.cur_page}).then((res) => {
                    self.tableData = res.data.list;
                })
            },
            search(){
                this.is_search = true;
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            },
            delAll(){
                const self = this,
                    length = self.multipleSelection.length;
                let str = '';
                self.del_list = self.del_list.concat(self.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += self.multipleSelection[i].name + ' ';
                }
                self.$message.error('删除了'+str);
                self.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style scoped>
    .handle-box{
        margin-bottom: 20px;
    }
    .handle-select{
        width: 120px;
    }
    .handle-input{
        width: 150px;
        display: inline-block;
    }
</style>
