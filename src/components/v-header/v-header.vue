<template>
  <div class="header">
    <div class="header-top">
      <div class="top-content">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
        <div class="des">
          <div class="fz-16">
            <support size="big" name="brand"/>
            <span class="m-5">粥品香坊（回龙观）</span>
          </div>
          <div class="fz-12">
            <span>蜂鸟专送/38分钟送达</span>
          </div>
          <div class="fz-12">
            <support size="small" name="discount_1"/>
            <span>在线支付满28减5</span>
            </div>
        </div>
        <div class="count">
          <div class="five">5个
            <div class="arrow"></div>
          </div>
        </div>
      </div>
      <div class="bgc">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
      </div>
    </div>
    <div class="header-bottom">bottom</div>
  </div>
</template>
<script>
import support from '../support/support'
export default {
  data () {
    return {}
  },
  components: {
    support
  }
}
</script>
<style lang="stylus">
  @import "~common/stylus/mixin"
  .header
    .header-top
      .m-5
        margin-left:5px;
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
        img
          width:100%;
          height:100%;
          filter: blur(10px)
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
            display: flex;
            align-items: center;
            font-size 16px;
            line-height 16px;
            margin-bottom:10px;
          .fz-12
            display: flex;
            align-items: center;
            font-size 12px;
            line-height 12px;
            margin-bottom:10px;
        .count
          display flex;
          align-items:flex-end;
          padding-bottom:8px;
          .five
            background: rgba(0,0,0,0.2);
            width:45px;
            height:20px;
            border-radius: 10px;
            line-height: 20px;
            color: #fff;
            font-size: 12px;
            padding-left: 10px;
            box-sizing: border-box;
            position: relative
           .arrow
             position: absolute;
             width:5px;
             height:5px;
             border: 1px solid #fff;
             transform: rotate(45deg)
             border-left: none;
             border-bottom: none;
             top: 6px;
             right: 8px;
</style>
