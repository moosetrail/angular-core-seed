///<reference path="../referenceFile.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core {
    var dependencies = [
        "ngAnimate",
        "ngResource",
        "ngSanitize",
        "ui.router",
        "LocalStorageModule",

        /* Cross-communication modules*/
       "moosetrail.core.authentication",
        "moosetrail.core.dataAccess",
        "moosetrail.core.mathematics",
        "moosetrail.core.visual",
        "moosetrail.common"
    ];

    var core = new Module("moosetrail.core", dependencies);
}