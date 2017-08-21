《JavaScript DOM 编程艺术》 —— 第二版
DOM Scripting: Web Design with JavaScript and the Document Object Model
Second Edition
书籍信息：
	【英】Jeremy Keith 【加】Jeffrey Sambells 著
	杨涛 王建桥 杨晓云 等译
	魏忠 审校
	人民邮电出版社 出版
	
这本书让我充分感受到平稳退化和渐进增强的思想，熟悉了DOM操作。
书中案例代码实现并不复杂，也很容易在网上找到许多本书源码和pdf。要注意的是，这里的实例是为了练习DOM操作，而非真实项目中推荐使用的写法，随着前端技术的不断发展，很多属性都已经的得到各种浏览器良好的支持，开发也已经很少需要兼容IE6、IE7等早期浏览器。
学习本书随书示例代码，给示例代码建立一个index.html页面，按照书中的章节目录名称匹配示例链接，使示例代码查找起来更加方便。

第1章 JavaScript简史
	介绍了JavaScript的起源，是由Netscape公司和Sun公司合作开发，那时候浏览器的天下几乎都是Netscape Navigator，IE浏览器还是个小学生。
	1995年JavaScript 1.0 版本出现在Netscape Navigator 2浏览器中。
	IE2发布了JavaScript的一个版本——JScript。
	Netscape公司和Sun公司联合ECMA(European Computer Manufacturers Association)欧洲计算机制造商协会对JavaScript进行标准化。
	1996年NN3和IE3浏览器都不同程度支持JavaScript 1.1。
	1997年6月NN4发布,同年10月IE4发布，都进行了改进，大幅度扩展了DOM。NN4和IE4使用的却是两种不兼容的DOM。
	DHTML(Dynamic HTML)动态HTML出现，却由于浏览器DOM实现的差异，实现起来困难。最后W3C推出了标准化DOM。各个浏览器制造商和W3C愉快的制定了DOM Level1。
	W3C对DOM的定义是：“一个与操作平台和编程语言无关的接口，程序和脚本可以通过这个接口动态地访问和修改文档的内容、结构和样式。”。
	最后由于Windows操作系统的原因，浏览器大战IE胜出。
	浏览器的后起之秀，2003年苹果公司的Safari(基于WebKit内核)，以及Firefox(WebKit)、Chrome(Gecko)、Opera，智能手机很多都是基于WebKit渲染。IE则是基于Trident。这里说的浏览器内核——Rendering Engine，也称为“渲染引擎”、“排版引擎”、“解释引擎”。
	
	总结起来就是说，在JavaScript在发展的过程中经历了各大浏览器诸侯割据、NN和IE两虎相争的大战，通过ECMA和W3C标准化各大浏览器才得以携手共进，迎来了百花齐放的局面。虽然现在还没有一款浏览器完美无瑕的实现W3C DOM，但各个浏览器对于DOM特性的覆盖率基本都达到95%以上。Web的繁荣已经是今非昔比了。

第2章 JavaScript语法
	在使用JavaScript的时候，最好把JavaScript存成一个扩展名.js文件的独立文件。并用<script>标签引入，把src属性指向js文件。
	那么问题来了，<script>放在什么位置比较好，典型做法是放在<head>中。但最好的放在HTML文档的最后，</body>标签的前面，这样可以使浏览器更快的加载页面。
	这个知识点我在面试中遇到过。
	
	程序设计语言分为解释型和编译型。JavaScript属于解释型。
	书中介绍了JavaScript的语法，语句、注释、变量、数据类型、数组、对象，以及算数运算、比较运算、逻辑运算、if判断，循环语句和函数等。
	因为是基础的js语法内容，这里不过分赘述，只记录一部分。
	1.定义变量的时候可以用“,”隔开。
	2.字符串使用“\”进行转义(escaping)。
	3.定义数组可以Array(4)、Array()、Array("John","Paul","George","Ringo"),注意这里没有使用new关键字。当然也可以用[],《数据结构与算法JavaScript描述》中提到[]才是最高效的创建数组的方式。
	4.介绍了一种不推荐大家使用的数组——关联数组，它使用字符串作为下标。通过之前的学习我们知道数组的本质是对象，用数字做下标的时候实际上也是转化为字符串的。所以这种情况直接用对象就好了。
	5.创建对象可以Object(),也不需要带new关键字。
	6.==不代表严格意义上的相等，比如""==false被认为是成立的。所以要使用===进行严格比较，严格不相等使用!==。
	7.变量的作用域(scope),全局变量(global variable),局部变量(local variable)。
	8.对象分为自定义对象、内建对象和宿主对象。内建对象如Array、Object。宿主对象是由浏览器提供的预定义对象，如Form、Image，还有很常用的window对象。
	
	本章由于示例代码比较简单，不亲自实现。
	ps：温度单位转化小知识 (华氏温度 - 32)/1.8 = 摄氏温度

