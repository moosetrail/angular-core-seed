///<reference path="../../referenceFile.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Design {

    export function responsiveImageDirective(): ng.IDirective {
        return {
            templateUrl: "Application/Core/Visual/responsiveImage.html",
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