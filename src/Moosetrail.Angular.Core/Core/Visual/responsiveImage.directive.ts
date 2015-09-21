///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Design {

    export function responsiveImageDirective(): ng.IDirective {
        return {
            template: "<img ng-src=\"{{vm.src}}?{{vm.dimensions}}\" alt=\"{{vm.alt}}\" class=\"{{vm.class}}\" height=\"{{vm.height}}\"width=\"{{vm.width}}\" />",
            restrict: "EA",
            controller: "ResponsiveImageCtrl",
            controllerAs: "vm",
            scope: {
                phoneSrc: "@",
                tabletSrc: "@",
                desktopSrc: "@",
                alt: "@",
                imgClass: "@",
                src: "@",
                width: "@",
                height: "@"
            }
        }
    }
}