define(function(require,exports,module){

	exports.findDir=function(nowli,ev){
	var oEvent=ev||event;

	var x=nowli.offsetWidth/2+getPos(nowli).left-oEvent.clientX;
	var y=nowli.offsetHeight/2+getPos(nowli).top-oEvent.clientY;
	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
	}
	function getPos(obj){
		var l=0;
		var t=0;
		while(obj){
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj=obj.offsetParent;
		}
		return {left:l,top:t};
	}

})