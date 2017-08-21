function stripeTables() {
	if(!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	var odd, rows;
	for(var i = 0; i < tables.length; i++) {
		odd = false;
		row = tables[i].getElementsByTagName("tr");
		for(var j = 0; j < row.length; j++) {
			if(odd) {
				//				row[j].style.backgroundColor = "#ffc";
				addClass(row[j], "odd");
			}
			odd = !odd;
		}
	}
}

addLoadEvent(stripeTables);