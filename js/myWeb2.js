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
	$(".Achange").on("mouseover",function(e){
		var oFrom=e.fromElement||e.relatedTarget;
		if (this.contains(oFrom)) return;
		$(this).children("img").css({
			transform:"scale(1.5,1.5)",
		});
		$(this).children(".shade,.media-btn").show();
		$(".media-btn").animate({
			bottom:"50px"
		},30);
	}).on("mouseout",function(e){
		var oFrom=e.toElement||e.relatedTarget;
		if (this.contains(oFrom)) return;
		$(this).children("img").css({
			transform:"scale(1,1)"
		});
		$(this).children(".shade,.media-btn").hide();
		$(".media-btn").animate({
			bottom:"5px"
		},30);
	})
	$("#_tooltip").tooltip({
		title:"全部为原生js制作，且非响应式旧版本！！！",
		placement:"bottom"
	});
})