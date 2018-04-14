document.writeln("<script type=\'text/javascript\' src=\'http://kst.52733999.com/kuaishangtong/kstpc/swt.js\'></script>");

document.writeln("<style type=\"text/css\">");

document.writeln("#dibufdcbox {");
document.writeln("	height: 50px;");
document.writeln("	position: fixed;");
document.writeln("	bottom: 0;");
document.writeln("	width: 100%;");
document.writeln("	margin: 0;");
document.writeln("	padding: 0;");
document.writeln("	border: 0;");
document.writeln("	z-index: 100;");
document.writeln("	text-align: center;");
document.writeln("	_position: absolute;");
document.writeln("_margin-top:expression(this.style.pixelHeight+document.documentElement.scrollTop);");
document.writeln("}");
document.writeln("#dibufdcbox .fdcnr {");
document.writeln("	background: url(/jc/swt/bottom.gif) no-repeat;");
document.writeln("	width: 1440px;");
document.writeln("	margin: 0 auto;");
document.writeln("	height: 50px;");
document.writeln("}");
document.writeln(".close{ width:15px; height:15px;position:absolute; right:0; top:0;background: url(/jc/swt/bt_close.png) no-repeat right;  background-size:100%;}");
document.writeln("#dibufdcbox .yygh {");
document.writeln("	float: left;");
document.writeln("	width: 1440px;");
document.writeln("	height: 50px;");
document.writeln("	margin: 0px 0 0 0px;");
document.writeln("	display: inline;");
document.writeln("}");
document.writeln("#dibufdcbox .yyzx {");
document.writeln("	float: left;");
document.writeln("	width: 140px;");
document.writeln("	height: 35px;");
document.writeln("	margin: 8px 0 0 80px;");
document.writeln("	display: inline;");
document.writeln("}");
document.writeln("#dibufdcbox .sjdx {");
document.writeln("	float: left;");
document.writeln("	width: 155px;");
document.writeln("	height: 35px;");
document.writeln("	margin: 8px 0 0 20px;");
document.writeln("	display: inline;");
document.writeln("	cursor: pointer;");
document.writeln("	border:none;");
document.writeln("	background:none;");
document.writeln("}");
document.writeln("#dibufdcbox .gh {");
document.writeln("	float: left;");
document.writeln("	width: 135px;");
document.writeln("	height: 35px;");
document.writeln("	margin: 8px 0 0 20px;");
document.writeln("	display: inline;");
document.writeln("}");
document.writeln("");
document.writeln("</style>");
document.writeln("");
document.writeln("<div id=\"dibufdcbox\">");
document.writeln("  <div class=\"fdcnr\"><a href=\"javascript:void(0)\" onClick=\"openZoosUrl();return false;\" rel=\"nofollow\" class=\"yygh\"></a>");
document.writeln(" <div onclick=\"bottomcloseM()\"class=\"close\"></div> ");
document.writeln("  </div>");
document.writeln("</div>");

function chuxian(){
	document.getElementById('dibufdcbox').style.display='block';
	
	}
function bottomcloseM(){
	document.getElementById('dibufdcbox').style.display='none';
	
	setTimeout("chuxian()", 15000);
	}