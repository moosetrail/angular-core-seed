///<reference path="../coreReferences.ts"/>
/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Design {

    export class Layout  {
        isPhone: boolean;
        isTablet: boolean;
        isDesktop: boolean;
        width: number;

        static $inject = ["$window"];

        constructor(window: ng.IWindowService) {

            if(window != null)
                this.width = window.innerWidth;
            else {
                this.width = 1000;
            }

            this.calculateViewType();
        }

        private calculateViewType() {
            this.isDesktop = this.width >= 805;
            this.isPhone = this.width < 668;
            this.isTablet = !this.isDesktop && !this.isPhone;
        }

        public static create(width:number):Layout{
            var layout = new Layout(null);
            layout.width = width;
            layout.calculateViewType();
            return layout;
        }
    }
}