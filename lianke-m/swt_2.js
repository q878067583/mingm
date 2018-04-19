// JavaScript Document
<!--手机商务通-->
document.writeln("  <div id=\'zjswt\' style=\'position:fixed; top:45%; left:52%; background:url(/templets/lianke/images/swttc.png) no-repeat; width:255px; height:220px;background-size: 100%;margin-top:-80px; margin-left:-135px; z-index:2647; display:none;\'>");
document.writeln("    <div style=\' position:absolute; top:0; right:0;opacity: 0;\'><a href=\'javascript:void(null);\' onclick=\'hidecenter()\' target=\'_self\'><img src=\'/templets/lianke/images/swt_gb.jpg\'></a></div>");
document.writeln("    <a href=\'tel:010-65206028\'><div style=\'position:absolute; top:130px; left:0; width:255px; height:30px;\'></div></a>");
document.writeln("    <a href=\'tel:010-65206028\' style=\'position:absolute; bottom:0; left:0; display:block; width:120px; height:47px;\'></a>");
document.writeln("    <a onclick=\"DS_S_openWin()\"><div style=\'position:absolute; top:180px; right:0; width:130px; height:40px;\'></div></a>");

document.writeln("</div>");


setTimeout("showcenter()",30000);
function showcenter(){
	$("#zjswt").fadeIn();
}
function hidecenter()
{
	$("#zjswt").fadeOut();
	setTimeout("showcenter()",30000);
}
//链接新窗口打开




