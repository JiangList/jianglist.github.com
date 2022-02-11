(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1003:function(t,s,a){"use strict";a.r(s);var e=a(1),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件系统"}},[t._v("#")]),t._v(" 文件系统")]),t._v(" "),a("p",[t._v("目录就相当于 Windows 中的文件夹，目录中存放的既可以是文件，也可以是其他的子目录，而文件中存储的是真正的信息。")]),t._v(" "),a("p",[t._v("文件系统的最顶层是由根目录开始的，系统使用“"),a("code",[t._v("/")]),t._v("”来表示根目录，在根目录之下的既可以是目录，也可以是文件，而每一个目录中又可以包含(子)目录或文件。如此反复就可以构成一个庞大的文件系统。\n其实，使用这种树状、具有层次的文件结构主要目的是方便文件系统的管理和维护，想象一下，如果所有的文件都放在一个目录下，其文件系统的管理和维护将变成一场噩梦。")]),t._v(" "),a("p",[t._v("现实中也有许多类似的例子，例如在整个行政管理体制中，村民就相当于文件，他们住在一个村庄中，村庄就是存储村民的目录。许多村又组成了个乡，这个乡就相当于存储村的目录，依此类推，最终就构建出了一个庞大的行政区域管理结构图。")]),t._v(" "),a("p",[t._v("注意，目录名或文件名都是区分大小写的，如 dog、DOG 和 Dog 为 3 个不同的目录或文件。完整的目录或文件路径是由一连串的目录名所组成的，其中每一个目录由“/”来分隔。如 cat 的完整路径是 "),a("code",[t._v("/home/cat")]),t._v("。")]),t._v(" "),a("p",[t._v("在文件系统中，有两个特殊的目录，一个是用户所在的工作目录，即当前目录，可用一个点“"),a("code",[t._v(".")]),t._v("”表示；另一个是当前目录的上一层目录，也叫父目录，用两个点“"),a("code",[t._v("..")]),t._v("”表示。")]),t._v(" "),a("p",[t._v("如果一个目录或文件名是以一个点开始，就表示这个目录或文件是一个隐藏目录或文件。即以默认方式査找(后续会讲查找命令)时，不显示该目录或文件。")]),t._v(" "),a("p",[t._v("为了方便管理和维护，Linux 系统采用了文件系统层次标准，也称为 FHS 标准，它规定了根目录下各个目录应该存在哪些类型的文件(或子目录)，比如说，在 "),a("code",[t._v("/bin")]),t._v(" 和 "),a("code",[t._v("/sbin")]),t._v(" 目录中存放的应该是可执行文件，有关各个目录存放文件的类型，已在《Linux 文件目录结构一览表》一节中作了详解介绍，这里不再过多赘述。")]),t._v(" "),a("h2",{attrs:{id:"文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[t._v("#")]),t._v(" 文件")]),t._v(" "),a("p",[t._v("虽然从名称上不容易分辨，但是可以从颜色上进行区分。一般情况下，Linux 用蓝色代表目录，其他颜色则表示是文件。")]),t._v(" "),a("p",[t._v("和 Linux 不同，Windows 下带有 "),a("code",[t._v("<DIR>")]),t._v(" 标记的行或使用中括号 "),a("code",[t._v("[]")]),t._v(" 括起来的名称就是目录，其他的则是文件。")]),t._v(" "),a("p",[t._v("不仅如此，Linux 中还可以用不同的颜色来区分不同种类的文件，例如绿色代表可执行文件、红色代表压缩文件、浅绿色代表链接文件、白色代表其他文件、黄色代表设备文件等。")]),t._v(" "),a("p",[t._v("但是，不同颜色所代表的文件类型不一定是这样，更准确的对应方式还取决于配置文件 "),a("code",[t._v("/etc/DIR_COLORS")]),t._v(" 中的规定。因此，如果想详细了解不同文件类型所对应的颜色，可以使用 "),a("code",[t._v("man")]),t._v(" 命令，例如:")]),t._v(" "),a("div",{staticClass:"language-shell-session line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token info punctuation"}},[a("span",{pre:!0,attrs:{class:"token user"}},[t._v("[root@localhost ~]")])]),a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("man")]),t._v(" dir_colors")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("注意，有些 Linux 发行版单独使用 "),a("code",[t._v("ls")]),t._v(" 命令，无法显示出带有不同颜色的文件和目录，此时就需要使用 "),a("code",[t._v("ls --color=auto")]),t._v(" 命令，明确令其使用颜色来区分文件类型。")]),t._v(" "),a("p",[t._v("在此基础上，如果不想每次使用 "),a("code",[t._v("ls")]),t._v(" 命令时，都显式附带 "),a("code",[t._v("--color=auto")]),t._v("，可以执行如下命令:")]),t._v(" "),a("div",{staticClass:"language-shell-session line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token info punctuation"}},[a("span",{pre:!0,attrs:{class:"token user"}},[t._v("[root@localhost ~]")])]),a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ls --color=auto'")])])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("通过给 "),a("code",[t._v("ls --color==auto")]),t._v(" 这个整体设置一个别名 "),a("code",[t._v("ls")]),t._v("，这样当后续使用 "),a("code",[t._v("ls")]),t._v(" 命令时，就等同于执行 "),a("code",[t._v("ls --color=auto")]),t._v(" 命令。")]),t._v(" "),a("p",[t._v("同时，如果想使这个设置永远生效，还需要将其添加到 "),a("code",[t._v("/etc/bashrc")]),t._v(" 或 "),a("code",[t._v("/home/<user>/.bashrc")]),t._v(" 文件中，前者对所有用户有效，而后者仅对用户 "),a("code",[t._v("<user>")]),t._v(" 有效。")]),t._v(" "),a("p",[t._v("其实，那些默认提供颜色功能的 Linux 发行版，也是通过这个方法开启的功能。")]),t._v(" "),a("p",[t._v("当然，通过颜色来区分文件类型，难免有些牵强，对于颜色不太敏感的读者来说，很容易搞错。Linux 中精确判断文件类型的方法，是通过文件本身所具有的属性进行判断。")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("ls -l")]),t._v(" 命令，我们就可以查看当前目录下所有文件和目录各自的属性")]),t._v(" "),a("h2",{attrs:{id:"命名规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名规则"}},[t._v("#")]),t._v(" 命名规则")]),t._v(" "),a("ul",[a("li",[t._v("除了字符“/”之外，所有的字符都可以使用，但是要注意，在目录名或文件名中，使用某些特殊字符并不是明智之举。例如，在命名时应避免使用 "),a("code",[t._v("<")]),t._v("、"),a("code",[t._v(">")]),t._v("、"),a("code",[t._v("?")]),t._v("、"),a("code",[t._v("*")]),t._v(" 和非打印字符等。如果一个文件名中包含了特殊字符，例如空格，那么在访问这个文件时就需要使用引号将文件名括起来。")]),t._v(" "),a("li",[t._v("目录名或文件名的长度不能超过 255 个字符。")]),t._v(" "),a("li",[t._v("目录名或文件名是区分大小写的。如 DOG、dog、Dog 和 DOg ，是互不相同的目录名或文件名，但使用字符大小写来区分不同的文件或目录，也是不明智的。")])]),t._v(" "),a("h2",{attrs:{id:"不同字符对应的文件类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同字符对应的文件类型"}},[t._v("#")]),t._v(" 不同字符对应的文件类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("第一个字符")]),t._v(" "),a("th",[t._v("文件类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("普通文件，包括纯文本文件、二进制文件、各种压缩文件等。")])]),t._v(" "),a("tr",[a("td",[t._v("d")]),t._v(" "),a("td",[t._v("目录，类似 Windows 系统中的文件夹。")])]),t._v(" "),a("tr",[a("td",[t._v("b")]),t._v(" "),a("td",[t._v("块设备文件，就是保存大块数据的设备，比如最常见的硬盘。")])]),t._v(" "),a("tr",[a("td",[t._v("c")]),t._v(" "),a("td",[t._v("字符设备文件，例如键盘、鼠标等。")])]),t._v(" "),a("tr",[a("td",[t._v("s")]),t._v(" "),a("td",[t._v("套接字文件，通常用在网络数据连接，可以启动一个程序开监听用户的要求，用户可以通过套接字进行数据通信。")])]),t._v(" "),a("tr",[a("td",[t._v("p")]),t._v(" "),a("td",[t._v("管道文件，其主要作用是解决多个程序同时存取一个文件所造成的错误。")])]),t._v(" "),a("tr",[a("td",[t._v("l")]),t._v(" "),a("td",[t._v("链接文件，类似 Windows 系统中的快捷方式。")])])])])])}),[],!1,null,null,null);s.default=v.exports},1004:function(t,s,a){"use strict";a.r(s);var e=a(1),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/linux/file/file.html"}},[t._v("Linux 文件")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/linux/file/dir.html"}},[t._v("Linux 目录")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/linux/file/mount.html"}},[t._v("挂载")])],1)])])])}),[],!1,null,null,null);s.default=v.exports},1055:function(t,s,a){"use strict";a.r(s);var e=a(1),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"切换侧边栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换侧边栏"}},[t._v("#")]),t._v(" 切换侧边栏")]),t._v(" "),a("p",[t._v("键盘快捷键: "),a("code",[t._v("Ctrl + B")])]),t._v(" "),a("h2",{attrs:{id:"切换面板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换面板"}},[t._v("#")]),t._v(" 切换面板")]),t._v(" "),a("p",[t._v("键盘快捷键: "),a("code",[t._v("Ctrl + J")])]),t._v(" "),a("h2",{attrs:{id:"zen-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zen-模式"}},[t._v("#")]),t._v(" Zen 模式")]),t._v(" "),a("p",[t._v("键盘快捷键: "),a("code",[t._v("Ctrl + K Z")])]),t._v(" "),a("p",[t._v("进入无干扰禅宗模式。")]),t._v(" "),a("p",[t._v("按两次 "),a("code",[t._v("Esc")]),t._v(" 键退出 Zen 模式。")]),t._v(" "),a("h2",{attrs:{id:"并排编辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并排编辑"}},[t._v("#")]),t._v(" 并排编辑")]),t._v(" "),a("p",[t._v("键盘快捷键: "),a("code",[t._v("Ctrl + \\")])]),t._v(" "),a("p",[t._v("您还可以拖放编辑器以创建新的编辑器组，并在组之间移动编辑器。")]),t._v(" "),a("h2",{attrs:{id:"编辑之间切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑之间切换"}},[t._v("#")]),t._v(" 编辑之间切换")]),t._v(" "),a("p",[t._v("键盘快捷键: "),a("code",[t._v("Ctrl + 1")]),t._v("，"),a("code",[t._v("Ctrl + 2")]),t._v("，"),a("code",[t._v("Ctrl + 3")])]),t._v(" "),a("h2",{attrs:{id:"移至资源管理器窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移至资源管理器窗口"}},[t._v("#")]),t._v(" 移至资源管理器窗口")]),t._v(" "),a("p",[t._v("键盘快捷键: "),a("code",[t._v("Ctrl + Shift + E")])]),t._v(" "),a("h2",{attrs:{id:"创建或打开一个文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建或打开一个文件"}},[t._v("#")]),t._v(" 创建或打开一个文件")]),t._v(" "),a("p",[t._v("键盘快捷键: "),a("code",[t._v("Ctrl + click")])]),t._v(" "),a("p",[t._v("您可以通过将光标移动到文件链接并使用 "),a("code",[t._v("Ctrl + click")]),t._v(" 来快速打开文件或图像或创建新文件。")]),t._v(" "),a("h2",{attrs:{id:"关闭当前打开的文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭当前打开的文件夹"}},[t._v("#")]),t._v(" 关闭当前打开的文件夹")]),t._v(" "),a("p",[t._v("键盘快捷键: "),a("code",[t._v("Ctrl + F4")])]),t._v(" "),a("h2",{attrs:{id:"导航历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导航历史"}},[t._v("#")]),t._v(" 导航历史")]),t._v(" "),a("p",[t._v("浏览整个历史记录: "),a("code",[t._v("Ctrl + Tab")])]),t._v(" "),a("p",[t._v("向后导航: "),a("code",[t._v("Alt + ←")])]),t._v(" "),a("p",[t._v("向前导航: "),a("code",[t._v("Alt + →")])]),t._v(" "),a("h2",{attrs:{id:"文件关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件关联"}},[t._v("#")]),t._v(" 文件关联")]),t._v(" "),a("p",[t._v("为未正确检测到的文件创建语言关联。例如，许多带有自定义文件扩展名的配置文件实际上是 JSON。")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files.associations"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('".database"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"防止脏写入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防止脏写入"}},[t._v("#")]),t._v(" 防止脏写入")]),t._v(" "),a("p",[t._v("当您尝试保存已经再打开后再度在磁盘上发生更改的文件时，VS Code 将显示一条错误消息。VS Code 阻止保存文件，以防止覆盖在编辑器之外进行的更改。")]),t._v(" "),a("p",[t._v("为了解决保存冲突，请在错误消息中单击 "),a("strong",[t._v("比较")]),t._v(" 操作以打开差异编辑器，该差异编辑器将向您显示磁盘上文件的内容(左侧)，与 VS Code 中的内容(右侧)相比:")]),t._v(" "),a("p",[t._v("使用编辑器工具栏中的操作来解决保存冲突。您可以接受更改并覆盖磁盘上的所有更改，也可以还原为磁盘上的版本。还原意味着您的更改将丢失。")]),t._v(" "),a("p",[t._v("注意: 该文件将保持 "),a("code",[t._v("dirty")]),t._v(" 状态，直到您选择两个解决冲突的操作之一后才能保存。")])])}),[],!1,null,null,null);s.default=v.exports},996:function(t,s,a){"use strict";a.r(s);var e=a(1),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"touch-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#touch-命令"}},[t._v("#")]),t._v(" touch 命令")]),t._v(" "),a("p",[t._v("需要注意的是，touch 命令不光可以用来创建文件(当指定操作文件不存在时，该命令会在当前位置建立一个空文件)，此命令更重要的功能是修改文件的时间参数(但当文件存在时，会修改此文件的时间参数)。")]),t._v(" "),a("p",[t._v("Linux 系统中，每个文件主要拥有 3 个时间参数(通过 stat 命令进行查看)，分别是文件的访问时间、数据修改时间以及状态修改时间:")]),t._v(" "),a("ul",[a("li",[t._v("访问时间 (Access Time，简称 atime): 只要文件的内容被读取，访问时间就会更新。例如，使用 "),a("code",[t._v("cat")]),t._v(" 命令可以查看文件的内容，此时文件的访问时间就会发生改变。")]),t._v(" "),a("li",[t._v("数据修改时间 (Modify Time，简称 mtime): 当文件的内容数据发生改变，此文件的数据修改时间就会跟着相应改变。")]),t._v(" "),a("li",[t._v("状态修改时间 (Change Time，简称 ctime): 当文件的状态发生变化，就会相应改变这个时间。比如说，如果文件的权限或者属性发生改变，此时间就会相应改变。")])]),t._v(" "),a("p",[t._v("touch 命令的基本格式如下:")]),t._v(" "),a("div",{staticClass:"language-shell-session line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token info punctuation"}},[a("span",{pre:!0,attrs:{class:"token user"}},[t._v("[root@localhost ~]")])]),a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 文件名")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("选项:")]),t._v(" "),a("ul",[a("li",[t._v("-a: 只修改文件的访问时间；")]),t._v(" "),a("li",[t._v("-c: 仅修改文件的时间参数(3 个时间参数都改变)，如果文件不存在，则不建立新文件。")]),t._v(" "),a("li",[t._v("-d: 后面可以跟欲修订的日期，而不用当前的日期，即把文件的 atime 和 mtime 时间改为指定的时间。")]),t._v(" "),a("li",[t._v("-m: 只修改文件的数据修改时间。")]),t._v(" "),a("li",[t._v("-t: 命令后面可以跟欲修订的时间，而不用目前的时间，时间书写格式为 YYMMDDhhmm。")])]),t._v(" "),a("p",[t._v("可以看到，touch 命令可以只修改文件的访问时间，也可以只修改文件的数据修改时间，但是不能只修改文件的状态修改时间。因为，不论是修改访问时间，还是修改文件的数据时间，对文件来讲，状态都会发生改变，即状态修改时间会随之改变(更新为操作当前文件的真正时间)。")]),t._v(" "),a("h2",{attrs:{id:"ln-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ln-命令"}},[t._v("#")]),t._v(" ln 命令")]),t._v(" "),a("p",[t._v("如果要想说清楚 ln 命令，则必须先解释下 ext 文件系统(Linux 文件系统)是如何工作的。我们在前面讲解了分区的格式化就是写入文件系统，而我们的 Linux 目前使用的是 ext4 文件系统。")]),t._v(" "),a("p",[t._v("ext4 文件系统会把分区主要分为两大部分(暂时不提超级块): 小部分用于保存文件的 inode (i 节点)信息；剩余的大部分用于保存 block 信息。")]),t._v(" "),a("p",[t._v("inode 的默认大小为 128 Byte，用来记录文件的权限(r、w、x)、文件的所有者和属组、文件的大小、文件的状态改变时间(ctime)、文件的最近一次读取时间(atime)、文件的最近一次修改时间(mtime)、文件的数据真正保存的 block 编号。每个文件需要占用一个 inode。大家如果仔细查看，就会发现 inode 中是不记录文件名的，那是因为文件名记录在文件所在目录的 block 中。")]),t._v(" "),a("p",[t._v("block 的大小可以是 1KB、2KB、4KB，默认为 4KB。block 用于实际的数据存储，如果一个 block 放不下数据，则可以占用多个 block。例如，有一个 10KB 的文件需要存储，则会占用 3 个 block，虽然最后一个 block 不能占满，但也不能再放入其他文件的数据。这 3 个 block 有可能是连续的，也有可能是分散的。")]),t._v(" "),a("p",[t._v("由此，我们可以知道以下 2 个重要的信息:")]),t._v(" "),a("ol",[a("li",[t._v("每个文件都独自占用一个 inode，文件内容由 inode 的记录来指向；")]),t._v(" "),a("li",[t._v("如果想要读取文件内容，就必须借助目录中记录的文件名找到该文件的 inode，才能成功找到文件内容所在的 block 块；")])]),t._v(" "),a("p",[t._v("了解了 Linux 系统底层文件的存储状态后，接下来学习 ln 命令。")]),t._v(" "),a("p",[t._v("ln 命令用于给文件创建链接，根据 Linux 系统存储文件的特点，链接的方式分为以下 2 种:")]),t._v(" "),a("ul",[a("li",[t._v("软链接: 类似于 Windows 系统中给文件创建快捷方式，即产生一个特殊的文件，该文件用来指向另一个文件，此链接方式同样适用于目录。")]),t._v(" "),a("li",[t._v("硬链接: 我们知道，文件的基本信息都存储在 inode 中，而硬链接指的就是给一个文件的 inode 分配多个文件名，通过任何一个文件名，都可以找到此文件的 inode，从而读取该文件的数据信息。")])]),t._v(" "),a("p",[t._v("ln 命令的基本格式如下:")]),t._v(" "),a("div",{staticClass:"language-shell-session line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token info punctuation"}},[a("span",{pre:!0,attrs:{class:"token user"}},[t._v("[root@localhost ~]")])]),a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 源文件 目标文件")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("选项:")]),t._v(" "),a("ul",[a("li",[t._v("-s: 建立软链接文件。如果不加 "),a("code",[t._v("-s")]),t._v(" 选项，则建立硬链接文件；")]),t._v(" "),a("li",[t._v("-f: 强制。如果目标文件已经存在，则删除目标文件后再建立链接文件；")])]),t._v(" "),a("h3",{attrs:{id:"ln-扩展介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ln-扩展介绍"}},[t._v("#")]),t._v(" ln 扩展介绍")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/linux/command/ln.html"}},[t._v("点击前往")])],1)])])}),[],!1,null,null,null);s.default=v.exports}}]);