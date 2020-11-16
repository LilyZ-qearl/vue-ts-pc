<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-04 13:49:51
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-04 18:10:25
-->
<template>
  <BaseContainer title="首页">
    <div class="home">
		我是首页
		<button @click="addAge">点击</button>
    </div>
  </BaseContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/interface/user';
import BaseContainer from './../components/BaseContainer.vue';
@Component({
  components: {
    BaseContainer
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
