(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{937:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"awk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[s._v("#")]),s._v(" awk")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/AWK",target:"_blank",rel:"noopener noreferrer"}},[n("code",[s._v("awk")]),n("OutboundLink")],1),s._v("是处理文本文件的一个应用程序，几乎所有 Linux 系统都自带这个程序。")]),s._v(" "),n("p",[s._v("它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，"),n("code",[s._v("awk")]),s._v(" 可能是最方便的工具。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg",alt:"Book"}})]),s._v(" "),n("p",[n("code",[s._v("awk")]),s._v(" 其实不仅仅是工具软件，还是一种编程语言。不过，这里只介绍它的命令行用法，对于大多数场合，应该足够用了。")]),s._v(" "),n("h2",{attrs:{id:"基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[s._v("#")]),s._v(" 基本用法")]),s._v(" "),n("p",[n("code",[s._v("awk")]),s._v(" 的基本用法就是下面的形式。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" 动作 文件名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $0}'")]),s._v(" demo.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("上面示例中，"),n("code",[s._v("demo.txt")]),s._v(" 是 "),n("code",[s._v("awk")]),s._v(" 所要处理的文本文件。前面单引号内部有一个大括号，里面就是每一行的处理动作 "),n("code",[s._v("print $0")]),s._v("。其中，"),n("code",[s._v("print")]),s._v(" 是打印命令，"),n("code",[s._v("$0")]),s._v(" 代表当前行，因此上面命令的执行结果，就是把每一行原样打印出来。")]),s._v(" "),n("p",[s._v("下面，我们先用标准输入(stdin)演示上面这个例子。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is a test'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $0}'")]),s._v("\nthis is a "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("print $0")]),s._v(" 就是把标准输入 "),n("code",[s._v("this is a test")]),s._v("，重新打印了一遍。")]),s._v(" "),n("p",[n("code",[s._v("awk")]),s._v(" 会根据空格和制表符，将每一行分成若干字段，依次用"),n("code",[s._v("$1")]),s._v("、"),n("code",[s._v("$2")]),s._v("、"),n("code",[s._v("$3")]),s._v(" 代表第一个字段、第二个字段、第三个字段等等。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is a test'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $3}'")]),s._v("\na\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("$3")]),s._v(" 代表 "),n("code",[s._v("this is a test")]),s._v(" 的第三个字段 "),n("code",[s._v("a")]),s._v("。")]),s._v(" "),n("p",[s._v("下面，为了便于举例，我们把"),n("code",[s._v("/etc/passwd")]),s._v(" 文件保存成 "),n("code",[s._v("demo.txt")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("root:x:0:0:root:/root:/usr/bin/zsh\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("这个文件的字段分隔符是冒号("),n("code",[s._v(":")]),s._v(")，所以要用 "),n("code",[s._v("-F")]),s._v(" 参数指定分隔符为冒号。然后，才能提取到它的第一个字段。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{ print $1 }'")]),s._v(" demo.txt\nroot\ndaemon\nbin\nsys\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),n("p",[s._v("除了"),n("code",[s._v("$ + 数字")]),s._v("表示某个字段，"),n("code",[s._v("awk")]),s._v(" 还提供其他一些变量。")]),s._v(" "),n("p",[s._v("变量 "),n("code",[s._v("NF")]),s._v(" 表示当前行有多少个字段，因此"),n("code",[s._v("$NF")]),s._v(" 就代表最后一个字段。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is a test'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $NF}'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("code",[s._v("$(NF-1)")]),s._v(" 代表倒数第二个字段。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1, $(NF-1)}'")]),s._v(" demo.txt\nroot /root\ndaemon /usr/sbin\nbin /bin\nsys /dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v(" /bin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("print")]),s._v(" 命令里面的逗号，表示输出的时候，两个部分之间使用空格分隔。")]),s._v(" "),n("p",[s._v("变量 "),n("code",[s._v("NR")]),s._v(" 表示当前处理的是第几行。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print NR \") \" $1}'")]),s._v(" demo.txt\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" root\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" daemon\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bin\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" sys\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("print")]),s._v(" 命令里面，如果原样输出字符，要放在双引号里面。")]),s._v(" "),n("p",[n("code",[s._v("awk")]),s._v(" 的其他内置变量如下。")]),s._v(" "),n("blockquote",[n("ul",[n("li",[n("code",[s._v("FILENAME")]),s._v(": 当前文件名")]),s._v(" "),n("li",[n("code",[s._v("FS")]),s._v(": 字段分隔符，默认是空格和制表符。")]),s._v(" "),n("li",[n("code",[s._v("RS")]),s._v(": 行分隔符，用于分割每一行，默认是换行符。")]),s._v(" "),n("li",[n("code",[s._v("OFS")]),s._v(": 输出字段的分隔符，用于打印时分隔字段，默认为空格。")]),s._v(" "),n("li",[n("code",[s._v("ORS")]),s._v(": 输出记录的分隔符，用于打印时分隔记录，默认为换行符。")]),s._v(" "),n("li",[n("code",[s._v("OFMT")]),s._v(": 数字输出的格式，默认为"),n("code",[s._v("％.6g")]),s._v("。")])])]),s._v(" "),n("h2",{attrs:{id:"函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),n("p",[n("code",[s._v("awk")]),s._v(" 还提供了一些内置函数，方便对原始数据的处理。")]),s._v(" "),n("p",[s._v("函数 "),n("code",[s._v("toupper()")]),s._v(" 用于将字符转为大写。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{ print toupper($1) }'")]),s._v(" demo.txt\nROOT\nDAEMON\nBIN\nSYS\nSYNC\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面代码中，第一个字段输出时都变成了大写。")]),s._v(" "),n("p",[s._v("其他常用函数如下。")]),s._v(" "),n("blockquote",[n("ul",[n("li",[n("code",[s._v("tolower()")]),s._v(": 字符转为小写。")]),s._v(" "),n("li",[n("code",[s._v("length()")]),s._v(": 返回字符串长度。")]),s._v(" "),n("li",[n("code",[s._v("substr()")]),s._v(": 返回子字符串。")]),s._v(" "),n("li",[n("code",[s._v("sin()")]),s._v(": 正弦。")]),s._v(" "),n("li",[n("code",[s._v("cos()")]),s._v(": 余弦。")]),s._v(" "),n("li",[n("code",[s._v("sqrt()")]),s._v(": 平方根。")]),s._v(" "),n("li",[n("code",[s._v("rand()")]),s._v(": 随机数。")])])]),s._v(" "),n("p",[n("code",[s._v("awk")]),s._v(" 内置函数的完整列表，可以查看"),n("a",{attrs:{href:"https://www.gnu.org/software/gawk/manual/html_node/Built_002din.html#Built_002din",target:"_blank",rel:"noopener noreferrer"}},[s._v("手册"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"条件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#条件"}},[s._v("#")]),s._v(" 条件")]),s._v(" "),n("p",[n("code",[s._v("awk")]),s._v(" 允许指定输出条件，只输出符合条件的行。")]),s._v(" "),n("p",[s._v("输出条件要写在动作的前面。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'条件 动作'")]),s._v(" 文件名\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("请看下面的例子。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/ {print $1}'")]),s._v(" demo.txt\nroot\ndaemon\nbin\nsys\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("print")]),s._v(" 命令前面是一个正则表达式，只输出包含 "),n("code",[s._v("usr")]),s._v(" 的行。")]),s._v(" "),n("p",[s._v("下面的例子只输出奇数行，以及输出第三行以后的行。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出奇数行")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR % 2 == 1 {print $1}'")]),s._v(" demo.txt\nroot\nbin\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出第三行以后的行")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR >3 {print $1}'")]),s._v(" demo.txt\nsys\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("下面的例子输出第一个字段等于指定值的行。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$1 == \"root\" {print $1}'")]),s._v(" demo.txt\nroot\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'$1 == "root" || $1 == "bin" {print $1}\'')]),s._v(" demo.txt\nroot\nbin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"if-语句"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if-语句"}},[s._v("#")]),s._v(" if 语句")]),s._v(" "),n("p",[n("code",[s._v("awk")]),s._v(" 提供了 "),n("code",[s._v("if")]),s._v(" 结构，用于编写复杂的条件。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{if ($1 > \"m\") print $1}'")]),s._v(" demo.txt\nroot\nsys\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("上面代码输出第一个字段的第一个字符大于 "),n("code",[s._v("m")]),s._v(" 的行。")]),s._v(" "),n("p",[n("code",[s._v("if")]),s._v(" 结构还可以指定 "),n("code",[s._v("else")]),s._v(" 部分。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{if ($1 > "m") print $1; else print "---"}\'')]),s._v(" demo.txt\nroot\n---\n---\nsys\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://gregable.com/2010/09/why-you-should-know-just-little-awk.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("An Awk tutorial by Example"),n("OutboundLink")],1),s._v(", Greg Grothaus")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://likegeeks.com/awk-command/",target:"_blank",rel:"noopener noreferrer"}},[s._v("30 Examples for Awk Command in Text Processing"),n("OutboundLink")],1),s._v(", Mokhtar Ebrahim")])])])}),[],!1,null,null,null);a.default=e.exports}}]);