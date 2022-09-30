// Convert kebab case words into camel casing. The first word within the output should be capitalized only if it is the first letter of a word and dashes should be removed.

// * change-this-word gets converted into changeThisWord
// *day-month-year gets converted into dayMonthYear
// ALL-CAPS gets converted into allCaps

function kebabToCamel (kebabString) {
    let camelString = "";
    
    //loop over kebabstring 
    //- if the char dash, don't use it AND the following char would be capital
    // - otherwise, copy lowercased to camelString

    //test-string => testString
    for (var i = 0; i < kebabString.length; i++) {
        if (kebabString[i] == "-") {
            var newUpperCase = kebabString[i + 1].toUpperCase();
            camelString += newUpperCase;
            i++;
        } else{
            var newLowerCase = kebabString[i].toLowerCase();
            camelString += newLowerCase;
        }
    }

    return camelString;
}

console.log(kebabToCamel("ALL-CAPS"))