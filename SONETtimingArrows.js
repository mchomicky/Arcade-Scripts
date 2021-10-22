// Timing Port A
var lat1 = Geometry($feature).paths[0][0].y * PI/180;
var long1 = Geometry($feature).paths[0][0].x * PI/180;
var lat2 = Geometry($feature).paths[0][1].y * PI/180;
var long2 = Geometry($feature).paths[0][1].x * PI/180;

var azm = Atan2(Sin(long2 - long1) * Cos(lat2), Cos(lat1) * Sin(lat2) - (Sin(lat1) * Cos(lat2) * Cos(long2 - long1))) * 180/PI;

if (azm < 0) azm = 360 + azm;

//Uncomment the lines below for debug mode. To re-comment, add // after the closing </FNT> tag for primary or after the arrow for backup
if ($feature.Timing_Port_A == 'Primary' && ((azm >= 0 && azm < 87.5) || (azm >= 270 && azm < 360))) '<FNT size="26">' + '⭡' + '</FNT>'// + Text(Round(azm, 2)) + '(A)';
else if ($feature.Timing_Port_A == 'Primary' && azm >= 87.5 && azm < 270) '<FNT size="26">' + '⭣' + '</FNT>'// + Text(Round(azm, 2)) + '(A)';
else if ($feature.Timing_Port_A == 'Backup' && ((azm >= 0 && azm < 87.5) || (azm >= 270 && azm < 360))) '🡑'// + Text(Round(azm, 2)) + '(A)';
else if ($feature.Timing_Port_A == 'Backup' && azm >= 87.5 && azm < 270) '🡓'// + Text(Round(azm, 2)) + '(A)';


// Timing Port B
var lat1 = Geometry($feature).paths[0][Count(Geometry($feature).paths[0]) - 1].y * PI/180;
var long1 = Geometry($feature).paths[0][Count(Geometry($feature).paths[0]) - 1].x * PI/180;
var lat2 = Geometry($feature).paths[0][Count(Geometry($feature).paths[0]) - 2].y * PI/180;
var long2 = Geometry($feature).paths[0][Count(Geometry($feature).paths[0]) - 2].x * PI/180;

var azm = Atan2(Sin(long2 - long1) * Cos(lat2), Cos(lat1) * Sin(lat2) - (Sin(lat1) * Cos(lat2) * Cos(long2 - long1))) * 180/PI;

if (azm < 0) azm = 360 + azm;

//Uncomment the lines below for debug mode. To re-comment, add // after the closing </FNT> tag for primary or after the arrow for backup
if ($feature.Timing_Port_B == 'Primary' && ((azm >= 0 && azm < 87.5) || (azm >= 270 && azm < 360))) '<FNT size="26">' + '⭡' + '</FNT>'// + Text(Round(azm, 2)) + '(B)';
else if ($feature.Timing_Port_B == 'Primary' && azm >= 87.5 && azm < 270) '<FNT size="26">' + '⭣' + '</FNT>'// + Text(Round(azm, 2)) + '(B)';
else if ($feature.Timing_Port_B == 'Backup' && ((azm >= 0 && azm < 87.5) || (azm >= 270 && azm < 360))) '🡑'// + Text(Round(azm, 2)) + '(B)';
else if ($feature.Timing_Port_B == 'Backup' && azm >= 87.5 && azm < 270) '🡓'// + Text(Round(azm, 2)) + '(B)';