# @turf/boolean-equal

# booleanEqual

Determine whether two geometries of the same type have identical X,Y coordinate values. See [spatial relations](http://edndoc.esri.com/arcsde/9.0/general_topics/understand_spatial_relations.htm).

**Parameters**

-   `feature1` **([Geometry](http://geojson.org/geojson-spec.html#geometry) \| [Feature](http://geojson.org/geojson-spec.html#feature-objects)&lt;any>)** GeoJSON Feature or Geometry
-   `feature2` **([Geometry](http://geojson.org/geojson-spec.html#geometry) \| [Feature](http://geojson.org/geojson-spec.html#feature-objects)&lt;any>)** GeoJSON Feature or Geometry

**Examples**
```javascript
var pt1 = turf.point([0, 0]);
var pt2 = turf.point([0, 0]);
var pt3 = turf.point([1, 1]);

turf.equal(pt1, pt2);
//= true
turf.equal(pt2, pt3);
//= false
```

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true/false

<!-- This file is automatically generated. Please don't edit it directly:
if you find an error, edit the source file (likely index.js), and re-run
./scripts/generate-readmes in the turf project. -->

---

This module is part of the [Turfjs project](http://turfjs.org/), an open source
module collection dedicated to geographic algorithms. It is maintained in the
[Turfjs/turf](https://github.com/Turfjs/turf) repository, where you can create
PRs and issues.

### Installation

Install this module individually:

```sh
$ npm install @turf/boolean-equal
```

Or install the Turf module that includes it as a function:

```sh
$ npm install @turf/turf
```