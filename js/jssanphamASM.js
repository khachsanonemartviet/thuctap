var app = angular.module("myApp", [])
				.controller("myController", function($scope){

					$scope.carts = [];

					$scope.products = [
					{p_id: "1", p_ten: "Huawei P30 64GB", p_hinh: "huawei-p30-blue-400x400.jpg", p_gia: 16990000},
					{p_id: "2", p_ten: "Nokia 6.1 Plus 32GB", p_hinh: "nokia-61-plus-2-400x400.jpg", p_gia: 4790000},
					{p_id: "3", p_ten: "Samsung Galaxy A10", p_hinh: "samsung-galaxy-a10-red-400x400.jpg", p_gia: 2790000},
					{p_id: "4", p_ten: "Huawei Mate 20 Pro", p_hinh: "huawei-mate-20-pro-twilight-400x400.jpg", p_gia: 17990000},
					{p_id: "5", p_ten: "Blackberry Evolve", p_hinh: "blackberry-evolve-black-400x400.jpg", p_gia: 7990000},
					{p_id: "6", p_ten: "iPhone 7 Plus 32GB", p_hinh: "iphone-7-plus-32gb-gold-600x600-400x400.jpg", p_gia: 12990000},
					{p_id: "7", p_ten: "iPad Pro 2018 64GB", p_hinh: "ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg", p_gia: 21490000},
					{p_id: "8", p_ten: "Samsung Tab S5e", p_hinh: "samsung-galaxy-tab-s5e-t725-2019-silver-400x400.jpg", p_gia: 12490000},
					{p_id: "9", p_ten: "Huawei Mediapad T3", p_hinh: "huawei-mediapad-t3-10-1-33397-thumb-400x400.jpg", p_gia: 4490000},
					{p_id: "10", p_ten: "Samsung Tab A 2018", p_hinh: "samsung-galaxy-tab-a-105-inch-ava-600x600.jpg", p_gia: 5290000},
					{p_id: "11", p_ten: "Lenovo Tab E10", p_hinh: "lenovo-tab-e10-tb-x104l-den-1-600x600.jpg", p_gia: 3490000},
					{p_id: "12", p_ten: "iPad Cellular 32GB", p_hinh: "ipad-wifi-cellular-32gb-2017-thumb-600x600.jpg", p_gia: 12490000},
					{p_id: "13", p_ten: "ASUS X507UF 15", p_hinh: "asus-x507uf-i5-8250u-4gb-1tb-2gb-mx130-ej121t-thumb-1-400x400.jpg", p_gia: 15990000},
					{p_id: "14", p_ten: "HP Pavilion CS1044TX", p_hinh: "hp-pavilion-15-cs1044tx-i5-8265u-4gb-1tb-2gb-mx130-thumb-33397-thumb-400x400.jpg", p_gia: 15490000},
					{p_id: "15", p_ten: "Acer Aspire A315", p_hinh: "acer-aspire-a315-31-p2lj-nxgntsv010-ava-400x400.jpg", p_gia: 7590000},
					{p_id: "16", p_ten: "Dell Vostro 3578", p_hinh: "dell-vostro-3578-p63f002v78b-450-400x400.jpg", p_gia: 16490000},
					{p_id: "17", p_ten: "MSI Prestige PS42", p_hinh: "msi-prestige-ps42-i5-8250u-4gb-256gb-14-win10-33397-thumb-123-400x400.jpg", p_gia: 19990000},
					{p_id: "18", p_ten: "Acer Nitro 5 AN515", p_hinh: "acer-nitro-5-an515-52-70ae-q3lsv007-ava-400x400.jpg", p_gia: 24490000},
					];

					$scope.add_cart = function(product){
						if(product){
							$scope.carts.push(
								{
									p_id: product.p_id, 
									p_ten: product.p_ten, 
									p_gia: product.p_gia, 
								 	p_hinh: product.p_hinh
								});
						}	
					}

					$scope.total = 0;

					$scope.setTotals = function(cart){
						if(cart){
							$scope.total += cart.p_gia;
						}
					}

					$scope.remove_cart = function(cart){
						if(cart){
							$scope.carts.splice($scope.carts.indexOf(cart), 1);
							$scope.total -= cart.p_gia;
						}
					}
					
					$scope.getSoLuong = function(){
						var soLuong = 0;
						soLuong = $scope.carts.length;
						return soLuong;
					}

				});