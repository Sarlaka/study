// 新建一个controllers模块
angular.module('Ctrls',[])
.controller('DemoCtrl',['$scope',function($scope){

}])
.controller('NavsCtrl',['$scope','$http',function($scope,$http){

	// 通常数据来自后端，假如导航内容固定不变，就没有必要再发请求了，可以用数组进行模拟
	// $http({

	// }).success(function(info){
	// 	$scope.info = info;
	// })
	var navs = [
	{text: '今日一刻', link: '#/today',icon: 'icon-home'},
	{text: '往期内容', link: '#/older',icon: 'icon-file-empty'},
	{text: '热门作者', link: '#/author',icon: 'icon-pencil'},
	{text: '栏目浏览', link: '#/category',icon: 'icon-menu'},
	{text: '我的喜欢', link: '#/favourite',icon: 'icon-heart'},
	{text: '设置', link: '#/settings',icon: 'icon-cog'}
	]

	$scope.navs = navs;
}])
.controller('TodayCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$http({
		url: './interface/today.php'
	}).success(function(data){
		console.log(data);
		$scope.posts = data.posts;
		$scope.date = data.date;
		$rootScope.loaded = true;
	})
}])