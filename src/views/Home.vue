<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-04 13:49:51
 * @LastEditors: daikeyi
 * @LastEditTime: 2020-11-26 16:45:10
-->
<template>
  <BaseContainer title="首页">
    <div class="home">
       我是首页
        <button @click="addAge">点击</button>
      <div>{{user.age}}</div>
      <BaseIcon type="esicon-eye-fill" :style="{fontSize: '50px'}" rotate="90" :size="20" color="red" spin></BaseIcon>
    </div>
  </BaseContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/interface/user';
import BaseContainer from './../components/BaseContainer.vue';
import BaseIcon from './../components/BaseIcon/BaseIcon.vue';
@Component({
  components: {
    BaseContainer,
    BaseIcon
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
