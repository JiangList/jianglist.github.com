(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1070:function(A,t,v){"use strict";v.r(t);var r=v(1),u=Object(r.a)({},(function(){var A=this,t=A.$createElement,r=A._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[r("p",[A._v("Git 是什么?")]),A._v(" "),r("p",[A._v("Git 是目前世界上最先进的分布式版本控制系统(没有之一)。")]),A._v(" "),r("h2",{attrs:{id:"版本控制系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版本控制系统"}},[A._v("#")]),A._v(" 版本控制系统")]),A._v(" "),r("p",[A._v("什么是“版本控制”? 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。您可以对任何类型的文件进行版本控制。")]),A._v(" "),r("ul",[r("li",[A._v("如果您是位图形或网页设计师，可能会需要保存某一幅图片或页面布局文件的所有修订版本(这或许是您非常渴望拥有的功能)")]),A._v(" "),r("li",[A._v("如果您是一名作家，您可能需要保存您对作品的每一次修改以便将来如果随着情节发展需要变动可以撤销它们。")]),A._v(" "),r("li",[A._v("甚至您是一名学生，您的论文也可以进行版本控制。")]),A._v(" "),r("li",[A._v("哪怕您工作了，保存各种报表的各种版本也是没有坏处的。")])]),A._v(" "),r("p",[A._v("在很多情况下，采用版本控制系统(VCS)都是个明智的选择! 有了它您就可以将选定的文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，您可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。使用版本控制系统通常还意味着，就算您乱来一气把整个项目中的文件改的改删的删，您也照样可以轻松恢复到原先的样子。但额外增加的工作量却微乎其微。")]),A._v(" "),r("h3",{attrs:{id:"本地版本控制系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地版本控制系统"}},[A._v("#")]),A._v(" 本地版本控制系统")]),A._v(" "),r("p",[A._v("许多人习惯用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。这么做唯一的好处就是简单，但是特别容易犯错。有时候会混淆所在的工作目录，一不小心会写错文件或者覆盖意想外的文件。为了解决这个问题，人们很久以前就开发了许多种本地版本控制系统，大多都是采用某种简单的数据库来记录文件的历次更新差异。")]),A._v(" "),r("p",[r("img",{attrs:{src:v(637),alt:"本地版本控制系统"}})]),A._v(" "),r("blockquote",[r("p",[A._v("其中最流行的一种叫做 RCS，现今许多计算机系统上都还看得到它的踪影。RCS 的工作原理是在硬盘上保存补丁集(补丁是指文件修订前后的变化)；通过应用所有的补丁，可以重新计算出各个版本的文件内容。")])]),A._v(" "),r("h3",{attrs:{id:"集中化的版本控制系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集中化的版本控制系统"}},[A._v("#")]),A._v(" 集中化的版本控制系统")]),A._v(" "),r("p",[A._v("接下来人们又遇到一个问题，如何让在不同系统上的开发者协同工作? 于是，集中化的版本控制系统(Centralized Version Control Systems，简称 CVCS)应运而生。这类系统，诸如 CVS、Subversion 以及 Perforce 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。多年以来，这已成为版本控制系统的标准做法。")]),A._v(" "),r("p",[A._v("集中式版本控制系统版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，您要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。")]),A._v(" "),r("p",[A._v("这种做法带来了许多好处，特别是相较于老式的本地 VCS 来说 现在，每个人都可以在一定程度上看到项目中的其他人正在做些什么。而管理员也可以轻松掌控每个开发者的权限，并且管理一个 CVCS 要远比在各个客户端上维护本地数据库来得轻松容易。")]),A._v(" "),r("p",[r("img",{attrs:{src:v(638),alt:"Git示例图"}})]),A._v(" "),r("p",[A._v("CVS 作为最早的开源而且免费的集中式版本控制系统，直到现在还有不少人在用。由于 CVS 自身设计的问题，会造成提交文件不完整，版本库莫名其妙损坏的情况。同样是开源而且免费的 SVN 修正了 CVS 的一些稳定性问题，是目前用得最多的集中式版本库控制系统。")]),A._v(" "),r("p",[A._v("事分两面，有好有坏。集中式版本控制系统最大的毛病就是必须联网才能工作，如果在局域网内还好，带宽够大，速度够快，可如果在互联网上，遇到网速慢的话，可能提交一个 10M 的文件就需要 5 分钟。另外若中央服务器的单点故障。如果宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。如果中心数据库所在的磁盘发生损坏，又没有做恰当备份，毫无疑问您将丢失所有数据——包括项目的整个变更历史，只剩下人们在各自机器上保留的单独快照。本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。")]),A._v(" "),r("h3",{attrs:{id:"分布式版本控制系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式版本控制系统"}},[A._v("#")]),A._v(" 分布式版本控制系统")]),A._v(" "),r("p",[A._v("于是分布式版本控制系统(Distributed Version Control System，简称 DVCS)面世了。")]),A._v(" "),r("p",[A._v("分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，您工作的时候，就不需要联网了，因为版本库就在您自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢? 比方说您在自己电脑上改了文件 A，您的同事也在他的电脑上改了文件 A，这时，您们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。")]),A._v(" "),r("p",[A._v("和集中式版本控制系统相比，分布式版本控制系统的安全性要高很多，因为每个人电脑里都有完整的版本库，某一个人的电脑坏掉了不要紧，随便从其他人那里复制一个就可以了。而集中式版本控制系统的中央服务器要是出了问题，所有人都没法干活了。")]),A._v(" "),r("p",[r("img",{attrs:{src:v(639),alt:"分布式版本控制系统"}})]),A._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[A._v("提示")]),A._v(" "),r("p",[A._v("在实际使用分布式版本控制系统的时候，其实很少在两人之间的电脑上推送版本库的修改，因为可能您们俩不在一个局域网内，两台电脑互相访问不了，也可能今天您的同事病了，他的电脑压根没有开机。因此，分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。")])]),A._v(" "),r("p",[A._v("在这类系统中，像 Git、Mercurial、Bazaar 以及 Darcs 等，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来，包括完整的历史记录。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。")]),A._v(" "),r("p",[A._v("更进一步，许多这类系统都可以指定和若干不同的远端代码仓库进行交互。籍此，您就可以在同一个项目中，分别和不同工作小组的人相互协作。您可以根据需要设定不同的协作流程，比如层次模型式的工作流，而这在以前的集中式系统中是无法实现的。")])])}),[],!1,null,null,null);t.default=u.exports},637:function(A,t,v){A.exports=v.p+"assets/img/RCS.d8186ab9.png"},638:function(A,t){A.exports="data:image/jpeg;base64,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"},639:function(A,t,v){A.exports=v.p+"assets/img/DVCS.2edf1e5d.png"}}]);