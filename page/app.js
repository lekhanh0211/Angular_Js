var app = angular.module("myApp", []);
app.controller("MyController", function ($scope) {
  $scope.age = 25;
  $scope.address = "Thanh Oai - Hà Nội";
  $scope.phone = "0777369933";
  $scope.email = "khanhld0211@gmail.com";
  $scope.name = "Hwang Hee Chan";
  $scope.money = 1500320;
  $scope.my_day = new Date();
  $scope.data = [
    {
      id: 1,
      name: "Lê Duy Khánh",
      age: 25,
      address: "Hà Nội",
      email: "khanhld0211@gmail.com",
    },
    {
      id: 2,
      name: "Lê Mai Hoa",
      age: 24,
      address: "Bình Phước",
      email: "maihoa@gmail.com",
    },
    {
      id: 3,
      name: "Lê Việt Cường",
      age: 28,
      address: "Hà Tây",
      email: "cuongngao@gmail.com",
    },
  ];

  $scope.demoClick = function () {
    alert("bạn cần gì thì phải nói?");
  };
});
