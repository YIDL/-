<template>
<footer class="footer">
    <ul>
        <li v-for="item of list" :key="item.index">
            <router-link :to="item.path"> <img :src="item.images" alt=""></router-link>
        </li>
    </ul>
</footer>
    
</template>

<script>
export default {
    //router-link :to 路由的切换标签
    data(){
        return {
            list:[
                {
                images:'https://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png',
                path:'/Home'
                },
                {
                images:'https://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png',
                path:'/Kind'
                },
                {
                images:'https://img09.jiuxian.com/bill/2018/0528/56760d41e3e745afa14e3cea1713631c.png',
                path:'/Clearance'
                },
                {
                images:'https://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png',
                path:'/Shopp'
                },
                {
                 images:'https://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png',
                path:'/User'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';//引入样式文件
.footer{
    position: fixed;
    bottom: 0;
    ul{
     @include flexbox();
     li{
         @include flex();
         @include rect(auto,100%);
         @include flexbox();
         @include flex-direction(colunm);
         @include justify-content();
         @include align-items();
         a{
             @include text-color(#000);
             @include rect(100%,100%);
             display: flex;
             align-items: center;
             justify-content: center;
        img{
             @include rect(.42rem,.348rem)
            }
         }
     }
 }
}
 
</style>
