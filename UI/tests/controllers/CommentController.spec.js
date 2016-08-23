(function(){
    describe('Comment Controller', function() 
    {
        beforeEach(module('app.controllers'));
        beforeEach(function() {
            module('app.service');
        });

        var scope, ctrl, commentService;
        beforeEach(inject(function($rootScope, $controller) 
        {
            commentService = 
            {
                create : jasmine.createSpy(),
                update : jasmine.createSpy(),
                delete : jasmine.createSpy(),
                list   : {},
                get    : {}
            };

            scope  = $rootScope.$new();
            ctrl   = $controller('CommentController', 
            {
                $scope         : scope,
                CommentService: commentService 
            });
        }));
        
        it('#create', function() 
        {
            scope.create();
            expect(commentService.create).toHaveBeenCalledWith(scope.comment);
        });

        it('#update', function() 
        {
            scope.update(-1);
            expect(commentService.update).toHaveBeenCalledWith(-1, scope.comment);
        });

        it('#delete', function() 
        {
            scope.delete(-1);
            expect(commentService.delete).toHaveBeenCalledWith(-1);
        });

        it('#list', function() 
        {
            spyOn(commentService, 'list').and.callFake(function() {
                return {
                    then: function(callback) { return callback([{name : "HangukMal Babo"}]); }
                };
            });
            scope.list();
            expect(commentService.list).toHaveBeenCalled();
            expect(scope.comments).toEqual([{name : "HangukMal Babo"}]);
        });

        it('#get', function() 
        {
            spyOn(commentService, 'get').and.callFake(function() {
                return {name : "HangukMal Babo"}; 
                });
            scope.get(-1);
            expect(commentService.get).toHaveBeenCalledWith(-1);
            expect(scope.comment).toEqual({name : "HangukMal Babo"});
        });
    });
})();