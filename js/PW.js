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
					oDiv.innerHTML='<div class="header">首&nbsp&nbsp页</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller0">'+
											'<ul class="ulist">'+
												'<li>'+
													'<img src="img/h5.png"></img>'+
													'<a href="http://www.w3schools.com/" target="_blank">HTML5</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/c3.png"></img>'+
													'<a href="http://www.w3schools.com/" target="_blank">CSS3</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/js.png"></img>'+
													'<a href="http://www.w3schools.com/" target="_blank">Javascript</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/jquery.png" style="background:#b3d4fc;"></img>'+
													'<a href="http://jquery.com/" target="_blank">Jquery.js</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/github.jpg" style="padding:0; width:7.5rem;"></img>'+
													'<a href="https://github.com/" target="_blank">Github.com</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/grunt.png"></img>'+
													'<a href="http://gruntjs.com/" target="_blank">Grunt</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/gulp.png" style="padding:0; width:7.5rem;"></img>'+
													'<a href="http://gulpjs.com/" target="_blank">Gulpjs.com</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/angular.png" style="padding:0 1rem 0 0.5rem; width:6rem;"></img>'+
													'<a href="https://angularjs.org/" target="_blank">Angularjs.org</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/phonegap.png" style="padding:0; width:7.5rem;"></img>'+
													'<a href="http://phonegap.com/" target="_blank">PhoneGap.com</a>'+
												'</li>'+
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
									loaded();
								
				break;
				case 1:
					oDiv.innerHTML='<div class="header">演&nbsp&nbsp示</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller1">'+
											'<ul class="ulist">'+
												'<li>'+
													'<img src="img/screen1.jpg" style="padding:0; width:7.5rem;"></img>'+
													'<a href="demo/mac/mac.html" target="_blank">仿Mac系统桌面</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/3dround.jpg" style="padding:0; width:7.5rem;"></img>'+
													'<a href="demo/3dround/3dround.html" target="_blank">《饥荒》3D轮转角色选择</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/3dcube.jpg" style="padding:0; width:7.5rem;"></img>'+
													'<a href="demo/cube/3dcube.html" target="_blank">3D旋转魔方</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/jigsaw.jpg" style="padding:0; width:7.5rem;"></img>'+
													'<a href="demo/jigsaw/jigsaw.html" target="_blank">拼图游戏</a>'+
												'</li>'+
												
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
									loaded();
									
				break;
				case 2:
					oDiv.innerHTML='<div class="header">个人简介</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller2">'+
											'<ul class="ulist">'+
												'<li>'+
													'<img src="img/photo.jpg" style="padding:0; width:7.5rem;"></img>'+
													'<a href="demo/photo/photo.html" target="_blank">个人业余摄影作品</a>'+
												'</li>'+
												
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
									loaded();
									
				break;
				case 3:
					oDiv.innerHTML='<div class="header">个人博客</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller3">'+
											'<ul class="ulist">'+
												'<li>'+
													'<a href="javascript:;">Nothing</a>'+
												'</li>'+
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
									loaded();
									
				break;
				case 4:
					oDiv.innerHTML='<div class="header">联系方式</div>'+
								    '<div class="wrapper">'+
										'<div id="scroller4">'+
											'<ul class="ulist">'+
												'<li>'+
													'<img src="img/phone.png" style="padding:0;margin:2rem; width:3.5rem; height:3.5rem; border:none;"></img>'+
													'<a href="javascript:;">186-1080-8458</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/email.png" style="padding:0;margin:2rem; width:3.5rem; height:3.5rem; border:none;"></img>'+
													'<a href="javascript:;">443566888@qq.com</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/weixin.png" style="padding:0;margin:2rem; width:3.5rem; height:3.5rem; border:none;"></img>'+
													'<a href="javascript:;">XZQ66888</a>'+
												'</li>'+
												'<li>'+
													'<img src="img/QQ.jpg" style="padding:0;margin:2rem; width:3.5rem; height:3.5rem; border:none;"></img>'+
													'<a href="javascript:;">443566888</a>'+
												'</li>'+
												
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
									loaded();
									
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
		var timer5=null;
		var oBoss=document.getElementById('boss');

		var oLoad=document.getElementById('load');
        var oLoading=document.getElementById('loading');
        var loadSpan=oLoading.getElementsByTagName('span')[0];
        // oBody.style.background='url(../img/loadbg.jpg) no-repeat center center';
        for(var i=0;i<77;i++){
            var oImg=new Image();
            var iCount=0;

            oImg.onload=function(){
                iCount++;
                var scale=iCount/77;
                oLoading.style.width=scale*600+'px';
                loadSpan.innerHTML=parseInt(scale*100)+'%';
                if (iCount==77) {
	            	oLoad.style.display='none';
	            	oBox.style.display='block';

	            	allLoad();
	            }
            };
            oImg.onerror=function(){
                console.log('错了错了！加载失败')
            };
            oImg.src=loadArr[i].src;
        }

		function allLoad(){
			for (var i = 0; i < 5; i++) {
			var oLi=document.createElement('li');
			var oNavbor=document.createElement('p');
			oLi.innerHTML='<a href="javascirpt:;" class="navFont"></a>';
			var aLi=oNav.appendChild(oLi);
			// 获取content
			var cDiv=aBg[i].getElementsByTagName('div');
			oNavbor.setAttribute("class","navbor");
			var aNavbor=oNav.appendChild(oNavbor);
			
			}
			var nowLi=oNav.getElementsByTagName('li');
			var nowP=oNav.getElementsByTagName('p');
			var aA=document.getElementsByTagName('a');
			var maskon=false;
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
								nowP[0].style.display='block';
								nowLi[0].style.webkitBoxShadow='';
								maskon=true;
							}
						}
						clearTimeout(timer2);
					},1000);
				};

				nowLi[n].style.top=0+'rem';
				nowLi[n].style.left=Math.abs(n*25-n*5 + 5)+'rem';
				nowLi[n].style.width='5rem';
				nowLi[n].style.height='5rem';
				nowLi[n].style.border='0.1rem solid #fff';
				nowLi[n].style.webkitBoxShadow='0rem 0rem 3rem #fff';
				nowLi[0].innerHTML='<div class="mask">Home</div><a class="iconfont" href="javascirpt:;" >&#xe614;</a>';
				nowLi[1].innerHTML='<div class="mask">Demo</div><a class="iconfont" href="javascirpt:;" >&#xe613;</a>';
				nowLi[2].innerHTML='<div class="mask">Myself</div><a class="iconfont" href="javascirpt:;" >&#xe619;</a>';
				nowLi[3].innerHTML='<div class="mask">Blog</div><a class="iconfont" href="javascirpt:;" >&#xe606;</a>';
				nowLi[4].innerHTML='<div class="mask">Call</div><a class="iconfont" href="javascirpt:;" >&#xe62c;</a>';
				nowP[n].style.width='5.2rem';
				nowP[n].style.height='5.2rem';
				nowP[n].style.left=Math.abs(n*25-n*5 + 5)-0.3+'rem';
			},350);
				
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
					nowP[i].style.display='none';
					nowLi[i].style.webkitBoxShadow='0rem 0rem 3rem #fff';
					nowP[0].style.display='block';
					nowLi[0].style.webkitBoxShadow='';
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
					var oMask=this.children[0];
					var _this=this;
					
					move(oBgs,{top:oChange*_this.index},{type:Tween.Back.easeIn});
					
					
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
					if (maskon) {
						switch(findDir(this,ev)){
							case 0:
								oMask.style.left=6.05+'rem';
								oMask.style.top=0;
								break;
							case 1:
								oMask.style.left=0;
								oMask.style.top=6.05+'rem';
								break;
							case 2:
								oMask.style.left=-6.05+'rem';
								oMask.style.top=0;
								break;
							case 3:
								oMask.style.left=0;
								oMask.style.top=-6.05+'rem';
								break;
						}
						moveRem(oMask,{left:0,top:0},{type:Tween.Linear,time:300});
					}

					if (maskon) {
						switch(this.index){
							case 0:
								for (var j = 0; j < nowP.length; j++) {
									nowP[j].style.display='none';
									nowLi[j].style.webkitBoxShadow='0rem 0rem 3rem #fff';
								}
								nowP[this.index].style.display='block';
								nowLi[this.index].style.webkitBoxShadow='';
								break;
							case 1:
								for (var j = 0; j < nowP.length; j++) {
									nowP[j].style.display='none';
									nowLi[j].style.webkitBoxShadow='0rem 0rem 3rem #fff';
								}
								nowP[this.index].style.display='block';
								nowLi[this.index].style.webkitBoxShadow='';
								break;
							case 2:
								for (var j = 0; j < nowP.length; j++) {
									nowP[j].style.display='none';
									nowLi[j].style.webkitBoxShadow='0rem 0rem 3rem #fff';
									nowLi[this.index].style.webkitBoxShadow='';
								}
								nowP[this.index].style.display='block';
								nowLi[this.index].style.webkitBoxShadow='';
								break;
							case 3:
								for (var j = 0; j < nowP.length; j++) {
									nowP[j].style.display='none';
									nowLi[j].style.webkitBoxShadow='0rem 0rem 3rem #fff';
									nowLi[this.index].style.webkitBoxShadow='';
								}
								nowP[this.index].style.display='block';
								nowLi[this.index].style.webkitBoxShadow='';
								break;
							case 4:
								for (var j = 0; j < nowP.length; j++) {
									nowP[j].style.display='none';
									nowLi[j].style.webkitBoxShadow='0rem 0rem 3rem #fff';
									nowLi[this.index].style.webkitBoxShadow='';
								}
								nowP[this.index].style.display='block';
								nowLi[this.index].style.webkitBoxShadow='';
								break;

						}
					}
				}

				nowLi[i].onmouseout=function(ev){
					clearInterval(timer5);
					var oEvent=ev||event;
					var oFrom=oEvent.toElement||oEvent.relatedTarget;
					if (nowLi[this.index].contains(oFrom)) return;
					var oMask=this.children[0];
					nowLi[this.index].bsys=false;
					switch(findDir(this,ev)){
						case 0:
							moveRem(oMask,{left:6.05,top:0},{type:Tween.Linear,time:300});
							break;
						case 1:
							moveRem(oMask,{left:0,top:6.05},{type:Tween.Linear,time:300});
							break;
						case 2:
							moveRem(oMask,{left:-6.05,top:0},{type:Tween.Linear,time:300});
							break;
						case 3:
							moveRem(oMask,{left:0,top:-6.05},{type:Tween.Linear,time:300});
							break;
					}
				}
				if (bReady) {
					wind(aBg[i],i);
				}
			}
		}
	}