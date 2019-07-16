<template>
  <div id="app">
    <ListCom :pageTitle="pageTitle" :list_name="list_name" :pageTotal="data1.length" :columns1="columns1" :addModal.sync="addModal" :data1="data1" :modalTitle="modalTitle">
        <div class="search_right" slot="operate-buttons">
            <Button type="primary" class="add" icon="ios-add"  @click="addModal=true">新增任务</Button>
        </div>
        <div class="search_left" slot="shift-conditions">
            <dl class="clearfix" v-for="(ClassItem,index) in shiftData" :key="index">
                <dt>{{ClassItem.ClassName}}</dt>
                <dd>
                    <span v-for="(item,index) in ClassItem.ClassValue" :key="index">{{item.value}}</span>
                    <!-- <span class="click">维护任务</span> -->
                </dd>
            </dl >
        </div>
    </ListCom>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
        return {
            list_name:"maintencance_list",
            addModal:false,
            pageTitle:"任务管理",
            shiftData:[
                {
                    ClassName:"分类",
                    ClassValue:[
                        {
                            index:1,
                            value:"所有"
                        },
                        {
                            index:2,
                            value:"维护任务"
                        },
                        {
                            index:3,
                            value:"设备故障"
                        },
                        {
                            index:4,
                            value:"备品备件"
                        },
                        {
                            index:5,
                            value:"物资情况"
                        },
                        {
                            index:6,
                            value:"环境报警"
                        },
                        {
                            index:7,
                            value:"应急任务"
                        },
                    ]
                },
                {
                    ClassName:"状态",
                    ClassValue:[
                        {
                            index:1,
                            value:"所有"
                        },
                        {
                            index:2,
                            value:"未完成"
                        },
                        {
                            index:3,
                            value:"已完成"
                        },
                        {
                            index:4,
                            value:"已忽略"
                        }
                    ]
                },
                {
                    ClassName:"优先级",
                    ClassValue:[
                        {
                            index:1,
                            value:"所有"
                        },
                        {
                            index:2,
                            value:"一般"
                        },
                        {
                            index:3,
                            value:"轻微"
                        },
                        {
                            index:4,
                            value:"严重"
                        }
                    ]
                },
                {
                    ClassName:"专业队",
                    ClassValue:[
                        {
                            index:1,
                            value:"所有"
                        },
                        {
                            index:2,
                            value:"风"
                        },
                        {
                            index:3,
                            value:"水"
                        },
                        {
                            index:4,
                            value:"电"
                        },
                        {
                            index:5,
                            value:"土建"
                        }
                    ]
                },
            ],
            pageTotal:10,
            // modal1: false,
            columns1: [
                {
                    type: 'selection',
                    width: 60,
                },
                {
                    title: '设备名称',
                    key: 'name'
                },
                {
                    title: '维护类别',
                    key: 'type'
                },
                {
                    title: '创建时间',
                    key: 'opendate'
                },
                    {
                    title: '完成时间',
                    key: 'stopdate'
                },
                {
                    title: '操作人',
                    key: 'people'
                },
                {
                    title: '是否故障报修',
                    key: 'repair'
                },
                        {
                    title: '是否完成',
                    key: 'completed'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    render: (h, params) => {
                        return h('div', [
                            h('i', {
                                'class': {
                                'iconfont iconsousuo':true
                                },
                                style: {
                                    fontSize: '14px', 
                                    color: '#fff',
                                    marginRight:"5px",
                                },
                                on: {
                                    click: () => {
                                    }
                                }
                            }, ),
                                h('i', {
                                'class': {
                                'iconfont iconxiazai':true
                                },
                                style: {
                                    fontSize: '14px', 
                                    color: '#fff',
                                    marginRight:"5px",
                                },
                                on: {
                                    click: () => {
                                    }
                                }
                            }, ),
                                h('i', {
                                'class': {
                                'iconfont iconshanchu ':true
                                },
                                style: {
                                    fontSize: '14px', 
                                    color: '#fff',
                                    marginRight:"5px",
                                },
                                on: {
                                    click: () => {
                                    }
                                }
                            }, ),
                        ]);
                    }
                }
            ],
            data1: [
                {
                    name: '除湿空调机DCK20-20',
                    type: "定期维护",
                    opendate: '2018-04-30',
                    stopdate: '2018-05-30',
                    people: '苏新月',
                    repair:"是",
                    completed:"是",
                    period:'300小时'
                },
                {
                    name: '除湿空调机DCK20-20',
                    type: "定期维护",
                        opendate: '2018-04-30',
                    stopdate: '2018-05-30',
                    people: '苏新月',
                    repair:"是",
                    completed:"是",
                    period:'300小时'
                },
                {
                    name: '除湿空调机DCK20-20',
                    type: "定期维护",
                        opendate: '2018-04-30',
                    stopdate: '2018-05-30',
                    people: '苏新月',
                    repair:"是",
                    completed:"是",
                    period:'300小时'
                },
                {
                    name: '除湿空调机DCK20-20',
                    type: "定期维护",
                        opendate: '2018-04-30',
                    stopdate: '2018-05-30',
                    people: '苏新月',
                    repair:"是",
                    completed:"是",
                    period:'300小时'
                },
                {
                    name: '除湿空调机DCK20-20',
                    type: "定期维护",
                        opendate: '2018-04-30',
                    stopdate: '2018-05-30',
                    people: '苏新月',
                    repair:"是",
                    completed:"是",
                    period:'300小时'
                },
                {
                    name: '除湿空调机DCK20-20',
                    type: "定期维护",
                        opendate: '2018-04-30',
                    stopdate: '2018-05-30',
                    people: '苏新月',
                    repair:"是",
                    completed:"是",
                    period:'300小时'
                },
                {
                    name: '除湿空调机DCK20-20',
                    type: "定期维护",
                        opendate: '2018-04-30',
                    stopdate: '2018-05-30',
                    people: '苏新月',
                    repair:"是",
                    completed:"是",
                    period:'300小时'
                },
                {
                    name: '除湿空调机DCK20-20',
                    type: "定期维护",
                        opendate: '2018-04-30',
                    stopdate: '2018-05-30',
                    people: '苏新月',
                    repair:"是",
                    completed:"是",
                    period:'300小时'
                },

            ],
            modalTitle:"新增任务"
        }
    },
  methods:{
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
}
#app {
  height: 100%;
}
</style>
