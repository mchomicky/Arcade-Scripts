//Array to hold characters and an index
var i = 0;
var commentArray = [];

//Add character to array if not empty
function addvalue(val) {
    if (!IsEmpty(val)) {
        commentArray[i++] = val;
    }
}

//Add numeric characters
for(var x in $feature.name1) {
    if (Upper($feature.name1[x]) == 'A') continue;
    
    if (Upper($feature.name1[x]) == 'B') continue;
    
    if (Upper($feature.name1[x]) == 'C') continue;
    
    if (Upper($feature.name1[x]) == 'D') continue;
    
    if (Upper($feature.name1[x]) == 'E') continue;
    
    if (Upper($feature.name1[x]) == 'F') continue;
    
    if (Upper($feature.name1[x]) == 'G') continue;
    
    if (Upper($feature.name1[x]) == 'H') continue;
    
    if (Upper($feature.name1[x]) == 'I') continue;
    
    if (Upper($feature.name1[x]) == 'J') continue;
    
    if (Upper($feature.name1[x]) == 'K') continue;
    
    if (Upper($feature.name1[x]) == 'L') continue;
    
    if (Upper($feature.name1[x]) == 'M') continue;
    
    if (Upper($feature.name1[x]) == 'N') continue;
    
    if (Upper($feature.name1[x]) == 'O') continue;
    
    if (Upper($feature.name1[x]) == 'P') continue;
    
    if (Upper($feature.name1[x]) == 'Q') continue;
    
    if (Upper($feature.name1[x]) == 'R') continue;
    
    if (Upper($feature.name1[x]) == 'S') continue;
    
    if (Upper($feature.name1[x]) == 'T') continue;
    
    if (Upper($feature.name1[x]) == 'U') continue;
    
    if (Upper($feature.name1[x]) == 'V') continue;
    
    if (Upper($feature.name1[x]) == 'W') continue;
    
    if (Upper($feature.name1[x]) == 'X') continue;
    
    if (Upper($feature.name1[x]) == 'Y') continue;
    
    if (Upper($feature.name1[x]) == 'Z') continue;
    
    if ($feature.name1[x] == '`') continue;
    
    if ($feature.name1[x] == '~') continue;
    
    if ($feature.name1[x] == '!') continue;
    
    if ($feature.name1[x] == '@') continue;
    
    if ($feature.name1[x] == '#') continue;
    
    if ($feature.name1[x] == '$') continue;
    
    if ($feature.name1[x] == '%') continue;
    
    if ($feature.name1[x] == '^') continue;
    
    if ($feature.name1[x] == '&') continue;
    
    if ($feature.name1[x] == '*') continue;
    
    if ($feature.name1[x] == '(') continue;
    
    if ($feature.name1[x] == ')') continue;
    
    if ($feature.name1[x] == '-') continue;
    
    if ($feature.name1[x] == '_') continue;
    
    if ($feature.name1[x] == '=') continue;
    
    if ($feature.name1[x] == '+') continue;
    
    if ($feature.name1[x] == '[') continue;
    
    if ($feature.name1[x] == '{') continue;
    
    if ($feature.name1[x] == ']') continue;
    
    if ($feature.name1[x] == '}') continue;
    
    if ($feature.name1[x] == '|') continue;
    
    if ($feature.name1[x] == ';') continue;
    
    if ($feature.name1[x] == ':') continue;
    
    if ($feature.name1[x] == '"') continue;
    
    if ($feature.name1[x] == ',') continue;
    
    if ($feature.name1[x] == '<') continue;
    
    if ($feature.name1[x] == '.') continue;
    
    if ($feature.name1[x] == '>') continue;
    
    if ($feature.name1[x] == '/') continue;
    
    if ($feature.name1[x] == '?') continue;
    
    if ($feature.name1[x] != ' ') addvalue($feature.name1[x]);
}

//Return a concatenated string
return Concatenate(commentArray, '')