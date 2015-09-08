/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.DataAccess {
    export class HttpResponse
    {
        code: number;

        constructor(code: number) {
            this.code = code;
        }
    }
}