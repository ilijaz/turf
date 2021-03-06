/// <reference types="geojson" />

export type Feature = GeoJSON.Feature<any> | GeoJSON.GeometryObject;

/**
 * http://turfjs.org/docs/#boolean-contains
 */
export default function booleanContains(feature1: Feature, feature2: Feature): boolean;
