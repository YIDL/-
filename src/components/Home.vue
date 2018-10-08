<template>
    <div class="box">
        <!-- 轮播图模块 -->
        <header class="head">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item of navimg" :key="item.id"><img :src="item.url"></mt-swipe-item>
            </mt-swipe>     
        </header>
        <!-- 导航模块 -->
        <nav>
            <ul>
                <li v-for="item of list" :key="item.id"><img :src="item.imgurl" alt=""></li>
            </ul>
        </nav>
        <!-- 广告位上 -->
        <div class="pubBanner">
            <img src="https://img09.jiuxian.com/bill/2018/0831/cb0e32bc92354e86869732d2fa01e6e2.jpg" alt="">
        </div>
        <!-- 广告位下 -->
        <div class="itemFlex">
            <img src="https://img07.jiuxian.com/bill/2018/0831/d5a2bc1643b540b1896d52f786cf029d.jpg" alt="">
            <img src="https://img10.jiuxian.com/bill/2018/0831/f52d741286e042698e1d7f4bb957d8fe.jpg" alt="">
        </div>
        <!-- 滚动广告条 -->
        <div class="newsBox">
            <div class="news">
                <i><img src="https://img06.jiuxian.com/bill/2017/0112/4549cce5037c42e9af5392bcbe4e0981.jpg" alt=""></i>
                <div class="newbut">
                    <ul>
                    <li v-for="item of list" :key="item.id">{{item.name}}</li>
                    </ul>
                </div>              
            </div>
        </div>
        <!-- 掌上秒拍 -->
        <div class="spikeBox">
            <div class="spikeTit">
                <h3>掌上秒拍</h3>
                <div class="lastTime">
                    <span>距结束</span>
                    <i>00</i><em>:</em>
                    <i>00</i><em>:</em>
                    <i>00</i><em>:</em>
                </div>
                <a href="#"><span>更多商品的你来抢！</span>
                <i></i>
                </a>
            </div>
            <div class="gtoimages">
                <ul class="gtoimagestop">
                    <li v-for="item of gtolist1" :key="item.index">
                        <img :src="item.proImg">
                        <span>{{item.proName}}</span>
                        <p>￥{{item.proPrice}}.00</p>
                        <i>{{item.jxPrice}}.00</i>
                    </li>
                </ul>
                <ul class="gtoimagestop">
                    <li v-for="item of gtolist2" :key="item.id">
                        <img :src="item.proImg">
                        <span>{{item.proName}}</span>
                        <p>￥{{item.proPrice}}.00</p>
                        <i>{{item.jxPrice}}.00</i>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 横幅广告位 -->
        <div class="advertising">
            <ul>
                <li v-for="items of advertising1" :key="items.id">
                    <img :src='items.url'>
                </li>
            </ul>
        </div>
        <!-- 精选套装 -->
        <div class="adMidBox">
            <div class="adMidBox">
                <div  v-for="item of adMidBoximg1" :key="item.index" class="adMidBoxleft"><img :src="item.siftimg" alt=""></div>
            <div class="adMidBoxrigth">
                <img   v-for="item of adMidBoximg2" :key="item.id" :src="item.siftimg" alt="">
            </div> 
            </div>
              
        </div>
        <!-- 今日推荐 -->
        <div class="adMidBoxbtm">
            <ul>
                <li v-for="item of adMidBoximg3" :key="item.a"><img :src="item.siftimg"></li>
            </ul>
        </div>
        <!-- 横幅广告位下 -->
        <div class="advertising">
            <ul>
                <li v-for="items of advertising2" :key="items.b">
                    <img :src='items.url'>
                </li>
            </ul>
        </div>
        <!-- 内容区精选频道头部 -->
        <div class="contennavimg">
            <img src="https://img08.jiuxian.com/bill/2018/0504/3b79febef26042daacd65629b8d4cecf.jpg" alt="">
        </div>
        <!-- 精选频道内容位 -->
        <div class="jxAdBox">
            <div class="jxAdBoxtop"  v-for="item of jxAdBoximg1" :key="item.id">
                <ul>
                    <li v-for="items of item.navimgtop" :key="items.id"><img :src="items.url" alt=""></li>
                </ul>
            </div>
             <div class="jxAdBoxbtn"  v-for="item of jxAdBoximg1" :key="item.a">
                <ul>
                    <li v-for="items of item.navimgbtn" :key="items.a"><img :src="items.url" alt=""></li>
                </ul>
            </div>
        </div>
        <!-- 内容区白酒频道头部 -->
         <div class="contennavimg">
            <img src="https://img07.jiuxian.com/bill/2018/0504/4693b96b2e244c0e88636247c4044795.jpg" alt="">
        </div>
        <!-- 白酒频道内容位  -->
        <div class="jxAdBoxs">
            <div class="jxAdBoxsleft" v-for="item of jxAdBoximg2" :key="item.id">
                    <img v-for="items of item.navimgleft" :key="items.index" :src="items.url" alt="">
            </div>
            <div class="jxAdBoxsrigth" v-for="item of jxAdBoximg2" :key="item.id">
                    <img v-for="items of item.navimgrigth" :key="items.index" :src="items.url" alt="">
                    <div class="jxAdBoxsrb" v-for="item of jxAdBoximg2" :key="item.id">
                        <img v-for="items of item.navimgbtn" :key="items.index" :src="items.url" alt="">
                    </div>
            </div>
            <div class="jxAdBoxsBtns" v-for="item of jxAdBoximg2" :key="item.id">
                <img v-for="items of item.navimgbtnlog" :key="items.index" :src="items.url" alt="">
            </div>
        </div>
        <!-- 葡萄酒频道头部 -->
        <div class="contennavimg">
            <img src="https://img06.jiuxian.com/bill/2018/0504/9b57f0f2dfc140938243a6d578eae0a9.jpg" alt="">
        </div>
        <!-- 葡萄酒频道内容区 -->
        <div class="jxAdBoxs">
            <div class="jxAdBoxsleft" v-for="item of jxAdBoximg3" :key="item.id">
                    <img v-for="items of item.navimgleft" :key="items.index" :src="items.url" alt="">
            </div>
            <div class="jxAdBoxsrigth" v-for="item of jxAdBoximg3" :key="item.id">
                    <img v-for="items of item.navimgrigth" :key="items.index" :src="items.url" alt="">
                    <div class="jxAdBoxsrb" v-for="item of jxAdBoximg3" :key="item.id">
                        <img v-for="items of item.navimgbtn" :key="items.index" :src="items.url" alt="">
                    </div>
            </div>
            <div class="jxAdBoxsBtns" v-for="item of jxAdBoximg3" :key="item.id">
                <img v-for="items of item.navimgbtnlog" :key="items.index" :src="items.url" alt="">
            </div>
        </div>
        <!-- 小资洋酒头部 -->
        <div class="contennavimg">
            <img src="https://img10.jiuxian.com/bill/2018/0504/ff4cabd031ea4e2e881bd4318188dfda.jpg" alt="">
        </div>
        <!--小资洋酒内容区  -->
        <div class="jxAdBoxs">
            <div class="jxAdBoxsleft" v-for="item of jxAdBoximg4" :key="item.id">
                    <img v-for="items of item.navimgleft" :key="items.index" :src="items.url" alt="">
            </div>
            <div class="jxAdBoxsrigth" v-for="item of jxAdBoximg4" :key="item.id">
                    <img v-for="items of item.navimgrigth" :key="items.index" :src="items.url" alt="">
                    <div class="jxAdBoxsrb" v-for="item of jxAdBoximg4" :key="item.id">
                        <img v-for="items of item.navimgbtn" :key="items.index" :src="items.url" alt="">
                    </div>
            </div>
            <div class="jxAdBoxsBtns" v-for="item of jxAdBoximg4" :key="item.id">
                <img v-for="items of item.navimgbtnlog" :key="items.index" :src="items.url" alt="">
            </div>
        </div>
        <!-- 黄保啤综合区头部 -->
        <div class="contennavimg">
            <img src="https://img08.jiuxian.com/bill/2018/0504/7cf197b2e4084248b367b9a1b297d83c.jpg" alt="">
        </div>
        <!-- 黄保啤综合区内容 -->
        <div class="jxAdBoxs">
            <div class="jxAdBoxsleft" v-for="item of jxAdBoximg5" :key="item.id">
                    <img v-for="items of item.navimgleft" :key="items.index" :src="items.url" alt="">
            </div>
            <div class="jxAdBoxsrigth" v-for="item of jxAdBoximg5" :key="item.id">
                    <img v-for="items of item.navimgrigth" :key="items.index" :src="items.url" alt="">
                    <div class="jxAdBoxsrb" v-for="item of jxAdBoximg5" :key="item.id">
                        <img v-for="items of item.navimgbtn" :key="items.index" :src="items.url" alt="">
                    </div>
            </div>
            <div class="jxAdBoxsBtns" v-for="item of jxAdBoximg5" :key="item.id">
                <img v-for="items of item.navimgbtnlog" :key="items.index" :src="items.url" alt="">
            </div>
        </div>
        <!-- 主题街头部 -->
         <div class="contennavimg">
            <img src="https://img10.jiuxian.com/bill/2018/0504/6dba580b72164560b8fd47fc81f396b5.jpg" alt="">
        </div>
        <!-- 主题街内容 -->
        <div class="themebox" v-for="item of jxAdBoximg6" :key="item.id">
            <a v-for="items of item.themeimg" :key="items.index"><img :src="items.url" alt=""></a>
        </div>
        <!-- 爆款推荐全部内容 -->
        <footer>
            <div class="footertop">
                <p>爆款推荐</p>
            </div>
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul>
                <li class="footerbox" v-for="item of recommendimg" :key="item.id">
                    <span class="tagList">
                    <i v-for="itemb of item.promo" :key="itemb.id" v-bind:style="{'background-color':itemb.backColor}">{{itemb.name}}</i>
                    </span> 
                    <img :src="item.commonProductInfo.imgPath" alt="">
                    <span class="name">{{item.commonProductInfo.pname}}</span>
                    <span class="price">             
                        <strong>￥{{item.commonProductInfo.actPrice}}.00</strong>
                        <i>￥{{item.commonProductInfo.jxPrice}}.00</i>
                    </span>
                </li>
            </ul>
            </mt-loadmore>
        </footer>
        <!-- 底部声明！ -->
        <div class="footerbtm" v-if="type">
            <p>北京酒仙网络科技有限公司版权所有</p>
            <p>北京市北京经济技术开发区经海五路58号院8幢4层</p>
            <p>400-617-9999</p>
            <p><a>关于我们</a></p>
         </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
