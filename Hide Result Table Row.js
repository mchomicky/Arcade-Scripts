// If this is a not a sample record, hide this row
if ($feature.list_index == 0) return 'display: none;';
// Create featureset with the analytic method field and sample ID
var features = FeatureSetById($datastore, "0", ['Sample_sample_id', 'Test_analytic_method', 'Result_analyte_name'], false);
// Store the analytic method, analyte name, and the sample ID to variables
var anm = 'TCEQ 1006';
var anl = 'Carbon Dioxide';
var samp = $feature.Sample_sample_id;
if (IsEmpty(samp)) {
    samp = 0;
}
features = Filter(features, 'Test_analytic_method = @anm AND Sample_sample_id = @samp AND Result_analyte_name = @anl');
if (Count(features) == 0) return 'display: none;';