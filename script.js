let array = document.getElementsByClassName("sec");

function onclickFunc(el, i) {
	console.log(el.children[1].innerText);
	console.log(el.children[0].src);
	document.querySelector(".zoom").style.display = "flex";
	document.querySelector(".zimg").src = el.children[0].src;
	document.querySelector(".title").innerText = el.children[1].innerText;
	document.querySelector("body").style.overflow = "hidden";
	console.log(i);
	return (i);
}

for (let i = 0, len = array.length; i < len; i++) {
	(function (index) {
		array[i].onclick = function () {
			onclickFunc(this, index);
		};
	})(i);
}

// function getIndex(index) {
// 	return index;
// }

function onForwardFunc(ele) {
	// console.log(ele);
	console.log(i);
}

function oncloseFunc() {
	document.querySelector(".zoom").style.display = "none";
	document.querySelector("body").style.overflow = "";
}
