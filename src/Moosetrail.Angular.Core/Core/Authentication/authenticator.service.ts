///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Authentication {
    export class Authenticator {

        authData: Authentication.TokenAuthorization;
        http: DataAccess.HttpDataFactory;
        q: ng.IQService;
        localStroage : ng.local.storage.ILocalStorageService;


        static $inject = ["$q", "localStorageService", "HttpDataFactory"];


        constructor($q: ng.IQService, localStorage: ng.local.storage.ILocalStorageService, factory: DataAccess.HttpDataFactory) {
            this.http = factory;
            this.q = $q;
            this.localStroage = localStorage;

            this.clearAuthData();
        }

        private clearAuthData(): void {
            this.authData = new TokenAuthorization("", null);
        }

        login(username: string, password: string): ng.IPromise<DataAccess.DataResult> {

            var deferred = this.q.defer();
            const data = `grant_type=password&username=${username}&password=${password}`;
            const headers = { 'Content-Type': "application/x-www-form-urlencoded" };

            this.http.postWithHeader("token", data, headers).then(
                (result: DataAccess.DataResult) => this.setAuthentication(username, result, deferred),
                (reason: DataAccess.DataResult) => this.handleFailedLogin(reason, deferred));

            return deferred.promise;
        }

        private setAuthentication(username: string, result:any, def: any) {
            const authData = new TokenAuthorization(username, result.data.access_token);
            
            if (result.data.roles.indexOf("Admin") > -1) {
                authData.setRoles([UserRole.Admin, UserRole.User]);
            } else {
                authData.setRoles([UserRole.User]);
            }

            this.localStroage.set("authorizationData", authData);
            this.setAuthData(authData);
            def.resolve(result);
        }

        private setAuthData(authData : TokenAuthorization) {
            this.authData = authData;
        }

        private handleFailedLogin(reason: Core.DataAccess.DataResult, def: angular.IDeferred<Object>) {
            this.logout();
            def.reject(reason);
        }

        logout() {
            this.localStroage.remove("authorizationData");
            this.clearAuthData();
        }

        setPremision(roles: UserRole[]):void {
            this.authData.setRoles(roles);
            this.localStroage.set("authorizationData", this.authData);
        }

        fillAuthData() : UserCredentials {
            const authData = this.localStroage.get<TokenAuthorization>("authorizationData");

            if (authData)
                this.setAuthData(authData);
            else
                this.clearAuthData();

            return this.authData;
        }

        hasAuthorizationFor(role: UserRole): boolean {
            if (role === UserRole.User)
                return this.authData.isAuthenticated;
            else if (this.authData.roles != null) {
                for (let i = 0; i < this.authData.roles.length; i++) {
                    if (this.authData.roles[i].toString() === role.toString())
                        return true;
                }
                return false;
            }
            else
                return false;
        }
    }
}