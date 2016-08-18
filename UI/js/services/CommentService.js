(function(){
    'use strict';   
    angular.module('CommentService', []).factory('Comment', ['$http', function($http) 
    {
        return function Comment()
        {
            this.get = function(id)
            {
                return $http.get("../api/comments").then(function (comments)
                {
                    return comments;
                });
            };

            this.list = function ()
            {
                return $http.get("../api/comments").then(function (comments)
                {
                    return comments;
                });
            };

            this.create = function (comment) {
                return $http.post("../api/comments", comment).then(function ()
                {
                    return "created";
                });
            };

            this.update = function (comment) {
                return $http.put("../api/comments/" + comment, user).then(function ()
                {
                    return "updated";
                });
            };

            this.delete = function(userId)
            {
                return $http.delete("../api/user", { params: { userId: userId } }).then(function (response) {
                    return response;
                });
            }
        };

    }]);
})();