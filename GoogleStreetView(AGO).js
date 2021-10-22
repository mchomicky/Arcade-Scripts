var PointGeometry = Centroid(Geometry($feature));

var ArcadeX = PointGeometry.x;
var ArcadeY = PointGeometry.y;
var ArcadeSr = PointGeometry.spatialReference.wkid;
var Latitude, Longitude;

function AuxSphereToLatLon(x, y) {
  Console("Converting...");
  // Conversion based on http://dotnetfollower.com/wordpress/2011/07/javascript-how-to-convert-mercator-sphere-coordinates-to-latitude-and-longitude/
  var rMajor = 6378137;
  var shift = PI * rMajor;
  Longitude = x / shift * 180.0;
  Latitude = y / shift * 180.0;
  Latitude = 180 / PI * (2 * Atan(Exp(Latitude * PI / 180.0)) - PI / 2.0);
}

if (ArcadeSr == 4326) {
  Console("4326 Spatial Reference - No Conversion Necessary");
  Latitude = ArcadeY;
  Longitude = ArcadeX;
} else if (ArcadeSr == 102100) {
  Console("102100 Spatial Reference - Conversion Necessary");
  AuxSphereToLatLon(ArcadeX, ArcadeY);
} else {
  Console(ArcadeSr + " Spatial Reference is not supported - currently works with Web Maps where the basemap is in WGS84 (4326) or Web Mercator Auxiliary Sphere 102100");
}

var url = "http://maps.google.com/maps?q=&layer=c&cbll=" + text(Latitude) + "," + text(Longitude);
return url;