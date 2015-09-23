///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Design {
    var visual = new Module("moosetrail.core.visual", []);
    visual.addDirective("imgResponsive", responsiveImageDirective);
    visual.addController("ResponsiveImageCtrl", ResponsiveImageCtrl);
    visual.addService("Layout", Layout);
}