/*2016-06-12 中间商务通 zxlrem*/
/*
document.writeln("<style>");
document.writeln(".absolute { position: absolute;}");
document.writeln(".swtCenter {width:248px;height:200px; background-color:#FFF;position:fixed;left:50%;top:45%;z-index:200;margin-left:-124px;margin-top:-120px;-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;-moz-box-shadow:0 0 10px rgba(10,2,4,0.75);-webkit-box-shadow:0 0 10px rgba(10,2,4,0.75);box-shadow:0 0 10px rgba(10,2,4,0.75);display:none}");
document.writeln(".swtCenter h3 {width:100%;font-size:24px;text-align:center; color:#c10101;margin-top:24px; font-family:'微软雅黑';}");
document.writeln(".swtCenter h4 {width:100%;font-size:16px;text-align:center;color:#2e3642; line-height:28px; font-family:'微软雅黑';}");
document.writeln(".swtCenter h4 img{width: 29px;height: 30px; }");

document.writeln(".mfhd {width:227px;height:32px; margin: 9px auto;}");
document.writeln(".mfhd a {width: 228px; height: 32px;    margin-top: 4px; display:block; color:#fff;font-size:16px;line-height:32px;text-decoration:none;}");
document.writeln(".callbF_center { background-color: #fff; border-radius: 15px 0 0 15px;color: #6a7380;float: left; font-size: 12px; height: 30px; line-height: 30px; outline: medium none; padding-left: 13px;  width: 132px;}");
document.writeln(".submit_center {width:82px;height:32px;line-height:32px;color:#fff; background:#FF6005;font-size:12px;text-align:center;text-decoration:none;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:left;cursor: pointer;}");
document.writeln(".swtCenter p {width:257px;font-size:12px;color:#6a7380;margin:0 auto !important;line-height: 20px !important;}");
document.writeln(".swt_lists {bottom:0;left:0;width:100%;height:58px;line-height:58px;-moz-border-radius:0 0 15px 15px;-webkit-border-radius:0 0 15px 15px;border-radius:0 0 15px 15px;}");
document.writeln(".swt_lists a {display:block;width:50%;height:100%;position:relative;float:left;}");
document.writeln(".swt_list1 { background-color:#c10101;-moz-border-radius:0 0 15px 0;-webkit-border-radius:0 0 15px 0;border-radius:0 0 15px 0;;}");
document.writeln(".swt_list2 { background-color:#ff6005;-moz-border-radius:0 0 0 15px;-webkit-border-radius:0 0 0 15px;border-radius:0 0 0 15px}");
document.writeln(".swt_lists a i,.swt_lists a em {display:block;position:absolute;left:50%;color:#fff;text-decoration:none;}");
document.writeln(".swtCallIcon {top:50%;margin-left:-50px;margin-top:-13px;width:28px;height:28px; background:url(/swt/images/footerLink3.gif) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
document.writeln(".swt_lists em {height:100%;top:0;margin-left:-16px;font-size:16px;}");
document.writeln(".swtLinkIcon {top:50%;margin-left:-50px;width:27px;height:27px;margin-top:-12px;background:url(/swt/images/footerLink2.gif) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
document.writeln(".swtLinkCounter {top:15px;width:14px;height:14px;margin-left:-34px;line-height:13px;text-align:center;font-size:9px;background-color:#e60012;-moz-border-radius:14px;-webkit-border-radius:14px;border-radius:14px;-moz-box-shadow:0 0 3px rgba(0,0,0,0.8);-webkit-box-shadow:0 0 3px rgba(0,0,0,0.8);box-shadow:0 0 3px rgba(0,0,0,0.8);z-index:3;font-style:normal;}");
document.writeln(".closeBtn_swt {right:-10px;top:-20px;width:44px;height:44px; background:url(/m/images/closeBtn_swt.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;cursor:pointer;}");

document.writeln("#LRfloater0 {display:none;}");
document.writeln("#LRfloater1 {display:none;}");

document.writeln("</style>");
document.writeln("<div class=\"swtCenter relative\" id=\"swtmfloat\">");
document.writeln("    	<span id=\"swtm_hide\" class=\"closeBtn_swt absolute\" onclick=\"toolclose();\" ></span>");
document.writeln("    	<h3>肾脏疾病在线咨询平台</h3>");
document.writeln("        <h4>北京联科中医肾病医院</h4>");
document.writeln("        <div class=\"mfhd clearfix\">");
document.writeln("        	<a href=\"tel:010-65206028\"><span style=\"    color: #000;    font-size: 16px;    line-height: 30px;    height: 30px;    display: inline-block;    width: 140px;    text-align: center;    font-weight: bold;    border-radius: 32px 0 0 32px;    border: 1px solid #ccc;    border-width: 1px 0 1px 1px;\">010-65206028</span><i style=\"    display: inline-block;    width: 80px;    text-align: center;    background:#ff5100;    height: 32px;    line-height: 32px;  color:#fff;   border-radius: 0 32px 32px 0;\">一键通话</i></a>");
document.writeln("        </div>");
document.writeln("        <div class=\"swt_lists absolute\">");
document.writeln("            <a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\"  class=\"swt_list2\"><i class=\"swtLinkIcon\"></i><em>微信咨询</em></a>");
document.writeln("        	  <a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\"  class=\"swt_list1\"><i class=\"swtCallIcon\"></i><em>在线咨询</em></a>");
document.writeln("        </div>");
document.writeln("    </div>");

function toolclose() {
	document.getElementById("swtmfloat").style.display = "none";
	setTimeout("toolshow()", 10000);
}
setTimeout("toolshow()", 10000);
function toolshow() {	
	document.getElementById("swtmfloat").style.display = "block";
}


document.writeln("<div style=\'position:fixed; right:0; bottom:7rem; z-index:9999; width:3rem;\'><a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\"><img style=\' width:3rem;\' src=\'/m/images/cbtc.gif\'></a></div>");
*/












 /*右侧  弹窗*/ 
