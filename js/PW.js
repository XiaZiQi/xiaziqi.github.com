	function rnd(n,m){
		return parseInt(Math.random()*(m-n)+n);
	}
	function ran(n,m){
		return parseFloat(Math.random()*(m-n)+n);
	}
	// 风吹效果

	
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
		var aSpan=obj.getElementsByTagName('span');
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
		obj.onclick=function(ev){
			var oEvent=ev||event;
			oEvent.cancleBubble=true;
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

	function createCon(bgN,index){
		var oDiv=document.createElement('div');
		oDiv.setAttribute('class','conbg');
		oDiv.style.width=3+'rem';
		oDiv.style.height=3+'rem';
		
		var r=ran(-1,1);
		if (r>0) {
			oDiv.style.left=-4+'rem';
		}else{
			oDiv.style.left=105+'%';
		}
		oDiv.style.opacity=1;
		oDiv.style.top=20+'rem';
		
		var aDiv=bgN.appendChild(oDiv);
		
		oDiv.addEventListener('transitionend',function(){
			oDiv.style.width=40+'rem';
			oDiv.style.height=20+'rem';
			oDiv.style.opacity=0.5;
			oDiv.style.marginLeft=(-20)+'rem';
			oDiv.style.webkitBoxReflect='below 1rem -webkit-linear-gradient(bottom,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.3) 15%,rgba(0,0,0,0) 30%)';
			
			

			switch (index){
				case 0:
					oDiv.innerHTML='<div class="header">iScroll</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller0">'+
											'<ul class="ulist">'+
												'<li>11111</li>'+
												'<li>22222</li>'+
												'<li>33333</li>'+
												'<li>44444</li>'+
												'<li>55555</li>'+
												'<li>66666</li>'+
												'<li>77777</li>'+
												'<li>88888</li>'+
												'<li>99999</li>'+
												'<li>aaaaa</li>'+
												'<li>bbbbb</li>'+
												'<li>ccccc</li>'+
												'<li>ddddd</li>'+
												'<li>eeeee</li>'+
												'<li>fffff</li>'+
												'<li>ggggg</li>'+
												'<li>hhhhh</li>'+
												'<li>iiiii</li>'+
												'<li>jjjjj</li>'+
												'<li>kkkkk</li>'+
												'<li>lllll</li>'+
												'<li>mmmmm</li>'+
												'<li>nnnnn</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
												'<li>11111</li>'+
											'</ul>'+
											'<div class="barbg">'+
												'<div class="bar"></div>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<div class="footer">'+
										'<p class="ll"></p>'+
										'<div class="opabarbg">'+
											'<div class="opabar"></div>'+
										'</div>'+
										'<p class="lh"></p>'+
									'</div>';
									loaded(index);
									
				break;
				case 1:
					oDiv.innerHTML='<div class="header">iScroll</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller1">'+
											'<ul class="ulist">'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
												'<li>22222</li>'+
											'</ul>'+
											'<div class="barbg">'+
												'<div class="bar"></div>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<div class="footer">'+
										'<p class="ll"></p>'+
										'<div class="opabarbg">'+
											'<div class="opabar"></div>'+
										'</div>'+
										'<p class="lh"></p>'+
									'</div>';
									loaded(index);
									
				break;
				case 2:
					oDiv.innerHTML='<div class="header">iScroll</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller2">'+
											'<ul class="ulist">'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
												'<li>33333</li>'+
											'</ul>'+
											'<div class="barbg">'+
												'<div class="bar"></div>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<div class="footer">'+
										'<p class="ll"></p>'+
										'<div class="opabarbg">'+
											'<div class="opabar"></div>'+
										'</div>'+
										'<p class="lh"></p>'+
									'</div>';
									loaded(index);
									
				break;
				case 3:
					oDiv.innerHTML='<div class="header">iScroll</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller3">'+
											'<ul class="ulist">'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
												'<li>44444</li>'+
											'</ul>'+
											'<div class="barbg">'+
												'<div class="bar"></div>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<div class="footer">'+
										'<p class="ll"></p>'+
										'<div class="opabarbg">'+
											'<div class="opabar"></div>'+
										'</div>'+
										'<p class="lh"></p>'+
									'</div>';
									loaded(index);
									
				break;
				case 4:
					oDiv.innerHTML='<div class="header">iScroll</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller4">'+
											'<ul class="ulist">'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
												'<li>55555</li>'+
											'</ul>'+
											'<div class="barbg">'+
												'<div class="bar"></div>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<div class="footer">'+
										'<p class="ll"></p>'+
										'<div class="opabarbg">'+
											'<div class="opabar"></div>'+
										'</div>'+
										'<p class="lh"></p>'+
									'</div>';
									loaded(index);
									
				break;
			}
		});
		
			
		
	}
	function show(obj,index){
		var conbg=obj.querySelector('.conbg');
		conbg.style.transition='1s all cubic-bezier(0, '+ran(-2,2)+', 0,'+ran(-2,2)+')';
		conbg.style.left=50+'%';
		conbg.style.top=20+'rem';
		conbg.style.opacity=0.8;
		conbg.style.border='0.2rem solid #999';
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
	// ======================================================================================
	window.onload=function(ev){
		var timer=null;
		var n=-1;
		var oNav=document.getElementById('nav');
		var oBgs=document.getElementById('bgs');
		var aBg=oBgs.children;
		var aSpan=oBgs.children;
		var bSys=false;
		var oBox=document.getElementById("box");
		var timer3=null;
		var timer4=null;
		var oBoss=document.getElementById('boss');
		

		for (var i = 0; i < 5; i++) {
			var oLi=document.createElement('li');
			oLi.innerHTML='<a href="javascirpt:;" class="navFont"></a>';
			var aLi=oNav.appendChild(oLi);
			// 获取content
			var cDiv=aBg[i].getElementsByTagName('div');
			
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
			nowLi[0].innerHTML='<a href="javascirpt:;" class="navFont">1111</a>';
			nowLi[1].innerHTML='<a href="javascirpt:;" class="navFont">2222</a>';
			nowLi[2].innerHTML='<a href="javascirpt:;" class="navFont">3333</a>';
			nowLi[3].innerHTML='<a href="javascirpt:;" class="navFont">4444</a>';
			nowLi[4].innerHTML='<a href="javascirpt:;" class="navFont">5555</a>';
		},500);

		var oChange=-oBgs.offsetHeight;
		var bReady=true;

		window.onresize=function(ev){
			var oEvent=ev||event;
			oEvent.cancleBubble=true;
			oChange=-oBgs.offsetHeight;
			for (var i = 0; i < aBg.length; i++) {
				bReady=false;
				aBg[i].style.height=oChange/20+'rem';
				aBg[i].innerHTML='';
				nowLi[i].bsys=true;//开关
				wind(aBg[i],i);
			}
			oBgs.style.top=0+'px';
		}
		for (var i = 0; i < nowLi.length; i++) {
			nowLi[i].index=i;
			nowLi[i].bsys=true;
			var onoff=true;
			nowLi[i].onmouseover=function(ev){
				var oEvent=ev||event;
				var oFrom=oEvent.fromElement||oEvent.relatedTarget;
				if (nowLi[this.index].contains(oFrom)) return;
				move(oBgs,{top:oChange*this.index},{type:Tween.Back.easeIn});
				if (nowLi[this.index].bsys) {
					createCon(aBg[this.index],this.index);
					clearTimeout(timer3);
					var v=this.index;
					timer3=setTimeout(function(){
						show(aBg[v],v);
						onoff=false;
					},1000);
				}else if(nowLi[this.index].bsys==false&&onoff==false){
					clearTimeout(timer4);
					var g=this.index;
					timer4=setTimeout(function(){
						show(aBg[g]);
						onoff=false;
					},1000);
				}
			}

			nowLi[i].onmouseout=function(){
				var oEvent=ev||event;
				var oFrom=oEvent.toElement||oEvent.relatedTarget;
				if (nowLi[this.index].contains(oFrom)) return;
				nowLi[this.index].bsys=false;
			}
			if (bReady) {
				wind(aBg[i],i);
			}
		}
		// document.addEventListener('onmousemove', function (e) { e.preventDefault(); }, false);

	}