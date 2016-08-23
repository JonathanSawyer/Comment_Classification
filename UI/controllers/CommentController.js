angular.module('app.controllers').controller('CommentController', ['$scope', 'CommentService', function ($scope, CommentService) 
{
    $scope.commentService = CommentService;
    $scope.comment  = {}
    $scope.comments = [];
    

    $scope.create = function()
    {
        $scope.commentService.create($scope.comment);
    };

    $scope.update = function(id)
    {
        $scope.commentService.update(id, $scope.comment);
    }

    $scope.delete = function(id)
    {
        $scope.commentService.delete(id);
    }

    $scope.list = function()
    {
        $scope.commentService.list().then(function (comments)
        {
            $scope.comments = comments;
        });
    }

    $scope.get = function(id)
    {
        $scope.comment = $scope.commentService.get(id);
    }
}]);