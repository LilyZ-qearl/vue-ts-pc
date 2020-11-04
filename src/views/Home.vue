<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-04 13:49:51
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-04 15:11:15
-->
<template>
  <div class="home">
   我是首页
   <button @click="addAge">点击</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {User} from '@/interface/user';

@Component({
  components: {
    
  },
})
export default class Home extends Vue {
  user: User = {
    name: "啊哈哈",
    age: 30
  };

  addAge() {
    this.user.age += 1;
  }
}
</script>
