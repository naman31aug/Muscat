app.controller('RegisterController', ['$window', '$scope', '$firebaseArray', '$firebaseObject', 'FBURL',
    function ($window, $scope, $firebaseArray, $firebaseObject, FBURL) {



        function getRandomSpan() {
            return Math.floor((Math.random() * 60) + 123456);
        };
        $scope.addUserModel = function () {

            var mailflag = 0;
            var ref = new Firebase("https://muscat-green.firebaseio.com/UserModel");

            var obj = $firebaseObject(ref);
            var email = $scope.UserModel.email;
            obj.$loaded().then(function () {
                // To iterate the key/value pairs of the object, use angular.forEach()
                angular.forEach(obj, function (value, key) {
                    if (value.email === email) {                       
                        return;
                    }
                });
            });           

            var UserModel = $firebaseArray(ref);
            UserModel.$add({
                email: $scope.UserModel.email,
                password: $scope.UserModel.password,
                type: $scope.UserModel.type,
                name: "sdf",
                user_id: getRandomSpan()
            });

            $window.location.href = '/index.html#/Profile'

        };


    }]);

