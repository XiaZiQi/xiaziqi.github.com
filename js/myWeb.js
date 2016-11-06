function getImageWidth(url,callback){
	var img = new Image();
	img.src = url;
	
	// 如果图片被缓存，则直接返回缓存数据
	if(img.complete){
	    callback(img.width, img.height);
	}else{
            // 完全加载完毕的事件
	    img.onload = function(){
			callback(img.width, img.height);
	    }
    }
}
$(function(){
	$(".navbar-nav>li").click(function(){
		$(".navbar-nav>li").removeClass("active");
		$(this).addClass("active");
	})
	$(".nav-btn-signup").click(function(){
		$("#modal-signup").modal("show");
	})
	$(".nav-btn-login").click(function(){
		$("#modal-login").modal("show");
	})
	$("#loading-btn-signup").click(function(){
		$(this).button("loading").delay(2000).queue(function(){
			$(this).button("reset");
			$("#modal-signup").modal("hide");
			$(this).dequeue();
		})
	})
	$("#loading-btn-login").click(function(){
		$(this).button("loading").delay(2000).queue(function(){
			$(this).button("reset");
			$("#modal-login").modal("hide");
			$(this).dequeue();
		})
	})
	console.log()
	
	$("#carousel").css({width:"100%",height:function(){
		return $(window).height();
	}})
	$("#carousel ul li a div").css({width:"100%",height:function(){
		return $(window).height();
	}})
	$(window).resize(function(){
		$("#carousel").css({width:"100%",height:function(){
			return $(window).height();
		}})
		$("#carousel ul li a div").css({width:"100%",height:function(){
			return $(window).height();
		}})
	});
	for (var i = 0; i < $("[carousel-url]").length; i++) {
		$("[carousel-url]").eq(i).css("background","url(img/banner"+i+".jpg) no-repeat center center");
	}
	$("#lead-link").css({width:"120px",marginLeft:"-60px"});
	$("#lead-link").click(function(){
		$("body").animate({scrollTop:$("#demo").offset().top},1000,"linear");
	})
	
	$(".indicate").css("top",0);
	$("#_tooltip").tooltip({
		title:"全部为原生js制作，且非响应式旧版本！！！",
		placement:"bottom"
	});
})