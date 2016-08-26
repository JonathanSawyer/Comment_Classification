
angular.module('app.service').factory('CommentService', ['$http', function($http, $q) 
{
    var Comment = {};
    Comment.get = function(id)
    {
        return $http.get("../api/comments/" + id).then(function (response)
        {
            return response;
        });
    };

    Comment.list = function ()
    {
        return $http.get("../api/comments").then(function(response)
        {
            return response;
        });
    };

    Comment.create = function (comment) 
    {
        //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        return $http.post("../api/comments", comment).then(function (response)
        {
            return response;
        });
    };

    Comment.update = function (id, comment) {
        return $http.put("../api/comments/" + id, comment)
                    .then(function (response)
        {
            return response;
        });
    };

    Comment.delete = function(commentId)
    {
        return $http.delete("../api/comments/" + commentId)
                    .then(function (response) 
        {
            return response;
        });
    }

    return Comment;
}]);