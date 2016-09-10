function scale(wrH,y,ulist,obj,barbg){
	var sbar=y/wrH;
	var ulH=ulist.offsetHeight-wrH-obj.offsetHeight;
	if (ulH*sbar>=ulH) ulH=ulH;
	if (ulH*sbar<=0) ulH=0;
	ulist.style.top=-ulH*sbar+'px';
	barbg.style.background='-webkit-linear-gradient(top,rgba(205,35,92,1) '+(sbar*100-50)+'%,rgba(205,35,92,1) '+sbar*100+'%,rgba(102,102,102,1) '+sbar*100+'%,rgba(102,102,102,1) '+(sbar*100+50)+'%)';
}
function drag(obj,wr,ulist,barbg){
	
	obj.onmousedown=function(ev){
		var oEvent=ev||event;
		var wrH=wr.offsetHeight-obj.offsetHeight;
		var disX=oEvent.clientX-obj.offsetLeft;
		var disY=oEvent.clientY-obj.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var x=oEvent.clientX-disX;
			var y=oEvent.clientY-disY;
			
			if (y>wrH){
				y=wrH;
			}
			if (y<=0) {
				y=0;
			}
			obj.style.top=y+'px';
			scale(wrH,y,ulist,obj,barbg)
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
		return false;
	}
}
function opaScale(x,opbg,conbg){
	var bgW=opbg.offsetWidth;
	var sopbg=(x+bgW*0.1)/(bgW+bgW*0.1);
	var sop=x/bgW;
	if (sopbg<=0.1) sopbg=0.1;
	if (sopbg>=1) sopbg=1;
	conbg.style.opacity=sopbg;
	opbg.style.background='-webkit-linear-gradient(left,rgba(205,35,92,1) '+(sop*100-50)+'%,rgba(205,35,92,1) '+sop*100+'%,rgba(102,102,102,1) '+sop*100+'%,rgba(102,102,102,1) '+(sop*100+50)+'%)';
}
function dragOpa(obj,opbg,conbg){
	
	obj.onmousedown=function(ev){
		conbg.style.transition='';
		var oEvent=ev||event;
		var bgW=opbg.offsetWidth;
		var disX=oEvent.clientX-obj.offsetLeft;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var x=oEvent.clientX-disX+obj.offsetWidth/2;
			
			if (x>bgW){
				x=bgW;
			}
			if (x<=0) {
				x=0;
			}
			obj.style.left=x+'px';
			opaScale(x,opbg,conbg)
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
		return false;
	}
}

function drag2(con,header){

	header.onmousedown=function(ev){
		con.style.transition='';
		var oEvent=ev||event;

		var disX=oEvent.clientX-con.offsetLeft-(con.offsetWidth/2);
		var disY=oEvent.clientY-con.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var x=oEvent.clientX-disX;
			var y=oEvent.clientY-disY;

			con.style.top=y+'px';
			con.style.left=x+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
		return false;
	}
}
function loaded(){
	var oBgs=document.getElementById('bgs');
	var aBg=oBgs.children;
	var conbg=document.querySelectorAll('.conbg');
	var uList=document.querySelectorAll('.ulist');
	var oBarbg=document.querySelectorAll('.barbg');
	var oBar=document.querySelectorAll('.bar');
	var oHeader=document.querySelectorAll('.header');
	var oWrapper=document.querySelectorAll('.wrapper');
	var opaBarbg=document.querySelectorAll('.opabarbg');
	var opaBar=document.querySelectorAll('.opabar');
	
	for (var i = 0; i < conbg.length; i++) {
		conbg[i].index=i;
		drag(oBar[i],oWrapper[i],uList[i],oBarbg[i]);
		drag2(conbg[i],oHeader[i]);
		oBarbg[i].style.height=oWrapper[i].offsetHeight+'px';
		wheel(oBar[i],uList[i],oWrapper[i],oBarbg[i]);
		dragOpa(opaBar[i],opaBarbg[i],conbg[i]);
	}
}