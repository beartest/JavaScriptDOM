function positionMessage() {
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	movement = setTimeout("moveMessage()", 5000); //不使用关键字var声明，movement为全局变量
}

addLoadEvent(positionMessage);