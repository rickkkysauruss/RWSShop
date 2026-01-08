var splash = document.getElementById("splash");

setTimeout(functionA,5000);

function functionA() {
    splash.style.display = "none";
}

function gotoProduct() {
    window.location.href = "product.html";
}

var revs = document.getElementById("revs");
var reviews = document.getElementById("reviews");
var desc = document.getElementById("desc");
var description = document.getElementById("description");

function showDesc() {
    reviews.style.display = "none";
    description.style.display = "block";
    desc.style.color = "#e4789a";
    desc.style.borderColor = "#e4789a";
    revs.style.color = "grey";
    revs.style.borderColor = "#fff";
}

function showRevs() {
    reviews.style.display = "block";
    description.style.display = "none";
    desc.style.color = "grey";
    desc.style.borderColor = "#fff";
    revs.style.color = "#e4789a";
    revs.style.borderColor = "#e4789a";
}

var major = document.getElementById("major");

function img1() {
    major.src = "prd1.jpg"
}

function img2() {
    major.src = "prd2.jpg"
}

function img3() {
    major.src = "prd3.jpg"
}

function img4() {
    major.src = "prd4.jpg"
}