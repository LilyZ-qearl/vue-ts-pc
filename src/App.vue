<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-04 13:49:51
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-04 16:47:20
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("./assets/style/variables.scss");
</style>
