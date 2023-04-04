/* tslint:disable */
/* eslint-disable */
/**
 * Product App Microservice
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Copy
 */
export interface Copy {
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    brandName?: string;
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    competitiveInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    faqs?: string;
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    ingredients?: string;
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    useInstructions?: string;
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    keywords?: string;
    /**
     * 
     * @type {string}
     * @memberof Copy
     */
    tags?: string;
}

/**
 * Check if a given object implements the Copy interface.
 */
export function instanceOfCopy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyFromJSON(json: any): Copy {
    return CopyFromJSONTyped(json, false);
}

export function CopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Copy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'brandName': !exists(json, 'brandName') ? undefined : json['brandName'],
        'competitiveInfo': !exists(json, 'competitiveInfo') ? undefined : json['competitiveInfo'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'faqs': !exists(json, 'faqs') ? undefined : json['faqs'],
        'ingredients': !exists(json, 'ingredients') ? undefined : json['ingredients'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'useInstructions': !exists(json, 'useInstructions') ? undefined : json['useInstructions'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function CopyToJSON(value?: Copy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'brandName': value.brandName,
        'competitiveInfo': value.competitiveInfo,
        'description': value.description,
        'faqs': value.faqs,
        'ingredients': value.ingredients,
        'summary': value.summary,
        'useInstructions': value.useInstructions,
        'keywords': value.keywords,
        'tags': value.tags,
    };
}

