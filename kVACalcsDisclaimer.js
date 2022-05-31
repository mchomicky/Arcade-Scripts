var x = FeatureSetByRelationShipName($feature, "MasterList", ['*'], false)

var result = ''

var summer0 = Count(Filter(x, 'Summer_kWH_past_yr = 0'))
var summer30 = Count(Filter(x, 'Summer_kWH_past_yr > 30000'))
var winter0 = Count(Filter(x, 'Winter_kWH_past_yr = 0'))
var winter30 = Count(Filter(x, 'Winter_kWH_past_yr > 30000'))

if (summer0 > 0) {
    result += 'At least one customer record had 0 KWH recorded for summer. A value of 50 was assumed.'
}
if (summer30 > 0) {
    result += 'At least one customer record had above 30,000 KWH recorded for summer. A value of 30,000 was assumed.'
}
if (winter0 > 0) {
    result += 'At least one customer record had 0 KWH recorded for winter. A value of 50 was assumed.'
}
if (winter30 > 0) {
    result += 'At least one customer record had above 30,000 KWH recorded for winter. A value of 30,000 was assumed.'
}

return result
