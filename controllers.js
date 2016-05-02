'use strict';
/* Controllers */
angular.module('imdbApp',[])
.controller('ListCtrl' ,['$scope','$http',function($scope,$http){

  
  $scope.inTheaters = function(d){
    return d.date === "In Theaters Now";
  }

  $http({
    method:'GET',
    url:'/list2.json' /*'http://www.myapifilms.com/imdb/inTheaters'*/
  }).success(function(data){
    $scope.list = data;
  }).error(function (error){
      console.error(error);
  });

}])

/************************* None Angular code ***************************************/
/****************************And of no Use****************************************/
var xmlhttp = new XMLHttpRequest();
var url = "list2.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  console.log(arr);
  arr.forEach(function(i){
    console.log(i);
     if((i.date) == "In Theaters Now" ){
        var x = i.movies;console.log(x);var len ; 
        x.forEach(function(i){
           console.log((i.title).length);len = (i.title).length;i.len = len; 
        })
        console.log(x);
     }
  })
  console.log(arr); //length of movie title has been added in the json data itself
  return arr;
}
