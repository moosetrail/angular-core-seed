///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.DataAccess {

    export class HttpDataFactory {

        http: ng.IHttpService;
        q: ng.IQService;
        private baseUrl: string;

        static $inject = ["$http", "$q", "IConfig"];

        constructor($http: ng.IHttpService, $q: ng.IQService, config: IConfig) {
            this.http = $http;
            this.q = $q;
            this.baseUrl = config.apiUrl;
        }

        getData(url: string): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http({ url: this.createUrl(url), method: "GET" })
                .success(
                (data, status) => deferred.resolve(new DataResult(data, status, DataSource.Http)))
                .error((data, status) => deferred.reject(new DataResult(data, status, DataSource.Http))
            );

            return deferred.promise;
        }

        getWithParams(url: string, params: any): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http({ url: this.createUrl(url), method: "GET", params: params })
                .success(
                (data, status) => deferred.resolve(new DataResult(data, status, DataSource.Http)))
                .error((data, status) => deferred.reject(new DataResult(data, status, DataSource.Http))
            );

            return deferred.promise;
        }

        getWithData(url: string, data: any): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http.get(this.createUrl(url), {data: data})
                .success(
                (data, status) => {
                    deferred.resolve(new DataResult(data, status, DataSource.Http));
                }
            )
                .error(
                (data, status) => {
                    var error = new DataResult(data, status, DataSource.Http);
                    deferred.reject(error);
                }
            );

            return deferred.promise;
        }

        post(url: string, sendData: any): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http.post(this.createUrl(url), sendData)
                .success(
                (data, status) => {
                    deferred.resolve(new DataResult(data, status, DataSource.Http));
                }
            )
                .error(
                (data, status) => {
                    var error = new DataResult(data, status, DataSource.Http);
                    deferred.reject(error);
                }
            );

            return deferred.promise;
        }

        postWithHeader(url: string, sendData: any, headers: any): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http({ method: "POST", url: this.createUrl(url), data: sendData, headers: headers })
                .success(
                (data, status) => deferred.resolve(new DataResult(data, status, DataSource.Http)))
                .error((data, status) => deferred.reject(new DataResult(data, status, DataSource.Http))
            );

            return deferred.promise;
        }

        postWithParams(url: string, sendData: any, params: any): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http({ url: this.createUrl(url), method: "POST", params: params, data: sendData })
                .success(
                    (data, status) => deferred.resolve(new DataResult(data, status, DataSource.Http)))
                .error((data, status) => deferred.reject(new DataResult(data, status, DataSource.Http))
                    );

            return deferred.promise;
        }

        postWithParamsWithoutData(url: string, params: any): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http({ url: this.createUrl(url), method: "POST", params: params })
                .success(
                    (data, status) => deferred.resolve(new DataResult(data, status, DataSource.Http)))
                .error((data, status) => deferred.reject(new DataResult(data, status, DataSource.Http))
                    );

            return deferred.promise;
        }

        put(url: string, sendData: any): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http.put(this.createUrl(url), sendData).success(
                (data, status) => {
                    deferred.resolve(new DataResult(data, status, DataSource.Http));
                }
            )
                .error(
                (data, status) => {
                    var error = new DataResult(data, status, DataSource.Http);
                    deferred.reject(error);
                }
            );

            return deferred.promise;
        }

        putWithParams(url: string, params: any, data: any): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http.put(this.createUrl(url), data, params).success(
                (data, status) => {
                    deferred.resolve(new DataResult(data, status, DataSource.Http));
                }
            )
                .error(
                (data, status) => {
                    var error = new DataResult(data, status, DataSource.Http);
                    deferred.reject(error);
                }
            );

            return deferred.promise;
        }

        deleteData(url: string): ng.IPromise<DataResult> {
            var deferred = this.q.defer();

            this.http({ url: this.createUrl(url), method: 'Delete' })
                .success(
                (data, status) => deferred.resolve(new DataResult(data, status, DataSource.Http)))
                .error((data, status) => deferred.reject(new DataResult(data, status, DataSource.Http))
            );

            return deferred.promise;
        }

        private createUrl(url: string): string {
            return this.baseUrl + "/" + url;
        }

        protected  encodeUrl(url: string): string {
            url = url.replace("&amp;", "&");
            return encodeURIComponent(url);
        }
    }
}
