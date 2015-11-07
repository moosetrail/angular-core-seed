///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Authentication {
    export class Authenticator {

        authData: Authentication.UserCredentials;
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
            this.authData = {
                isAuthenticated: false,
                username: "",
                password: null
            };
        }

        login(username: string, password: string): ng.IPromise<DataAccess.DataResult> {

            var deferred = this.q.defer();

            var data = "grant_type=password&username=" + username + "&password=" + password;
            var headers = { 'Content-Type': "application/x-www-form-urlencoded" };

            this.http.postWithHeader("token", data, headers).then(
                (result: DataAccess.DataResult) => this.setAuthentication(username, result, deferred),
                (reason: DataAccess.DataResult) => this.handleFailedLogin(reason, deferred));

            return deferred.promise;
        }

        private setAuthentication(username: string, result:any, def: any) {
            var authData = new TokenAuthorization(username, result.data.access_token);
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

        fillAuthData() : UserCredentials {
            var authData = this.localStroage.get<TokenAuthorization>("authorizationData");

            if (authData)
                this.setAuthData(authData);
            else
                this.clearAuthData();

            return this.authData;
        }

        hasAuthorizationFor(role: UserRole): boolean {
            if (role === UserRole.User)
                return true;

            return false;
        }
    }
}