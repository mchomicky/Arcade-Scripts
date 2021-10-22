if ($feature.Ring == "DRI") {
	if ($feature.Status == "In Service") {
	  return "DRI, In Service"
	}
	else if (IsNan(Year($feature.Year)) && $feature.Status == "Planned_Conceptual") {
	  return "DRI, Future"
	}
	else if (Year($feature.Year) == 2019) {
	  return "DRI, 2019, Planned (Approved, Conceptual, Scoped)"
	}
	else if (Year($feature.Year) == 2020) {
	  return "DRI, 2020, Planned (Approved, Conceptual, Scoped)";
	}
	else if (Year($feature.Year) == 2021) {
	  return "DRI, 2021, Planned (Approved, Conceptual, Scoped)";
	}
	else if (Year($feature.Year) == 2022) {
	  return "DRI, 2022, Planned (Approved, Conceptual, Scoped)";
	}
	else if (Year($feature.Year) == 2023) {
	  return "DRI, 2023, Planned (Approved, Conceptual, Scoped)";
	}
} else {
	if ($feature.Status == "In Service") {
	  return "In Service"
	}
	else if (IsNan(Year($feature.Year)) && $feature.Status == "Planned_Conceptual") {
	  return "Future"
	}
	else if (Year($feature.Year) == 2019) {
	  return "2019, Planned (Approved, Conceptual, Scoped)"
	}
	else if (Year($feature.Year) == 2020) {
	  return "2020, Planned (Approved, Conceptual, Scoped)";
	}
	else if (Year($feature.Year) == 2021) {
	  return "2021, Planned (Approved, Conceptual, Scoped)";
	}
	else if (Year($feature.Year) == 2022) {
	  return "2022, Planned (Approved, Conceptual, Scoped)";
	}
	else if (Year($feature.Year) == 2023) {
	  return "2023, Planned (Approved, Conceptual, Scoped)";
	}
}