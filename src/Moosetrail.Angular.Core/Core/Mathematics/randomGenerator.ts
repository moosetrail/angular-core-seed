///<reference path="../coreReferences.ts"/>

/**
 * Created by Johanna on 2015-08-28.
 */
module Moosetrail.Core.Mathematics {

    export class RandomGenerator {

        /* Returns a random number between min and max where both min and max are included */
        getRandomInt(min, max) : number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}