(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1095:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),n("p",[s._v("Zipkin 是一个分布式追踪系统。它有助于收集解决服务架构中的延迟问题所需的时间数据。功能包括收集和查找此数据。")]),s._v(" "),n("p",[s._v("如果您在日志文件中有跟踪 ID，则可以直接跳转到它。否则，您可以根据服务、操作名称、标签和持续时间等属性进行查询。会为你总结一些有趣的数据，比如在服务中花费的时间百分比，以及操作是否失败。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(691),alt:"",loading:"lazy"}})]),s._v(" "),n("p",[s._v("Zipkin UI 还提供了一个依赖关系图，显示有多少跟踪请求通过了每个应用程序。这有助于识别聚合行为，包括错误路径或对已弃用服务的调用。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(692),alt:"",loading:"lazy"}})]),s._v(" "),n("p",[s._v("应用程序需要被“检测”以向 Zipkin 报告跟踪数据。这通常意味着配置 "),n("a",{attrs:{href:"https://zipkin.io/pages/tracers_instrumentation",target:"_blank",rel:"noopener noreferrer"}},[s._v("跟踪器或检测库"),n("OutboundLink")],1),s._v(" 。向 Zipkin 报告数据的最流行方式是通过 HTTP 或 Kafka，但也有许多其他选项，例如 Apache ActiveMQ、gRPC 和 RabbitMQ。提供给 UI 的数据存储在内存中，或者通过支持的后端（例如 Apache Cassandra 或 Elasticsearch）持久存储。")])])}),[],!1,null,null,null);t.default=e.exports},1096:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"启动方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动方式"}},[s._v("#")]),s._v(" 启动方式")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("Docker")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("\ndocker run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9411")]),s._v(":9411 openzipkin/zipkin\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("Java8+")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://zipkin.io/quickstart.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -s\njava -jar zipkin.jar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("源码编译运行")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git 拉取代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/openzipkin/zipkin\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" zipkin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# maven编译，此处需要 docker 、 nodeJs 环境，或者 [跳过测试](https://www.cnblogs.com/jiangdewen/p/15928589.html)")]),s._v("\n./mvnw -DskipTests --also-make -pl zipkin-server clean "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行服务")]),s._v("\njava -jar ./zipkin-server/target/zipkin-server-*exec.jar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])]),s._v(" "),n("p",[n("strong",[s._v("源码编译补充")])]),s._v(" "),n("p",[s._v("如果我们使用 Intellij IDEA 打开源码的话， maven 打包需要配置跳过测试。以父模块全项目打包，需要确保 nodeJs 环境。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(693),alt:"",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports},691:function(s,t,a){s.exports=a.p+"assets/img/web-screenshot.00c02734.png"},692:function(s,t,a){s.exports=a.p+"assets/img/dependency-graph.b5c87df6.png"},693:function(s,t,a){s.exports=a.p+"assets/img/zipkin-idea-package.5541760e.jpg"}}]);