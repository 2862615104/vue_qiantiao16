
<template>
    <div id="header" class="header">
        <div class="head-top">
            <div class="section">
                <div class="left-box">
                    <span>vue2.0单页应用</span>
                    <a target="_blank" href="#"></a>
                    <a target="_blank" href="#"></a>
                </div>
                <div id="menu" class="right-box">
                    <a href="/login.html">登录</a>
                    <a href="/register.html">注册</a>
                    <strong>|</strong>
                    <a>
                        <i class="iconfont icon-phone"></i>联系我们</a>
                    <router-link :to="{ name: 'shopcart' }">
                        <i class="iconfont icon-cart"></i>
                        <span>购物车({{$store.getters.total}})</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="head-nav">
            <div class="section">
                <div id="menu2" class="nav-box menuhd">
                    <ul>
                        <li class="index">
                            <a href="/#/goods/list">
                                <span class="out" style="top: 0px;">首页</span>
                                <span class="over" style="top: -48px;">首页</span>
                            </a>
                        </li>
                        <li class="news">
                            <a href="#">
                                学员问题汇总
                            </a>
                        </li>
                        <li class="photo">
                            <a href="#">
                                重难点专区
                            </a>
                        </li>
                        <!--<li class="goods"><a href="">就业阶段</a></li>-->
                        <li class="video">
                            <a href="#">
                                前端常用功能
                            </a>
                        </li>
                        <li class="down">
                            <a href="#">
                                资源下载
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                问题提交
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="search-box">
                    <div class="input-box">
                        <input id="keywords" name="keywords" type="text" onkeydown="if(event.keyCode==13){SiteSearch('/search.html', '#keywords');return false};" placeholder="输入关健字" x-webkit-speech="">
                    </div>
                    <a href="javascript:;" onclick="SiteSearch('/search.html', '#keywords');">
                        <i class="iconfont icon-search"></i>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped aimg="less">
.out {
  background-color: #f60;
}
.over {
  background-color: #fff;
}
</style> 