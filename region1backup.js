var greenText = ["FE-GO SR-7", "Ashtabula South", "Youngstown SC SRc-12"];
var redText = ["Allen Junction Sub", "Ashtabula 345", "Bayshore 138", "Bayshore 345", "Beaver Sub", "Beaver Valley MW", "Bruce Mansfield Sub", "Davis Besse Sub", "Eastlake #1", "Eastlake #2", "Glenwillow", "Hanna", "Harding Sub", "Hayes", "Highland Sub", "Juniper", "Lallendorf", "Lemoyne 138", "Lemoyne 345", "Leroy Center", "Lordstown", "North Medina", "Perry Sub", "Sammis Sub"];

if (IndexOf(greenText, $feature.Name) != -1) {
	return "<CLR green = '153' blue = '51'>" + $feature.Name + "</CLR>";
} else if (IndexOf(redText, $feature.Name) != -1) {
	return "<CLR red = '255'>" + $feature.Name + "</CLR>";
} else return $feature.Name;
