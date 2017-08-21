function highlightRows() {
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for(var i = 0; i < row.length; i++) {
		rows[i].onmouseover = function() {
			this.style.fontWeight = "bold";
		}
		row[i].onmouseout = function() {
			this.style.fontWeight = "normal";
		}
	}
}

addLoadEvent(highlightRows);