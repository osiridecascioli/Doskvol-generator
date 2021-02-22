
function p(e, t){
    return "<" + e + ">" + t + "</" + e + ">";
}
  
function fillUp(dataTitle) {
    var htmData = ""

    htmData += p( "h1", dataTitle );
    data = rawData[dataTitle];

    for (const [key, value] of Object.entries(data)) {
        htmData += "<br/><br />";
        htmData += p("i", key.toLowerCase() + ": ");
        htmData += value[Math.floor(Math.random() * value.length)];
    }
    document.getElementById("fillUp").innerHTML = htmData;
}