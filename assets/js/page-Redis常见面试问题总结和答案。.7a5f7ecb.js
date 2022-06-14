(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1031:function(s,e,t){"use strict";t.r(e);var v=t(1),i=Object(v.a)({},(function(){var s=this,e=s.$createElement,v=s._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h1",{attrs:{id:"redis-常见面试问题总结和答案。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-常见面试问题总结和答案。"}},[s._v("#")]),s._v(" Redis 常见面试问题总结和答案。")]),s._v(" "),v("div",{staticClass:"custom-block info"},[v("p",{staticClass:"custom-block-title"},[s._v("什么是Redis？")]),s._v(" "),v("p",[s._v("Redis(Remote Dictionary Server) Redis 是一个开源的使用 ANSI C 语言编写、遵守 BSD 协议、支持网络、可基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API 的非关系型数据库。")]),s._v(" "),v("p",[s._v("传统数据库遵循 ACID 规则。而 Nosql（Not Only SQL 的缩写，是对不同于传统的关系型数据库的数据库管理系统的统称） 一般为分布式，而分布式一般遵循 CAP 定理。")]),s._v(" "),v("p",[s._v("Github 源码："),v("a",{attrs:{href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/antirez/redis"),v("OutboundLink")],1)]),s._v(" "),v("p",[s._v("Redis 官网："),v("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/"),v("OutboundLink")],1)]),s._v(" "),v("p",[s._v("与传统数据库不同的是 Redis 的数据是存在内存中的，所以读写速度非常快，因此 redis 被广泛应用于缓存，每秒可以处理超过 10 万次读写操作，是已知性能最快的 Key-Value 数据库。另外，Redis 也经常用来做分布式锁。除此之外，Redis 支持事务、持久化、LUA 脚本、LRU 驱动事件、多种集群方案。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis支持的数据类型？")]),s._v(" "),v("p",[s._v("Redis 可以存储键和不同类型的值之间的映射。键的类型只能为字符串，值常见有五种数据类型：字符串、列表、集合、散列表、有序集合。")]),s._v(" "),v("p",[v("strong",[s._v("String字符串：")])]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" key value\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("string类型是二进制安全的。意思是redis的string可以包含任何数据。比如jpg图片或者序列化的对象 。")]),s._v(" "),v("p",[s._v("string类型是Redis最基本的数据类型，一个键最大能存储512MB。")]),s._v(" "),v("p",[v("strong",[s._v("Hash（哈希）")])]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[s._v("hmset name key1 value1 key2 value2\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("Redis hash 是一个键值(key=>value)对集合。")]),s._v(" "),v("p",[s._v("Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。")]),s._v(" "),v("p",[s._v("List（列表）")]),s._v(" "),v("p",[s._v("Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[s._v("lpush name value\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("在 key 对应 list 的头部添加字符串元素")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[s._v("rpush name value\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("在 key 对应 list 的尾部添加字符串元素")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[s._v("lrem name index\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("key 对应 list 中删除 count 个和 value 相同的元素")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[s._v("llen name\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("返回 key 对应 list 的长度")]),s._v(" "),v("p",[s._v("Set（集合）")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[s._v("sadd name value\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("Redis的Set是string类型的无序集合。")]),s._v(" "),v("p",[s._v("集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。")]),s._v(" "),v("p",[s._v("zset(sorted set：有序集合)")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[s._v("zadd name score value\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。")]),s._v(" "),v("p",[s._v("不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。")]),s._v(" "),v("p",[s._v("zset的成员是唯一的,但分数(score)却可以重复。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("什么是 Redis 持久化？ Redis 有哪几种持久化方式？优缺点是什么？")]),s._v(" "),v("p",[s._v("持久化就是把内存的数据写到磁盘中去，防止服务宕机了内存数据丢失。")]),s._v(" "),v("p",[s._v("Redis 提供了两种持久化方式: "),v("code",[s._v("RDB")]),s._v("（默认）和 "),v("code",[s._v("AOF")])]),s._v(" "),v("p",[v("strong",[s._v("RDB：")])]),s._v(" "),v("p",[s._v("RDB 是 Redis DataBase 缩写")]),s._v(" "),v("p",[s._v("功能核心函数rdbSave(生成RDB文件)和rdbLoad（从文件加载内存）两个函数")]),s._v(" "),v("p",[v("img",{attrs:{src:t(595),alt:"",loading:"lazy"}})]),s._v(" "),v("p",[v("strong",[s._v("AOF:")])]),s._v(" "),v("p",[s._v("AOF 是 Append-only file 缩写")]),s._v(" "),v("p",[v("img",{attrs:{src:t(596),alt:"",loading:"lazy"}})]),s._v(" "),v("p",[s._v("每当执行服务器(定时)任务或者函数时 flushAppendOnlyFile 函数都会被调用， 这个函数执行以下两个工作")]),s._v(" "),v("p",[v("strong",[s._v("aof 写入保存：")])]),s._v(" "),v("p",[s._v("WRITE：根据条件，将 aof_buf 中的缓存写入到 AOF 文件")]),s._v(" "),v("p",[s._v("SAVE：根据条件，调用 fsync 或 fdatasync 函数，将 AOF 文件保存到磁盘中。")]),s._v(" "),v("p",[v("strong",[s._v("存储结构:")])]),s._v(" "),v("p",[s._v("内容是redis通讯协议(RESP )格式的命令文本存储。")]),s._v(" "),v("p",[v("strong",[s._v("比较：")])]),s._v(" "),v("p",[s._v("1、AOF 文件比 RDB 更新频率高，优先使用 AOF 还原数据。")]),s._v(" "),v("p",[s._v("2、AOF 比 RDB 更安全也更大")]),s._v(" "),v("p",[s._v("3、RDB 性能比 AOF 好")]),s._v(" "),v("p",[s._v("4、如果两个都配了优先加载 AOF")]),s._v(" "),v("p",[v("strong",[s._v("刚刚上面你有提到 redis 通讯协议(RESP )，能解释下什么是 RESP ？有什么特点？（可以看到很多面试其实都是连环炮，面试官其实在等着你回答到这个点，如果你答上了对你的评价就又加了一分）\nRESP 是redis客户端和服务端之前使用的一种通讯协议；")])]),s._v(" "),v("p",[s._v("RESP 的特点：实现简单、快速解析、可读性好")]),s._v(" "),v("p",[s._v('For Simple Strings the first byte of the reply is "+" 回复')]),s._v(" "),v("p",[s._v('For Errors the first byte of the reply is "-" 错误')]),s._v(" "),v("p",[s._v('For Integers the first byte of the reply is ":" 整数')]),s._v(" "),v("p",[s._v('For Bulk Strings the first byte of the reply is "$" 字符串')]),s._v(" "),v("p",[s._v('For Arrays the first byte of the reply is "*" 数组')])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis 有哪些架构模式？讲讲各自的特点")]),s._v(" "),v("p",[v("strong",[s._v("单机版")])]),s._v(" "),v("p",[v("img",{attrs:{src:t(597),alt:"",loading:"lazy"}})]),s._v(" "),v("ul",[v("li",[v("p",[s._v("特点：")]),s._v(" "),v("ul",[v("li",[s._v("简单")])])]),s._v(" "),v("li",[v("p",[s._v("问题：")]),s._v(" "),v("ol",[v("li",[s._v("内存容量有限")]),s._v(" "),v("li",[s._v("处理能力有限")]),s._v(" "),v("li",[s._v("无法高可用。")])])])]),s._v(" "),v("p",[v("strong",[s._v("主从复制")])]),s._v(" "),v("p",[v("img",{attrs:{src:t(598),alt:"",loading:"lazy"}})]),s._v(" "),v("p",[s._v("Redis 的复制（replication）功能允许用户根据一个 Redis 服务器来创建任意多个该服务器的复制品，其中被复制的服务器为主服务器（master），而通过复制创建出来的服务器复制品则为从服务器（slave）。 只要主从服务器之间的网络连接正常，主从服务器两者会具有相同的数据，主服务器就会一直将发生在自己身上的数据更新同步 给从服务器，从而一直保证主从服务器的数据相同。")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("特点：")]),s._v(" "),v("ol",[v("li",[s._v("master/slave 角色")]),s._v(" "),v("li",[s._v("master/slave 数据相同")]),s._v(" "),v("li",[s._v("降低 master 读压力在转交从库")])])]),s._v(" "),v("li",[v("p",[s._v("问题：")]),s._v(" "),v("ul",[v("li",[s._v("无法保证高可用")]),s._v(" "),v("li",[s._v("没有解决 master 写的压力")])])])]),s._v(" "),v("p",[v("strong",[s._v("哨兵")])]),s._v(" "),v("p",[v("img",{attrs:{src:t(599),alt:"",loading:"lazy"}})]),s._v(" "),v("p",[s._v("Redis sentinel 是一个分布式系统中监控 redis 主从服务器，并在主服务器下线时自动进行故障转移。其中三个特性：")]),s._v(" "),v("p",[s._v("监控（Monitoring）： Sentinel 会不断地检查你的主服务器和从服务器是否运作正常。")]),s._v(" "),v("p",[s._v("提醒（Notification）： 当被监控的某个 Redis 服务器出现问题时， Sentinel 可以通过 API 向管理员或者其他应用程序发送通知。")]),s._v(" "),v("p",[s._v("自动故障迁移（Automatic failover）： 当一个主服务器不能正常工作时， Sentinel 会开始一次自动故障迁移操作。")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("特点：")]),s._v(" "),v("ul",[v("li",[s._v("保证高可用")]),s._v(" "),v("li",[s._v("监控各个节点")]),s._v(" "),v("li",[s._v("自动故障迁移")])])]),s._v(" "),v("li",[v("p",[s._v("缺点：")]),s._v(" "),v("ul",[v("li",[s._v("主从模式，切换需要时间丢数据")]),s._v(" "),v("li",[s._v("没有解决 master 写的压力")])])])]),s._v(" "),v("p",[v("strong",[s._v("集群（proxy 型）：")])]),s._v(" "),v("p",[v("img",{attrs:{src:t(600),alt:"",loading:"lazy"}})]),s._v(" "),v("p",[v("code",[s._v("Twemproxy")]),s._v(" 是一个 Twitter 开源的一个 redis 和 memcache 快速/轻量级代理服务器； Twemproxy 是一个快速的单线程代理程序，支持 Memcached ASCII 协议和 redis 协议。")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("特点：")]),s._v(" "),v("ul",[v("li",[s._v("多种 hash 算法：MD5、CRC16、CRC32、CRC32a、hsieh、murmur、Jenkins")]),s._v(" "),v("li",[s._v("支持失败节点自动删除")]),s._v(" "),v("li",[s._v("后端 Sharding 分片逻辑对业务透明，业务方的读写方式和操作单个 Redis 一致")])])]),s._v(" "),v("li",[v("p",[s._v("缺点：")]),s._v(" "),v("ul",[v("li",[s._v("增加了新的 proxy，需要维护其高可用。")]),s._v(" "),v("li",[s._v("failover 逻辑需要自己实现，其本身不能支持故障的自动转移可扩展性差，进行扩缩容都需要手动干预")])])])]),s._v(" "),v("p",[v("strong",[s._v("集群（直连型）：")])]),s._v(" "),v("p",[v("img",{attrs:{src:t(601),alt:"",loading:"lazy"}})]),s._v(" "),v("p",[s._v("从 redis 3.0 之后版本支持 redis-cluster 集群，Redis-Cluster 采用无中心结构，每个节点保存数据和整个集群状态,每个节点都和其他所有节点连接。")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("特点：")]),s._v(" "),v("ul",[v("li",[s._v("无中心架构（不存在哪个节点影响性能瓶颈），少了 proxy 层。")]),s._v(" "),v("li",[s._v("数据按照 slot 存储分布在多个节点，节点间数据共享，可动态调整数据分布。")]),s._v(" "),v("li",[s._v("可扩展性，可线性扩展到 1000 个节点，节点可动态添加或删除。")]),s._v(" "),v("li",[s._v("高可用性，部分节点不可用时，集群仍可用。通过增加 Slave 做备份数据副本")]),s._v(" "),v("li",[s._v("实现故障自动 failover，节点之间通过 gossip 协议交换状态信息，用投票机制完成 Slave到 Master 的角色提升。")])])]),s._v(" "),v("li",[v("p",[s._v("缺点：")]),s._v(" "),v("ul",[v("li",[s._v("资源隔离性较差，容易出现相互影响的情况。")]),s._v(" "),v("li",[s._v("数据通过异步复制,不保证数据的强一致性")])])])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("什么是一致性哈希算法？什么是哈希槽？")]),s._v(" "),v("p",[s._v("这两个问题篇幅过长 网上找了两个解锁的不错的文章")]),s._v(" "),v("p",[s._v("https://www.cnblogs.com/lpfuture/p/5796398.html")]),s._v(" "),v("p",[s._v("http://www.jasontec.cn/articles/2020/04/11/1586586130767.html")])])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis常用命令？")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有key，*表示区配所有。")]),s._v("\nKeys pattern\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 key 对应的值为 string 类型的 value。")]),s._v("\nSet\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br"),v("span",{staticClass:"line-number"},[s._v("4")]),v("br"),v("span",{staticClass:"line-number"},[s._v("5")]),v("br")])]),v("p",[s._v("设置 key 对应的值为 string 类型的 value。如果 key 已经存在，返回 0，nx 是 not exist 的意思。\nsetnx")]),s._v(" "),v("p",[s._v("删除某个key，第一次返回1 删除了 第二次返回0\nDel")]),s._v(" "),v("p",[s._v("设置过期时间（单位秒）\nExpire")]),s._v(" "),v("p",[s._v("查看剩下多少时间，返回负数则key失效，key不存在了\nTTL")]),s._v(" "),v("p",[s._v("设置 key 对应的值为 string 类型的 value，并指定此键值对应的有效期。\nSetex")]),s._v(" "),v("p",[s._v("一次设置多个 key 的值，成功返回 ok 表示所有的值都设置了，失败返回 0 表示没有任何值被设置。\nMset")]),s._v(" "),v("p",[s._v("设置 key 的值，并返回 key 的旧值。\nGetset")]),s._v(" "),v("p",[s._v("一次获取多个 key 的值，如果对应 key 不存在，则对应返回 nil。\nMget")]),s._v(" "),v("p",[s._v("对 key 的值做加加操作,并返回新的值。注意 incr 一个不是 int 的 value 会返回错误，incr 一个不存在的 key，则设置 key 为 1\nIncr")]),s._v(" "),v("p",[s._v("同 incr 类似，加指定值 ，key 不存在时候会设置 key，并认为原来的 value 是 0\nincrby")]),s._v(" "),v("p",[s._v("对 key 的值做的是减减操作，decr 一个不存在 key，则设置 key 为-1\nDecr")]),s._v(" "),v("p",[s._v("同 decr，减指定值。\nDecrby")]),s._v(" "),v("p",[s._v("给指定 key 的字符串值追加 value,返回新字符串值的长度。\nAppend")]),s._v(" "),v("p",[s._v("取指定 key 的 value 值的长度。\nStrlen")]),s._v(" "),v("p",[s._v("persist xxx(取消过期时间)")]),s._v(" "),v("p",[s._v("选择数据库（0-15库）\nSelect 0")]),s._v(" "),v("p",[s._v("把age 移动到1库\nmove age 1")]),s._v(" "),v("p",[s._v("随机返回一个key\nRandomkey")]),s._v(" "),v("p",[s._v("重命名\nRename")]),s._v(" "),v("p",[s._v("返回数据类型\nType")]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("使用过Redis分布式锁么，它是怎么实现的？")]),s._v(" "),v("p",[s._v("先拿setnx来争抢锁，抢到之后，再用expire给锁加一个过期时间防止锁忘记了释放。")]),s._v(" "),v("p",[s._v("如果在setnx之后执行expire之前进程意外crash或者要重启维护了，那会怎么样？")]),s._v(" "),v("p",[s._v("set指令有非常复杂的参数，这个应该是可以同时把setnx和expire合成一条指令来用的！")])])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("使用过Redis做异步队列么，你是怎么用的？有什么缺点？")]),s._v(" "),v("p",[s._v("一般使用list结构作为队列，rpush生产消息，lpop消费消息。当lpop没有消息的时候，要适当sleep一会再重试。")]),s._v(" "),v("ul",[v("li",[s._v("缺点：\n"),v("ul",[v("li",[s._v("在消费者下线的情况下，生产的消息会丢失，得使用专业的消息队列如rabbitmq等。")])])])]),s._v(" "),v("p",[s._v("能不能生产一次消费多次呢？")]),s._v(" "),v("p",[s._v("使用pub/sub主题订阅者模式，可以实现1:N的消息队列。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("什么是缓存穿透？如何避免？什么是缓存雪崩？何如避免？")]),s._v(" "),v("p",[v("strong",[s._v("缓存穿透")])]),s._v(" "),v("p",[s._v("一般的缓存系统，都是按照key去缓存查询，如果不存在对应的value，就应该去后端系统查找（比如DB）。一些恶意的请求会故意查询不存在的key,请求量很大，就会对后端系统造成很大的压力。这就叫做缓存穿透。")]),s._v(" "),v("p",[v("strong",[s._v("如何避免？")])]),s._v(" "),v("p",[s._v("1：对查询结果为空的情况也进行缓存，缓存时间设置短一点，或者该key对应的数据insert了之后清理缓存。")]),s._v(" "),v("p",[s._v("2：对一定不存在的key进行过滤。可以把所有的可能存在的key放到一个大的Bitmap中，查询时通过该bitmap过滤。")]),s._v(" "),v("p",[v("strong",[s._v("缓存雪崩")])]),s._v(" "),v("p",[s._v("当缓存服务器重启或者大量缓存集中在某一个时间段失效，这样在失效的时候，会给后端系统带来很大压力。导致系统崩溃。")]),s._v(" "),v("p",[v("strong",[s._v("如何避免？")])]),s._v(" "),v("p",[s._v("1：在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。")]),s._v(" "),v("p",[s._v("2：做二级缓存，A1为原始缓存，A2为拷贝缓存，A1失效时，可以访问A2，A1缓存失效时间设置为短期，A2设置为长期")]),s._v(" "),v("p",[s._v("3：不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀。")]),s._v(" "),v("p",[s._v("http://jasontec.cn/articles/2019/12/20/1576826633007.html")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis的用途是什么？")]),s._v(" "),v("p",[v("strong",[s._v("计数器")]),s._v(" 可以对 String 进行自增自减运算，从而实现计数器功能。Redis 这种内存型数据库的读写性能非常高，很适合存储频繁读写的计数量。")]),s._v(" "),v("p",[v("strong",[s._v("缓存")]),s._v(" 将热点数据放到内存中，设置内存的最大使用量以及淘汰策略来保证缓存的命中率。")]),s._v(" "),v("p",[v("strong",[s._v("会话缓存")]),s._v(" 可以使用 Redis 来统一存储多台应用服务器的会话信息。当应用服务器不再存储用户的会话信息，也就不再具有状态，一个用户可以请求任意一个应用服务器，从而更容易实现高可用性以及可伸缩性。")]),s._v(" "),v("p",[v("strong",[s._v("全页缓存（FPC）")]),s._v(" 除基本的会话 token 之外，Redis 还提供很简便的 FPC 平台。以 Magento 为例，Magento 提供一个插件来使用 Redis 作为全页缓存后端。此外，对 WordPress 的用户来说，Pantheon 有一个非常好的插件 wp-redis，这个插件能帮助你以最快速度加载你曾浏览过的页面。")]),s._v(" "),v("p",[v("strong",[s._v("查找表")]),s._v(" 例如 DNS 记录就很适合使用 Redis 进行存储。查找表和缓存类似，也是利用了Redis快速的查找特性。但是查找表的内容不能失效，而缓存的内容可以失效，因为缓存不作为可靠的数据来源。")]),s._v(" "),v("p",[v("strong",[s._v("消息队列(发布/订阅功能)")]),s._v(" List 是一个双向链表，可以通过 lpush 和 rpop 写入和读取消息。不过最好使用 Kafka、RabbitMQ 等消息中间件。")]),s._v(" "),v("p",[v("strong",[s._v("分布式锁实现")]),s._v(" 在分布式场景下，无法使用单机环境下的锁来对多个节点上的进程进行同步。可以使用 Redis 自带的 SETNX 命令实现分布式锁，除此之外，还可以使用官方提供的 RedLock 分布式锁实现。")]),s._v(" "),v("p",[s._v("其它 Set 可以实现交集、并集等操作，从而实现共同好友等功能。ZSet可以实现有序性操作，从而实现排行榜等功能。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("如何与Redis连接？")]),s._v(" "),v("p",[s._v("安装服务器后，可以运行 redis 安装时提供的 Redis 客户端，也可以打开命令提示符并使用以下命令：")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[s._v(" redis-cli\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("通过使用其中任何一个，您可以与 Redis 交互。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis的主要特点是什么？")]),s._v(" "),v("p",[v("strong",[s._v("以下是 Redis 的主要功能：")])]),s._v(" "),v("ul",[v("li",[s._v("读写性能优异， Redis 能读的速度是 110000 次/s，写的速度是 81000 次/s。")]),s._v(" "),v("li",[s._v("支持数据持久化，支持 AOF 和 RDB 两种持久化方式。")]),s._v(" "),v("li",[s._v("支持事务，Redis 的所有操作都是原子性的，同时 Redis 还支持对几个操作合并后的原子性执行。")]),s._v(" "),v("li",[s._v("数据结构丰富，除了支持 string 类型的 value 外还支持 hash、set、zset、list 等数据结构。")]),s._v(" "),v("li",[s._v("支持主从复制，主机会自动将数据同步到从机，可以进行读写分离。")]),s._v(" "),v("li",[s._v("解释Redis的复制功能？")]),s._v(" "),v("li",[s._v("Redis 可以使用主从同步，从从同步。第一次同步时，主节点做一次 bgsave，并同时将后续修改操作记录到内存 buffer，待完成后将 rdb 文件全量同步到复制节点，复制节点接受完成后将 rdb 镜像加载到内存。加载完成后，再通知主节点将期间修改的操作记录同步到复制节点进行重放就完成了同步过程。")])])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis 和 RDBMS 有什么区别？")]),s._v(" "),v("p",[s._v("Redis 是 NoSQL 数据库，而 RDBMS 是 SQL 数据库。\nRedis 遵循键值结构，而 RDBMS 遵循表结构。\nRedis 非常快，而 RDBMS 相对较慢。\nRedis 将所有数据集存储在主存储器中，而 RDBMS 将其数据集存储在辅助存储器中。\nRedis 通常用于存储小型和常用文件，而 RDBMS 用于存储大文件。\nRedis 仅为 Linux，BSD，Mac OS X，Solaris 提供官方支持。它目前没有为 Windows 提供官方支持，而 RDBMS 提供对两者的支持。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("为什么 Redis 不同于其他的键值存储数据库？")]),s._v(" "),v("p",[s._v("有两个主要原因：")]),s._v(" "),v("p",[s._v("Redis 发展方向不同与其他键值数据库，它能包含很多复杂数据类型，对这些数据类型操作都是原子的。 Redis 数据类型与基本数据结构强相关，直接暴露给程序员，没有增加抽象层。\nRedis 是一个基于内存的，能够持久化到硬盘的数据库，因此为了实现高速读写，数据集大小不能超过内存。内存数据库另一个优点是，内存数据库相对于硬盘数据库非常容易操作复杂数据结构，因此 Redis 可以做很多事情，内部复杂性低。与此同时两款磁盘存储格式（ RDB 和 AOF ）不需要支持随机访问，因此他们是紧凑的，而且总是以追加形式生成（甚至 AOF 日志轮换也是一个追加操作，因为新版本是由内存中的副本生成）。比起基于磁盘的数据存储， Redis 用来处理重要数据时需要确保数据集及时落盘刷新。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis内存使用情况？")]),s._v(" "),v("p",[s._v("举几个例子（所有数据基于64位实例）")]),s._v(" "),v("p",[s._v("一个空实例大约占用3M内存\n1百万简单字符串键值对大约占用 85M 内存\n1百万哈希表键值对，每个对象有 5 个属性，大约占用 160M 内存\n为了测试你的用例，使用 redis-benchmark 工具生成随机数据集，使用 INFO memory 命令检查使用内存空间。")]),s._v(" "),v("p",[s._v("存储相同的键，64位系统比32位系统使用更多的内存，键值很小情况下更明显。这是因为64位系统指针占用 8 字节。但是64位系统优点是可以配置更多内存（校对注：32位操作系统支持的内存最多为2的32次方，就是 4G ），因此为了运行大型Redis服务器，64位系统尤佳。另一种方案是使用分片。")]),s._v(" "),v("p",[s._v("我喜欢 Redis 的高性能操作和特性，但是不喜欢所有内容都在内存中，我不能创建一个比内存更大数据集。有计划改变吗？\n过去为了允许数据集超过 RAM 大小， Redis 开发人员尝试使用虚拟内存和其他系统，但是我们非常高兴可以把一件事情做好：数据服务由内存提供，磁盘用于存储数据。所以现在没有计划为 Redis 创建磁盘后端，毕竟 Redis 大部分特性都是基于其当前架构设计的。")]),s._v(" "),v("p",[s._v("你的真正问题并不是所需的总内存，而是你需要划分你的数据集到多个 Redis 实例上，为了获取更多信息请阅读本文档中的分区页面。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("同时使用 Redis 和磁盘数据库，是不是一个好想法？")]),s._v(" "),v("p",[s._v("是的，一个通用的设计方案是，在非常频繁的写小的数据时采用 Redis （并且你需要使用Redis数据结构给你的问题建立高效模型），以及将大数据存储到SQL数据库或者最终一致性磁盘数据库中。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("有没有方法降低 Redis 内存使用率？")]),s._v(" "),v("p",[s._v("如果可以的话使用Redis 32位实例。另外，还要善于使用哈希表，列表，有序集合和整数集，因为在特殊情况下Redis使用这些数据类型可以更紧凑存储一些元素。可以 "),v("a",{attrs:{href:"https://www.redis.com.cn/topics/memory-optimization.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("在内存优化页面"),v("OutboundLink")],1),s._v(" 获取更多信息。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis 内存不足时会发生什么？")]),s._v(" "),v("p",[s._v("Redis 要么被 Linux 内核 OOM 杀掉，抛出错误崩溃，要么开始变得卡顿。随着现代操作系统 malloc 方法通常都不返回 NULL ，而是服务器开始交换，因此 Redis 性能降低，因此你可能会观察到一些错误现象。")]),s._v(" "),v("p",[s._v("INFO 命令返回 Redis 使用内存总量，因此你可以编写脚本监控 Redis 服务器内存临界值。")]),s._v(" "),v("p",[s._v("Redis 内置保护措施允许用户在配置文件中使用 maxmemory 选项，设置 Redis 最大占用内存。如果达到此限制， Redis 将开始返回错误给写命令（但是将继续接受只读命令），或者当最大内存限制达到时也可以配置为键淘汰，在这种情况下 Redis 作为缓存使用。")]),s._v(" "),v("p",[s._v("我们有 "),v("a",{attrs:{href:"https://www.redis.com.cn/topics/lru-cache.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("描述 Redis 作为 LRU 缓存使用的文档"),v("OutboundLink")],1),s._v("。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("在 Linux 系统中，即使我有很多空闲内存，后台保存失败报fork()错误！")]),s._v(" "),v("p",[s._v("精简回答：echo 1 > /proc/sys/vm/overcommit_memory")]),s._v(" "),v("p",[s._v("详细回答：\nRedis后台保存模式依赖现代操作系统的写时拷贝技术。Redis fork（创建一个子进程）是父进程精确拷贝。子进程存储数据到磁盘并且最终退出。从理论上讲，子进程应该和父进程使用同样多内存，作为父进程副本，但是得益于多数现代操作系统实现的写时复制技术，父进程和子进程共享内存页。内存页在父进程或子进程改变时将被复制。当子进程保存时，理论上所有页面都可能改变，Linux无法提前告知子进程需要多少内存，因此如果overcommit_memory设置为0，fork将会失败除非有足够的空闲RAM真正复制父进程内存页.结果是，如果你有3G Redis数据集，只有2G可用内存将会失败。")]),s._v(" "),v("p",[s._v("overcommit_memory 设置为1，意味着 Linux 使用更乐观方式 fork，这确实是你所期望的Redis。")]),s._v(" "),v("p",[v("a",{attrs:{href:"http://www.redhat.com/magazine/001nov04/features/vm/",target:"_blank",rel:"noopener noreferrer"}},[s._v("理解虚拟机内存"),v("OutboundLink")],1),s._v(" 是红帽经典文章，可以了解 Linux 虚拟内存怎么工作， overcommitmemory 和 overcommitratio 的替代品。这篇文章校正了 "),v("a",{attrs:{href:"http://man7.org/linux/man-pages/man5/proc.5.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("proc(5)"),v("OutboundLink")],1),s._v(" 用户手册对 overcommit_memory 1和2 配置正确含义。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis 磁盘快照是不是原子操作？")]),s._v(" "),v("p",[s._v("是的，当服务器不在执行命令时，Redis 后台保存进程总是被创建，因此每个命令在 RAM 中是原子的，并且在磁盘快照过程也是原子的。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("Redis是单线程的，我怎么利用多CPU/核?")]),s._v(" "),v("p",[s._v("CPU 基本不可能成为 Redis 的性能瓶颈，因为通常 Redis 受限于内存或网络。例如使用 Pipelining ， Redis 运行在普通的 Linux 系统上，每秒可以处理 50万 请求，所以如果你的应用程序主要使用O(N) 或者 O(log(N))命令，几乎不会使用太多的CPU。")]),s._v(" "),v("p",[s._v("然而为了最大限度利用CPU，你可以在一台机器上启动多个Redis实例，并把它们设置为不同服务器。某些时候单个机器是不够的，所以如果你想使用多个CPU，你可以提前考虑使用分片。")]),s._v(" "),v("p",[s._v("关于使用多Redis实例，你可以在 "),v("a",{attrs:{href:"https://www.redis.com.cn/topics/partitioning.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Partitioning page"),v("OutboundLink")],1),s._v(" 找到更多的信息")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("单个 Redis 实例最多可以存储多少键？哈希表、列表、集合和有序集合最大可以包含多少元素？")]),s._v(" "),v("p",[s._v("Redis 最大可以处理 2"),v("sup",[s._v("32")]),s._v(" 键，实践测试每个实例最少可以处理 2.5亿 键。")]),s._v(" "),v("p",[s._v("每个哈希表、列表、集合和有序集合可以容纳 2"),v("sup",[s._v("32")]),s._v(" 元素。")]),s._v(" "),v("p",[s._v("换句话说，Redis 极限容量就是系统可用内存。")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("为什么从实例与主实例拥有不同数量键？")]),s._v(" "),v("p",[s._v("如果你使用有生存周期的键，这就是正常现象。这就导致主从实例键的数量不一致原因。")]),s._v(" "),v("ul",[v("li",[s._v("主实例在第一次与从实例同步时生成 RDB 文件。")]),s._v(" "),v("li",[s._v("RDB 文件不包含已经过期的键，但是已经过期的键仍然在内存中。")]),s._v(" "),v("li",[s._v("尽管这些键从逻辑上说已经过期失效，但是还在 Redis 主实例内存中，他们并不被识别为存在的，当增量或访问这些键时这些键会被回收。尽管从逻辑上说这些键不是数据集一部分，但是 INFO 和 DBSIZE 命令结果包含这些信息。")]),s._v(" "),v("li",[s._v("当从实例读取主实例生成的 RDB 文件时，过期键不会被载入。\n为很多键设置过期属性，通常为用户提供了在从实例上存储更少键，但是实际上实例内容没有逻辑区别。")])])])])}),[],!1,null,null,null);e.default=i.exports},595:function(s,e){s.exports="data:image/png;base64,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"},596:function(s,e,t){s.exports=t.p+"assets/img/aof1.95b19ade.png"},597:function(s,e,t){s.exports=t.p+"assets/img/stand-alone.c7ad1ea7.png"},598:function(s,e,t){s.exports=t.p+"assets/img/master-slave.aad6e408.png"},599:function(s,e,t){s.exports=t.p+"assets/img/sentinel.42bc8703.png"},600:function(s,e,t){s.exports=t.p+"assets/img/cluster-proxy.bbc31fb6.png"},601:function(s,e,t){s.exports=t.p+"assets/img/cluster.ed543e06.png"}}]);