Vue.use(Swipe);
Vue.use(Loadmore);
Vue.use(SwipeItem);

export default {
    data(){
        return{ 
            navimg:[
                { url:'https://img07.jiuxian.com/bill/2018/0831/60acd37daf1b4114ba6f5b1e21c10dcd.jpg'},
                { url:'https://img06.jiuxian.com/bill/2018/0903/29a31aba538647d780f43549315d75a9.jpg'},
                { url:'https://img08.jiuxian.com/bill/2018/0831/9194b40b1b904e4bbfdc3740446dba48.jpg'},
                { url:'https://img06.jiuxian.com/bill/2018/0903/3331e9166f0941d4be2bc33e03ecef81.jpg'},
                { url:'https://img08.jiuxian.com/bill/2018/0903/adbbe404c74d40ae84f7b8c24b91e06b.jpg'}
                ],
            list:[
                {
                    imgurl:'https://img08.jiuxian.com/bill/2018/0831/95438670b93544639c1a0b8534e47f35.jpg',
                    name:'酒仙网线下实体火爆招商中'
                   
                    
                    },
                {
                    imgurl:'https://img07.jiuxian.com/bill/2018/0831/b9c7dc1d45c543dda9b425d3f025962a.jpg',
                    name:'APP首单满100送100活动规则 点击查看!'
                   
                    },
                {
                    imgurl:'https://img09.jiuxian.com/bill/2018/0831/da4064283b32445680fd6908ce60ed96.jpg',
                    name:'酒仙网线下实体火爆招商中'
                   
                    },
                {
                    imgurl:'https://img09.jiuxian.com/bill/2018/0831/df5883d477db4582af7b5f6c077baace.jpg',
                    name:'APP首单满100送100活动规则 点击查看!'
                    
                    },
                {
                    imgurl:'https://img10.jiuxian.com/bill/2018/0831/2ee6419cdfac47e5836e6afbd91f897f.jpg'
                    
                    },
                {imgurl:'https://img10.jiuxian.com/bill/2018/0831/7af44d6a532c49c9952869d5c6a4cc97.jpg'},
                {imgurl:'https://img07.jiuxian.com/bill/2018/0831/a27e84dbf5144212a394b598ce7b5b0b.jpg'},
                {imgurl:'https://img07.jiuxian.com/bill/2018/0831/81282b4f529f47f5b8bcf7b0e541f481.jpg'},
                {imgurl:'https://img10.jiuxian.com/bill/2018/0831/da281e8693204ba8b1d4a24ff2330e4d.jpg'},
                {imgurl:'https://img09.jiuxian.com/bill/2018/0831/3b7c5345b8c34d4ebb2c8b8c8a0ff66a.jpg'},

            ],
            gtolist1:[],
            gtolist2:[],
            advertising1:[],
            advertising2:[],
            adMidBoximg1:[],
            adMidBoximg2:[],
            adMidBoximg3:[],
            jxAdBoximg1:[],
            jxAdBoximg2:[],
            jxAdBoximg3:[],
            jxAdBoximg4:[],
            jxAdBoximg5:[],
            jxAdBoximg6:[],
            recommendimg:[],
            limitNum:0,
            pacode:0 ,
            type:false,
            allLoaded:false
        };
    },
    mounted(){
        this.getData ();
        
    },
    methods:{
        getData () {
        const that = this;
         axios.get('http://localhost:4200/home')
            .then(function (response) {
                that.gtolist1 = response.data.slice(0,10);
                that.gtolist2 = response.data.slice(10,20);
            })
            .catch(function (error) {
                console.log(error);
            });
            axios.get('http://localhost:4200/advertising')
            .then(function (response) {
               that.advertising1 = response.data.slice(0,5);
               that.advertising2 = response.data.slice(5,10);
            })
            .catch(function (error) {
                console.log(error);
            });
            axios.get('http://localhost:4200/adMidBoximg')
            .then(function(res){
                that.adMidBoximg1 = res.data.slice(0,1);
                that.adMidBoximg2 = res.data.slice(1,3);
                that.adMidBoximg3 = res.data.slice(3,13);
            })
            .catch(function(err){
                console.log(err)
            });
            axios.get('http://localhost:4200/classifynavimg')
            .then(function(res){
                that.jxAdBoximg1 = res.data.slice(0,1);
                that.jxAdBoximg2 = res.data.slice(1,2);
                that.jxAdBoximg3 = res.data.slice(2,3);
                that.jxAdBoximg4 = res.data.slice(3,4);
                that.jxAdBoximg5 = res.data.slice(4,5);
                that.jxAdBoximg6 = res.data.slice(5,6);
            })
            .catch(function(err){
                console.log(err);
            });
            axios.get('http://localhost:4200/recommend')
            .then(function(res){
                that.recommendimg = res.data.slice(0,10);
            })
            .catch(function(err){
                console.log(err);
            });
            
        },
        // settion(){
        //        const footerbtm = document.getElementsByClassName('footerbtm')[0];
        //     //    footerbtm.style=di;
        //        this.type=1;
        //  },
        loadBottom() {
            this.pacode++;
            this.limitNum = 8;
            let url = 'http://localhost:4200/recommend?limitNum='+this.limitNum+'&pacode='+this.pacode;
            // const _this = this;
            axios.get(url)

            .then(res=>{
                if(res.data.length == 0){
                    this.allLoaded = true;
                    // _this.settion();
                    this.type=true;
                } else{
                    this.recommendimg = [...this.recommendimg,...res.data];
                }               
                this.$refs.loadmore.onBottomLoaded();
            })
            .catch(err=>{
                console.log(err);
                this.$refs.loadmore.onBottomLoaded();
            })
        }
    }
}
</script>


