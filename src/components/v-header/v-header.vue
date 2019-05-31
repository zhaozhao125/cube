<template>
  <div class="header">
    <div class="header-top">
      <div class="top-content">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
        <div class="des">
          <div class="fz-16">粥品香坊（回龙观）</div>
          <div class="fz-12">
            蜂鸟专送/38分钟送达
          </div>
          <div class="fz-12">在线支付满28减5</div>
        </div>
        <div class="count">11</div>
      </div>
      <div class="bgc">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
      </div>
    </div>
    <div class="header-bottom">bottom</div>
  </div>
</template>
<script>

export default {
  data () {
    return {}
  }
}
</script>
<style lang="stylus">
  @import "~common/stylus/mixin"
  .header
    .header-top
      position: relative;
      background: rgba(7,17,27,0.5);
      padding: 20px;
      .bgc
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index: -1;

      .top-content
        display flex;
        img
          width:64px;
          height:64px;
        .des
          color: #fff;
          padding-left:5px;
          flex:1;
          .fz-16
            font-size 16px;
            line-height 16px;
            margin-bottom:10px;
          .fz-12
            font-size 12px;
            line-height 12px;
            margin-bottom:10px;
</style>
