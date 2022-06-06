// Get tests for this span
var tests = FeatureSetByRelationshipName($feature,"Span_to_Test");

// If no tests are present, keep same status
if (count(tests) == 0) return $feature.Status;

// Use tests status(es) to determine the new span status
// Status checker functions
function badCheck(value) { return value == 'Bad'};
function nfsCheck(value) { return value == 'needs_further' };
function okCheck(value) { return value == 'OK' }

// First, get all test status into an array
var statusArr = [];
for (var test in tests) {
    Push(statusArr, test['Test_Results']);
}

// Check if any are Bad
if (Any(statusArr, badCheck)) return 'BAD';
// Check if any are Needs Further Study
else if (Any(statusArr, nfsCheck)) return 'Needs Further Study';
// Check if ALL are OK
else if (All(statusArr, okCheck)) return 'OK';
// All cases should be accounted for above, but just for peace of mind throw existing status in as a last measure
else return $feature.Status;
