///<reference path="coreReferences.ts"/>

module Moosetrail {
    export class Module {
        app: ng.IModule;

        constructor(name: string, modules: Array<string>) {
            this.app = angular.module(name, modules);
        }

        addController(name: string, controller: Function) {
            this.app.controller(name, controller);
        }

        addDirective(name: string, directive: ng.IDirectiveFactory): void {
            if (directive != null)
                this.app.directive(name, directive);
        }

        addService(name: string, service: Function): void {
            this.app.service(name, service);
        }
    }
} 