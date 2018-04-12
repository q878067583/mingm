window.onload = function () {
	// 顶部的通栏 滚动的效果
	headerScroll();
	// 倒计时的效果
	cutDownTime();
	// 轮播图的效果
	banner();

}

// 通栏的方法
/*
	获取导航栏的高度
	在onscroll事件中 去修改颜色
		0-1的透明度
		获取到 滚动的距离
		滚动的距离／导航栏  得到0-1的浮点数
		滚动的距离 大于 导航栏 >1 如果透明度 >1 则变为1
		通过js修改顶部通栏的透明度
 */
	function headerScroll() {
		// 导航栏
		var navDom = document.querySelector('.jd_nav');
		// 获取从顶部 到导航栏底部的距离
		var maxDistance = navDom.offsetTop + navDom.offsetHeight;
		// 获取 顶部的通栏
		var headerDom = document.querySelector('.jd_header');
		// 直接设置rgba
		headerDom.style.backgroundColor = 'rgba(201,21,35)';

		//注册滑动事件
		window.onscroll = function () {
			var scrollDistance = window.document.body.scrollTop;

			// 浮点数
			var percent = scrollDistance / maxDistance;
			if (percent > 1) {
				percent = 1;
			}
			headerDom.style.backgroundColor = 'rgba(201,21,35,' + percent + ')';

		}
}
	// 倒计时
		/*
			定一个 倒计时的总时间
			判断过期时间
			修改对应标签的显示
		 */
	function cutDownTime() {

		var totalHour = 3; // 总时间
		var totalSec = 3*60*60+1; // 转化为秒 多加一秒，这样用户但看到的是从整数开始的
		// 获取li标签
		var liArr = document.querySelectorAll('.main_content:nth-child(1) .content_top li');
		// 开启定时器
		var timeId = setInterval(function () {
			// 判断是否超时
			if(totalSec<=0){
				clearInterval(timeId);
				return;
			}
			totalSec--;
			// 当前的秒 对应的  时／分／秒
			var hour = Math.floor(totalSec / 3600);
			var minute = Math.floor(totalSec%3600 /60);
			var sec = totalSec %60 ;
			// hour
			liArr[0].innerHTML = Math.floor(hour/10); // 十位数
			liArr[1].innerHTML = hour%10; 			  // 个位
			// minute
			liArr[3].innerHTML = Math.floor(minute/10);
			liArr[4].innerHTML = minute % 10 ;
			// second
			liArr[6].innerHTML = Math.floor(sec/10);
			liArr[7].innerHTML = sec % 10 ;


		},1000)
	}

	// 轮播图
	function banner() {
		// 获取屏幕宽度
		var width = document.body.offsetWidth;
		// 轮播图的ul
		var moveUl = document.querySelector('.banner_images');
		// 索引的 li标签
		var indexLiArr = document.querySelectorAll('.banner_index li');
		// 定义index记录当前的索引值
		// 默认已经往左移动了1倍的宽度
		var index = 1;
		// var timeId = setInterval(function () {
		// 	index++;
		// 	// 开启过渡
		// 	moveUl.style.transition = 'all .3s';
		// 	moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		//
		//
		// },1000);

		// 开启动画属性
		var startTransition = function () {

			moveUl.style.transition = 'all .3s';

		}
		// 结束动画
		var endTransition = function () {
			moveUl.style.transition = '';
		}
		// 移动的距离
		var setTransform = function (distance) {
			moveUl.style.transform = 'translateX('+distance+'px)';
		}
		// 开启定时器
		var timeId = setInterval(function () {
			index++;
			startTransition();
			// 修改ul 的位置
			setTransform(index*width*-1);

		},3000);

		// 过渡事件结束 修正index的值并修改索引
		moveUl.addEventListener('webkitTransitionEnd',function () {
			console.log('过渡结束');
			// 若index太大
			if (index>8) {
				index = 1;
				// 关闭过渡
				endTransition();
			}else if(index<1){
				index = 8;
				endTransition();
			}
			// 瞬间跳转到 真·li
			setTransform(index*width*-1);
			// 修改索引小圆点
			for (var i=0;i<indexLiArr.length;i++){
				indexLiArr[i].className = '';
			}
			indexLiArr[index-1].className = 'current';


		})

		// 注册三个touch事件
		// 开始的x坐标.实时X坐标.移动的值.
		var startX = 0;
		var moveX = 0;
		var distance = 0;

		// 触摸开始 关闭定时器 关闭过渡效果
		moveUl.addEventListener('touchstart',function (event) {
			clearInterval(timeId);
			moveUl.style.transition = '';
			startX = event.touches[0].clientX;
		})
		// 触摸持续时
		moveUl.addEventListener('touchmove',function (event) {
			moveX = event.touches[0].clientX -startX;
			// 现在所在的位置为 index*width*-1  px
			moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
		})
		// 触摸结束
		moveUl.addEventListener('touchend',function (event) {
			// 吸附效果
			// 最大偏移量
			var maxDistance = width/3 ;
			// 若用户选择了下一个轮播对象 则增加等待时间
			var latency=0;
			if(Math.abs(moveX)>maxDistance) {

				// 开启过渡效果
				moveUl.style.transition = 'all .3s';
				// 往左还是右
				if (moveX > 0) {
					index--;
				}else{
					index++;
				}
				startTransition();
				setTransform(index*width*-1);
				latency = 2000;
			}
				else {
					// 吸附回去
				startTransition();
				setTransform(index*width*-1);
				}
				// 开启定时器

				timeId = setTimeout(function () {
						setInterval(function () {
							index++;
							startTransition();
							setTransform(index*width*-1);
						},3000)
					},latency)






		})

	}


