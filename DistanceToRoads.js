// Create buffer distance to intersect with intersection points
var dist = 500;
// Intersect with the interesection points
var ints = []
for (var i = 0; i < 5; i++) {
    var buf = Buffer($feature, dist, 'feet');
    ints = Intersects(FeatureSetById($map, 'MISS_DIG_Measurement_Test_5998'), buf); // UPDATE THE LAYER ID HERE TO THE NEW ID FOR INTERSECTIONS LAYER
    if (count(ints) > 0) break;
    dist += 100;
}
// Create an array to store the OID concat of each intersection point and the distance from the pole
var arr_index = 0;
var intDist = [];
// Iterate over the ints featureset, measuring the distance from the pole to the intersection and adding to array
for (var int in ints) {
    intDist[arr_index] = {
        'oids': int.OID_concat,
        'dist': DistanceGeodetic($feature, int, 'feet')
    };
    ++arr_index;
}
// Create a comparator function that will allow to sort the array by the distance values
function sortDist(a,b) {
    if (a.dist < b.dist) return -1;
    if (a.dist > b.dist) return 1;
    return 0;
}
// Perform the sort and save the first result to a new variable
intDist = Sort(intDist, sortDist);
var int = First(intDist);
// Split the road OIDs from the intersection point, create a sql statement to query the roads
var rdIds = Split(int.oids, ';');
var sql = `Orig_OID IN (${Concatenate(rdIds,', ')})`;
var roads = Filter(FeatureSetById($map, 'MISS_DIG_Measurement_Test_9251', ['OBJECTID', 'Orig_OID', 'NAME']), sql); // UPDATE THE LAYER ID HERE TO THE NEW ID FOR ROADS LAYER
// Create an array to store the OID concat of each intersection point and the distance from the pole
arr_index = 0;
var roadDist = [];
var buf = Buffer($feature, Number(int.dist) * 1.5, 'feet');
// Iterate over the roads featureset, measuring the distance from the pole to the road and adding to array
for (var road in roads) {
    var vertices = Intersection(Densify(road, 1, 'feet'), buf).paths[0];
    var nearest = Infinity;
    var dir;
    for (var vertex in vertices) {
        if (DistanceGeodetic($feature, Point(vertices[vertex]), 'feet') < nearest) {
            nearest = DistanceGeodetic($feature, Point(vertices[vertex]), 'feet');
            dir = Angle($feature, Point(vertices[vertex]));
        }
    }
    roadDist[arr_index] = {
        'oid': road.Orig_OID,
        'name': road.NAME,
        'dist': nearest,
        'dir': dir
    };
    ++arr_index;
}
var result = 'Closest Roads:';
for (var rd in roadDist) {
    result += `
        - ${roadDist[rd].name}, ${Text(roadDist[rd].dist, '#.00')} ft, ${Text(roadDist[rd].dir, '#.00')}°`
}
result