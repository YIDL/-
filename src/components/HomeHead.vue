<template>
    <div class="Homehead">
       <div class="logo">
           <span></span>
       </div>
       <div class="Seek">
           <em></em>
           <b>茅台特卖：爆款直降 彩虹王子套装799元抢</b>
           <!-- <input type="text" placeholder="茅台特卖：爆款直降 彩虹王子套装799元抢"> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@import '@/lib/reset.scss';
.Homehead{
    z-index: 1;
    background: -webkit-linear-gradient(top,rgba(0,0,0,0.7),rgba(0,0,0,0));
    position: absolute;
    top: 0px;
    @include rect(100%,.39rem);
    @include flexbox();
    justify-content: space-around;
    align-items: center;
    .logo{
        @include background-color(#fff);
        @include rect(0.57rem,0.27rem);
        border-radius: .03rem;
        span{
            @include rect(100%,100%);
            background: url(../imges/jx-sprite.png) no-repeat;
            background-size: 2.00rem .73rem;  
            display: inline-block;
        }
    };
    .Seek{
        @include rect(2.34rem,.27rem);
        border-radius: 3px;
        position: relative;
        @include background-color(#fff);
        em{
            background: url(../imges/jx-sprite.png) no-repeat;
            @include rect(.12rem,.12rem);
            display: inline-block;
            background-position: -.37rem .01rem;
            background-size: 1.20rem .41rem;
            position: absolute;
            left: .10rem;
            top: .08rem;
        };
        b{
            width: 100%;
            font-weight: normal;
            height: .27rem;
            color: #666;
            font-size: .12rem;
            line-height: .27rem;
            padding: 0 .3rem;
            display: inline-block;
            overflow: hidden;
        }
    }
    
}
</style>
