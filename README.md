# wechat-editor

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
关于本工具的介绍请看[这篇公众号文章](https://mp.weixin.qq.com/s/pn0LzyfgUj6rGUfVHUksjg)。