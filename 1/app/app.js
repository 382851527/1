var app = angular.module('app',[]);

app.controller('data', function ($scope){
    $scope.title = [
        {
            'src':'./images/a.png',
            'name':'百度',
            'title':'北京市海淀区',
            'text':'互联网 以上市 10000人'
        }
    ]
})