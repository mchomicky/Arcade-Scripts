////Upcoming Visits Period////

//Generate a time period - currently 90 days from current day. Find the date one year from current
var periodStart = Today();
var periodEnd = DateAdd(periodStart, 90, 'days');
var monthEnd = DateAdd(periodStart, 1, 'months');
var yearEnd = DateAdd(periodStart, 1, 'years');

//Check if Visit_Date falls within specified time period. Return "Upcoming" if so, otherwise return "Within Next Year", "Past", or "Future" depending on date
if ($feature["Visit_Date"] >= periodStart && $feature["Visit_Date"] <= monthEnd) {
    return "Within Next Month"}
else if ($feature["Visit_Date"] >= periodStart && $feature["Visit_Date"] <= periodEnd) {
    return "Within Next Three Months"}
else if ($feature["Visit_Date"] >= periodEnd && $feature["Visit_Date"] <= yearEnd) {
    return "Within Next Year"}
else if ($feature["Visit_Date"] <=periodStart) {
    return "Past"}
else {
    return "Future"};


  
////Upcoming Visits Weight////

//Generate a time period - currently 90 days from current day. Find the date one year from current
var periodStart = Today();
var periodEnd = DateAdd(periodStart, 90, 'days');
var monthEnd = DateAdd(periodStart, 1, 'months');
var yearEnd = DateAdd(periodStart, 1, 'years');

//Check if Visit_Date falls within specified time period. Returns an integer depending on the time period
if ($feature["Visit_Date"] >= periodStart && $feature["Visit_Date"] <= monthEnd) {
    return 10}
else if ($feature["Visit_Date"] >= periodStart && $feature["Visit_Date"] <= periodEnd) {
    return 8}
else if ($feature["Visit_Date"] >= periodEnd && $feature["Visit_Date"] <= yearEnd) {
    return 4}
else {
    return 0};
	


	
////Upcoming Visits Transparency////
	
//Generate a time period - currently 90 days from current day. Find the date one year from current
var periodStart = Today();
var periodEnd = DateAdd(periodStart, 90, 'days');
var monthEnd = DateAdd(periodStart, 1, 'months');
var yearEnd = DateAdd(periodStart, 1, 'years');

//Check if Visit_Date falls within specified time period. Returns an integer depending on the time period
if ($feature["Visit_Date"] >= periodStart && $feature["Visit_Date"] <= monthEnd) {
    return 30}
else if ($feature["Visit_Date"] >= periodStart && $feature["Visit_Date"] <= periodEnd) {
    return 50}
else if ($feature["Visit_Date"] >= periodEnd && $feature["Visit_Date"] <= yearEnd) {
    return 70}
else {
    return 100};
	
	
	
	
////Upcoming Sites neighbors////

//Add all Site Visit Heat Map points as a FeaureSet
var sites = FeatureSetByName($map,"Site Visit Heat Map")
//Creates 40 mile buffer around each Site Visit Heat Map point
var buf = Buffer($feature, 40, 'miles')
//Counts number of sites intersecting the buffer
var interLayer = Intersects(sites, buf)
var countSites = Count(Intersects(sites, buf))

return countSites

