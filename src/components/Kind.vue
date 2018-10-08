<template>
    <div class="kindBox" style="background-color:#fff">
        <header>
            <div class="ipt">
                <i></i>
                <p>每周一新品首发，总有一款适合你</p>
            </div>
        </header>
        <div class="conten">
            <ul>
                <li class="img1">
                    <a>
                        <i></i>
                        <span>白酒</span>
                    </a>
                </li>
                <li class="img2">
                    <a>
                        <i></i>
                        <span>葡萄酒</span>
                    </a>
                </li>
                <li class="img3">
                    <a>
                        <i></i>
                        <span>洋酒</span>
                    </a>
                </li>
                <li class="img4">
                    <a>
                        <i></i>
                        <span>整箱购</span>
                    </a>
                </li>
                <li class="img5">
                    <a>
                        <i></i>
                        <span>老酒</span>
                    </a>
                </li>
                <li class="img6">
                    <a>
                        <i></i>
                        <span>清仓特卖</span>
                    </a>
                </li>
                <li class="img7">
                    <a>
                        <i></i>
                        <span>海外直踩</span>
                    </a>
                </li>
                <li class="img8">
                    <a>
                        <i></i>
                        <span>精美大坛</span>
                    </a>
                </li>
                <li class="img9">
                    <a>
                        <i></i>
                        <span>红酒整箱</span>
                    </a>
                </li>
                <li class="img10">
                    <a>
                        <i></i>
                        <span>值得买</span>
                    </a>
                </li>
                <li class="img11">
                    <a>
                        <i></i>
                        <span>销量排行</span>
                    </a>
                </li>
                <li class="img12">
                    <a>
                        <i></i>
                        <span>礼尚往来</span>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@import '@/lib/reset.scss';

.kindBox{
    @include rect(100%,100%);
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        @include rect(100%,.4rem);
        border-bottom: 1px solid #eee;
        background-color: #fafafa;
        .ipt{
            @include rect(2.9rem,.28rem);
            padding: 0 .3rem;
            position: relative;
            background-color: #eee;
            border-radius: .05rem;
            p{
                line-height: .28rem;
                color: #666;
            };
            i{
                @include rect(.12rem,.12rem);
                position: absolute;
                display: inline-block;
                background-color: #fff;
                background: url(../imges/nav.png) no-repeat -.21rem -.03rem;
                background-size: 1.17rem .29rem;
                top: .08rem;
                left: .1rem;
            }
        }
    };
    .conten{
        @include rect(100%,100%);
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                 @include rect(1.056rem,auto);
                 border-left:.01rem solid #eee; 
                 border-bottom:.01rem solid #eee; 
                a{
                    display: block;
                    @include rect(1.056rem,.67rem);
                    i{
                        @include rect(.36rem,.36rem);
                        display: block;
                        margin: .1rem auto;
                        
                    };
                    span{
                        display: block;
                        text-align: center;
                        line-height: .21rem;
                        color: #000000;
                    }
                }
            };
            .img1{
                i{
                    background: url(../imges/download.png) no-repeat .05rem 0;
                }
            };
            .img2{
                i{
                    background: url(../imges/download.png) no-repeat -.8rem 0;
                }
            };
            .img3{
                i{
                    background: url(../imges/download.png) no-repeat -1.62rem 0;
                }
            };
            .img4{
                i{
                    background: url(../imges/download.png) no-repeat 0 -.7rem;
                }
            };
            .img5{
                i{
                    background: url(../imges/download.png) no-repeat -.84rem -.7rem;
                }
            };
            .img6{
                i{
                    background: url(../imges/download.png) no-repeat -1.65rem -.7rem;
                }
            };
            .img7{
                i{
                    background: url(../imges/download.png) no-repeat 0 -1.41rem;
                }
            };
            .img8{
                i{
                    background: url(../imges/download.png) no-repeat -.84rem -1.41rem;
                }
            };
            .img9{
                i{
                    background: url(../imges/download.png) no-repeat -1.65rem -1.41rem;
                }
            };
            .img10{
                i{
                    background: url(../imges/download.png) no-repeat 0 -2.17rem;
                }
            };
            .img11{
                i{
                    background: url(../imges/download.png) no-repeat -.84rem -2.17rem;
                }
            };
            .img12{
                i{
                    background: url(../imges/download.png) no-repeat -1.65rem -2.17rem;
                }
            }
        }
        
    }
}
</style>
