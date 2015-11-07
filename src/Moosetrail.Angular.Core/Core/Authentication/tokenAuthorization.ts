///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Authentication {
    export class TokenAuthorization implements  UserCredentials {

        isAuthenticated: boolean;
        username: string;
        token: string;
        password: string;
        roles: UserRole[];

        constructor(username: string, token: string) {
            this.username = username;
            this.token = token;
            this.roles = new Array<UserRole>(UserRole.User);

            if (username != null && username !== "" && this.token != null && this.token !== "")
                this.isAuthenticated = true;

            this.password = null;
        }
    }
}