function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	//非DOM解决方案
	//placeholder.src = source;
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}