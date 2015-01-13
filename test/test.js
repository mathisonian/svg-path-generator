
var expect = require('expect.js');
var Path = require('..');


describe('svg-path-generator tests', function() {

    it('should draw a triangle', function() {
        var path = Path()
                    .moveTo(10, 25)
                    .lineTo(10, 75)
                    .lineTo(60, 75)
                    .lineTo(10, 25)
                    .end();

        expect(path).to.be('M 10 25 L 10 75 L 60 75 L 10 25');
    });


    it('should draw a triangle with a relative lineTo', function() {
        var path = Path()
                    .moveTo(10, 25)
                    .lineTo(10, 75)
                    .lineTo(60, 75)
                    .relative()
                    .lineTo(-50, -50)
                    .end();

        expect(path).to.be('M 10 25 L 10 75 L 60 75 l -50 -50');
    });


    it('should draw a line with multiple input pairs', function() {
        var path = Path()
                    .moveTo(10, 25)
                    .lineTo(10, 75, 60, 75, 10, 25)
                    .end();

        expect(path).to.be('M 10 25 L 10 75 60 75 10 25');
    });


    it('should convert Path object to string with toString', function() {
        var path = Path()
                    .moveTo(10, 25)
                    .lineTo(10, 75, 60, 75, 10, 25);

        expect(path.toString()).to.be('M 10 25 L 10 75 60 75 10 25');
    });


    it('should work with an initial path', function() {
        var path = Path('M 10 25')
                    .lineTo(10, 75, 60, 75, 10, 25)
                    .end();

        expect(path).to.be('M 10 25 L 10 75 60 75 10 25');
    });



    it('should work with a closed path', function() {
        var path1 = Path()
                    .moveTo(10, 25)
                    .lineTo(10, 75)
                    .lineTo(60, 75)
                    .relative()
                    .lineTo(-50, -50)
                    .close()
                    .end();

        var path2 = Path()
                    .moveTo(10, 25)
                    .lineTo(10, 75)
                    .lineTo(60, 75)
                    .relative()
                    .lineTo(-50, -50)
                    .closePath()
                    .end();

        expect(path1).to.be(path2);

        expect(path1).to.be('M 10 25 L 10 75 L 60 75 l -50 -50 Z');
    });


});