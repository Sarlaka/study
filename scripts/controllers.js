// 新建一个controllers模块
angular.module('Ctrls',[])
.controller('DemoCtrl',['$scope',function($scope){

}])
//导航栏控制器
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
//今日一刻控制器
.controller('TodayCtrl',['$scope','$http','$rootScope','$filter',function($scope,$http,$rootScope,$filter){
	//发起请求之前把loaded改为false
	$rootScope.loaded = false;
	$rootScope.title = '今日一刻';

	// 格式化时间
	var day = new Date;
	day = $filter('date')(day, 'yyyy-MM-dd');
	//获得数据
	$http({
		url: './interface/today.php',
		params: {day:day}
	}).success(function(data){
		console.log(data);
		$scope.posts = data.posts;
		$scope.date = data.date;
		$rootScope.loaded = true;
	})
}])
//往期内容控制器
.controller('OlderCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	//发起请求之前把loaded改为false
	$rootScope.loaded = false;
	$rootScope.title = '往期内容';

	$scope.day = -1;
	// 获得数据
	$http({
		url: './interface/older.php',
		params: {day:$scope.day}
	}).success(function(data){
		console.log(data);
		$scope.posts = data.result.posts;
		$scope.date = data.result.date;

		$scope.day = data.day;

		$rootScope.loaded = true;
	})
}])
//热门作者
.controller('AuthorCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	//发起请求之前把loaded改为false
	$rootScope.loaded = false;
	$rootScope.title = '热门作者';

	//获得数据
	$http({
		url: './interface/author.php'
	}).success(function(info){
		console.log(info);
		// 推荐
		$scope.rec = info.rec;
		// 全部
		$scope.all = info.all;

		$rootScope.loaded = true;
	})
}])
.controller('CategoryCtrl',['$scope','$rootScope',function($scope,$rootScope){
	//发起请求之前把loaded改为false
	// $rootScope.loaded = false;
	$rootScope.title = '栏目浏览';
}])
.controller('FavouriteCtrl',['$scope','$rootScope',function($scope,$rootScope){
	//发起请求之前把loaded改为false
	// $rootScope.loaded = false;
	$rootScope.title = '我的喜欢';
}])
.controller('SettingsCtrl',['$scope','$rootScope',function($scope,$rootScope){
	//发起请求之前把loaded改为false
	// $rootScope.loaded = false;
	$rootScope.title = '设置';
}])