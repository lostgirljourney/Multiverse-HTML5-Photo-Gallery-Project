let array = document.getElementsByClassName("sec");
let ind;

function onclickFunc(el, i) {
	// console.log(el.children[1].innerText);
	// console.log(el.children[0].src);
	document.querySelector(".zoom").style.display = "flex";
	document.querySelector(".zimg").src = el.children[0].src;
	document.querySelector(".title").innerText = el.children[1].innerText;
	document.querySelector("body").style.overflow = "hidden";
	// console.log(el);
	ind = i;
}

for (let i = 0, len = array.length; i < len; i++) {
	(function (index) {
		array[i].onclick = function () {
			onclickFunc(this, index);
		};
	})(i);
}

function onForwardFunc() {
	if (ind < 12) {
		++ind;
	}
	if (ind >= 12) {
		ind = 0;
	}
	document.querySelector(".zimg").src = array[ind].children[0].src;
	document.querySelector(".title").innerText =
		array[ind].children[1].innerText;
	// console.log(ind);
}

function onBackFunc() {
	if (ind < 12) {
		--ind;
	}
	if (ind < 0) {
		ind = 11;
	}
	document.querySelector(".zimg").src = array[ind].children[0].src;
	document.querySelector(".title").innerText =
		array[ind].children[1].innerText;
	// console.log(ind);
}

function oncloseFunc() {
	document.querySelector(".zoom").style.display = "none";
	document.querySelector("body").style.overflow = "";
}

document.getElementById("about").onclick = function () {
	location.href =
		"https://github.com/lostgirljourney/Multiverse-HTML5-Photo-Gallery-Project";
};
