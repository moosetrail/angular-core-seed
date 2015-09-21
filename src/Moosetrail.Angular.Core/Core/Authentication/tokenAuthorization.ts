///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Authentication {
    export class TokenAuthorization implements  UserCredentials {

        isAuthenticated: boolean;
        username: string;
        token: string;
        password : string;

        constructor(username: string, token: string) {
            this.username = username;
            this.token = token;

            if (username != null && username !== "" && this.token != null && this.token !== "")
                this.isAuthenticated = true;

            this.password = null;
        }
    }
}