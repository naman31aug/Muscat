
app.controller('LogOutController', ['$window', '$scope',
    function ($window, $scope) {
        
        localStorage.removeItem("UserId");
        localStorage.removeItem("Name");
        $window.location.href = '/index.html#/login';

       

    }]);

