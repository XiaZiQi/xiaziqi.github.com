$(function(){
	var oTran=document.getElementById('tran');
	var oBgtran=document.getElementById('bgtran');
	var j=11;
	var b=8;
	$('#tran').mousedown(function(ev){
		var oEvent=ev||event;
		var disX=oEvent.clientX-$(this).offset().left;
		var Dno=oEvent.clientX;
		var Mno=oEvent.clientX;
		
		$(document).mousemove(function(ev){
			var oEvent=ev||event;
			var X=oEvent.clientX-disX-$('#screen').offset().left;
			$('#tran').css({left:X});
			Mno=oEvent.clientX;

		})

		$(document).mouseup(function(){
			$(this).unbind('mousemove');
			$(this).unbind('mouseup');
			var disC=Mno-Dno;

			if (disC<0 && Math.abs(disC)>120) {
				j++;
				b++;
				// 前景
				
				move(oTran,{left:-578*j},{end:function(){
					if (j==20){
						$('#tran').css({left:-9*578});
						j=9;
					}
					// console.log(j)
				}});
				// 背景
				
				move(oBgtran,{left:-300*b},{type:Tween.Linear,end:function(){
					if(b==15){
						$('#bgtran').css({left:-4*300});
						b=4;
					}
				}});
			}else{
				move(oTran,{left:-578*j});
			};
			if (disC>0 && Math.abs(disC)>120) {
				j--;
				b--;
				// 前景
				move(oTran,{left:-578*j},{end:function(){
					if (j==1){
						$('#tran').css({left:-12*578});
						j=12;
					}
					// console.log(j)
				}});
				// 背景
				move(oBgtran,{left:-300*b},{type:Tween.Linear,end:function(){
					if(b==2){
						$('#bgtran').css({left:-13*300});
						b=13;
					}
				}});
			}
		});
		return false;
	});
})