第3章 DOM
	Document Object Model —— 文档对象模型
	
	JavaScript语言里的对象可以分为三种类型：
		1.用户自定义对象(user-defined object)
		2.内建对象(native object)
		3.宿主对象(host object)
	DOM节点(node)分为三种：
		元素节点(element node)
		文本节点(text node)
		属性节点
	继承(inheritance)是CSS(层叠样式表)技术中一项强大的功能。可以使用id和class作为选择器，还有CSS3很多其他的元素选择器，这里暂时不做讨论。
	
	DOM获取元素节点的方法：
		1.getElementById(id)
		2.getElementsByTagName(tag)
		3.getElementsByClassName(class)：这个方法可以查找那些带有多个类名的元素，如document.getElementsByClassName("important sale")，参数中类的顺序不重要，元素带有其他类名也可以。
	上面三个方法返回的都是Object，其实文档中的每一个元素都是对象。
	书中只介绍这三种，其他常见的还有getElementsByName(name),getElementsByTagNameNS(namespace, tag)。
	getElementsByTagNameNS(namespace, tag)方法从一个特定的父元素开始，并从该父节点的DOM中自上而下递归式搜索，当调用getElementsByTagName方法获取到的节点不是文档节点时，实际上是调用了element.getElementsByTagNameNS方法。
	
	DOM属性操作的方法：
	1.getAttribute(attribute)
	2.setAttribute(attribute,value)
	
	ps：if(something)与if(something != null)完全等价。
	
第4章 案例研究：JavaScript图片库
	../chapter04/ImageGallery/gallery.html
	实现一个图片库。
	1.a标签href指向图片地址，注意添加title。
	2.添加js文件，添加showPic函数。非DOM解决方案placeholder.src = source;和placeholder.setAttribute("src", source);效果一样。
	3.a标签添加onclick，调用showPic方法，传参this，showPic(this)。为了阻止跳转，不触发链接点击自带的默认行为，return false。
	4.childNodes属性可以返回任何一个元素的所有子元素。添加countBodyChildren.js，获取body的childNodes。文档里几乎每一样东西都是一个节点，甚至包括空格和换行符都会被当成一个文本节点(text node)。所以body的childNodes.length很可能比子元素的数量多。
	5.要判断节点的类型，通过元素的nodeType属性，nodeType属性总共有12种可取值，但其中只有3种具有实用价值：
		元素节点的nodeType属性值是1。
		属性节点的nodeType属性值是2。
		文本节点的nodeType属性值是3。
	6.nodeValue可以用来获取元素中的文本。
	7.firstChild和lastChild
		node.firstChild相当于node.ChildNodes[0]。
		node.lastChild相当于node.ChildNodes[node.ChildNodes.length-1]。
	8.使用p标签添加一段描述，获取图片的title，利用nodeValue刷新描述。
	9.添加一些css，美化图片库。

