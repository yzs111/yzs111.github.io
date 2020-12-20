<template>
  <a-layout>
    <a-layout-header>
      <div>
        <img src="../assets/heima.png" alt="" />
        <span style="color: #fff;">电商后台管理系统</span>
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            style="height: 100%"
          >
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="user" />基础数据管理</span>
              <a-menu-item key="1"> 字典1 </a-menu-item>
              <a-menu-item key="2"> 字典2 </a-menu-item>
              <a-menu-item key="3"> 字典3 </a-menu-item>
              <a-menu-item key="4"> 字典4 </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          Content
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>