<style lang="scss">

@import "@/lib/reset.scss";
body{
    @include background-color(#eee);
}
.head{
    @include background-color(#fff);
    @include rect(100%,1.541rem);
    img{
        @include rect(100%,1.541rem)
    }
};
nav{
    
    ul{
        @include rect(100%,1.36rem);
        @include rect(100%,100%);
        @include flexbox();
        flex-wrap: wrap;
        li{
            img{
                @include rect(.64rem,.672rem)
            }
        }
    };

};
.pubBanner{
    img{
        @include rect(100%,.75rem)
    }
};
.itemFlex{
    @include flexbox();
    img{
        @include rect(1.60rem,.9rem)
    }
};
.newsBox{
    @include fullposition($position:relative);
    @include padding($val:8px 10px);
    @include rect(100%,.36rem);
    @include background-color(#fff);
    .news{
        @include flexbox();
       i{
           border-right:1px solid #ededed;
           @include padding($val:0 .1rem 0 0);
        //    padding-right: .1rem;
       };
        img{
        @include rect(.83rem,.16rem);
        
        };
       
    };
    .newbut{
            @include rect(1.95rem,.2rem);
            overflow: hidden;
            @include fullposition($position:absolute);
            @include margin(0 0 0 1.05rem);
         ul{
            
            @include rect(1.95rem,.8rem);
           li{
            @include rect(100%,.2rem);
            line-height: .2rem;
            font-size: 12px;
            }
        };
    }
};
.spikeBox{
   @include background-color(#fff);  
   .spikeTit{
       @include rect(100%,.3rem);
       @include flexbox();
       @include fullposition($position:relative);
       h3{
           line-height: .3rem;
             @include fullposition($position:absolute,$top:0,$left:.1rem);
       };
       .lastTime{
           @include margin(0 0 0 .75rem);
           line-height: .16rem;
           @include padding($val:.07rem 0);
           span{
              color: #666;
              @include margin(0 .05rem 0 0);
           };
           i{
               @include rect(.16rem,.16rem);
               @include background-color(#858585);
           };
       };
       a{
           font-size: .12rem;
           line-height: .3rem;
           color: #999;
           i{
            @include rect(.14rem,.13rem);
            background: url(../imges/jx-sprite.png) no-repeat;
            display: inline-block;
            background-position:-.88rem 0;
            background-size: 2.00rem .73rem;
            vertical-align:middle;
           }
       }
   };
   .gtoimages{
       @include rect(100%,100%);
       .gtoimagestop{               
                @include flexbox();
                 overflow-x: auto;
                 text-align: center;
           li{
                @include margin(0 .08rem);
                @include rect(.843rem,100%);
             img{
                 @include rect(.801rem,.801rem);
             };
             span{
                 @include rect(100%,.32rem);
                 display: inline-block;
                 font-size: .12rem;
                 overflow: hidden;
                 line-height: .16rem;
             };
             p{
                 color: red;
                 font-size: .14rem;
                 line-height: .14rem;
             }
             i{
                 color: #999;
                 text-decoration:line-through; 
             }
             
           }
       }
   }
};
.advertising{
   img{
       @include rect(100%,.793rem);
   }
};
.adMidBox{
   @include background-color(#fff);
    .adMidBox{
        @include flexbox();
        @include margin(.10rem 0);
        .adMidBoxleft{

            img{
                @include rect(1.57rem,1.72rem);
            }
        };
        .adMidBoxrigth{
            img{
                @include rect(1.629rem,.8336rem);
                
            }
        }
    };
}

.adMidBoxbtm{
    ul{
        @include flexbox();
        overflow-x: auto;
        li{
            img{
                @include rect(1.28rem,.90rem);
            }
        }
    }
};
.contennavimg{
    img{
    @include rect(100%,.31rem);
    }
};
.jxAdBox{
    .jxAdBoxtop{
        ul{
            @include flexbox();
           img{
            @include rect(1.6rem,.90rem);
        } 
        }
        
    };
    .jxAdBoxbtn{
        ul{
            @include flexbox();
            img{
                @include rect(100%,1.045rem);
            }
        }
    };
};
.jxAdBoxs{
    @include background-color(#fff);
    @include flexbox();
    flex-wrap: wrap;
    .jxAdBoxsleft{
        img{
            @include rect(1.248rem,1.6722rem);
        }
    };
    .jxAdBoxsrigth{
        img{
            @include rect(1.952rem,0.83rem);
        };
        .jxAdBoxsrb{
            img{
                @include rect(.976rem,0.839rem);
            }
        };
    };
    .jxAdBoxsBtns{
        
        @include flexbox();
        @include rect(100%,.4343rem);
        justify-content: space-around;
        align-items: center;
        img{
            display: block;
            @include rect(.3363rem,.3363rem);
        }
    }
};
.themebox{
    @include margin(0 0 .08rem 0); 
    img{
        @include rect(1.6rem,.69rem)
    }
};
footer{
    
    .footertop{
        @include background-color(#fff);
        text-align: center;
        p{
            line-height: .33rem;
            color: #666666;
        }
    };
    ul{
        @include flexbox();
        justify-content: space-between;
        flex-wrap: wrap;
    .footerbox{
        @include fullposition($position:relative);
        display: flex;
        flex-wrap: wrap;
        @include margin(.02rem 0 0 0);
        background-color: #fff;
        justify-content: center;
        @include rect(1.584rem,auto);
        .tagList{
            @include margin(.05rem 0 0 .05rem);
            @include fullposition($position:absolute,$left:.05rem);
            @include flexbox();
            flex-wrap: wrap;

            i{
                padding: 0 .03rem;
                line-height: .16rem;
                border-radius:.03rem;
                color: #fff;
                @include margin(0 .03rem .03rem 0);
            };
        };
        img{
            @include rect(1.384rem,1.384rem);
            @include margin(.26rem 0 0 0);
        };
        .name{
            @include rect(1.384rem,.32rem);
            display: inline-block; 
            overflow: hidden;
            line-height: .16rem;
        };
        .price{
            @include fullposition($position:relative);
            left: -.18rem;
            strong{
                color: red;
                @include margin(0 .05rem 0 0);
            };
            i{
                color:#999;
                text-decoration: line-through;
                
            }
        }
    }
    }
    
};
.footerbtm{
    text-align: center;
    color: rgb(153, 153, 153);
    line-height: .20rem;
    @include margin(.2rem 0 0 0);
}

</style>
