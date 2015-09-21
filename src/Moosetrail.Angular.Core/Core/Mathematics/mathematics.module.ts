///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Mathematics {
    var mathModule = new Module("moosetrail.core.mathematics", []);
    mathModule.addService("RandomGenerator", RandomGenerator);
}