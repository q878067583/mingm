/**
 * Created by mingming on 2017/4/18.
 */
function show(ele) {
	ele.style.display = "block" ;
}
/**
 * 获取元素样式兼容写法
 * @param ele
 * @param attr
 * @returns {*}
 */


function getStyle(ele,attr) {
	if (window.getComputedStyle){
		return window.getComputedStyle(ele,null)[attr];
	}
	return ele.currentStyle[attr];
}
/**
 * 缓动框架
 * @param ele
 * @param json
 * @param fn
 */


function animate(ele,json,fn) {

	clearInterval(ele.timer);
	ele.timer = setInterval( function () {
		// 开闭原则
		var bool = true ;
		// 遍历属性和值，分别处理json
		// attr == k(键)  target == json[k]（值）
		for (var k in json){
			var leader ;
			if (k === "opacity"){
				leader = getStyle(ele,k)*100 || 1;
			}else {
				leader = parseInt(getStyle(ele,k)) || 0;
			}
			// 1.获取步长
			var step = (json[k] - leader)/10 ;
			// 2.二次加工步长
			step = step>0? Math.ceil(step):Math.floor(step);
			leader = leader + step ;
			// 3.赋值。有特殊情况
			if (k === "opacity"){
				ele.style[k] = leader/100 ;
				// 兼容IE678
				ele.style.filter = "alpha(opacity="+leader+")";
			}else if(k === "zIndex"){
				// 若是层级 则可直接赋值
				ele.style.zIndex = json[k];
			}else{
				ele.style[k] = leader +"px";
			}
			// 4.清除定时器
			if (json[k] !== leader){
				bool = false ;
			}
		}
		if (bool){
			// 只有所有属性都到了指定位置，bool值 才不会编程false
			clearInterval(ele.timer);
			// 所有程序执行完毕了，现在可以执行回掉函数了(若有的话）
			if(fn){
				fn();
			}
		}
	},20);
}

/**
 * 获取屏幕可视区域的宽高
 * @returns {*}
 */

function client() {
	if(window.innerHeight !== undefind){
		return {
			"width": window.innerWidth,
			"height": window.innerHeight
		}
	}else if (document.compatMode === "CSS1Compat"){
		return {
			"width": document.documentElement.clientWidth,
			"height": document.documentElement.clientHeight
		}
	}else {
		return {
			"width": document.body.clientWidth,
			"height": document.body.clientHeight
		}
	}

}





























