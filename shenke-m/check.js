function chkForm()
{
	var feedback = document.feedback;
	if(feedback.name.value=="��������������")
	{
		alert("����������������");
		feedback.name.focus();
		return false;
	}
	if(feedback.name.value=="")
	{
		alert("�������벻��Ϊ�գ�");
		feedback.name.focus();
		return false;
	}
  
	if(feedback.mycall.value=="���������ĵ绰")
	{
		alert("���������ĵ绰��");
		feedback.mycall.focus();
		return false;
	}
	if(feedback.mycall.value=="")
	{
		alert("�绰���벻��Ϊ�գ�");
		feedback.mycall.focus();
		return false;
	}
}

function restForm() {
	document.feedback.name.value="��������������";
	document.feedback.mycall.value="���������ĵ绰";
}
var laiyuan=window.location.href;