/*document.writeln("<style type=\"text/css\">");
document.writeln("#side{position: fixed;margin-right:0.2rem;z-index: 1;width:3.0rem;height:4.5rem;display:block;bottom:5.6rem; left:0}");
document.writeln("</style>");
document.writeln("<div id=\"side\">");
document.writeln("<div style=\'position: absolute; top:0; right:0; width:0.24rem; height:.24rem\'> <a href=\'javascript:void(0);\' onclick=\'close_left_swt();\' style=\'float:right;width:0.3rem; height:0.3rem\'> </a> </div>");
document.writeln("<a onclick=\"_53App.talk('icon','&zdkf_type=3&kf=');\" class=\"swt\"><img  src=\"/m/images/yaoyiyao.png\" style=\"width:3.0rem;height:4.5rem;\"/></a>");
document.writeln("</div>");
document.writeln("<script>");
document.writeln("	function close_left_swt(){");
document.writeln("			$(\'#side\').hide();");
document.writeln("			setTimeout(\'show_left_swt()\', 10000);");
document.writeln("				}");
document.writeln("		function show_left_swt(){");
document.writeln("			$(\'#side\').show();");
document.writeln("			}");
document.writeln("</script>");*/

//底部添加
 
 /*
 * Author: Alex Gibson
 * https://github.com/alexgibson/shake.js
 * License: MIT license
 */

(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory(global, global.document);
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(global, global.document);
    } else {
        global.Shake = factory(global, global.document);
    }
} (typeof window !== 'undefined' ? window : this, function (window, document) {

    'use strict';

    function Shake(options) {
        //feature detect
        this.hasDeviceMotion = 'ondevicemotion' in window;

        this.options = {
            threshold: 15, //default velocity threshold for shake to register
            timeout: 1000 //default interval between events
        };

        if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    this.options[i] = options[i];
                }
            }
        }

        //use date to prevent multiple shakes firing
        this.lastTime = new Date();

        //accelerometer values
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;

        //create custom event
        if (typeof document.CustomEvent === 'function') {
            this.event = new document.CustomEvent('shake', {
                bubbles: true,
                cancelable: true
            });
        } else if (typeof document.createEvent === 'function') {
            this.event = document.createEvent('Event');
            this.event.initEvent('shake', true, true);
        } else {
            return false;
        }
    }

    //reset timer values
    Shake.prototype.reset = function () {
        this.lastTime = new Date();
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;
    };

    //start listening for devicemotion
    Shake.prototype.start = function () {
        this.reset();
        if (this.hasDeviceMotion) {
            window.addEventListener('devicemotion', this, false);
        }
    };

    //stop listening for devicemotion
    Shake.prototype.stop = function () {
        if (this.hasDeviceMotion) {
            window.removeEventListener('devicemotion', this, false);
        }
        this.reset();
    };

    //calculates if shake did occur
    Shake.prototype.devicemotion = function (e) {
        var current = e.accelerationIncludingGravity;
        var currentTime;
        var timeDifference;
        var deltaX = 0;
        var deltaY = 0;
        var deltaZ = 0;

        if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {
            this.lastX = current.x;
            this.lastY = current.y;
            this.lastZ = current.z;
            return;
        }

        deltaX = Math.abs(this.lastX - current.x);
        deltaY = Math.abs(this.lastY - current.y);
        deltaZ = Math.abs(this.lastZ - current.z);

        if (((deltaX > this.options.threshold) && (deltaY > this.options.threshold)) || ((deltaX > this.options.threshold) && (deltaZ > this.options.threshold)) || ((deltaY > this.options.threshold) && (deltaZ > this.options.threshold))) {
            //calculate time in milliseconds since last shake registered
            currentTime = new Date();
            timeDifference = currentTime.getTime() - this.lastTime.getTime();

            if (timeDifference > this.options.timeout) {
                window.dispatchEvent(this.event);
                this.lastTime = new Date();
            }
        }

        this.lastX = current.x;
        this.lastY = current.y;
        this.lastZ = current.z;

    };

    //event handler
    Shake.prototype.handleEvent = function (e) {
        if (typeof (this[e.type]) === 'function') {
            return this[e.type](e);
        }
    };

    return Shake;
}));



