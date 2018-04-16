
document.writeln('<script language="javascript" src="http://swt.gsbyy.com/JS/LsJS.aspx?siteid=KKZ11381681&float=0&lng=cn"></script>');

//商务通
function hide() {
document.getElementById('tanchuang').style.display ='none';
document.getElementById("best3g_swt").style.display="block";
window.setTimeout(show,15000); 
LR_HideInvite();LR_RefuseChat();
}
function show() { 
document.getElementById('tanchuang').style.display ='';
document.getElementById("best3g_swt").style.display="none";
} 


  setInterval('swtisshow()', 1);
    //防止弹窗2个商务通
    function swtisshow() {
        if (document.getElementById("LRdiv1"))
        {
            if ($("#LRdiv1").attr("style").indexOf("block") != -1)
            {
                $("#LRdiv1").hide();
               /* show();*/
            }
        }
    }
  
    var jsHour = new Date().getHours();
    if (jsHour >= 8 && jsHour <= 24)
    {
        window.setTimeout(show, 5000);
    }else {
		document.getElementById('tanchuang').style.display ='none';
		}



document.writeln("");
document.writeln("<!--中间弹框替换-->  ");
document.writeln("<style>");
document.writeln("#bridgeinviteclose {position: absolute;width:30px;height:30px;top:0px;right:0px; }");
document.writeln(".qiao-invite-opt {width: 100%;height: 2em;left: 0px;bottom: 1px;min-width: 9em;}");
document.writeln(".qiao-invite-opt a {float: left;height: 2em;line-height: 2em;width: 49%;margin-left: 1px;text-align: center;text-decoration: none;cursor: pointer;}");
document.writeln(".tex{ position:absolute; top:24px; left:75px; width:130px; height:55px; color:#000; }");
document.writeln(".tex p:nth-child(1){ font-size:16px; font-family:\"宋体\"; width:130px; text-align:center; line-height:20px;}");
document.writeln(".tex p:nth-child(2){ font-size:12px; font-family:\"宋体\"; width:130px; text-align:center; line-height:20px;}");
document.writeln(".jieshou{position:absolute; top:50px; left:84px; width:140px; color:#FFF; font-size:12px;}");
document.writeln(".jieshou a{ color:#FFF;}");
document.writeln(".jieshou span:nth-child(1){ font-size:12px; font-family:\"宋体\"; line-height:20px;  width:65px; height:20px; display:block;}");
document.writeln(".jieshou span:nth-child(2){ font-size:12px; font-family:\"宋体\"; width:65px; height:20px; display:block; }");
document.writeln("</style>");
document.writeln("<div id=\"tanchuang\" style=\"left: 50%; top: 50%; margin-top: -65px; margin-left: -108px; position: fixed; display: none; \">");
document.writeln("  <div id=\"InviteContainer\" style=\" cursor: pointer; display: block;overflow:hidden; \">");
document.writeln("    <div id=\"bridgeTopContainer\" style=\"background:url(http://wap.gsbyy.net/skin/wap1/swt/zhuanjia.gif) bottom left no-repeat; height:94px; width:240px; \">");
document.writeln("     <a id=\"bridgeinviteclose\" onclick=\" hide() ;\"></a>");
document.writeln("      <div class=\"bdbridge-clearfix\" >");
document.writeln("       <a onclick=\"openZoosUrl(\'chatwin\');return false;\" href=\"javascript:void(0)\"  >");
document.writeln("        <div style=\"width:230px; height:84px;\">");
document.writeln("          <div id=\"decorationskin\" style=\"visibility: hidden; width: 98px; height: 78px; \"></div>");
document.writeln("          <div class=\"tex\">");
document.writeln("           ");
document.writeln("          </div>");
document.writeln("          <div class=\"jieshou\">");
document.writeln("            <a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();_hmt.push([\'_trackMobConv\', \'webim\']);return false;\"><span></span></a>");
document.writeln("            <a href=\"tel:029-86290177\"><span></span></a>");
document.writeln("          </div>");
document.writeln("        </div>");
document.writeln("        </a></div>");
document.writeln("    </div>");
document.writeln("  </div>");
document.writeln("   </div>");
document.writeln("   ");
document.writeln(" ");
document.writeln("<div id=\"best3g_swt\" style=\'position: fixed;;top:5%;right:0px; margin-top: 150px; margin-left: -30px; width:60px;height:60px;z-index:10000;\'>");
document.writeln("<a target=\"_blank\" href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();_hmt.push([\'_trackMobConv\', \'webim\']);return false;\"><img src=\"http://wap.gsbyy.net/skin/wap1/swt/zx.gif\" width=\"52\" height=\"52\" border=\"0\" /></a>");
document.writeln("</div>   ");