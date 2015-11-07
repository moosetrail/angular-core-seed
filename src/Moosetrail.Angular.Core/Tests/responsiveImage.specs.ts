
/**
 * Created by Johanna on 2015-08-28.
 */
describe("ResponsiveImageCtrl", function() {
    //beforeEach(module('funToLearn.core.visual'));

    var scope, controller, window;

    beforeEach(inject(function(_$rootScope_, _$controller_, _$window_){
        //Simulating isolate scope variables from the directive
        scope = _$rootScope_.$new();
        controller = _$controller_;
    }));

    describe("Mapping Properties", function(){
        it("should-set-alt-to-given", function(){
            scope.alt = "My alt";
            var SUT =  controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.alt).toEqual('My alt');
        });
        it("should-set-class-to-given", function(){
            scope.imgClass = "My class";
            var SUT =  controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.class).toEqual('My class');
        });
    });

    describe("src should be set to correct", function(){
        beforeEach(inject(function(){
            scope.src = "my-default";
            scope.desktopSrc = "desktop-src";
            scope.tabletSrc = "tablet-src";
            scope.phoneSrc = "phone-src";
        }));

        it("should-set-to-normal-if-no-other-given", function(){
            var layout = FunToLearn.Core.Design.Layout.create(1000);
            scope.desktopSrc = null;
            scope.tabletSrc = null;
            scope.phoneSrc = null;
            var SUT = controller("ResponsiveImageCtrl", { $scope: scope, layout: layout});
            expect(SUT.src).toEqual("my-default");
        });
        it("should-set-to-desktop-if-given-and-layout-is-desktop", function(){
            var layout = FunToLearn.Core.Design.Layout.create(1000);
            var SUT = controller("ResponsiveImageCtrl", { $scope: scope, Layout: layout});
            expect(SUT.src).toEqual("desktop-src");
        });
        it("should-set-to-desktop-if-given-and-layout-is-desktop", function(){
            var layout = FunToLearn.Core.Design.Layout.create(700);
            var SUT = controller("ResponsiveImageCtrl", { $scope: scope, Layout: layout});
            expect(SUT.src).toEqual("tablet-src");
        });
        it("should-set-to-desktop-if-given-and-layout-is-desktop", function(){
            var layout = FunToLearn.Core.Design.Layout.create(500);
            var SUT = controller("ResponsiveImageCtrl", { $scope: scope, Layout: layout});
            expect(SUT.src).toEqual("phone-src");
        });
    });

    describe("dimensions string should be set", function () {
        beforeEach(inject(function(){
            scope.src = "my-default";
            scope.width = 500;
            scope.height = 400;
        }));

        it("should-set-width-and-heigth", function() {
            var SUT = controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.dimensions).toEqual('w=500&h=400');
        });
        it("should-set-just-width-if-no-height", function() {
            scope.height = null;
            var SUT = controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.dimensions).toEqual('w=500');
        });
        it("should-set-just-width-if-no-height", function() {
            scope.width = null;
            var SUT = controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.dimensions).toEqual('h=400');
        });
        it("should-set-to-null-if-no-data", function() {
            scope.width = null;
            scope.height = null;
            var SUT = controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.dimensions).toBeNull();
        });
    });
    describe("heigth and width should get values", function () {
        beforeEach(inject(function(){
            scope.src = "my-default";
            scope.width = 500;
            scope.height = 400;
        }));

        it("should-set-width", function() {
            var SUT = controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.width).toEqual("500");
        });
        it("should-set-heigth", function() {
            var SUT = controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.height).toEqual("400");
        });
        it("should-set-width-to-auto-if-no-value", function() {
            scope.width = null;
            var SUT = controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.width).toEqual('auto');
        });
        it("should-set-to-null-if-no-data", function() {
            scope.height = null;
            var SUT = controller('ResponsiveImageCtrl', { $scope: scope });
            expect(SUT.height).toEqual("auto");
        });

    });
});