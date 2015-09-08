///<reference path="../../referenceFile.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.DataAccess {
    export class DataResult
    {
        data: any;
        httpResponse: HttpResponse;
        source: DataSource;

        constructor(data: any, code: number, source: DataSource) {
            this.data = data;
            this.httpResponse = new HttpResponse(code);
            this.source = source;
        }
    }

}