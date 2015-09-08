///<reference path="../../referenceFile.ts"/>
/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Design {

    export interface ResponsiveImageScope extends ng.IScope {
        src:string;
        phoneSrc: string;
        tabletSrc: string;
        desktopSrc: string;
        alt: string;
        imgClass: string;
        width:number;
        height: number;
    }
}