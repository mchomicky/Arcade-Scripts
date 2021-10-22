// If this is a not a sample record, hide this row
if ($feature.list_index == 0) return 'display: none;';
// Create featureset with the analytic method field and sample ID
var features = FeatureSetById($datastore, "0", ['Sample_sample_id', 'Test_analytic_method']);
// Store the analytic method and the sample ID to variables
var anm = 'ASTM D1946';
var samp = $feature.Sample_sample_id;
if (IsEmpty(samp)) {
    samp = 0;
}
features = Filter(features, 'Test_analytic_method = @anm AND Sample_sample_id = @samp');
if (Count(features) == 0) return 'display: none;';