function(doc, req) {  
    var output = "<h1>" + doc.header + "</h1>";
    if (typeof(doc.body) == "string"){
	return output + doc.body;
    } else if (doc.body.splice){
	for (var i = 0; i < doc.body.length; i++) {
	    var cur = doc.body[i];
	    if (typeof(cur) == "string") {
		output += "<p>" + cur + "</p>";
	    } else if (cur.tag == "img") {
		output += "<img src=\"/doc/" + doc._id + "/" + cur.src + "\" class=\"" + cur.cls + "\"/>";
	    } else if (cur.tag == "a") {
		if (cur.inline)
		    output = output.substr(0, (output.length - 4)); 
		output += "<a href=\"" + cur.href + "\" target=\"" + (cur.target | "_self") + "\" class=\"" + cur.display + "\">" + cur.text + "</a>";
		if (cur.inline)
		    output += "</p>";
	    } else if (cur.tag == "ul" || cur.tag == "ol") {
		output += "<" + cur.tag + 
		 " class=\"" + (cur.cls || "") + 
		"\">";
		for (var j = 0; j < cur.items.length; j++) {
		    output += "<li>" + cur.items[j] + "</li>";
		}
		output += "</ul>";
	    }
	}
    
	return output;
    }
}