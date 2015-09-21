
/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Authentication {
    export interface UserCredentials {
        isAuthenticated: boolean;
        username: string;
        password: string;
    }
}