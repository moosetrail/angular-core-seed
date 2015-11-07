/// <reference path="../../../src/Moosetrail.Angular.Core/Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../src/Moosetrail.Angular.Core/Scripts/typings/angular-local-storage/angular-local-storage.d.ts" />
/// <reference path="../../../src/Moosetrail.Angular.Core/Scripts/typings/jquery/jquery.d.ts" />
declare module Moosetrail {
    class Module {
        app: ng.IModule;
        constructor(name: string, modules: Array<string>);
        addController(name: string, controller: Function): void;
        addDirective(name: string, directive: ng.IDirectiveFactory): void;
        addService(name: string, service: Function): void;
    }
}
declare module Moosetrail.Core.Authentication {
    class Authenticator {
        authData: Authentication.UserCredentials;
        http: DataAccess.HttpDataFactory;
        q: ng.IQService;
        localStroage: ng.local.storage.ILocalStorageService;
        static $inject: string[];
        constructor($q: ng.IQService, localStorage: ng.local.storage.ILocalStorageService, factory: DataAccess.HttpDataFactory);
        private clearAuthData();
        login(username: string, password: string): ng.IPromise<DataAccess.DataResult>;
        private setAuthentication(username, result, def);
        private setAuthData(authData);
        private handleFailedLogin(reason, def);
        logout(): void;
        fillAuthData(): UserCredentials;
        hasAuthorizationFor(role: UserRole): boolean;
    }
}
declare module Moosetrail.Core.Authentication {
    class AuthenticatorInterceptor {
        private localStorage;
        private $q;
        static $inject: string[];
        constructor($q: ng.IQService, localStorage: ng.local.storage.ILocalStorageService);
        request: (config: any) => any;
        responseError: (rejection: any) => ng.IPromise<any>;
    }
}
declare module Moosetrail.Core.Authentication {
    class TokenAuthorization implements UserCredentials {
        isAuthenticated: boolean;
        username: string;
        token: string;
        password: string;
        constructor(username: string, token: string);
    }
}
declare module Moosetrail.Core.Authentication {
    interface UserCredentials {
        isAuthenticated: boolean;
        username: string;
        password: string;
    }
}
declare module Moosetrail.Core.Authentication {
    enum UserRole {
        User = 0,
        Admin = 1,
    }
}
declare module Moosetrail.Core {
    interface IConfig {
        apiUrl: string;
    }
}
declare module Moosetrail.Core.DataAccess {
    class CombinedDataFactory {
        protected q: angular.IQService;
        private httpFactory;
        private localFactory;
        constructor(localFactory: LocalDataFactory, httpFactory: HttpDataFactory, $q: ng.IQService);
        protected getData(getLocal: Function, getHttp: Function): ng.IPromise<DataResult>;
    }
}
declare module Moosetrail.Core.DataAccess {
    class DataResult {
        data: any;
        httpResponse: HttpResponse;
        source: DataSource;
        constructor(data: any, code: number, source: DataSource);
    }
}
declare module Moosetrail.Core.DataAccess {
    enum DataSource {
        LocalStorage = 0,
        Http = 1,
    }
}
declare module Moosetrail.Core.DataAccess {
    class HttpDataFactory {
        http: ng.IHttpService;
        q: ng.IQService;
        private baseUrl;
        static $inject: string[];
        constructor($http: ng.IHttpService, $q: ng.IQService, config: IConfig);
        getData(url: string): ng.IPromise<DataResult>;
        getWithParams(url: string, params: any): ng.IPromise<DataResult>;
        getWithData(url: string, data: any): ng.IPromise<DataResult>;
        post(url: string, sendData: any): ng.IPromise<DataResult>;
        postWithHeader(url: string, sendData: any, headers: any): ng.IPromise<DataResult>;
        postWithParams(url: string, sendData: any, params: any): ng.IPromise<DataResult>;
        postWithParamsWithoutData(url: string, params: any): ng.IPromise<DataResult>;
        put(url: string, sendData: any): ng.IPromise<DataResult>;
        putWithParams(url: string, params: any, data: any): ng.IPromise<DataResult>;
        deleteData(url: string): ng.IPromise<DataResult>;
        private createUrl(url);
        protected encodeUrl(url: string): string;
    }
}
declare module Moosetrail.Core.DataAccess {
    class HttpResponse {
        code: number;
        constructor(code: number);
    }
}
declare module Moosetrail.Core.DataAccess {
    class LocalDataFactory {
        private prefix;
        protected q: ng.IQService;
        private localStorage;
        static $inject: string[];
        constructor($q: ng.IQService, local: angular.local.storage.ILocalStorageService);
        protected getDataWithKey(key: string): ng.IPromise<DataResult>;
        protected setDataWithKey(key: string, data: any): void;
        protected getPlainData(identifier: string): any;
    }
}
declare module Moosetrail.Core.Design {
    class Layout {
        isPhone: boolean;
        isTablet: boolean;
        isDesktop: boolean;
        width: number;
        static $inject: string[];
        constructor(window: ng.IWindowService);
        private calculateViewType();
        static create(width: number): Layout;
    }
}
declare module Moosetrail.Core.Design {
    class ResponsiveImageCtrl {
        private layoutData;
        src: string;
        alt: string;
        class: string;
        dimensions: string;
        width: string;
        height: string;
        static $inject: string[];
        constructor(scope: ResponsiveImageScope, layout: Layout);
        private setSource(scope);
        private setDimensions();
        private setDynamicDimensions(scope);
    }
}
declare module Moosetrail.Core.Design {
    function responsiveImageDirective(): ng.IDirective;
}
declare module Moosetrail.Core.Design {
    interface ResponsiveImageScope extends ng.IScope {
        src: string;
        phoneSrc: string;
        tabletSrc: string;
        desktopSrc: string;
        alt: string;
        imgClass: string;
        width: number;
        height: number;
        phoneWidth: number;
        tabletWidth: number;
        desktopWidth: number;
        phoneHeight: number;
        tabletHeight: number;
        desktopHeight: number;
    }
}
declare module Moosetrail.Core.Mathematics {
    class RandomGenerator {
        getRandomInt(min: any, max: any): number;
    }
}
declare module Moosetrail.Core.Authentication {
}
declare module Moosetrail.Core.DataAccess {
}
declare module Moosetrail.Core.Design {
}
declare module Moosetrail.Core.Mathematics {
}
declare module Moosetrail.Core {
}
