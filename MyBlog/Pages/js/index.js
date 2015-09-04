var app = angular.module("app", []);

app.controller("tableCtrl", [
	'$scope', function($scope) {
		$scope.persons = [];
		for (var i = 0; i < 15; i++) {
			var index = i + 1;
			var person = {
				id: index,
				name: 'person' + index,
				email: 'person' + index + '@qq.com'
			};
			$scope.persons.push(person);
		}
		
		//删除person
		$scope.deletePerson= function(person) {
			$scope.persons.remove(person);
		}

		$scope.addPerson = function () {
			var index = $scope.persons.length ? ($scope.persons[$scope.persons.length - 1]).id : 0;
			index++;
			var person = {
				id: index,
				name: 'person' + index,
				email: 'person' + index + '@qq.com'
			};
			$scope.persons.push(person);
		}

		//是否显示滚动条
		$scope.isShowScroll = function () {
			return angular.element('#tbTbody').height() > angular.element('#dvTbody').height();
		}
	}
]);

/**
 *删除数组指定下标或指定对象
 */
Array.prototype.remove = function (obj) {
	for (var i = 0; i < this.length; i++) {
		var temp = this[i];
		if (!isNaN(obj)) {
			temp = i;
		}
		if (temp == obj) {
			for (var j = i; j < this.length; j++) {
				this[j] = this[j + 1];
			}
			this.length = this.length - 1;
		}
	}
};