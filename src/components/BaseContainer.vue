<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-04 17:12:57
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-04 18:11:18
-->
<template>
    <div :class="['base-contianer', myClass, fullscreen ? 'fullscreen':'']">
        <div class="base-contianer__header">
            <div class="base-contianer__header__title">{{title}}</div>
            <div class="base-contianer__header__btn" @click="handleFullScreen">X</div>
        </div>
        <slot />
    </div>
</template>
<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';

export default class BaseContainer extends Vue {
    fullscreen = false;

    @Prop({ default: '哈哈' }) title!: string;
    @Prop({default: 'myclass'}) myClass!: string;

 
  handleFullScreen() {
    this.fullscreen = !this.fullscreen;
  }
}
</script>
<style lang='scss' scoped>
.base-contianer {
    &__header {
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        font-size: 14px;
        font-size: 1.4rem;
        letter-spacing: 1px;
        background: #242A30;
        &__title {
            color: #fff;
        }
    }  
}
</style>