var attributes = {};
var fieldInfos = [];

// Query the Buildings intersecting the sketch site
var buildings = Intersects($feature, FeatureSetById($map, "18e38f9c11a-layer-4", ["BLDG_NUM", "TITLE2005", "TITLE", "Building_Title"]));

// If no buildings were found, return a placeholder text
if (Count(buildings) == 0) {
  return {
    type: "text",
    text: "No buildings in the specified area"
  };
}

// Add buildings to the attributes/fieldInfos for return, calculate total area
var totalArea = 0;
for (var building in buildings) {

  // Find the value to use for building title
  var title2005 = Trim(building["TITLE2005"]);
  var title = Trim(building["TITLE"]);
  var bldTitle = Trim(building["Building_Title"]);
  var buildingTitleLabel;

  if (!IsEmpty(title2005) && Find("Not Listed", title2005) == -1) buildingTitleLabel = title2005;
  else if (!IsEmpty(title) && Find("Not Listed", title) == -1) buildingTitleLabel = title;
  else if (!IsEmpty(bldTitle) && Find("Not Listed", bldTitle) == -1) buildingTitleLabel = bldTitle;
  else buildingTitleLabel = "Untitled";

  // Create final building row label
  buildingTitleLabel = `${building["BLDG_NUM"]} (${buildingTitleLabel})`;

  // Calculate area of the building, add to total building area
  var buildingFootprint = AreaGeodetic(building, "square-feet");
  totalArea += buildingFootprint;

  // Add information to the fields list components
  attributes[buildingTitleLabel] = `${Round(buildingFootprint, 2)} sqft`;
  Push(fieldInfos, {
    fieldName: buildingTitleLabel
  });
}

return {
  title: "Area",
  description: `Total Building Footprint Area: ${Round(totalArea/43560, 2)} ac`,
	type : 'fields', 
	fieldInfos: fieldInfos,
  attributes: attributes 
};
