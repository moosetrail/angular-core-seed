///<reference path="../coreReferences.ts"/>

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
            this.setDynamicDimensions(scope);
            this.setDimensions();

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

        private setDimensions() {
            if (this.width != null && this.height != null)
                this.dimensions = `w=${this.width}&h=${this.height}`;
            else if (this.width != null)
                this.dimensions = `w=${this.width}`;
            else if (this.height != null)
                this.dimensions = `h=${this.height}`;
            else
                this.dimensions = null;
        }

        private setDynamicDimensions(scope: ResponsiveImageScope) {
            if (this.layoutData.isDesktop && scope.desktopWidth != null)
                this.width = scope.desktopWidth.toString();
            if (this.layoutData.isDesktop && scope.desktopHeight != null)
                this.height = scope.desktopHeight.toString();

            if (this.layoutData.isTablet && scope.tabletWidth != null)
                this.width = scope.tabletWidth.toString();
            if (this.layoutData.isTablet && scope.tabletHeight != null)
                this.height = scope.tabletHeight.toString();

            if (this.layoutData.isPhone && scope.phoneWidth != null)
                this.width = scope.phoneWidth.toString();
            if (this.layoutData.isPhone && scope.phoneHeight != null)
                this.height = scope.phoneHeight.toString();

        }

    }
}