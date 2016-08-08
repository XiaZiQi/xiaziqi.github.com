function wheel(obar,ulist,wrh,barbg){
	function fnWheel(ev){
		oEvent=ev||event;
		var bSys=true;
		if (oEvent.wheelDelta) {
			if (oEvent.wheelDelta>0) {
				bSys=true;
			}else{
				bSys=false;
			}
		}else if(oEvent.detail) {
			if (oEvent.detail>0) {
				bSys=false;
			}else{
				bSys=true;
			}
		}
		var t=obar.offsetTop;
		if(bSys){
			t-=4;
		}else{
			t+=4;
		}
		var wrH=wrh.offsetHeight-obar.offsetHeight;
		if (t<=0) t=0;
		if (t>=wrH) t=wrH;
		obar.style.top=t+'px';

		scale(wrH,t,ulist,obar,barbg);
		
	}
	if (window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1) {
		ulist.addEventListener('DOMMouseScroll',fnWheel,false);
	}else{
		ulist.onmousewheel=fnWheel;
	}
}