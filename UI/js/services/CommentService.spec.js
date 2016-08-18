(function(){
describe('Comment factory', function() 
{
    var Comment, $httpBackend;

    beforeEach(angular.mock.module('CommentService'));

    beforeEach(inject(function(_Comment_, _$httpBackend_) 
    {
        Comment = _Comment_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exist', function() {
        expect(Comment).toBeDefined();
    });

    describe('#create', function ()
    {
        it('creates a comment', function () 
        {
            $httpBackend.expectPOST('../api/comments', 
            {
                name: 'Some details about a comment'
            })
            .respond(200);

            var succeeded;

            new Comment().create({name : "Some details about a comment"})
            .then(function () 
            {
                succeeded = true;
            });

            $httpBackend.flush();
            expect(succeeded).toBeTruthy();
        });
    });
});
})();