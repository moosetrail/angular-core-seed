///<reference path="../coreReferences.ts"/>

module Moosetrail.Core.Authentication {

    export class AuthenticatorInterceptor {
        private localStorage: angular.local.storage.ILocalStorageService;
        private $q: angular.IQService;

        static $inject = ["$q", "localStorageService"];

        constructor($q: ng.IQService, localStorage: ng.local.storage.ILocalStorageService) {
            this.localStorage = localStorage;
            this.$q = $q;
        }

        request = (config) => {
            config.headers = config.headers || {};

            var authData = this.localStorage.get<TokenAuthorization>("authorizationData");
            if (authData) {
                config.headers.Authorization = `Bearer ${authData.token}`;
            }

            return config;
        }

        responseError = (rejection) => {
            if (rejection.status === 401) {
                location.href = "../logga-in";
            }
            return this.$q.reject(rejection);
        }
    }
}