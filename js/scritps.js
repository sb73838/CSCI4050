window.onload = function () {
    var lis = document.getElementById('ul1').children;
    for (var i = 0, len = lis.length; i < len; i++) {
        lis[i].onclick = this.myFunction;
    }
}

function myFunction(elem) {
    var img = elem.target;
    var width = img.clientWidth;
    var x = document.images;
    var txt = "<img src="+ "\""+img.src+"\" style=\"width: "+width*2+"px\";>";
    document.getElementById("p2").innerHTML = txt;
}