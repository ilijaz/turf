import { lineString } from '@turf/helpers';
import Spline from './spline.js';

/**
 * Takes a {@link LineString|line} and returns a curved version
 * by applying a [Bezier spline](http://en.wikipedia.org/wiki/B%C3%A9zier_spline)
 * algorithm.
 *
 * The bezier spline implementation is by [Leszek Rybicki](http://leszek.rybicki.cc/).
 *
 * @name bezier
 * @param {Feature<LineString>} line input LineString
 * @param {object} [options] Optional parameters
 * @param {number} [options.resolution=10000] time in milliseconds between points
 * @param {number} [options.sharpness=0.85] a measure of how curvy the path should be between splines
 * @returns {Feature<LineString>} curved line
 * @example
 * var line = turf.lineString([
 *   [-76.091308, 18.427501],
 *   [-76.695556, 18.729501],
 *   [-76.552734, 19.40443],
 *   [-74.61914, 19.134789],
 *   [-73.652343, 20.07657],
 *   [-73.157958, 20.210656]
 * ]);
 *
 * var curved = turf.bezier(line);
 *
 * //addToMap
 * var addToMap = [line, curved]
 * curved.properties = { stroke: '#0F0' };
 */
export default function bezier(line, options) {
    // Optional params
    options = options || {};
    var resolution = options.resolution || 10000;
    var sharpness = options.sharpness || 0.85;

    // validation
    if (typeof options !== 'object') throw new Error('options must be an object');
    if (typeof resolution !== 'number') throw new Error('resolution must be an number');
    if (typeof sharpness !== 'number') throw new Error('sharpness must be an number');

    var coords = [];
    var spline = new Spline({
        points: line.geometry.coordinates.map(function (pt) {
            return {x: pt[0], y: pt[1]};
        }),
        duration: resolution,
        sharpness: sharpness
    });

    for (var i = 0; i < spline.duration; i += 10) {
        var pos = spline.pos(i);
        if (Math.floor(i / 100) % 2 === 0) {
            coords.push([pos.x, pos.y]);
        }
    }

    return lineString(coords, line.properties);
}
