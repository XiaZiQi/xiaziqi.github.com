
window.onload=function(){
	var oBox=document.getElementById('box');
	var oBtn=document.getElementById('btn');
	var aLi=document.getElementsByTagName('li');
	var arr=[];
	var zindex=1;
	var timer=null;
	var timer2=null;
	var timer3=null;

	for (var i = 0; i < aLi.length; i++) {
		arr.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop,icon:i});
	}
	oBtn.onclick=function(){
		clearInterval(timer);
		clearInterval(timer3);
		timer=setInterval(function(){
			arr.sort(function(){
			return Math.random()-.5;
			});
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].style.position='absolute';
				aLi[i].style.top=arr[i].top+'px';
				aLi[i].style.left=arr[i].left+'px';
				aLi[i].style.margin=0;
				aLi[i].index=i;
				aLi[i].setAttribute('icon',arr[i].icon);
			}
		},30);
		timer2=setTimeout(function(){
			clearInterval(timer);
			clearInterval(timer2);
		},1000);
		
	};
	oBtn.onclick();
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].style.position='absolute';
		aLi[i].style.top=arr[i].top+'px';
		aLi[i].style.left=arr[i].left+'px';
		aLi[i].style.margin=0;
	}
	for (var i = 0; i < aLi.length; i++) {
		pickMove(aLi[i]);
		aLi[i].index=i;
	}
	function collision(obj1,obj2){
		var l1=obj1.offsetLeft;
		var r1=obj1.offsetLeft+obj1.offsetWidth;
		var t1=obj1.offsetTop;
		var b1=obj1.offsetTop+obj1.offsetHeight;

		var l2=obj2.offsetLeft;
		var r2=obj2.offsetLeft+obj2.offsetWidth;
		var t2=obj2.offsetTop;
		var b2=obj2.offsetTop+obj2.offsetHeight;

		if (r1>l2&&l1<r2&&b1>t2&&t1<b2) {
			return true;
		}else{
			return false;
		}
	}
	function distance(obj1,obj2){
		var a=obj2.offsetLeft-obj1.offsetLeft;
		var b=obj2.offsetTop-obj1.offsetTop;
		return Math.sqrt(a*a+b*b);
	}
	function findNear(obj1){
		var iMin=999999999999;
		var iMinindex=-1;

		for (var i = 0; i < aLi.length; i++) {
			if (obj1==aLi[i])continue;
			if (collision(obj1,aLi[i])) {
				var c=distance(obj1,aLi[i]);
				if (iMin>c) {
					iMin=c;
					iMinindex=i;
				}
			}
		}
		if (iMinindex==-1) {
			return null;
			// false也行，反正用来判断。
		}else{
			return aLi[iMinindex];
		}
	}

	function pickMove(obj1){
		obj1.onmousedown=function(ev){
		var oEvent=ev||event;
		var X=oEvent.clientX-obj1.offsetLeft;
		var Y=oEvent.clientY-obj1.offsetTop;
		obj1.style.zIndex=20;
			document.onmousemove=function(ev){
				var oEvent=ev||event;
				var l=oEvent.clientX-X;
				var t=oEvent.clientY-Y;

				obj1.style.left=l+'px';
				obj1.style.top=t+'px';

				var oNear=findNear(obj1);

				for (var i = 0; i < aLi.length; i++) {
					aLi[i].className='';
				}
				if (oNear) {
					oNear.className='on';
				}

			}
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				obj1.style.zIndex=9;
				var oNear=findNear(obj1);
				if (oNear) {
					oNear.style.top=arr[obj1.index].top+'px';
					oNear.style.left=arr[obj1.index].left+'px';

					obj1.style.top=arr[oNear.index].top+'px';
					obj1.style.left=arr[oNear.index].left+'px';

					var car;
					car=oNear.index;
					oNear.index=obj1.index;
					obj1.index=car;
					oNear.className='';

				}else{
					obj1.style.top=arr[obj1.index].top+'px';
					obj1.style.left=arr[obj1.index].left+'px';
				}
				
			}
			return false;
		}
	}

}