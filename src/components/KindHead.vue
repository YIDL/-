<template>
<div class="kindbox">
    <header>
        <a><img src="../imges/download.jpg" alt=""></a>
        <span>选酒</span>
        <i></i>
    </header>
</div>
    
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@import "@/lib/reset.scss";
.kindbox{
    header{
        text-align: center;
        @include rect(100%,.4rem);
        @include background-color(#de4943);
        a{
            @include fullposition($position:absolute);
            left: .1rem;
            img{
                @include rect(.3rem,.4rem);
            }
        };
        span{
            line-height: .4rem;
            color: #fff;
            font-size: .16rem;
        };
        i{
            background:url(./../imges/nav.png) no-repeat -1.5rem .06rem;       
            @include rect(.3rem,.4rem);
            display: inline-block;
            position: absolute;
            right: .1rem;
        }
    }
}

</style>
