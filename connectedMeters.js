var x = FeatureSetByRelationShipName($feature, "MasterList", ['*'], false)

if (count(x) < 1) {
    return Null;
}

var meters = '';
for (var record in x) {
    meters += `● ${record['Meter_Number']}\n`
}

meters
