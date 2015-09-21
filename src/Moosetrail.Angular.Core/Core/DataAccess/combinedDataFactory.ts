///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-29.
 */
module Moosetrail.Core.DataAccess {

    export class CombinedDataFactory {
        protected q: angular.IQService;
        private httpFactory: DataAccess.HttpDataFactory;
        private localFactory: DataAccess.LocalDataFactory;

        constructor(localFactory: LocalDataFactory, httpFactory: HttpDataFactory, $q: ng.IQService) {
            this.q = $q;
            this.httpFactory = httpFactory;
            this.localFactory = localFactory;
        }

        protected getData(getLocal: Function, getHttp: Function) : ng.IPromise<DataResult> {
            return null;
        }

    }
}