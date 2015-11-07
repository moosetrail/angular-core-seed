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

        setRoles(roles: UserRole[]): void {
            for (let role in roles) {
                this.roles.push(role);
            }
            this.cleanUpRoles();
        }

        private cleanUpRoles(): void {
            const newRoles = new Array<UserRole>();

            for (let i = 0; i < this.roles.length; i++) {
                let roleFound = false;
                for (let j = 0; j < newRoles.length; j++) {
                    if (newRoles[j] === this.roles[i])
                        roleFound = true;
                }
                if (!roleFound)
                    newRoles.push(this.roles[i]);
            }

            this.roles = newRoles;
        }
    }
}