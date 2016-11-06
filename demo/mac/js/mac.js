window.onload=function(){
	var oIcon=document.getElementById('icon');
	var oImg=oIcon.getElementsByTagName('img');
	document.onmousemove=function(ev){
		var oEvent=ev||event;
		var X=oEvent.clientX;
		var Y=oEvent.clientY;
		for (var i = 0; i < oImg.length; i++) {
			var a=oImg[i].offsetLeft+(oImg[i].offsetWidth/2)-X;
			var b=oImg[i].offsetTop+oIcon.offsetTop+(oImg[i].offsetHeight/2)-Y;
			var c=Math.sqrt(a*a+b*b);
			var scale=1-c/500;
			if (scale<=.5) scale=.5;
			oImg[i].style.width=128*scale+'px';
		}
	}
}