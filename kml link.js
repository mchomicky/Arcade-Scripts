Point

var url = "https://kcm-fme-003.burnsmcd.com/fmekmllink/NIA-FE/FeatureToKML_OID.fmw?bboxSouth=&opt_responseformat=json&DestDataset_OGCKML=&bboxNorth=&KML_Name=Placemark&OID=" + $feature.OBJECTID + "&bboxWest=&bboxEast=&token=7175202ab6c2f815410b98ae1b19df55ffd89d49"

return url


Line

var url = "https://kcm-fme-003.burnsmcd.com/fmekmllink/NIA-FE/LineFeatureToKML_OID.fmw?bboxSouth=&opt_responseformat=json&DestDataset_OGCKML=&bboxNorth=&KML_Name=Placemark&OID=" + $feature.OBJECTID + "&bboxWest=&bboxEast=&token=7175202ab6c2f815410b98ae1b19df55ffd89d49"

return url