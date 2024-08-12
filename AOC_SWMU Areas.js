var attributes = {};
var fieldInfos = [];

// Query the AOC/SWMUs intersecting the sketch site
var swmuAocAreas = Intersects($feature, FeatureSetById($map, "18e38f9c119-layer-3", ["SWMUID"]));

// Case: No intersects
if (Count(swmuAocAreas) == 0) {
  return {
    type: "text",
    text: "No AOCs or SWMUs within the specified area"
  };
}


// Add AOC/SWMUs to the attributes/fieldInfos for return, calculate total area
var totalArea = 0;
for (var swmuAoc in swmuAocAreas) {
  var id = swmuAoc["SWMUID"]
  // var areaAcres = `${Round(Area(Intersection($feature, swmuAoc), "acres"), 2)} ac`;
  var areaAcres = AreaGeodetic(Intersection($feature, swmuAoc), "acres");
  totalArea += areaAcres;
  attributes[id] = `${Round(areaAcres, 2)} ac`;
  Push(fieldInfos, {
    fieldName: id
  });
}

return {
  title: "Area",
  description: `Total Area of AOCs and SWMUs: ${Round(totalArea, 2)} ac`,
	type : 'fields', 
	fieldInfos: fieldInfos,
  attributes: attributes 
};
