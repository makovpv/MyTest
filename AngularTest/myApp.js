var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope, $interval) 
{
		$scope.blocks = [
			{instr:'инструкция к первому блоку вопросов', time_limit:0, random_ans_ord:0},
			{instr:'инструкция ко второму блоку вопросов', time_limit:0, random_ans_ord:0}
		];
		
		$scope.items = [
			{text:'first question',id:10, dim: {type:1, mode:2, sel:0, time_restrict:1,
				subscl:[
				{txt:"var 1",id:111},
				{txt:"var 2",id:112},
				{txt:"var 3",id:113}
				]}
			},
			{text:'second question',id:11, dim: {type:1, mode:1, sel:0, 
				subscl:[
				{txt:"var 11",id:211},
				{txt:"var 22",id:212},
				{txt:"var 33",id:213}
				]},
			},
			{text:'third question',id:12, dim: {type:2, mode:2, sel:0, 
				subscl:[
				{txt:"var zzzzz",id:311,val:false},
				{txt:"var bbbbb",id:312,val:false},
				{txt:"var dddd rrr tt",id:313,val:false}
				]}
			},
			{text:'fourth question',id:12, dim: {type:3, sel:"abc"}}

		];
		
		$scope.instruction = 'это текст общей инструкции к прохождению исследования';
		$scope.valid_answer = true;
		/***********************************/
		function is_correct_choise_for (dmn)
		{
			switch (dmn.type)
			{
				case 1: return dmn.sel != 0;
				case 2: 
					is_sel=false;
					for (var i=0, len=dmn.subscl.length; i<len; i++)
					{
						if (dmn.subscl[i].val) {is_sel=true; break;}
					}
					return is_sel;
				default: return false;
			}
		}
		/***********************************/
		$scope.myFinFun = function() 
		{
			//alert ('click');
			$scope.ci_index = 0;
			$interval.cancel(timer);
		}
		/***********************************/
		$scope.btnNextClick = function() 
		{
			$scope.valid_answer = false;
			if (is_correct_choise_for ($scope.items[$scope.ci_index].dim))
			{
				$scope.ci_index++;
				$scope.valid_answer = true;
			}
		}		
		/***********************************/
		$scope.btnPriorClick = function() 
		{
			$scope.ci_index = $scope.ci_index - 1
		}	
		/***********************************/
		$scope.btnClickFun = function(arg) 
		{
			
			$scope.items[$scope.ci_index].dim.sel = arg
			$scope.ci_index++;
		}
		/***********************************/
		$scope.ci_index = 0;
		$scope.item_vis = 1;
		$scope.variant_vis = 1;
		//timer
		$scope.counter = 60;
		var timer =	$interval
			(
			function()
				{
					if ($scope.counter > 10)
						$scope.counter--;
					else
						$interval.cancel(timer);
				},
				1000
			);
		
		//$scope.onTimeout=function () {
			//$scope.counter++;
			//mytimeout = $interval ($scope.onTimeout, 1000);
			//};
		//var mytimeout = angular.interval ($scope.onTimeout, 1000);
		//var ver = angular.version.full;
		
});

	
