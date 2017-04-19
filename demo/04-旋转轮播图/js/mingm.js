/**
 * Created by mingming on 2017/4/18.
 */
window.onload = function () {
	var arr = [
		{   //  1
			width:400,
			top:70,
			left:50,
			opacity:20,
			zIndex:2
		},
		{  // 2
			width:600,
			top:120,
			left:0,
			opacity:80,
			zIndex:3
		},
		{   // 3
			width:800,
			top:100,
			left:200,
			opacity:100,
			zIndex:4
		},
		{  // 4
			width:600,
			top:120,
			left:600,
			opacity:80,
			zIndex:3
		},
		{   //5
			width:400,
			top:70,
			left:750,
			opacity:20,
			zIndex:2
		}
	];

	// 获取元素
	var slide = document.getElementById("slide");
	var liArr = slide.getElementsByTagName("li");
	var arrow = slide.children[1];
	var arrowChildren = arrow.children;
	// 开闭原则
	var flag = true ;

	// 鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
	slide.onmouseenter = function () {
		animate(arrow,{"opacity":100});
	}
	slide.onmouseleave = function () {
		animate(arrow,{"opacity":0});
	}
	move();
	// 把两侧按钮绑定事件
	arrowChildren[0].onclick = function () {
		if(flag){
			flag = false ;
			move(true);
		}
	}
	arrowChildren[1].onclick = function () {
		if(flag){
			flag = false;
			move(false);
		}
	}
	// 书写函数
	// (操作数组。反向旋转：删除数组中最后一个元素，添加到数组中的第一位)
	//json.push();//在最后添加
	//json.pop();//删除最后一位
	//json.unshift();//在最前面添加
	//json.shift();//删除第一位
	function move(bool) {
		if(bool === true || bool === false){
			if (bool){
				arr.unshift(arr.pop());
			}else{
				arr.push(arr.shift());
			}

		}
		for (var i=0;i<liArr.length;i++){
			animate(liArr[i],arr[i],function () {
				flag = true ;
			});
		}

	}


}