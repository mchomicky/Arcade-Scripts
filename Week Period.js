//Creates visitDay variable, where 0 is Sunday and 6 is Saturday
var visitDay = Weekday($feature.Visit_Date)

//Determines the starting date of the week where the visit will take place, stores in weekStart variable
if (visitDay == 0) {
    var weekStart = DateAdd($feature.Visit_Date, -6, 'days')
}
else if (visitDay == 1) {
    var weekStart = Date($feature.Visit_Date)
}
else if (visitDay == 2) {
    var weekStart = DateAdd($feature.Visit_Date, -1, 'days')
}
else if (visitDay == 3) {
    var weekStart = DateAdd($feature.Visit_Date, -2, 'days')
}
else if (visitDay == 4) {
    var weekStart = DateAdd($feature.Visit_Date, -3, 'days')
}
else if (visitDay == 5) {
    var weekStart = DateAdd($feature.Visit_Date, -4, 'days')
}
else if (visitDay == 6) {
    var weekStart = DateAdd($feature.Visit_Date, -5, 'days')
}
else
    return 'No Visit Scheduled'

//Determines the ending date of the week where the visit will take place, stores in weekEnd variable
if (visitDay == 0) {
    var weekEnd = Date($feature.Visit_Date)
}
else if (visitDay == 1) {
    var weekEnd = DateAdd($feature.Visit_Date, 6, 'days')
}
else if (visitDay == 2) {
    var weekEnd = DateAdd($feature.Visit_Date, 5, 'days')
}
else if (visitDay == 3) {
    var weekEnd = DateAdd($feature.Visit_Date, 4, 'days')
}
else if (visitDay == 4) {
    var weekEnd = DateAdd($feature.Visit_Date, 3, 'days')
}
else if (visitDay == 5) {
    var weekEnd = DateAdd($feature.Visit_Date, 2, 'days')
}
else if (visitDay == 6) {
    var weekEnd = DateAdd($feature.Visit_Date, 1, 'days')
}

//Returns concatenated Month/Day/Year (Month function returns 0 for Jan, 11 for Dec - add 1)
return (Month(weekStart) + 1) + '/' + Day(weekStart) + '/' + Year(weekStart) + ' - ' + (Month(weekEnd) + 1) + '/' + Day(weekEnd) + '/' + Year(weekEnd)