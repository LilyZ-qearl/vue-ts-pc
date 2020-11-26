<!--
 * @Description: Icon
 * @Version: 2.0
 * @Autor: daikeyi
 * @Date: 2020-11-26 10:40:48
 * @LastEditors: daikeyi
 * @LastEditTime: 2020-11-26 16:47:47
-->
<template>
  <svg :class="baseIconClass" aria-hidden="true" :style="baseIconType">
    <use :xlink:href="`#${type}`"></use>
  </svg>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class BaseIcon extends Vue {

  @Prop(String) type!: string;
  @Prop({type: Boolean, default: false}) spin!: boolean;
  @Prop({type: [Number, String]}) rotate!: number | string
  @Prop({type: [Number, String]}) size!: number | string
  @Prop({type: [String]}) color!: string

  get baseIconType() {
    return {
      transform: `rotate(${this.rotate}deg)`,
      size: this.size,
      color: this.color
    }
  }

  get baseIconClass() {
    return {
      'icon': true,
      'anticon-spin': this.spin
    }
  }
}
</script>

<style>

</style> 