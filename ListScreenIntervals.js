// Create a featureset by querying the all locations layer (layer 2 of the featureserver)
// Only return the ID, WINT_Ibdepth, and WINT_Iedepth fields and use "false" so that geometry doesn't need to be returned for better performance
var screen = FeatureSetById($datastore, '2', ['ID', 'WINT_Ibdepth', 'WINT_Iedepth'], false);
// Save the selected feature's ID to a variable so that we can filter the featureset by matching ID
var id = $feature.ID;
// Filter the featureset to distinct pairs of non-null top/bottom depth where the ID matches the feature ID
screen = Distinct(Filter(screen, 'ID = @id AND WINT_Ibdepth IS NOT NULL AND WINT_Iedepth IS NOT NULL'), ['WINT_Ibdepth', 'WINT_Iedepth']);
// If only one pair of depths was found return those values, adding two newlines to add a line break to the popup
if (Count(screen) == 1) `Screen interval at this location is from ${First(screen)['WINT_Ibdepth']} ft to ${First(screen)['WINT_Iedepth']} ft.\n\n`;
// If multiple intervals were found, return each on a newline, with two newlines at the very end to add a line break to the popup
else if (Count(screen) > 1) {
    var result = 'Screen intervals at this location are from:';
    for (var i in screen) {
        result += `\n- ${i['WINT_Ibdepth']} ft to ${i['WINT_Iedepth']} ft`;
    }
    result += '\n\n';
    result;
}
