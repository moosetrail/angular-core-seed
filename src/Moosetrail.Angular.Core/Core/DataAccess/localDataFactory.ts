///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.DataAccess {

    export class LocalDataFactory {

        private prefix = "data";
        protected q: ng.IQService;
        private localStorage: ng.localStorage.ILocalStorageService;

        static $inject = ["$q", "localStorageService"];

        public constructor($q: ng.IQService, local: angular.localStorage.ILocalStorageService) {
            this.q = $q;
            this.localStorage = local;
        }

        protected getDataWithKey(key: string): ng.IPromise<DataResult> {
            var def = this.q.defer();

            var foundData = this.localStorage.get(this.prefix + key);

            if (foundData instanceof NoDataObj) {
                def.resolve(new DataResult(null, 0, DataSource.LocalStorage));
            }
            else if (foundData != null) {
                def.resolve(new DataResult(foundData, 0, DataSource.LocalStorage));
            } else {
                def.reject(new DataResult(null, -1, DataSource.LocalStorage));
            }

            return def.promise;
        }

        protected setDataWithKey(key: string, data: any): void {
            if (data != null)
                this.localStorage.set(this.prefix + key, data);
            else
                this.localStorage.set(this.prefix + key, new NoDataObj());
        }

        protected getPlainData(identifier: string): any {
            return this.localStorage.get(this.prefix + identifier);
        }
    }

    class NoDataObj {

    }
}