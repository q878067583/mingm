function chkForm()
{
	var feedback = document.feedback;
	if(feedback.name.value=="请输入您的姓名")
	{
		alert("请输入您的姓名！");
		feedback.name.focus();
		return false;
	}
	if(feedback.name.value=="")
	{
		alert("姓名输入不能为空！");
		feedback.name.focus();
		return false;
	}
  
	if(feedback.mycall.value=="请输入您的电话")
	{
		alert("请输入您的电话！");
		feedback.mycall.focus();
		return false;
	}
	if(feedback.mycall.value=="")
	{
		alert("电话输入不能为空！");
		feedback.mycall.focus();
		return false;
	}
}

function restForm() {
	document.feedback.name.value="请输入您的姓名";
	document.feedback.mycall.value="请输入您的电话";
}
var laiyuan=window.location.href;