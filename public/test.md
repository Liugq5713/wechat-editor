# 基于 element-ui 的搜索文章业务组件

本文的默认您是使用`element-ui`且熟悉`element`的远程搜索组件的，不熟悉也可以看看思路

## 问题

- 该组件可以基于不同的条件进行搜索
- 如何回显

### 基于不同条件可以进行搜索

首先我们的文章搜索接口，肯定是提供多种搜索方式的，基于文章标题搜索，基于文章 ID 搜索等等。为了称呼方便，我们把基于某种条件搜索的值称为`searchKey`。

为了做到 searchKey 可以依据需求变化，我们需要了解 [ES6 的“计算属性名”功能](https://tylermcginnis.com/computed-property-names/)