window.onload = function() { 
    var myShakeEvent = new Shake({ 
        threshold: 10 
    }); 
 
    myShakeEvent.start(); 
 
    window.addEventListener('shake', shakeEventDidOccur, false); 
 
    function shakeEventDidOccur () { 
        window.open("http://lkonline.bjwhds.com/TalkOnline.aspx?cusid=10000029&remark=","_self");
    } 
}; 


   //开场动画
/*  document.writeln("<style type=\'text/css\'>");
document.writeln(".fullswt{ width: 100%; height: 100%; position: fixed; left: 0; top: 0; background-color: rgba(0,0,0,.75); z-index: 2147483640 !important; display:none }");
document.writeln(".closefullswt{position: fixed; right: .2rem;top:4rem;width:4.8rem; height:.92rem;z-index:2147483648}");
document.writeln(".fullswt_n{ width: 15rem; height:16rem; position: absolute; left: 0; right: 0; top:22%; margin-left: auto; margin-right: auto; margin-top: 0rem; background-image: url(/m/images/1027-1.png); background-size: cover; }");
document.writeln(".fullswt_tel{ width: 42%; height: 1.6rem; line-height: 1.6rem; background-color: #CC0000; position: absolute; left: 10%; bottom: .7rem; border-radius: .2rem 0 0 0;text-align: center;color:#fff;  font-size:.7rem;font-family:'微软雅黑';}");
document.writeln(".fullswt_zixun{ width: 42%;height: 1.6rem; line-height: 1.6rem; background: #FF7E00 url(/m/images/wxlg.png) no-repeat 1rem center; text-indent:.3rem; background-size:.9rem .9rem; position: absolute; right: 10%; bottom: .7rem; border-radius: 0 0 .2rem 0;text-align: center;color:#fff; font-size:.7rem; font-family:'微软雅黑';");
document.writeln("</style>");
document.writeln("<div class=\'fullswt  swt\'>");
document.writeln("	<img src=\'/m/images/1027-2.png\' class=\'closefullswt\' />");
document.writeln("	<div class=\'fullswt_n font6\'>");
document.writeln("      <a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\"><div class=\'fullswt_zixun setzt bai text-center swt\'>咨询专家</div></a>");
document.writeln("		<a href=\'tel:010-65206028\' class=\'\' onClick=\"window.event.cancelBubble = true;\"><div class=\'fullswt_tel bai setzt text-center\'>电话咨询</div></a>");
document.writeln("	</div>");
document.writeln("</div>");
$("header").addClass("clearfix");
function showfullswt(){
	$('.fullswt').fadeIn(800);
}
function closefullswt(){
	$('.fullswt').fadeOut(400);
	setTimeout('showfullswt()',70000); //下次弹出时间 ms
	//关闭后，执行弹出中间弹窗函数
	firstZjtc();
	console.log("hello")
}
taiter1=null;
function zhixing_fullswt(){
		if(!window.global_flag){   //全屏开关
			 taiter = setTimeout('showfullswt()',5000); //第一次弹出时间 ms
		}else{
			//文章页 页面加载完后 直接执行
			firstZjtc();
		}
}
zhixing_fullswt();
function showswtwx(){
	$('.swtwx').fadeIn(800);
	setTimeout('wxdhshow1()',600);
	setTimeout('wxdhshow2()',1000);
}
$(function(){
	$('.closethis').click(function(){
		closecenterswt();
	});
	$('.swtwx_btl_close').click(function(){
		$('.swtwx').fadeOut();
		$('.swtwx_center_dh:eq(0)').hide();
		$('.swtwx_center_dh:eq(1)').hide();
		//setTimeout('showswtwx()',9000);
	});
	$('.closefullswt').click(function(){
		closefullswt();
		clszxtc();
		window.event.cancelBubble = true;
	});
})
  //开场动画                


                  
*/