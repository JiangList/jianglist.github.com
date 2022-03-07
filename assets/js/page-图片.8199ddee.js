(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1004:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"插入图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入图片"}},[t._v("#")]),t._v(" 插入图片")]),t._v(" "),s("p",[t._v("我们可以用 "),s("code",[t._v("<img>")]),t._v(" 元素来把图片放到网页上。它是一个空元素(也就是无法包含内容，可以省略闭合标签)，最少只需要一个 "),s("code",[t._v("src")]),t._v(" (一般读作其全称 source)来使其生效。"),s("code",[t._v("src")]),t._v(" 属性包含了指向我们想要引入的图片的路径，可以是相对路径或绝对 URL，就像 "),s("code",[t._v("<a>")]),t._v(" 元素的 "),s("code",[t._v("href")]),t._v(" 属性一样。")]),t._v(" "),s("p",[t._v("如果您有一幅文件名为 dinosaur.jpg 的图片，且它与您的 HTML 页面存放在相同路径下，那么您可以这样嵌入它:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dinosaur.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如果这张图片存储在和 HTML 页面同路径的 images 文件夹下(这也是 Google 推荐的做法，利于 SEO/索引)，那么您可以采用如下形式:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("images/dinosaur.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("搜索引擎也读取图像的文件名并把它们计入 SEO。因此您应该给您的图片取一个描述性的文件名: dinosaur.jpg 比 img835.png 要好。")])]),t._v(" "),s("p",[t._v("您也可以像下面这样使用绝对路径:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.example.com/images/dinosaur.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("但是这种方式是不被推荐的，这样做只会使浏览器做更多的工作，例如重新通过 DNS 再去寻找 IP 地址。通常我们都会把图片和 HTML 放在同一个服务器上。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("大多数图片是有版权的。不要在您的网页上使用一张图片，除非:")]),t._v(" "),s("ul",[s("li",[t._v("您是图片版权所有者")]),t._v(" "),s("li",[t._v("您有图片版权所有者明确的、书面上的使用授权")]),t._v(" "),s("li",[t._v("您有充分的证据证明这张图片是公共领域内的")])]),t._v(" "),s("p",[t._v("侵犯版权是违法并且不道德的。此外，在得到授权之前永远不要把您的 "),s("code",[t._v("src")]),t._v(' 属性指向其他人网站上的图片。这被称为"盗链(hotlinking)"。同样，盗取其他人的带宽也是违法的。而且这会降低您的页面的加载速度，而且图片可能会在不受您控制的情况下被移走或用别的令人尴尬的东西替换掉。')])]),t._v(" "),s("div",{staticClass:"custom-block info"},[s("p",{staticClass:"custom-block-title"},[t._v("相关信息")]),t._v(" "),s("p",[t._v("像 "),s("code",[t._v("<img>")]),t._v(" 和 "),s("code",[t._v("<video>")]),t._v(" 这样的元素有时被称之为替换元素，因为这样的元素的内容和尺寸由外部资源(像是一个图片或视频文件)所定义，而不是元素自身。")])]),t._v(" "),s("h2",{attrs:{id:"备选文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备选文本"}},[t._v("#")]),t._v(" 备选文本")]),t._v(" "),s("p",[s("code",[t._v("alt")]),t._v(" 的值应该是对图片的文字描述，用于在图片无法显示或不能被看到的情况。")]),t._v(" "),s("div",{staticClass:"code-demo-wrapper",attrs:{id:"code-demo-6d9c7716","data-title":"%E6%A1%88%E4%BE%8B","data-code":"%7B%22html%22%3A%22%3Cimg%5Cn%20%20src%3D%5C%22http%3A%2F%2Fmrhope.site%2Fassets%2Fimg%2Fdinosaur_small.jpg%5C%22%5Cn%20%20alt%3D%5C%22The%20head%20and%20torso%20of%20a%20dinosaur%20skeleton%3B%20it%20has%20a%20large%20head%20with%20long%20sharp%20teeth%5C%22%5Cn%2F%3E%5Cn%22%7D"}},[s("div",{staticClass:"demo-wrapper"}),t._v(" "),s("div",{staticClass:"code-wrapper"},[s("div",{staticClass:"code"},[s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://mrhope.site/assets/img/dinosaur_small.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])]),t._v(" "),s("div",{staticClass:"code-demo-footer"})]),t._v(" "),s("p",[t._v("测试 "),s("code",[t._v("alt")]),t._v(" 属性最简单的方式就是故意拼错图片文件名，这样浏览器就无法找到该图片从而显示备选的文本。")]),t._v(" "),s("p",[t._v("设置备选文本的原因有很多:")]),t._v(" "),s("ul",[s("li",[t._v("用户有视力障碍，通过屏幕阅读器来浏览网页 。事实上，给图片一个备选的描述文本对大多数用户都是很有用的。")]),t._v(" "),s("li",[t._v("就像上面所说的，您也许会把图片的路径或文件名拼错。")]),t._v(" "),s("li",[t._v("浏览器不支持该图片类型。")]),t._v(" "),s("li",[t._v("您会想提供一些文字描述来给搜索引擎使用，例如搜索引擎可能会将图片的文字描述和查询条件进行匹配。")]),t._v(" "),s("li",[t._v("用户关闭的图片显示以减少数据的传输，这之前在手机上是十分普遍的，并且在一些国家带宽有限且昂贵。")])]),t._v(" "),s("p",[s("code",[t._v("alt")]),t._v(" 中的内容取决于图片的作用:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("装饰:")]),t._v(" "),s("p",[t._v("如果图片只是用于装饰，而不是内容的一部分，可以写一个空的 "),s("code",[t._v('alt=""')]),t._v("。例如，屏幕阅读器不会浪费时间对用户读出不是核心需要的内容。实际上装饰性图片就不应该放在 HTML 文件里， "),s("RouterLink",{attrs:{to:"/code/website/css/background-and-border.html#背景图片"}},[t._v("CSS 背景图片")]),t._v(" 才应该用于插入装饰图片，但如果这种情况无法避免， "),s("code",[t._v('alt=""')]),t._v(" 会是最佳处理方案。")],1)]),t._v(" "),s("li",[s("p",[t._v("内容:")]),t._v(" "),s("p",[t._v("如果您的图片提供了重要的信息，就要在 "),s("code",[t._v("alt")]),t._v(" 文本中简要的提供相同的信息，甚至更近一步，把这些信息写在主要的文本内容里，这样所有人都能看见。不要写冗余的备选文本，如果在主要文本中已经对图片进行了充分的描述，写 "),s("code",[t._v('alt=""')]),t._v(" 就好。")])]),t._v(" "),s("li",[s("p",[t._v("链接:")]),t._v(" "),s("p",[t._v("如果您把图片嵌套在 "),s("code",[t._v("<a>")]),t._v(" 标签里，来把图片变成链接，那您还必须提供无障碍的链接文本。在这种情况下，您可以写在同一个 "),s("code",[t._v("<a>")]),t._v(" 元素里，或者写在图片的 "),s("code",[t._v("alt")]),t._v(" 属性里，随您喜欢。")])]),t._v(" "),s("li",[s("p",[t._v("文本:")]),t._v(" "),s("p",[t._v("您不应该将文本放到图像里。例如，如果您的主标题需要有阴影，您可以用 CSS 来达到这个目的，而不是把文本放到图片里。如果真的必须这么做，那就把文本也放到 "),s("code",[t._v("alt")]),t._v(" 里。")])])]),t._v(" "),s("p",[t._v("本质上，关键在于在图片无法被看见时也提供一个可用的体验，这确保了所有人都不会错失一部分内容。")]),t._v(" "),s("h2",{attrs:{id:"宽度和高度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宽度和高度"}},[t._v("#")]),t._v(" 宽度和高度")]),t._v(" "),s("p",[t._v("您可以用宽度和高度属性来指定您的图片的高度和宽度。")]),t._v(" "),s("div",{staticClass:"code-demo-wrapper",attrs:{id:"code-demo-ba12f6de","data-title":"%E8%AE%BE%E7%BD%AE%E5%AE%BD%E5%BA%A6%E5%92%8C%E9%AB%98%E5%BA%A6","data-code":"%7B%22html%22%3A%22%3Cimg%5Cn%20%20src%3D%5C%22http%3A%2F%2Fmrhope.site%2Fassets%2Fimg%2Fdinosaur_small.jpg%5C%22%5Cn%20%20alt%3D%5C%22%E4%B8%80%E5%8F%AA%E6%81%90%E9%BE%99%E5%A4%B4%E9%83%A8%E5%92%8C%E8%BA%AF%E5%B9%B2%E7%9A%84%E9%AA%A8%E6%9E%B6%EF%BC%8C%E5%AE%83%E6%9C%89%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%A4%B4%EF%BC%8C%E9%95%BF%E7%9D%80%E9%94%8B%E5%88%A9%E7%9A%84%E7%89%99%E9%BD%BF%E3%80%82%5C%22%5Cn%20%20width%3D%5C%22400%5C%22%5Cn%20%20height%3D%5C%22341%5C%22%5Cn%2F%3E%5Cn%22%7D"}},[s("div",{staticClass:"demo-wrapper"}),t._v(" "),s("div",{staticClass:"code-wrapper"},[s("div",{staticClass:"code"},[s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://mrhope.site/assets/img/dinosaur_small.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("400"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("341"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])]),t._v(" "),s("div",{staticClass:"code-demo-footer"})]),t._v(" "),s("p",[t._v("在正常的情况下，这不会对显示产生很大的影响， 但是如果图片没有显示(例如用户刚刚开始浏览网页，但是图片还没有加载完成)，您会注意到浏览器会为要显示的图片留下一定的空间。这会使得页面加载更令人愉悦，而不是被跳动的内容布局所困扰。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("不应使用 HTML 属性来改变图片的大小。")]),t._v(" "),s("ul",[s("li",[t._v("如果您把尺寸设定的太大，最终图片看起来会模糊；")]),t._v(" "),s("li",[t._v("如果太小，会在下载远远大于您需要的图片时浪费带宽；")]),t._v(" "),s("li",[t._v("如果您没有保持正确的宽高比，图片可能看起来会扭曲。")])]),t._v(" "),s("p",[t._v("在把图片放到您的网站页面之前，您应该使用图形编辑器使图片的尺寸正确。")])]),t._v(" "),s("h2",{attrs:{id:"图片标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片标题"}},[t._v("#")]),t._v(" 图片标题")]),t._v(" "),s("p",[t._v("类似于超链接，您可以给图片增加 "),s("code",[t._v("title")]),t._v(" 属性来提供需要更进一步的支持信息。")]),t._v(" "),s("div",{staticClass:"code-demo-wrapper",attrs:{id:"code-demo-6b468ffb","data-title":"%E5%9B%BE%E7%89%87%E6%A0%87%E9%A2%98","data-code":"%7B%22html%22%3A%22%3Cimg%5Cn%20%20src%3D%5C%22http%3A%2F%2Fmrhope.site%2Fassets%2Fimg%2Fdinosaur_small.jpg%5C%22%5Cn%20%20alt%3D%5C%22%E4%B8%80%E5%8F%AA%E6%81%90%E9%BE%99%E5%A4%B4%E9%83%A8%E5%92%8C%E8%BA%AF%E5%B9%B2%E7%9A%84%E9%AA%A8%E6%9E%B6%EF%BC%8C%E5%AE%83%E6%9C%89%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%A4%B4%EF%BC%8C%E9%95%BF%E7%9D%80%E9%94%8B%E5%88%A9%E7%9A%84%E7%89%99%E9%BD%BF%E3%80%82%5C%22%5Cn%20%20width%3D%5C%22400%5C%22%5Cn%20%20height%3D%5C%22341%5C%22%5Cn%20%20title%3D%5C%22A%20T-Rex%20on%20display%20in%20the%20Manchester%20University%20Museum%5C%22%5Cn%2F%3E%5Cn%22%7D"}},[s("div",{staticClass:"demo-wrapper"}),t._v(" "),s("div",{staticClass:"code-wrapper"},[s("div",{staticClass:"code"},[s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://mrhope.site/assets/img/dinosaur_small.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("400"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("341"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A T-Rex on display in the Manchester University Museum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])]),t._v(" "),s("div",{staticClass:"code-demo-footer"})]),t._v(" "),s("p",[t._v("这会给我们一个鼠标悬停提示，看起来就像链接标题。")]),t._v(" "),s("p",[t._v("图片标题并不必须要包含有意义的信息，通常来说，将这样的支持信息放到主要文本中而不是附着于图片会更好。不过，在当没有空间显示提示时这样做更有用，比如在一个图库样式的照片流中。")]),t._v(" "),s("p",[t._v("然而并不建议使用 "),s("code",[t._v("title")]),t._v("。"),s("code",[t._v("title")]),t._v(" 会带来易访问性的问题，屏幕阅读器的支持是不可预测的，而且大多数浏览器在鼠标悬停外都不会显示它。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("您可以使用 "),s("a",{attrs:{href:"https://github.com/kazzkiq/balloon.css",target:"_blank",rel:"noopener noreferrer"}},[t._v("balloon-css"),s("OutboundLink")],1),t._v(" 库很好的解决这个问题")])]),t._v(" "),s("h2",{attrs:{id:"搭配说明文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭配说明文字"}},[t._v("#")]),t._v(" 搭配说明文字")]),t._v(" "),s("p",[t._v("HTML5 的 "),s("code",[t._v("<figure>")]),t._v(" 和 "),s("code",[t._v("<figcaption>")]),t._v(" 元素为图片提供一个语义容器，在标题和图片之间建立清晰的关联。")]),t._v(" "),s("div",{staticClass:"code-demo-wrapper",attrs:{id:"code-demo-20baef66","data-title":"HTML5%20%E8%AF%AD%E4%B9%89%E5%AE%B9%E5%99%A8","data-code":"%7B%22html%22%3A%22%3Cfigure%3E%5Cn%20%20%3Cimg%5Cn%20%20%20%20src%3D%5C%22http%3A%2F%2Fmrhope.site%2Fassets%2Fimg%2Fdinosaur_small.jpg%5C%22%5Cn%20%20%20%20alt%3D%5C%22%E4%B8%80%E5%8F%AA%E6%81%90%E9%BE%99%E5%A4%B4%E9%83%A8%E5%92%8C%E8%BA%AF%E5%B9%B2%E7%9A%84%E9%AA%A8%E6%9E%B6%EF%BC%8C%E5%AE%83%E6%9C%89%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%A4%B4%EF%BC%8C%E9%95%BF%E7%9D%80%E9%94%8B%E5%88%A9%E7%9A%84%E7%89%99%E9%BD%BF%E3%80%82%5C%22%5Cn%20%20%20%20width%3D%5C%22400%5C%22%5Cn%20%20%20%20height%3D%5C%22341%5C%22%5Cn%20%20%2F%3E%5Cn%20%20%3Cfigcaption%3E%E6%9B%BC%E5%BD%BB%E6%96%AF%E7%89%B9%E5%A4%A7%E5%AD%A6%E5%8D%9A%E7%89%A9%E9%A6%86%E5%B1%95%E5%87%BA%E7%9A%84%E4%B8%80%E5%8F%AA%E9%9C%B8%E7%8E%8B%E9%BE%99%E7%9A%84%E5%8C%96%E7%9F%B3%3C%2Ffigcaption%3E%5Cn%3C%2Ffigure%3E%5Cn%22%7D"}},[s("div",{staticClass:"demo-wrapper"}),t._v(" "),s("div",{staticClass:"code-wrapper"},[s("div",{staticClass:"code"},[s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("figure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://mrhope.site/assets/img/dinosaur_small.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("400"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("341"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("figcaption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("曼彻斯特大学博物馆展出的一只霸王龙的化石"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("figcaption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("figure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])]),t._v(" "),s("div",{staticClass:"code-demo-footer"})]),t._v(" "),s("p",[t._v("这个 "),s("code",[t._v("<figcaption>")]),t._v(" 元素 告诉浏览器和其他辅助的技术工具这段说明文字描述了 "),s("code",[t._v("<figure>")]),t._v(" 元素的内容。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("从无障碍的角度来说，说明文字和 alt 文本扮演着不同的角色。看得见图片的人们同样可以受益于说明文字，而 alt 文字只有在图片无法显示时才这样。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("figure 的使用")]),t._v(" "),s("p",[s("code",[t._v("<figure>")]),t._v(" 里不一定要是一张图片，只要是一个这样的独立内容单元:")]),t._v(" "),s("ul",[s("li",[t._v("用简洁、易懂的方式表达意图。")]),t._v(" "),s("li",[t._v("可以置于页面线性流的某处。")]),t._v(" "),s("li",[t._v("为主要内容提供重要的补充说明。")])]),t._v(" "),s("p",[s("code",[t._v("<figure>")]),t._v(" 可以是几张图片、一段代码、音视频、方程、表格或别的。")])]),t._v(" "),s("h2",{attrs:{id:"自适应的图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自适应的图片"}},[t._v("#")]),t._v(" 自适应的图片")]),t._v(" "),s("p",[t._v("在这一部分中，我们将看看上面说明的两个问题，并且展示怎样用 HTML 的响应式图片来解决这些问题。")]),t._v(" "),s("h3",{attrs:{id:"分辨率切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分辨率切换"}},[t._v("#")]),t._v(" 分辨率切换")]),t._v(" "),s("p",[t._v("我们想要显示相同的图片内容，仅仅依据设备来显示更大或更小的图片。标准的 "),s("code",[t._v("<img>")]),t._v(" 元素传统上仅仅让您给浏览器指定唯一的资源文件。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("elva-fairy-800w.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Elva dressed as a fairy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("但是 "),s("code",[t._v("srcset")]),t._v(" 和 "),s("code",[t._v("sizes")]),t._v(" 可以提供更多额外的资源图像和提示，帮助浏览器选择正确的一个资源。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n    elva-fairy-320w.jpg 320w,\n    elva-fairy-480w.jpg 480w,\n    elva-fairy-800w.jpg 800w\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sizes")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(max-width: 320px) 280px,\n            (max-width: 480px) 440px,\n            800px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("elva-fairy-800w.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Elva dressed as a fairy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[s("code",[t._v("srcset")]),t._v(" 和 "),s("code",[t._v("sizes")]),t._v(" 属性看起来很复杂，但是他们并不难理解。每个值都包含逗号分隔的列表。")]),t._v(" "),s("p",[s("code",[t._v("srcset")]),t._v(" 定义了我们允许浏览器选择的图像集，以及每个图像的大小。在每个逗号之前，我们写:")]),t._v(" "),s("ol",[s("li",[t._v("一个文件名 (elva-fairy-480w.jpg.)")]),t._v(" "),s("li",[t._v("一个空格")]),t._v(" "),s("li",[t._v("图像的固有宽度(以像素为单位)(480w)")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("注意使用 "),s("code",[t._v("w")]),t._v(" 单位，而不是您预计的 "),s("code",[t._v("px")]),t._v("。这是图像的真实大小。")])]),t._v(" "),s("p",[s("code",[t._v("sizes")]),t._v(" 定义了一组媒体条件(例如屏幕宽度)并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择—我们在之前已经讨论了一些提示。在这种情况下，在每个逗号之前，我们写:")]),t._v(" "),s("ol",[s("li",[t._v("一个媒体条件((max-width:480px))——您会在 CSS topic 中学到更多的。但是现在我们仅仅讨论的是媒体条件描述了屏幕可能处于的状态。在这里，我们说“当可视窗口的宽度是 480 像素或更少”。")]),t._v(" "),s("li",[t._v("一个空格")]),t._v(" "),s("li",[t._v("当媒体条件为真时，图像将填充的槽的宽度(440px)")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("您也许会提供宽度一个固定值 (px, em) 或者是一个相对于视口的长度(vw)。最后一个槽的宽度是没有媒体条件的，它是默认的，当没有任何一个媒体条件为真时，它就会生效。当浏览器成功匹配第一个媒体条件的时候，剩下所有的东西都会被忽略，所以要注意媒体条件的顺序。")])]),t._v(" "),s("p",[t._v("所以，有了这些属性，浏览器会:")]),t._v(" "),s("ol",[s("li",[t._v("查看设备宽度")]),t._v(" "),s("li",[t._v("检查 sizes 列表中哪个媒体条件是第一个为真")]),t._v(" "),s("li",[t._v("查看给予该媒体查询的槽大小")]),t._v(" "),s("li",[t._v("加载 srcset 列表中引用的最接近所选的槽大小的图像")])]),t._v(" "),s("p",[t._v("老旧的浏览器不支持这些特性，它会忽略这些特征。并继续正常加载 "),s("code",[t._v("src")]),t._v(" 属性引用的图像文件。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("在本博客 HTML 文件中的 "),s("code",[t._v("<head>")]),t._v(" 标签里，您将会找到这一行代码 "),s("code",[t._v('<meta name="viewport" content="width=device-width">')]),t._v("。这行代码会强制地让手机浏览器采用它们真实可视窗口的宽度来加载网页。")]),t._v(" "),s("p",[t._v("有些手机浏览器会提供不真实的可视窗口宽度, 然后加载比浏览器真实可视窗口的宽度大的宽度的网页，然后再缩小加载的页面，这样的做法对响应式图片或其他设计，没有任何帮助。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);