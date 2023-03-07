other project 模块的代码如下：
```
   <div class="module">
        <div class="module-title">
          <div class="icon-box">
            <span class="icon">🔗</span>
          </div>
          <span class="text">部分可访问项目</span>
          <div class="separator"></div>
        </div>

        <div class="other-project">
          <ul class="other-project-outer">
            <li>ChatGPT 开发的项目</li>
            <ul class="other-project-inner">
              <li>
                <a
                  class="info-item"
                  href="https://cv.yiminfe.com"
                  target="_blank"
                  >个人简历</a
                >、<a
                  class="info-item"
                  href="https://yiminfe.github.io/CV/"
                  target="_blank"
                  >ChatGPT 介绍官网</a
                >、<a
                  class="info-item"
                  href="https://yiminfe.github.io/CV/"
                  target="_blank"
                  >图书商城首页</a
                >
              </li>
              <li>
                <a
                  class="info-item"
                  href="https://yiminfe.github.io/CV/"
                  target="_blank"
                  >后台管理系统</a
                >、<a
                  class="info-item"
                  href="https://yiminfe.github.io/CV/"
                  target="_blank"
                  >Markdown 文件管理系统</a
                >、<a
                  class="info-item"
                  href="https://yiminfe.github.io/CV/"
                  target="_blank"
                  >权限管理系统</a
                >
              </li>
            </ul>
            <li>个人项目</li>
            <ul class="other-project-inner">
              <li>
                全栈技术合伙人、品牌创始人之一（2019 年）：
                <a
                  class="info-item"
                  href="https://www.huaweirom.com/shooting/14890/"
                  target="_blank"
                  >Young 健身 App</a
                >
              </li>
              <li>
                远程前端技术合伙人（2022 年）：
                <a
                  class="info-item"
                  href="https://humanmazu.com/"
                  target="_blank"
                  >mazu 中文学习官网（Nuxt2）</a
                >
              </li>
              <li>
                学习项目（2022 年）：<a
                  class="info-item"
                  href="https://ssr.yiminfe.com/home"
                  target="_blank"
                  >官网 SSR 渲染（Nuxt3）</a
                >、<a
                  class="info-item"
                  href="https://github.com/yiminfe/vue-mini"
                  target="_blank"
                  >实现迷你 Vue3 框架</a
                >
              </li>
            </ul>
            <li>北京学而思教育科技有限公司</li>
            <ul class="other-project-inner">
              <li>
                前端项目主导（2021 年）：
                <a
                  class="info-item"
                  href="https://bookh5.xueersibook.com/cicp/store/goods/home"
                  target="_blank"
                  >学而思图书商城</a
                >、<a
                  class="info-item"
                  href="https://bookh5.xueersibook.com/cicp/mobi/home"
                  target="_blank"
                  >摩比爱识字</a
                >
              </li>
              <li>
                前端项目研发（2020 年）：<a
                  class="info-item"
                  href="https://bookh5.xueersibook.com/cicp/platform/shop/index"
                  target="_blank"
                  >学而思微课程</a
                >
              </li>
            </ul>
            <li>北京博雅智学软件股份有限公司</li>
            <ul class="other-project-inner">
              <li>
                App 项目负责人（2019 年）：
                <a
                  class="info-item"
                  href="https://zhsz.bjedu.cn/web/login/index"
                  target="_blank"
                  >北京小学综素 App、北京中学综素 App</a
                >
              </li>
            </ul>
            <li>北京若为信息技术有限公司</li>
            <ul class="other-project-inner last">
              <li>
                iOS 项目负责人（2018 年）：
                <a
                  class="info-item"
                  href="https://baike.baidu.com/item/%E5%8F%A3%E7%B2%AE/19767215"
                  target="_blank"
                  >口粮 APP</a
                >
              </li>
            </ul>
          </ul>
        </div>
      </div>

```

CommonModule 组件代码如下
```
<template>
  <div class="module">
    <div :class="`module-title ${pageClassName}`">
      <div :class="`icon-box ${className}`">
        <span class="icon">{{ icon }}</span>
      </div>
      <span class="text">{{ title }}</span>
      <div class="separator"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  className?: string
  pageClassName?: string
}

const props = defineProps<Props>()

const { icon, title, className, pageClassName } = props
</script>

```
目前other project 模块结构如下：
```
<template>
  <CommonModule>
    <!-- 插槽-->
  </CommonModule>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/assets/scss/layout/otherProject.scss';
</style>


```
帮我把other project 的HTML，抽成Vue组件，要求如下：
1、所有的内容抽取为 json文件 存储，包括 emoji 表情，emoji 表情，HTML中有，也是用变量存储。然后在 <script setup lang="ts"></script> 中，类似这样使用。
```
<script setup lang="ts">
import data from '@/data/cv-....json'
const { ... } = data
</script>
```
2、优化代码，代码结构完全相同的列表，尽量使用能够使用 v-for ，相似结构也用循环，注意在内部使用 v-if 区分。类似这种
```
<v-for>
           <v-if>
          <v-else>
</v-for>
```
3、不要修改任何任何 class 和 id 名称，也不要修改之前HTML的结构，只动标签里面的内容。
4、生成的json文件，单独发送，另外关于列表渲染，记得生成业务id，比如:
```
{
      "id": "1"
    }
```

可以参考之前的抽取方式，不要搞错了，谢谢。比如之前工作经历。
```
<template>
  <CommonModule :icon="icon" :title="title" :className="className">
    <ul class="advantages">
      <li v-for="item in list" :key="item.id" v-html="item.text"></li>
    </ul>
  </CommonModule>
</template>

<script setup lang="ts">
import data from '@/data/cv-advantages.json'

const { icon, title, className, list } = data
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/advantages.scss';
</style>
```

该组件特殊要求：
1、other-project-inner 中的 li 元素使用 v-html。