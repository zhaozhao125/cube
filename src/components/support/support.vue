<template>
  <span class="support" :class="setClass">
    <!-- <img src="./brand@3x.png" alt=""> -->
  </span>
</template>
<script>
export default {
  props: {
    name: {
      default: '',
      type: String
    },
    size: {
      default: '',
      type: String
    }
  },
  computed: {
    setClass() {
      console.log(`${this.name} ${this.size}`)
      return `${this.name} ${this.size}`
    }
  }
}
</script>
<style lang="stylus">
  @import "~common/stylus/mixin"
  //  @import "~common/stylus/mixin"
  .support
    display: inline-block;
    &.big
      width:32px;
      height:17px;
      background-size: 32px 17px;
    &.small
      width:15px;
      height:12px;
      background-size: 15px 12px;
    &.brand
      bg-image('brand')
      background-repeat: no-repeat;
    &.discount_1
      bg-image('discount_1')
      background-repeat: no-repeat;
</style>
 