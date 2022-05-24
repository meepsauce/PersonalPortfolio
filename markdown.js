const br = "<br>"
const hl = "<hr>"

function markdownParser(data) {

    lines = data.split("\n");
   
    let output = [];
    for(var x = 0; x < lines.length; x++) {
        var response = parseLine(lines[x]);
        output.push(response);
    }
    output = output.join("");
    output = `
    <!DOCTYPE html>
    <html lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <div class="top">
<h1 class="title">Theo Gillespie</h1>
<div>
    <a href="/PersonalPortfolio">Home</a>
</div>
</div>
    <div class="md">
    ${output}
    </div>
    </body>
    </html>
    `
    return output;
}

var inNumberList = false;
var addedToNumberList = false;
var firstAddNumber = false;

var inUnList = false;
var addedToUnList = false;
var firstAddUn = false;

var inCodeBlock = false;

//let output = [];
function parseLine(line) {
    
    var result = "";
    addedToNumberList = false;
    addedToUnList = false;
    
    

    if(line === "") {
        result = "";
    }
    if(inCodeBlock && line != "```") {
        result = line;
    }
    else if (line.startsWith("#")) {
        result = parseHeaders(line);
    }
    else if (line.startsWith(">")) {
        result = parseBlockquote(line);
    }
    else if (line == "___" || line == "---" || line == "***") {
        result = hl;
    }
    else if (line.startsWith("!")) {
        result = parseImage(line);
    }
    else if (isNumeric(line[0]) && line[1] == ".") {
        result = parseNumberedList(line);
        addedToNumberList = true;
    }
    else if(line.startsWith("-")) {
        result = parseUnorderedList(line);
        addedToUnList = true;
    }
    else if(line.startsWith("<")) {
        result = parseLinkOutline(line);
    }
    else if(line == "```") {
        if(!inCodeBlock) {
            inCodeBlock = true;
            result = "<code>";
        }
        else {
            inCodeBlock = false;
            result = "</code>";
        }
        
    }
    else {
        result = parseText(line);
    }

    if(addedToNumberList) {
        inNumberList = true;
        if(!firstAddNumber) {
            
            result = "<ol> \n" + result;
            firstAddNumber = true;
        }     
    }
    else if(inNumberList) {
        inNumberList = false;
        firstAddNumber = false;
        result = result + " \n </ol> <br>";
    }

    if(addedToUnList) {
        inUnList = true;
        if(!firstAddUn) {
            result = "<ul> \n" + result;
            firstAddUn = true;
        }  
    }
    else if(inUnList) {
        inUnList = false;
        firstAddUn = false;
        result = result + " \n </ul> <br>";
    }

    

    //output.push(result);
    return result;
}

function outputHtml(line) {
    htmlFile.write(line + "\n");
}

function parseHeaders(line) {
    
    var headerRank = 0;
    let splittedRough = line.split("");
    let splittedSpace = line.split(" ");

    var rest = 0;

    for(var x = 0; x < splittedRough.length; x++) {
        var char = splittedRough[x];
        if(char == "#") {
            if(headerRank < 6) {
                headerRank++;
            }
        }
        else {
            rest = x;
            break;
        }
    }
    
    let textArray = [];

    for(var x = 1; x < splittedSpace.length; x++) {
        textArray.push(splittedSpace[x]);
    }
    
    var text = textArray.join(" ");
    var final = `<h${headerRank}>${text}</h${headerRank}> `;

    if(headerRank <= 3) {
        final += hl;
    }

    final += br;

    //console.log(final);
    return final;

}

function parseText(line) {
    var splitted = line.split("");
    var currentlyBold = false;
    var currentlyItalic = false;
    var currentlyCode = false;
    for(var x = 0; x < splitted.length; x++) {
        var char = splitted[x];
        if(char == "*") {
            
            if(splitted[x+1] == "*") {
                if(currentlyBold) {
                    splitted[x] = "</b>";
                    splitted[x+1] = "";
                    currentlyBold = false;
                   
                }
                else {
                    currentlyBold = true;
                    
                    splitted[x] = "<b>";
                    splitted[x+1] = "";
                    
                }
                
            }
            else {
                if(currentlyItalic) {
                    splitted[x] = "</i>";
                    currentlyItalic = false;
                }
                else {
                    currentlyItalic = true;
                   
                    splitted[x] = "<i>";
                }
            }
        }
        if(char == "`") {
            if(!currentlyCode) {
                splitted[x] = "<code>";
                currentlyCode = true;
            }
            else {
                currentlyCode = false;
                splitted[x] = "</code>";
            }
        }
    }
    var text = splitted.join("");

    var final = `<p>${text}</p>`;

    
    return final;
}

function parseBlockquote(line) {
    var text = line.replace(">", "");
    var finalText = parseText(text);

    var final = `<blockquote>${finalText}</blockquote>`; 

    return final;
}

function parseImage(line) {
    var lineToMutate = line;
    var forDescription = lineToMutate.replace(/\[/g, "").replace(/\]/g, "").replace("!", "");
    var description = []
    for(var x = 0; x < forDescription.length; x++) {
        var char = forDescription[x]
        if (char != "(") {
            description.push(char);
        }
        else {
            break;
        }
    }
    var description = description.join("");
    
    var forUrl = forDescription.replace(description, "").replace("(", "").replace(")", "");
    var url = forUrl;

    var final = `<img src=${url} alt=${description}> ${br}`;

    return final;
    
}


function parseNumberedList(line) {
    
    var toBeHurt = line.replace(line[0], "").replace(".", "");
   
    var contents = parseText(toBeHurt);
    var finalItem = `<li>${contents}</li>`;
    return finalItem
}

function parseUnorderedList(line) {

    var changed = line.replace("-", "");
    var contents = parseText(changed);
    var finalItem = `<li>${contents}</li>`;

    return finalItem;
}

function parseLinkOutline(line) {
    var final = "";
    if (line.includes("@")) {
        var email = line.replace("<", "").replace(">", "");
        final = `<a href="mailto:${email}">${email}</a>`;
    }
    else {
        var link = line.replace("<", "").replace(">", "");
        final = `<a href="${link}">${link}</a>`;
    }
    return final;
}

function isNumeric(num){
    return !isNaN(num)
}

module.exports = {markdownParser}