		jQuery(".picnews").slide({ titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click",
			//����startFun�������ڿ������������л�
			startFun:function(i){
				 jQuery(".picnews .txt li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-36});
			}
		});