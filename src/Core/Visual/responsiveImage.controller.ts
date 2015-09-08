///<reference path="../../referenceFile.ts"/>


/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Design  {
    export class ResponsiveImageCtrl {

        private layoutData: Layout;

        src:string;
        alt: string;
        class: string;
        dimensions: string;
        width:string;
        height: string;

        static $inject = ["$scope", "Layout"];

        constructor(scope: ResponsiveImageScope, layout: Layout) {

            this.layoutData = layout;
            this.alt = scope.alt;
            this.class = scope.imgClass;

            this.setSource(scope);
            this.setDimensions(scope);
            if(scope.width != null)
                this.width = scope.width.toString();
            else
                this.width = "auto";
            if(scope.height != null)
                this.height = scope.height.toString();
            else
                this.height = "auto";
        }

        private setSource(scope) {
            if (this.layoutData.isDesktop && scope.desktopSrc != null)
                this.src = scope.desktopSrc;
            else if (this.layoutData.isTablet && scope.tabletSrc != null)
                this.src = scope.tabletSrc;
            else if (this.layoutData.isPhone && scope.phoneSrc != null)
                this.src = scope.phoneSrc;
            else
                this.src = scope.src;
        }
        private setDimensions(scope) {
            if (scope.width != null && scope.height != null)
                this.dimensions = `w=${scope.width}&h=${scope.height}`;
            else if (scope.width != null)
                this.dimensions = `w=${scope.width}`;
            else if (scope.height != null)
                this.dimensions = `h=${scope.height}`;
            else
                this.dimensions = null;
        }

    }
}