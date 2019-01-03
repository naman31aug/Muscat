app.controller('LoginController', ['$window','$scope', '$firebaseArray', '$firebaseObject', 'FBURL',
    function ($window,$scope, $firebaseArray, $firebaseObject, FBURL) {        
        $scope.LoginUser = function () {
            var ref = new Firebase(FBURL + "UserModel");
            var obj = $firebaseObject(ref);
            var email = $scope.UserModel.email;    
            var user_id = $scope.UserModel.user_id;
            var name = $scope.UserModel.name;    
            var password = $scope.UserModel.password;       
            obj.$loaded().then(function () {              
                // To iterate the key/value pairs of the object, use angular.forEach()
                angular.forEach(obj, function (value, key) {
                    if (value.email === email && value.password === password) {
                        var UserId = value.user_id;
                        var Name = value.name;
                        console.log(UserId);
                        localStorage.setItem("UserId", UserId);                        
                        localStorage.setItem("Name", Name);                        
                        $window.location.href = '/index.html#/Profile';
                       
                    }
                });
            });
        };
       
    }]);

