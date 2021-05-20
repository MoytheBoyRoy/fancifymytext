function bigger() {
    var txt = document.getElementById("text");
    txt.style.fontSize = "24px";
}

function fancy() {
    var txt = document.getElementById("text");
    txt.style.color = "#0000FF";
    txt.style.fontFamily = "Luminari,Fantasy";
    txt.style.textDecoration = "underline";
    document.getElementById("r2").checked = false;

}

function boring() {
    var txt = document.getElementById("text");
    txt.style.color = "#000000";
    txt.style.textDecoration = "none";

    txt.style.fontFamily = "Times New Roman,Times,serif";
    document.getElementById("text").style.weight = "normal";
    document.getElementById("r1").checked = false;
}

function pop() {
    alert("message");
    document.getElementById("text").style.weight = "bold";
}

function moo() {
    var txt = document.getElementById("text");
    txt.value = txt.value.toUpperCase();
    if (txt.value.charAt(txt.value.length - 1) == ".") {
        txt.value = txt.value + "-Moo";
    }
    var str = txt.value;
    var parts = str.split(" ");
    txt.value = parts.join("_");
}