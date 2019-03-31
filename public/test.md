# wechat-editor

微信公众号排版编辑器，转换 Markdown 到微信特制的 HTML。使用时，你得把默认的 Markdown 内容换成你自己的内容。

> 原作者关于本工具的介绍请看[这篇公众号文章](https://mp.weixin.qq.com/s/pn0LzyfgUj6rGUfVHUksjg)。

这个项目是基于[lyricat](https://github.com/lyricat/wechat-format)，这个项目的[使用介绍](https://mp.weixin.qq.com/s/pn0LzyfgUj6rGUfVHUksjg)，作者写的很好啦，源代码没有用 `npm`这些东西，就是纯纯的`html`，`javascript`,`css`，我看到的时候都震惊了，好久没有看到这样的代码了。于是我就拿`react`把它改造了一下。

但是基于人家的代码，不比它好，就有点说不过去。说说我这个项目的优点吧。

- 美观，`Material Design`风格的网页
- 排版的文字风格硬朗，清晰。排版文本规则文本行距为字号的1.5倍，段距为字号的1倍
- 去除了对笔者没什么用的注音功能
- 使用react改写，维护应该方便一点吧。虽然原作者通过`script`方式引入了`vue`的，但是我觉得有包管理，以及webpack干嘛不用呢
- 还有一个勉强算优势的地方吧，就是我比较有空，可以有时间维护，我看作者好像非常忙的样子，感觉是个大佬
- 添加了行号，虽然这个就是一个配置的事情

说说下一步我打算怎么优化这个项目吧：

- 增加自定义的项
- 增加一些预设，比如文末的请读者点个好看的引导语



## 一级标题

这是一级标题


### 二级标题

上面是二级标题

## 文字样式

### 基本样式

你好，我是一个来自地球的人。

我是一个[智人](https://zh.wikipedia.org/wiki/智人 "学名：Homo sapiens，意为“有智慧的人”")，
我喜欢穿新衣服，都是**黑衣服**。

我最大的*爱好*是拆汽车，我拆了很多汽车，宝马、奔驰、劳斯莱斯和特斯拉，但是都没装回去。

上面表现了链接和加重两种样式，公众号以外的链接会被转换为脚注。

## 段落、列表、引用

[Markdown](https://sspai.com/post/25137 "认识与入门 Markdown") 是一种写文章用的语法。

我们日常写文章用的工具，比如说 Word，提供了大量排版格式样式相关的选项。

在写作之外，大量的时间都在处理这些排版、格式、样式、字体、图片位置等等。这不但是耗时耗力的事情，而且还会打乱里写作时的思绪，影响你的工作。

列表项：

- 一个列表项
- 另一个列表项
- 第三个列表项

有序的列表项，抱歉，不支持有序列表。

1. 一个列表项
2. 另一个列表项
3. 第三个列表项

使用 Markdown 最大的意义在于可以让你关注写作本身，不需要花费精力在别的事情上。无论是严肃写作还是随手记，Markdown 都是最佳形式。

> 引用：使用 Markdown 最大的意义在于可以让你关注写作本身 —— Lyric

好。

## 代码块、表格、图片

接下来是一张图片。你可以用自己图床，也可以上传到微信媒体库再把图片 URL 粘贴回来，或者编辑好以后，在公众号里插入图片。

![](https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/login/loginpage/images/bg_banner4273fb.png)

代码块，使用微信官方的高亮配色，在代码块标示语言即可。粘贴到公众号后，需要用鼠标点一下代码块，完成高亮。


    ```cpp
    你的代码
    ```



```cpp
#include <stdio.h>

const int MAX = 10;
int cache[MAX] = {0};

int fib(int x) {
  if (x == 1) return 1;
  if (x == 0) return 0;
  if (cache[x] == 0) {
    int ret = fib(x - 1) + fib(x - 2);
    cache[x] = ret;
  }
  return cache[x];
}

int main() {
    int i;
    printf("fibonacci series:\n");
    for (i = 0; i < MAX; ++i) {
        printf("%d ", fib(i));
    }
    return 0;
}
```

然后是一个内联代码： a paragraphg with inline code `{code: 0}`。

接下来是表格示例：

| Header 1 | Header 2 |
| --- | --- |
| Key 1 | Value 1 |
| Key 2 | Value 2 |
| Key 3 | Value 3 |

使用时，你得把默认的 Markdown 内容换成你自己的内容。

关于本工具的介绍请看[这篇公众号文章](https://mp.weixin.qq.com/s/pn0LzyfgUj6rGUfVHUksjg)。


## 一级标题

这是一级标题


### 二级标题

上面是二级标题

## 文字样式

### 基本样式

你好，我是一个来自地球的人。

我是一个[智人](https://zh.wikipedia.org/wiki/智人 "学名：Homo sapiens，意为“有智慧的人”")，
我喜欢穿新衣服，都是**黑衣服**。

我最大的*爱好*是拆汽车，我拆了很多汽车，宝马、奔驰、劳斯莱斯和特斯拉，但是都没装回去。

上面表现了链接和加重两种样式，公众号以外的链接会被转换为脚注。


## 段落、列表、引用

[Markdown](https://sspai.com/post/25137 "认识与入门 Markdown") 是一种写文章用的语法。

我们日常写文章用的工具，比如说 Word，提供了大量排版格式样式相关的选项。

在写作之外，大量的时间都在处理这些排版、格式、样式、字体、图片位置等等。这不但是耗时耗力的事情，而且还会打乱里写作时的思绪，影响你的工作。

列表项：

- 一个列表项
- 另一个列表项
- 第三个列表项

有序的列表项，抱歉，不支持有序列表。

1. 一个列表项
2. 另一个列表项
3. 第三个列表项

使用 Markdown 最大的意义在于可以让你关注写作本身，不需要花费精力在别的事情上。无论是严肃写作还是随手记，Markdown 都是最佳形式。

> 引用：使用 Markdown 最大的意义在于可以让你关注写作本身 —— Lyric

好。

## 代码块、表格、图片

接下来是一张图片。你可以用自己图床，也可以上传到微信媒体库再把图片 URL 粘贴回来，或者编辑好以后，在公众号里插入图片。

![](https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/login/loginpage/images/bg_banner4273fb.png)

代码块，使用微信官方的高亮配色，在代码块标示语言即可。粘贴到公众号后，需要用鼠标点一下代码块，完成高亮。


    ```cpp
    你的代码
    ```



```cpp
#include <stdio.h>

const int MAX = 10;
int cache[MAX] = {0};

int fib(int x) {
  if (x == 1) return 1;
  if (x == 0) return 0;
  if (cache[x] == 0) {
    int ret = fib(x - 1) + fib(x - 2);
    cache[x] = ret;
  }
  return cache[x];
}

int main() {
    int i;
    printf("fibonacci series:\n");
    for (i = 0; i < MAX; ++i) {
        printf("%d ", fib(i));
    }
    return 0;
}
```

然后是一个内联代码： a paragraphg with inline code `{code: 0}`。

接下来是表格示例：

| Header 1 | Header 2 |
| --- | --- |
| Key 1 | Value 1 |
| Key 2 | Value 2 |
| Key 3 | Value 3 |

