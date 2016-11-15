var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope) 
{
		$scope.blocks = [
			{instr:'инструкция к первому блоку вопросов', time_limit:0, random_ans_ord:0},
			{instr:'инструкция ко второму блоку вопросов', time_limit:0, random_ans_ord:0}
		];
		
		$scope.items = [
			{text:'first question',id:10, dim: {type:1, mode:2, sel:0, subscl:[
				{txt:"var 1",id:111},
				{txt:"var 2",id:112},
				{txt:"var 3",id:113}
				]}
			},
			{text:'second question',id:11, dim: {type:1, mode:1, sel:0, subscl:[
				{txt:"var 11",id:211},
				{txt:"var 22",id:212},
				{txt:"var 33",id:213}
				]},
			},
			{text:'third question',id:12, dim: {type:2, mode:2, sel:0, subscl:[
				{txt:"var zzzzz",id:311,val:true},
				{txt:"var bbbbb",id:312,val:false},
				{txt:"var dddd rrr tt",id:313,val:false}
				]}
			},
			{text:'fourth question',id:12, dim: {type:3, sel:"abc"}}

		];
		
		$scope.instruction = 'это текст общей инструкции к прохождению исследования';
		
		$scope.myFinFun = function() 
		{
			//alert ('click');
			$scope.ci_index = 0;
		}
		$scope.btnClickFun = function(arg) 
		{
			
			$scope.items[$scope.ci_index].dim.sel = arg
			$scope.ci_index++;
		}
		
		$scope.ci_index = 0;
		$scope.item_vis = 1;
		$scope.variant_vis = 1;
});

	
