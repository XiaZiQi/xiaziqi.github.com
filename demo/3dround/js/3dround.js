window.onload=function(){
	var aDiv=document.getElementsByTagName('div');
	var aImg=document.getElementsByTagName('img');
	var oBtnL=document.querySelector(".bl");
	var oBtnR=document.querySelector(".br");
	var n=0;
	var icon=1;
	var arr=[];
	for (var i = 0; i < aDiv.length; i++) {
		arr[i]={
			width:aDiv[i].offsetWidth,
			height:aDiv[i].offsetHeight,
			top:aDiv[i].offsetTop,
			left:aDiv[i].offsetLeft+(aDiv[i].offsetWidth)/2,
			opacity:getStyle(aDiv[i],"opacity")
		};
		
	}
	function round(n){
		for (var i = 0; i < aDiv.length; i++) {
			aImg[i].className='';
			aDiv[i].style.marginLeft=-120+'px';
			move(aDiv[i],{top:arr[i].top,left:arr[i].left,width:arr[i].width,height:arr[i].heifght,opacity:arr[i].opacity},{type:Tween.Elastic.easeOut});
		}
	}
	oBtnL.onclick=function(){
		icon++;
		n--;
		arr.push(arr.shift());
		round();
		if (n<0) n=3;
		aDiv[n].style.zIndex=icon;
		aDiv[n].style.marginLeft=-150+'px';
		aImg[n].className='big';
	}
	oBtnR.onclick=function(){
		icon++;
		n++;
		arr.unshift(arr.pop());
		round();
		if (n>3) n=0;
		aDiv[n].style.zIndex=icon;
		aDiv[n].style.marginLeft=-150+'px';
		aImg[n].className='big';
	}
	oBtnL.onmouseover=function(){
		oBtnL.className='bl onl';
	}
	oBtnL.onmouseout=function(){
		oBtnL.className='bl';
	}
	oBtnR.onmouseover=function(){
		oBtnR.className='br onr';
	}
	oBtnR.onmouseout=function(){
		oBtnR.className='br';
	}
}