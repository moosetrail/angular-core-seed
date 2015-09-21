///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Authentication {
    var authentication = new Module("moosetrail.core.authentication", []);
    authentication.addService("Authenticator", Authenticator);
    authentication.addService("authentictionInterceptor", AuthenticatorInterceptor);
}