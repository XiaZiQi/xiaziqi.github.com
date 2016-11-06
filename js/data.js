$(function(){
	var app=angular.module("myApp",[]);
	app.controller("tagsrc",function($scope){
		$scope.json={
			_viewport:function(){
				$("#blog-content-show").load("./data.html #_viewport");
			},
			_jquery:function(){
				$("#blog-content-show").load("./data.html #_jquery");
			},
			_optimalize:function(){
				$("#blog-content-show").load("./data.html #_optimalize");
			},
			_wechat:function(){
				$("#blog-content-show").load("./data.html #_wechat");
			},
			_web:function(){
				$("#blog-content-show").load("./data.html #_web");
			}
		}
		$("#blog-content-show").html(function(){
			return $scope.json._viewport;
		})
		$(".media-btn").each(function(i){
			$(".media-btn").eq(i).on("click",function(){
				switch (i){
					case 0:
						$("#blog-content-show").html(function(){
							return $scope.json._viewport;
						})
					break;
					case 1:
						$("#blog-content-show").html(function(){
							return $scope.json._jquery;
						})
					break;
					case 2:
						$("#blog-content-show").html(function(){
							return $scope.json._optimalize;
						})
					break;
					case 3:
						$("#blog-content-show").html(function(){
							return $scope.json._wechat;
						})
					break;
					case 4:
						$("#blog-content-show").html(function(){
							return $scope.json._web;
						})
					break;
				}
				return false;
			})
		})
	})	
})