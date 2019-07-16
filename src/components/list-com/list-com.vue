<template>
    <div class="task_list" :class="list_name">
        <div class="wrap">
            <h3>{{pageTitle}}</h3>
            <div class="module">
                <div class="search_opr clearfix">
                    <slot name="shift-conditions"></slot>
                    <slot name="operate-buttons"></slot>
                </div>
                <div class="content">
                    <Table :columns="columns1" :data="data1" class="listtable"></Table>
                    <Page :total="pageTotal" show-elevator class="page_list" />
                </div>
            </div>
        </div>
        <Modal
            v-model="openstatus"
            :title="modalTitle"
            @on-ok="ok"
            @on-cancel="cancel"
            :width="920"
            class="maintenancetaskmodal"
            :scrollable="true" >
            <!-- <TaskOperate ref="detailChild" ></TaskOperate> -->
            <slot name="mode-content"></slot>
        </Modal>
    </div>
</template>
<script>
// import TaskOperate from "./maintenance-task-operate.vue";

export default {
    name:'list-com',
    components:{
        // TaskOperate
    },
    data () {
        return {
            openstatus:this.addModal
        }
    },
    watch:{
        addModal(val){
            if (this.openstatus != val) {
                this.openstatus = val;
            }
        },
        openstatus(val){
            this.$emit("update:addModal",val);
        }
    },
    props:{
        list_name:String,
        addModal:Boolean,
        pageTitle:String,//列表页标题
        pageTotal:Number,//页数
        columns1:Array,//表头
        data1:Array,//列表数据
        modalTitle:String,//弹窗标题

    },
    methods:{
        ok(){

        },
        cancel(){

        }
    }
}
</script>


<style lang="less" scoped>
    @import "./less/planlist.less";
</style>
<style>
    @import "./less/index.less";
</style>


