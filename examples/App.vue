<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1" >
                        <span>
                            <router-link to="/list_com">列表页组件</router-link>
                        </span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <span>O上传附件</span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Content :style="{ background: '#fff', minHeight: '220px'}">
                    <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
   data () {
        return {
            isCollapsed: false
        };
    },
    computed: {
        menuitemClasses: function () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
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
 .layout{
        height:100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .ivu-layout.ivu-layout-has-sider{
        height: 100%;
    }
    .menu-item span{
        width:100%!important;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
