<template>
  <div id="app" class="box">
    <header class="header">
       <router-view name='header'></router-view>
    </header>
    <div class="content">
      <router-view name='content'></router-view>
    </div>
       <router-view name='footer'></router-view>
  </div>
</template>
<script>
// import Minfooter from '@/components/Minfooter'//引入组件文件
export default{
  // components: {//创建组件
  //   'v-footer': Minfooter
  // }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
  html,body,.box{
    @include rect(100%,100%);
    // @include background-color(#eee);
    @include flexbox();
    @include flex-direction(column);
  }
  .box{
    .content{
     overflow-y: auto;
     margin-bottom: 0.42rem;
     
    }
    .footer{
      border-top: 1px solid #cccccc;
      @include rect(100%,0.42rem);
      @include background-color(#fff);
      ul{
        @include rect(100%,100%)
      }
    }
  }
</style>
