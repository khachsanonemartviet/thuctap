var app = angular.module("myApp", []);
app.controller("myController", function($scope){
	
	$scope.checkonSubmit = function (event){
		if(!$scope.myForm.$invalid){
			alert('Thêm sản phẩm thành công!');
			$scope.luusp();
		}
	};
	
	$scope.listsp = [
	{
		ten: "Samsung Galaxy S10+",
		gianhap: 22500000,
		giaban: 22990000,
		ngaynhap: "01/03/2019",
		nhasanxuat: "Samsung Electronics"
	},
	{
		ten: "Huawei Y9 2019",
		gianhap: 5000000,
		giaban: 5390000,
		ngaynhap: "05/03/2019",
		nhasanxuat: "Huawei"
	},
	{
		ten: "Vsmart Active 1+",
		gianhap: 5000000,
		giaban: 5490000,
		ngaynhap: "12/04/2019",
		nhasanxuat: "VinGroup"
	},
	{
		ten: "HTC U12 Lite 32GB",
		gianhap: 4000000,
		giaban: 4540000,
		ngaynhap: "25/03/2019",
		nhasanxuat: "High Tech Computer Corporation"
	},
	{
		ten: "iPad Cellular 32GB",
		gianhap: 10500000,
		giaban: 10990000,
		ngaynhap: "17/03/2019",
		nhasanxuat: "Apple Inc"
	},
	{
		ten: "Samsung Galaxy Tab A",
		gianhap: 9000000,
		giaban: 9490000,
		ngaynhap: "06/03/2019",
		nhasanxuat: "Samsung Electronics"
	},
	{
		ten: "Lenovo Tab E10",
		gianhap: 3100000,
		giaban: 3590000,
		ngaynhap: "31/03/2019",
		nhasanxuat: "Lenovo Group Ltd"
	},
	{
		ten:"Huawei Mediapad T5",
		gianhap: 5200000,
		giaban: 5590000,
		ngaynhap: "01/04/2019",
		nhasanxuat: "Huawei"
	}]
	
	$scope.luusp = function(){
		$scope.listsp.push({
			ten:$scope.tensp,
			gianhap:$scope.gianhapsp,
			giaban:$scope.giabansp,
			ngaynhap:$scope.ngaynhapsp,
			nhasanxuat:$scope.nhasanxuatsp
		});
	}
	
	$scope.xoasp = function(index){
		if(confirm("Bạn có chắc chắn muốn xóa?")){
			$scope.listsp.splice(index, 1);
		}
	}
	
	$scope.suasp = function(index){
		$scope.nidex = index;
		$scope.tensp = $scope.listsp[index].ten; 
		$scope.gianhapsp = $scope.listsp[index].gianhap;
		$scope.giabansp = $scope.listsp[index].giaban;
		$scope.ngaynhapsp = $scope.listsp[index].ngaynhap;
		$scope.nhasanxuatsp = $scope.listsp[index].nhasanxuat;
	}
	
	$scope.doEdit = function(){
		$scope.listsp[$scope.nidex].ten = $scope.tensp;
		$scope.listsp[$scope.nidex].gianhap = $scope.gianhapsp;
		$scope.listsp[$scope.nidex].giaban = $scope.giabansp;
		$scope.listsp[$scope.nidex].ngaynhap = $scope.ngaynhapsp;
		$scope.listsp[$scope.nidex].nhasanxuat = $scope.nhasanxuatsp;
		alert('Sửa sản phẩm thành công!')
	}
	
	$scope.moisp = function(){
		$scope.tensp = "";
		$scope.gianhapsp = "";
		$scope.giabansp = "";
		$scope.ngaynhapsp = "";
		$scope.nhasanxuatsp = "";
	}
	
	$scope.orderByMe = function(tc) {
		$scope.myOrderBy = tc;
	}
});