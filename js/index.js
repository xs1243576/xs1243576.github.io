< script type = "text/javascript" >

	var SVG_NS = 'http://www.w3.org/2000/svg';

// 图形及对应默认属性
var shapeInfo = {
	rect: 'x:10,y:10,width:200,height:100,rx:0,ry:0',
	circle: 'cx:200,cy:200,r:50',
	ellipse: 'cx:200,cy:200,rx:80,ry:30',
	line: 'x1:10,y1:10,x2:100,y2:100'
};

// 默认公共属性
var defaultAttrs = {
	fill: '#ffffff',
	stroke: '#ff0000'
};

var createForm = document.getElementById('create-shape');

var svg = createSVG();

var selected = null;

createForm.addEventListener('click', function(e) {
	alert(e.target.tagName.toLowerCase());
	if (e.target.tagName.toLowerCase() == 'div') {
		create(e.target.getAttribute('create'));
	}
});

function createSVG() {
	var svg = document.createElementNS(SVG_NS, 'svg');
	svg.setAttribute('width', '100%');
	svg.setAttribute('height', '100%');
	document.getElementById("canvas").appendChild(svg);

	svg.addEventListener('click', function(e) {
		if (e.target.getAttribute('create') in shapeInfo) {
			alert(1);
			select(e.target);
		}
	});
	return svg;
}

function create(name) {
	var shape = document.createElementNS(SVG_NS, name);
	svg.appendChild(shape);
	select(shape);
}

function select(shape) {

	selected = shape;

}
/*	var array = [1, 2, 3, 4];
var temp = 0;

function img11() {
	temp = 1;
}

function img12() {
	temp = 2;
}

function img13() {
	temp = 3;
}

function img14() {
	temp = 4;
}

function huizhi() {
	if (temp != 0) {
		alert(temp);
	}
}

function tingzhi() {
	temp = 0;
	//event.stopPropagation();
	alert(1);
}*/
/*$(document).ready(function() {
	$("workarea").click(function() {
		alert(1);
	});
});*/
//document.getElementById('workarea').addEventListener("click",huizhi());
< /script>