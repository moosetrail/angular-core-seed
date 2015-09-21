///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.DataAccess {
    var dataAccess = new Module("moosetrail.core.dataAccess", []);
    dataAccess.addService("HttpDataFactory", HttpDataFactory);
}