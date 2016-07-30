function rnd(n,m){
		return parseInt(Math.random()*(m-n)+n);
	}
	// 风吹效果
	// var aBg=document.querySelector('.box');
	function wind(obj,index){
		var R=8;
		var C=16;
		var timer=null;
		
		for (var i = 0; i < R; i++) {
			for (var j = 0; j < C; j++) {
				var oSpan=document.createElement('span');

				var w=100/C;
				var h=100/R;

				var pw=obj.offsetWidth/C;
				var ph=obj.offsetHeight/R;

				oSpan.style.width=w+'%';
				oSpan.style.height=h+'%';

				oSpan.style.left=w*j+'%';
				oSpan.style.top=h*i+'%';

				obj.appendChild(oSpan);

				oSpan.style.backgroundPosition=(-pw*j)+'px'+' '+(-ph*i)+'px';

				oSpan.r=i;
				oSpan.c=j;
			}
		}
		var aSpan=obj.children;
		var iNow=0;
		var bReady=true;
		function boom(){
			if (!bReady) return;
			bReady=false;
			iNow++;
			for (var i = 0; i < aSpan.length; i++) {
				aSpan[i].style.transition='1.5s all cubic-bezier(0.73, 0.07, 0.31, 0.96) '+(aSpan[i].r+aSpan[i].c)*100+'ms';
				var X=(aSpan[i].offsetLeft+aSpan[i].offsetWidth/2)-obj.offsetWidth/2;
				var Y=(aSpan[i].offsetTop+aSpan[i].offsetHeight/2)-obj.offsetHeight/2;

				aSpan[i].style.transform='perspective(40rem) scale(1.5) translate('+(X/20)+'rem,'+(Y/20)+'rem) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';

				aSpan[i].style.opacity='0';
			}
		}
		obj.onclick=function(){
			boom();
		}

		aSpan[aSpan.length-1].addEventListener('transitionend',function(){
			bReady=true;
			for (var i = 0; i < aSpan.length; i++) {
				aSpan[i].style.opacity='1';
				aSpan[i].style.transition='none';
				aSpan[i].style.transform='';
				aSpan[i].style.backgroundImage='url(img/bg'+(index+1)+'-'+(iNow%3+1)+'.jpg)';
				obj.style.backgroundImage='url(img/bg'+(index+1)+'-'+((iNow+1)%3+1)+'.jpg)';
			}
		},false);
	}
	// ----------------------------------------------------------
	;(function(){
		function screenchange(){
			var font=document.documentElement.clientWidth/(1920/20);
			document.documentElement.style.fontSize=font+'px';
		}
		window.addEventListener('resize',screenchange,false);
		screenchange();
	})();
	window.onload=function(ev){
		var timer=null;
		var n=-1;
		var oNav=document.getElementById('nav');
		var oBgs=document.getElementById('bgs');
		var aBg=oBgs.children;
		var aSpan=oBgs.children;
		var bSys=false;
		var oBox=document.getElementById("box");
		

		for (var i = 0; i < 5; i++) {
			var oLi=document.createElement('li');
			oLi.innerHTML='<a href="javascirpt:;" class="navFont">11111</a>';
			var aLi=oNav.appendChild(oLi);
		}
		var nowLi=oNav.children;
		var aA=document.getElementsByTagName('a');
		
		timer=setInterval(function(){
			n++;
			var timer2=null;
			
			if (n==4) {
				clearInterval(timer);
				timer2=setTimeout(function(){
					bSys=true;
					for (var i = 0; i < aA.length; i++) {
						if (bSys) {
							aA[i].style.display='block';
						}
					}
					clearTimeout(timer2);
				},1000)
			};
			nowLi[n].style.top='0rem';
			nowLi[n].style.left=Math.abs(n*25-n*5 + 5)+'rem';
			nowLi[n].style.width='5rem';
			nowLi[n].style.height='5rem';
			nowLi[n].style.border='1px solid #52B128';
			nowLi[n].style.transform='rotate(360deg)';
		},500);
		var oChange=-oBgs.offsetHeight;
		var bReady=true;
		function resize(index){
			window.onresize=function(){
				oChange=-oBgs.offsetHeight;
				for (var i = 0; i < aBg.length; i++) {
					aBg[i].style.height=oChange/20+'rem';
				}
				for (var i = 0; i < aBg.length; i++) {
					bReady=false;
					aBg[i].innerHTML='';
					wind(aBg[i],i);
				}
				oBgs.style.top=oChange*index+'px';
			}
		}
		
		for (var i = 0; i < nowLi.length; i++) {
			nowLi[i].index=i;
			nowLi[i].onmouseover=function(ev){
				var oEvent=ev||event;
				var oFrom=oEvent.fromElement||oEvent.relatedTarget;
				if (nowLi[this.index].contains(oFrom)) return;
				move(oBgs,{top:oChange*this.index},{type:Tween.Back.easeIn});
				resize(this.index);
			}
		}
		
		if (bReady) {
			for (var i = 0; i < aBg.length; i++) {
				wind(aBg[i],i);
			}
		}
		
	}