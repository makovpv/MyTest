var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope, $interval) 
{
		// $scope.blocks = [
			// {instr:'инструкция к первому блоку вопросов. Нужно делать так, и не нужно делать не так', time_limit:0, random_ans_ord:0,
				// items:[
				// {text:'first question',id:10, dim: {type:1, mode:2, sel:0, time_restrict:1,
					// subscl:[
					// {txt:"var 1",id:111},
					// {txt:"var 2",id:112},
					// {txt:"var 3",id:113}
					// ]}
				// },
				// {text:'second question',id:11, dim: {type:1, mode:1, sel:0, 
					// subscl:[
					// {txt:"var 11",id:211},
					// {txt:"var 22",id:212},
					// {txt:"var 33",id:213}
					// ]},
				// },
				// {text:'third question',id:12, dim: {type:2, mode:2, sel:0, 
					// subscl:[
					// {txt:"var zzzzz",id:311,val:false},
					// {txt:"var bbbbb",id:312,val:false},
					// {txt:"var dddd rrr tt",id:313,val:false}
					// ]}
				// },
				// {text:'fourth question',id:12, dim: {type:3, sel:"abc"}}
				// ]
			// },
			// {instr:'инструкция ко второму блоку вопросов', time_limit:0, random_ans_ord:0,
				// items:[
					// {text:'это вопрос из нового блока',id:15, dim: {type:3}}
				// ]
			// }
		// ];
		var scope_blocks = '{"instr":"инструкция к первому блоку вопросов. Нужно делать так, и не нужно делать не так","time_limit":0,"random_ans_ord":0,"items":[{"text":"first QQQ","id":10,"dim":{"type":1,"mode":2,"sel":0,"time_restrict":1,"subscl":[{"txt":"var1","id":111},{"txt":"var2","id":112},{"txt":"var3","id":113}]}}]}';
		$scope.blocks = JSON.parse (scope_blocks);
		
		$scope.instruction = 'это текст общей инструкции к прохождению исследования';
		$scope.instruction_vis = 1;
		$scope.valid_answer = true;
		/***********************************/
		function is_correct_choise_for (dmn)
		{
			switch (dmn.type)
			{
				case 1: 
					if (dmn.mode == 2) // radio
						return dmn.sel != 0;
					else return true; // buttons
				case 2: 
					is_sel=false;
					for (var i=0, len=dmn.subscl.length; i<len; i++)
					{
						if (dmn.subscl[i].val) {is_sel=true; break;}
					}
					return is_sel;
				case 3:
					return typeof dmn.sel != 'undefined';
				default: 
					return false;
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
			if (is_correct_choise_for ($scope.blocks[$scope.block_idx].items[$scope.ci_index].dim))
			{
				if ($scope.ci_index < $scope.blocks[$scope.block_idx].items.length-1)
					$scope.ci_index++;
				else
				{// go to next block
					$scope.block_idx++;
					$scope.ci_index=0;
					$scope.instruction_vis = 1;
					$scope.item_vis = 0;
					$scope.variant_vis = 0;
					$scope.instruction = $scope.blocks[$scope.block_idx].instr;
				}
				
				$scope.valid_answer = true;
			}
		}		
		/***********************************/
		$scope.btnPriorClick = function() 
		{
			$scope.ci_index--;
			$scope.valid_answer = true;
		}	
		/***********************************/
		$scope.btnClickFun = function(arg) 
		{
			$scope.blocks[$scope.block_idx].items[$scope.ci_index].dim.sel = arg
			$scope.btnNextClick();
			//$scope.ci_index++;
		}
		/***********************************/
		$scope.btnStartClick = function ()
		{
			if (typeof $scope.block_idx == 'undefined') 
			{// begining of the test
				$scope.block_idx = 0;
				$scope.instruction = $scope.blocks[$scope.block_idx].instr;
			}
			else 
			{
				//$scope.block_idx++;
				//$scope.items = $scope.blocks[$scope.block_idx];
				$scope.ci_index = 0;
				
				$scope.instruction_vis = 0;
				$scope.item_vis = 1;
				$scope.variant_vis = 1;
			}
			
			
		}
		/***********************************/
		
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

	
