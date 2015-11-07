///<reference path="coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core {
    var dependencies = [
        "LocalStorageModule",

        /* Cross-communication modules*/
       "moosetrail.core.authentication",
        "moosetrail.core.dataAccess",
        "moosetrail.core.mathematics",
        "moosetrail.core.visual",
    ];

    var core = new Module("moosetrail.core", dependencies);
}