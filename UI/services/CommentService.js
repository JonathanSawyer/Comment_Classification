
angular.module('app.service').factory('CommentService', ['$http', function($http, $q) 
{
    var Comment = {};
    Comment.get = function(id)
    {
        return $http.get("../api/comments/" + id).then(function (comments)
        {
            return comments;
        });
    };

    Comment.list = function ()
    {
        return $http.get("../api/comments").then(function(comments)
        {
            return comments;
        });
    };

    Comment.create = function (comment) {
        return $http.post("../api/comments", comment).then(function ()
        {
            return "created";
        });
    };

    Comment.update = function (id, comment) {
        return $http.put("../api/comments/" + id, comment).then(function ()
        {
            return "updated";
        });
    };

    Comment.delete = function(commentId)
    {
        return $http.delete("../api/comments/" + commentId).then(function (response) 
        {
            return response;
        });
    }

    return Comment;
}]);