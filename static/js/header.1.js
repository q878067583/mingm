jQuery(".nav").slide({ 
type:"menu", //Ч������
titCell:".m", // ��괥������
targetCell:".sub", // Ч�����󣬱��뱻titCell����
effect:"slideDown",//����Ч��
delayTime:300, // Ч��ʱ��
triggerTime:0 //����ӳٴ���ʱ��
});


jQuery(".sub").slide({ 
type:"menu", //Ч������
titCell:".n", // ��괥������
targetCell:".sub2", // Ч�����󣬱��뱻titCell����
effect:"slideDown",//����Ч��
delayTime:400, // Ч��ʱ��
triggerTime:0 //����ӳٴ���ʱ��
});