第5章 最佳实践
	Flash容易被和超长的下载时间联系在一起，这是不公平的，因为制作短小精悍的矢量图形和视频片段才是Flash的技术强项。JavaScript也一样和页面无法访问练习在一起，这是由于开发者使用不当引起的。一个技术不是万能的，所以在用一个技术解决问题的时候，要把问题考虑的周全些。
	../chapter05/example.html
	1.平稳退化（优雅降级）：确保网页在没有JavaScript的情况下也能正常工作。
		平稳退化(graceful degradation)。
		如果用户由于厌恶广告弹窗等问题，禁用了JavaScript，也应该让用户可以看到页面的基本内容。
		搜索机器人(searchbot)是会同时禁用图像和JavaScript的，只有极少数搜索机器人能够理解JavaScript代码。如果页面不能平稳退化，它们在搜索引擎的排名就可能会受到损害。
		JavaScript使用window对象的open()方法来创建新的浏览器窗口。这个方法一共有三个参数：window.open(url,name,features)。
		JavaScript协议，"真"协议用来在Internet上计算机之间传递数据包，如HTTP协议(http://)、FTP协议(ftp://)等，伪协议则是一种非标准化的协议。伪协议让我们通过一个链接来调用JavaScript函数。<a href="javascript:popUp('https://github.com/beartest');">，当js被禁用时，无法跳转，不满足平稳退化。
		内嵌的事件处理函数，<a href="#" onclick="popUp('https://github.com/beartest');">，这里href="#"，也无法在js禁用时跳转，不满足平稳退化。这里href应该为有效的跳转url，popUp的传参可以为this.Attribute('href'),或者直接使用DOM提供的this.href。
		“渐进增强”就是用一些额外的信息层去包裹原始数据，按照“渐进增强”原则创建出来的网页几乎都符合“平稳退化”原则。
	2.分离JavaScript：把网页的结构和内容与JavaScript脚本的动作行为分开。
		使a标签不带onclick，添加类popup，添加prepareLinks函数，给所有带popup类的元素添加点击事件。然后使用window.onload = prepareLinks,进行触发。
	3.向后兼容性：确保老版本的浏览器不会因为你的JavaScript脚本而死掉。
		对象探测(object detection)，因为js中几乎所有的东西，包括方法在内，都可以当做对象来对待，这意味着我们可以容易地把不支持某个特定DOM方法的浏览器检测出来。if(!document.getElementsByTagName)。
		浏览器嗅探(brower sniffing)指通过提取浏览器供应商提供的信息来解决向后兼容问题。但是存在一定的风险。因为首先由于历史原因，有些浏览器会把自己报告成另一种浏览器，还有些浏览器可以允许用户自己任意修改这些信息。其次为了适应多种浏览器，需要大量判断，脚本会越来越复杂。
		所以，不建议使用浏览器嗅探，建议使用对象探测。
	4.性能考虑：确定脚本执行的性能最优。
		尽量少访问DOM和尽量减少标记。
		合并脚本，减少加载页面时发送的请求数量。放置脚本在<body>最后，因为位于<head>块中的脚本会导致浏览器无法并行加载其他文件。根据HTTP规范，浏览器每次从同一个域名中最多只可以同时下载两个文件，而在下载脚本期间，浏览器不会下载其他文件，即使是来自不同域名的文件也不会下载，所以所有资源都要等脚本加载完毕后才会下载。
		压缩脚本。代表性的压缩工具:
			Douglas Crockford的JSMin
			雅虎的YUI Compressor
			谷歌的Closure Compiler
			
第6章 案例研究：图片库改进版
	与DOM脚本编程工作有关的问题不外乎平稳退化、向后兼容和分离JavaScript这几大类。这些问题的解决方式和解决程度影响着网页的可用性和可访问性。
	../chapter06/ImageGallery/gallery.html
	逐步改进第四章的图片库代码。
	1.检测平稳退化，满足。
	2.检测js和html分离,不满足。
		如果想用JavaScript给某个网页添加一些行为，就不应该让JavaScript代码对这个网页的结构有任何依赖。
		去掉html中带有的onclick，js文件中添加新的函数prepareGallery(),通过ul的id，给其中的a标签绑定onclick事件。onclick事件中中调用showPic方法，传参为this。
	3.为了向后兼容性，在prepareGallery和showPic中进行对象探测。
		onclick事件中return false避免跳转，现在让showPic有返回值，showPic执行成功返回true，onclick中返回false，即return !showPic(this)。
	4.继续优化
		判断title属性是否存在，不存在的设置为空字符串。
		使用nodeName判断placeholder类型为IMG，nodeName属性总是返回一个大写字母的值。
		利用nodeType检验description的子节点是文本节点，nodeType值为3。
		键盘访问，添加onkeypress事件，直接把onclick事件的所有功能赋给onkeypress。直接用links[i].onkeypress = links[i].onclick;，这种方便的赋值方法也是JavaScript和HTML分离出来的好处之一。
		作者不建议添加onkeypress事件处理函数，因为用户每按下一个按键都会触发它。实际上onclick事件处理函数已经可以满足需求，虽然它叫"onclick"，但它对键盘访问的支持相当完美。
	
	添加addLoadEvent方法，绑定多个load事件。
	用缩略图替代链接中的文字。原文字变成了图片的alt属性值。添加样式美化。
	
	DOM Core和HTML-DOM：
	上一章DOM元素获取和属性操作的五种方法，都是DOM Core的组成部分。它们并不专属JavaScript，支持DOM的任何一种程序设计语言都可以使用它们，它们的用途也不仅限于处理网页，它们可以用来处理任何一种标记语言(比如XML)编写出来的文档。
	使用JavaScript语言和DOM为HTML文件编写脚本时，还有很多属性可供选用，如onclick属性、element.src、element.href、document.forms等。这些属性属于HTML-DOM，出现的比DOM Core早。
	
	ps:结构化程序设计(structed programming)，其中有这样一条原则：函数应该只有一个入口和一个出口。这里进行对象探测会产生多个出口，但是作者认为，只要这些出口集中在函数开头部分，就可以接受。

第7章 动态创建标记
	传统的添加标记的方法document.write(),最大的缺点是它违背了“行为应该与表现分离”的原则。使用<font>标签设置字体和颜色也是这样，虽然方便，但是不优雅。
	还有，MIME类型application/xhtml+xml与document.write不兼容，浏览器在呈现这种XHTML文档时，根本不会执行document.write方法。
	
	innerHTML属性现在几乎所有的浏览器都支持了，它虽然不是W3C DOM标准的组成部分，但现已经包含到HTML5规范中。
	
	DOM方法：
		createElement： document.createElement(nodename)
		appendChild: parent.appendChild(child)
		createTextNode: document.createTextNode(text)
		insertBefore: parentElement.insertBefore(newElement, targetElement)
	
	为了使图片库进一步实现js和html分离：
	../chapter07/ImageGallery/1/gallery.html
	在prepareGallery方法中，使用createElement，createTextNode，appendChild生成<img>元素placeholder和<p>元素description。
	../chapter07/ImageGallery/2/gallery.html
	添加insertAfter方法，相对于DOM自带的insertBefore方法。
	
	Ajax
	../chapter07/Ajax/ajax.html
	1.2005年Adaptive Path公司的Jesse James Garrett发明了Ajax这个词。
	2.Ajax依赖于JavaScript。禁用JS的浏览器无法支持，搜索引擎的爬虫程序也不会抓取到有关内容。
	3.Ajax技术的核心就是XMLHttpRequest对象。微软最早在IE5中以ActiveX对象的形式实现一个名叫XMLHTTP的对象。不同IE版本使用的XMLHTTP对象也不完全相同。
	4.XMLHttpRequest对象有很多的方法，其中最有用的是open方法。请求类型有GET、POST或SEND。
	5.onreadystatechange是一个事件处理函数。
	6.readyState属性的值，有5种可能性： 
		0表示未初始化
		1表示正在加载
		2表示加载完毕
		3表示正在交互
		4表示完成
	7.只要readyState属性的值变成了4，就可以返回服务器发送回来的数据responseText。
	8.使用send()方法发送请求。
	9.使用Ajax时，注意同源策略。使用XMLHttpRequest对象发送的请求只能访问与其所在的HTML处于同一个域的数据，不能向其他域发送请求。有些浏览器会限制Ajax请求使用的协议。
	10.Ajax应用的一个特点就是减少重复加载页面的次数。但这种缺少状态记录的技术会与浏览器的一些使用惯例产生冲突，导致用户无法使用后退按钮或者无法为特定状态下的页面添加书签。
	11.构建Ajax网站最好的方法，也是先构建一个常规的网站，然后Hijax它。
	
	Hijax代表着渐进增强的使用Ajax。
	
第8章 充实文档的内容
	如果你察觉到自己正在使用DOM技术把一些重要的内容添加到网页上，则应该立刻停下来检讨你的计划和思路，你有可能发现自己正在滥用DOM！
	本章着眼使用DOM技术为网页增加一些实用的小部件：
		得到隐藏在属性中的信息。
		创建标记封装这些信息。
		把这些标记插入到文档。
	<abbr>与<acronym>
		<abbr>标签的含义是“缩略语”(abbreviation)。
		<acronym>标签的含义是“首字母缩写字”(acronym)。
		在HTML5中<acronym>标签已被<abbr>标签替代。
	XHTML5
		使用时需要在文档的头部发送正确的MIME类型，即application/xhtml+xml。有些浏览器可能不认识这个MIME类型，应该在服务器端对浏览器进行探查后再发送。页面可能无法呈现。
		使用XHTML5且MIME类型正确，有些HMTL DOM属性可能无法使用，核心DOM方法总是能正常使用。在任何有效的XML文档中，核心DOM方法都畅通无阻。
		
	缩略语列表
	../chapter08/Abbreviations/explanation.html
		获取<abbr>的title和文字构建dl列表。
		注意，在微软的IE浏览器直到IE7才支持abbr元素。
	
	文献来源链接表
	../chapter08/Citations/explanation.html
		获取<blockquote>的cite生成链接，并在<blockquote>的最后一个元素中添加sup上标链接。
		cite是可选属性。
		在获取blockquote元素的最后一个子节点，遇到这样一个问题，使用lastChild属性获取的节点未必是元素节点，可能是文本节点，比如转行或者空格。这就需要去检查nodeType属性。这里使用getElementsByTagName("*")方法可以获取全部的元素节点。
	
	快捷键清单
	../chapter08/Accesskeys/explanation.html
		获取<a>标签的accesskey属性构建ul列表。
		accesskey属性可以把一个元素（如链接）与键盘上的某个特定按键关联在一起。一般来说，Windows系统使用Alt+特定键，Mac系统使用Ctrl+特定键。
		设置太多的快捷键往往会适得其反，它们或许会与浏览器内建的键盘快捷键发生冲突。
		一般的快捷键都有一些约定俗成的设置方法，见http://clagnut.com/blog/193。
			accesskey="1" 返回主页
			accesskey="2" 后退
			accesskey="4" 打开搜索表单
			accesskey="9" 联系方式
			accesskey="0" 快捷键清单

第9章 CSS-DOM
	网页分为结构层、表示层、行为层。对应的技术是(X)HTML、CSS、JavaScript和DOM。三种技术之间存在着一些潜在的重叠区域，如CSS正在利用伪类走进DOM的领域。DOM也可以给元素设定样式。
	文档中的每个元素都是一个对象，每个元素都有一个style属性，style属性也是一个对象。所以可以这样使用：element.style.color。引用中间带减号的CSS属性时，DOM要求用驼峰命名法，如element.style.fontFamily。
	DOM在表示样式属性时所采用的单位并不总是与它们在CSS样式表里的设置相同。如color的设置值可以是单词或者十六进制值，获取的时候有些浏览器会以RGB格式的颜色值返回。绝大部分样式属性的返回值与它们的设置值都采用同样的计量单位。
	CSS速记属性可以把多个样式组合在一起写成一行，DOM能够解析像font这样的速记属性。
	style属性只能返回内嵌样式。
	style对象的属性值永远是一个字符串。
	
	CSS元素选择器，有id选择器，class选择器，还有input[type*="text"]等，以及根据元素位置相关的选择器p:first-of-type。CSS2引入了：first-child和:last-child，CSS3定义了：nth-child()和：nth-of-type()等。
	CSS还是无法根据元素的相对位置找到特定元素。如获取某个元素后面的那个元素。
	使用js进行扩展。使用nextSibling构建getNextElement方法。
	../chapter09/Story/story.html
	
	给表格奇数行添加背景色，如果浏览器支持CSS3，可以使用tr:nth-child(odd)，偶数行可以使用tr:nth-child(even)。不支持CSS3的情况下，可以使用js修改行背景色。
	../chapter09/Itineraty/itinerary.html
	用js给所有偶数行设置背景色。
	效果看起来和设置tr:nth-child(odd)类似，实际上完全不同，对于标题行，css设置了背景色，但是被th的背景色所覆盖。这里的奇数行是分别取thead的奇数行和tbody的奇数行，而用js处理时，取得是整个table中的偶数行。
	使用上一章的displayAbbreviations.js生成缩略语列表。
	
	鼠标移上的突出效果可以使用伪类tr：hover来完成，早期的一些浏览器不支持这种效果。使用js来进行模拟，使用onmouseover和onmouseout。增加highlightRows.js。由于列表的样式行高度没有指定，只是由内容撑开，当字体粗细变化时，表格会发生抖动。
	
	用DOM直接操作某个元素的样式，不如通过js更新元素的class属性。修改可以直接用element.setAttribute("class","XXX");，也可以使用element.className = "XXX"；如果新增类可以使用element.className += " XXX"。为了当只有一个类的时候直接赋值，添加addClass方法，修改story和itinerary的调用。addClass其实还可以通过判断是否存在当前类避免重复添加。
	
	把一个非常具体的东西改进为一个较为通用的东西的过程叫做抽象(abstraction)。
	这里对styleHeaderSibling方法进行抽象,提取元素类型和类名作为函数的参数。

第10章 用JavaScript实现动画效果
	../chapter10/Message/1/message.html
	修改元素的位置很简单，设置position：absolute，修改style.top或style.left即可。
	延时执行函数setTimeout("function",interval)，共两个参数，第一个参数通常是个字符串，内容是将要执行的函数的名字，第二个是数值，是以毫秒为单位的执行延时时间。
	clearTimeout函数可以取消“等待执行”队列中的某个函数。
	
	../chapter10/Message/2/message.html
	使用parseInt获取元素当前位置top和left值，逐步递增或递减，直到到达目标位置。注意style.top赋值时在数值后面加上单位"px";
	
	../chapter10/Message/3/message.html
	对moveElement方法进行抽象，设置参数elementID，final_x，final_y，interval。
	增加元素，给多个元素设置动画。
	
	网页上的动画元素容易引起访问者的反感，还容易导致各种各样的可访问性问题。W3C给出了这样的建议：“除非浏览器允许用户‘冻结’移动着的内容，否则就应该避免让内容在页面中移动”。
	
	../chapter10/SlideShow/list.html
	构建带动画的图片库，鼠标移上链接触发展示图切换动画。
	如果把鼠标指针在链接之间快速地来回移动，动画效果将变得混乱起来。这是因为动画movement是个全局函数，需要再开启新的动画之前清除之前的动画。可以将动画设置为elem.movement。
	动画时间为匀速，优化为远快近慢，移动效果会显得平滑。
	添加left或top属性未设置的安全检查。
	为了平稳退化和js和html分离，使用js生成元素，使用第7章的insertAfter方法插入元素。

第11章 HTML5
	第9章提到网页分为三层，如果说要再加上一层，那就是浏览器的JavaScript API，包括cookie和window等。
	结构层中，HTML5添加了新的标记元素，如<section>、<article>、<header>、<footer>等，更多交互及媒体元素，如<canvas>、<audio>、<video>。表单得到了加强，很多新元素还带有自己的JavaScript和DOM API。
	表现层中，CSS3囊括了高级选择器，渐变，变换还有动画。
	新的JavaScript API还包括Geolocation、Storage、Drag-and-Drop、Socket以及多线程等。
	文档类型声明为<!DOCTYPE html>。
	
	由于自己检查浏览器是否支持全部HTML5特性是不可能的。所以可以使用工具进行检测。
	Modernizr(https://modernizr.com/)是一个开源的JavaScript库，利用它的富特性检测功能，可以对HTML5文档进行更好的控制。也可以从GitHub上下载https://github.com/Modernizr/Modernizr。
	Modernizr会检测浏览器可能支持的各种特性，并相应地添加类名。在使用中浏览器支持部分属性，不支持另一些特性。类名会出现feature和no-feature，如no-canvas，根据这些类名可以在CSS中定义相应的增强和退化版本，改善用户体验。
	Modernizr库也提供了JavaScript特性检测对象，可以在DOM脚本中直接使用，如Modernizr.inputtypes.date。
	
	../chapter11/Canvas/canvas.html
	体验Canvas，绘制一个带边框的圆角矩形。bezierCurveTo绘制曲线，参数一共3组坐标点，前面两组坐标点是控制点。
	../chapter11/GrayScale/grayscale.html
	使用Canvas进行图像处理，将一张彩色图转变为灰度图片。使用drawImage绘制图片，getImageData和putImageData获取图片data，data中的内容，每个像素对应4个颜色量(r,g,b,a)，使用toDataURL方法转化base64。
	基于用户操作实现交互时，使用<canvas>的优势才会显现出来，但是<canvas>和Flash一样，都不具备可访问性。

	../chapter11/Movie/movie.html
	学习使用<video>和<audio>。在HTML5之前嵌入视频需要用到很多重复的<object>和<embed>元素。其中一些在HTML4中无法通过有效性验证。<object>可以引用各种影片播放器如QuickTime、RealPlayer、Flash。
	使用<video>引入影片时，注意给出浏览器不支持<video>时的替代下载链接。
	因为存在不同的容器格式和编解码器，又没有一款浏览器支持所有容器和编解码器，我们必须提供多种后备格式。
	为了确保HTML5的最大兼容性，至少要包含三个版本：MP4、WebM、Ogg。
	为确保最大程度兼容那些不支持HTML5的浏览器，一般还应该准备一个Flash或者QuickTime插件版视频，或者提供直接下载文件的链接。
	不同的视频格式的顺序也是一个问题，把MP4放在第一位，是为了让苹果设备能够顺利读取视频。因为iOS4之前的版本中Mobile Safari只能解析一个<video>元素。
	<video>元素具有很多DOM属性:controls,currentTime,duration,paused,还有一些事件：play,pause,loadeddata,ended等。
	
	HTML5表单元素添加了新的输入控件类型：email,url,date,number,range,serch,tel,color。并添加了新的属性：autocomplete,autofocus,form,min,max,step,pattern,palceholder,required。
	Modernizr可以判断输入控件类型，Modernizr.inputtypes.date，还可以判断属性，Modernizr.input.placeholder。
	不使用Modernizr的时候，自己构建判断函数也并不困难。见inputSupportsType方法和elementSupportsAttribute。
	../chapter11/Forms/forms.html
	构建平稳退化的input占位符placehoder。
	
	HTML5还具备很多其他特性，新功能并不都和DOM相关，还是很有了解的必要。

第12章 综合示例
	../chapter12/domsters/index.html
	构建整个乐队网站，综合之前的事件初始化，元素插入，类添加，动画，图片库。缩略语列表，列表行高亮，占位符，Ajax等内容。
	为了兼容点击label关联表单元素获得焦点，添加focusLabel方法。
	样式表可以通过@import url("layout.css");都引入一个样式文件中。
	每个form对象有个elements.length属性，返回表单包含的表单元素个数。form.element只返回表单元素。
	为了兼容性给表单添加验证，isFilled和isEmail。
	使用JavaScript编写验证表单的脚本时，要记住三件事：
		验证脚本写的不好，反而不如没有验证。
		千万不要完全依赖JavaScript。客户端验证并不能取代服务器端的验证，即使有了JavaScript验证，服务器端照样还应该对接收到的数据再次验证。
		客户端验证的目的在于帮助用户填好表单，避免他们提交未完成的表单，从而节省他们的时间。服务器端验证的目的在于保护数据库和后台系统的安全。
	element.hasChildNodes()判断是否有子节点。
	用正则表达式提取<article>中的内容：/<article>([\s\S]+)<\/article>/。
	注意一般静态文件HBuilder内置的服务器禁止POST请求。